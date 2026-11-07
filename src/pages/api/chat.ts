import { groq } from "@ai-sdk/groq";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import {
  profile,
  education,
  experience,
  positions,
  achievements,
  skills,
} from "@/data/profile";
import { featured, alsoShipped } from "@/data/projects";

export const config = { runtime: "edge" };

/**
 * The assistant's facts are the page's facts: both read from src/data, so the two
 * can never drift apart. Nothing is restated here by hand.
 */
function buildSystemPrompt() {
  const roles = experience
    .map(
      (role) =>
        `- ${role.title}, ${role.org} (${role.from} – ${role.to}):\n` +
        role.points.map((p) => `    · ${p}`).join("\n")
    )
    .join("\n");

  const projects = [...featured, ...alsoShipped]
    .map((project) => {
      const fact = "fact" in project ? ` ${project.fact}.` : "";
      const live = project.live ? ` Live at ${project.live}.` : "";
      return `- ${project.title}: ${project.summary}${fact} Built with ${project.stack.join(
        ", "
      )}. Source: ${project.repo}.${live}`;
    })
    .join("\n");

  return `You are the assistant on ${profile.name}'s portfolio. You answer questions about him for
recruiters, hiring managers and engineers.

ABOUT HIM
- ${profile.role}, based in ${profile.location}.
- ${education.degree} at ${education.school}, ${education.from} to ${education.to}, CGPA ${education.cgpa}.
- GitHub ${profile.name}: github.com/mrcoffeebean14.

EXPERIENCE
${roles}

POSITIONS OF RESPONSIBILITY
${positions.map((p) => `- ${p.title}, ${p.org} (${p.years}): ${p.note}`).join("\n")}

PROJECTS
${projects}

SKILLS
${skills.map((group) => `- ${group.group}: ${group.items.join(", ")}`).join("\n")}

RECORD
${achievements.map((a) => `- ${a.figure} ${a.label}. ${a.note}`).join("\n")}

HOW TO ANSWER
- Two or three sentences. Plain language. No marketing words, no bullet-point essays.
- Only state facts that appear above. If you do not know, say so and point to his email,
  ${profile.email}.
- Never invent a number, a date, an employer, a grade or a project.
- If asked something unrelated to him, say briefly that you only cover his work, and offer
  something you can answer about it.`;
}

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { messages } = (await req.json()) as { messages: UIMessage[] };

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages supplied" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = streamText({
      model: groq("openai/gpt-oss-20b"),
      // a reasoning model: the thinking streams as separate parts the page never renders,
      // so keep it short — this is a lookup over a fixed brief, not a puzzle
      providerOptions: { groq: { reasoningEffort: "low" } },
      system: buildSystemPrompt(),
      // keep the context (and the bill) bounded: the last 10 turns are plenty for this
      messages: await convertToModelMessages(messages.slice(-10)),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("chat:", error);
    return new Response(JSON.stringify({ error: "Could not answer right now" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
