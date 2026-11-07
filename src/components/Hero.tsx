"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { profile, education } from "@/data/profile";

/**
 * The dealt hero: a news pill, a centred headline, two pill buttons, then the one window
 * rising out of a lit frame whose last 18% fades into the ground.
 * The window is the assistant itself — it demonstrates itself until someone types in it.
 */

const demo = {
  question: "What has he built with LangGraph?",
  tool: "Reading 4 repositories",
  answer: "Adapt-RAG: a 7-node router over Qdrant, Tavily and a direct answer.",
};

function textOf(message: { parts?: Array<{ type: string; text?: string }> }) {
  return (message.parts ?? [])
    .filter((p) => p.type === "text")
    .map((p) => p.text ?? "")
    .join("");
}

export function Hero() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);

  const busy = status === "submitted" || status === "streaming";
  const idle = messages.length === 0;

  // the loop: the question stays, the tool line and the answer arrive 0.85s apart, hold 2.2s, play again
  useEffect(() => {
    if (!idle) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(2);
      return;
    }
    const cycle = [850, 850, 2200];
    const timer = setTimeout(() => setStep((s) => (s + 1) % 3), cycle[step]);
    return () => clearTimeout(timer);
  }, [step, idle]);

  useEffect(() => {
    if (messages.length === 0) return;
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    sendMessage({ role: "user", parts: [{ type: "text", text }] });
    setInput("");
  }

  return (
    <section className="section hero" id="top" aria-labelledby="hero-h">
      <div className="wrap">
       <div className="hero-text">
        <div className="hero__c mx-auto grid max-w-[880px] justify-items-center gap-4 text-center">
          <span className="pill">
            Open to internships and 2027 new-grad roles · graduating May{" "}
            {education.to.split(" ")[1]}
          </span>

          <h1 id="hero-h" className="max-w-[16ch]">
            Agentic AI and backend engineer
          </h1>

          <p className="hero__lead max-w-[52ch] !text-[var(--ink-soft)]">
            I build retrieval pipelines, agent graphs and the REST APIs underneath them. Final-year
            computer science at {education.school}, CGPA {education.cgpa}.
          </p>

          <div className="btn-row mt-3 justify-center">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>
        </div>

        <div className="hero-frame frame">
          <div className="fx-grain" aria-hidden="true" />

          <div className="hero__window">
            <div className="win">
              <div className="win__bar">
                <span className="win__dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>Ask about {profile.name.split(" ")[0]}</span>
                <span className="win__sp" />
                <span className="mono hidden sm:inline">Groq · gpt-oss-20b</span>
              </div>

              <div
                ref={scroller}
                className="flex h-[116px] flex-col gap-2 overflow-y-auto px-4 py-3 text-left text-[13px] leading-[19px] sm:h-[146px] sm:gap-2.5 sm:py-3.5 sm:text-[13.5px] sm:leading-[20px]"
              >
                {idle ? (
                  <>
                    <p className="self-end rounded-xl rounded-tr-sm bg-white/10 px-3 py-2 text-white">
                      {demo.question}
                    </p>
                    <p className={`mono hidden text-[11.5px] text-[var(--muted)] step sm:block ${step >= 1 ? "is-on" : ""}`}>
                      {demo.tool}
                    </p>
                    <p
                      className={`rounded-xl rounded-tl-sm border border-white/8 bg-white/4 px-3 py-2 text-white/85 step ${
                        step >= 2 ? "is-on" : ""
                      }`}
                    >
                      {demo.answer}
                    </p>
                  </>
                ) : (
                  messages.map((message) => (
                    <p
                      key={message.id}
                      className={
                        message.role === "user"
                          ? "max-w-[85%] self-end whitespace-pre-wrap rounded-xl rounded-tr-sm bg-white/10 px-3 py-2 text-white"
                          : "max-w-[90%] whitespace-pre-wrap rounded-xl rounded-tl-sm border border-white/8 bg-white/4 px-3 py-2 text-white/85"
                      }
                    >
                      {textOf(message)}
                    </p>
                  ))
                )}
                {busy ? (
                  <p className="mono text-[11.5px] text-[var(--muted)]" role="status">
                    Thinking…
                  </p>
                ) : null}
              </div>

              <form
                onSubmit={submit}
                className="flex items-center gap-2 border-t border-white/8 bg-white/[0.02] px-3 py-2.5"
              >
                <label htmlFor="ask" className="sr-only">
                  Ask about {profile.name}
                </label>
                <input
                  id="ask"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about a project, a stack or the internship"
                  className="min-w-0 flex-1 bg-transparent text-[14px] text-white outline-none placeholder:text-[var(--muted)]"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  className="btn btn--primary shrink-0 !px-5 disabled:opacity-40"
                >
                  Ask
                </button>
              </form>
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
}
