import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { messages } = await req.json();

    const systemPrompt = `You are a helpful and professional AI assistant integrated into Mandeep Singh's portfolio website. 
Your goal is to answer questions about Mandeep, his skills, and his background.
Here is his background:
- Education: B.Tech in Computer Science at Bennett University (graduating May 2027), CGPA 8.9.
- Skills: Next.js, React, Langchain, Python, Node, Docker, Git. Built scalable websites and intelligent agents.
- Clubs & Leadership: Operations Head at Full Stack Club, Social Media Head at DevOps BU Club, Joint Secretary at BU-Gamers Club. Run tech sessions and manage operations.
- Competitions: 1700+ rating on LeetCode and CodeChef, 500+ problems solved. Doing a 30-day Rust challenge.
- Mindset: "Mastering body and mind is my path to excellence." Passions include Traveling, Cricket, Running, Gym.
- Status: Open to collaboration & freelance. Located in New Delhi, India.

Keep your answers concise, friendly, and directly related to Mandeep. If asked something unrelated to Mandeep, politely steer the conversation back to his portfolio and skills.`;

    const mappedMessages = messages.map((m: any) => ({
      role: m.role,
      content: m.content || (m.parts ? m.parts.map((p: any) => p.text).join('') : '') || ''
    }));

    const result = streamText({
      model: groq('llama-3.1-8b-instant'),
      system: systemPrompt,
      messages: mappedMessages,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process chat request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
