/**
 * The UI fragment that stands in each project card's panel.
 * Each one shows what that project actually does — a real route graph, real question
 * types, a real token exchange, a real LaTeX rewrite. No stock imagery stands in for work.
 * Every fragment fills its panel and is cut by the panel's foot; none floats with ground
 * on all four sides.
 */

import type { Panel } from "@/data/projects";

function Chrome({
  name,
  right,
  children,
}: {
  name: string;
  right: string;
  children: React.ReactNode;
}) {
  return (
    <div className="win flex h-full flex-col">
      <div className="win__bar shrink-0">
        <span className="win__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="truncate">{name}</span>
        <span className="win__sp" />
        <span className="mono hidden shrink-0 lg:inline">{right}</span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ Adapt-RAG
   One question in, a router, three lanes out. The pulses are the page's one moment. */

function Router() {
  const lanes = [
    { y: 44, label: "Qdrant retrieval", note: "your documents" },
    { y: 122, label: "Tavily web search", note: "anything newer" },
    { y: 200, label: "Direct LLM answer", note: "no lookup needed" },
  ];

  return (
    <div data-ui="" className="fragment flex h-full flex-col justify-center">
      <svg
        viewBox="0 0 520 262"
        className="w-full"
        role="img"
        aria-label="Adapt-RAG routes each question to document retrieval, web search or a direct answer"
      >
        <rect className="dg-node" x="1" y="107" width="104" height="48" rx="8" />
        <text x="53" y="136" textAnchor="middle" fill="#eef0e8" fontSize="13">
          Question
        </text>

        <rect className="dg-node" x="160" y="107" width="88" height="48" rx="8" />
        <text x="204" y="136" textAnchor="middle" fill="#dafa9c" fontSize="13">
          Router
        </text>

        <path className="dg-line" d="M105 131h55" />
        <path className="dg-pulse" d="M105 131h55" />

        {lanes.map((lane, i) => {
          const d = `M248 131 C 286 131, 286 ${lane.y + 27}, 320 ${lane.y + 27}`;
          return (
            <g key={lane.label}>
              <path className="dg-line" d={d} />
              <path className="dg-pulse" d={d} style={{ animationDelay: `${i * 1.06}s` }} />
              <rect className="dg-node" x="320" y={lane.y} width="199" height="54" rx="8" />
              <text x="340" y={lane.y + 23} fill="#eef0e8" fontSize="13">
                {lane.label}
              </text>
              <text x="340" y={lane.y + 41} fill="#9ba18f" fontSize="11.5">
                {lane.note}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-5 shrink-0 text-[13px] font-medium text-[var(--p-ink)]">
        Each answer is graded for relevance. A weak one rewrites the query and runs again.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ Typeclone
   The builder's question types beside the live preview of the published form. */

function Builder() {
  const types = [
    "Short text",
    "Long text",
    "Multiple choice",
    "Dropdown",
    "Rating",
    "Email",
    "Number",
    "Date",
    "Yes or no",
    "File upload",
  ];

  return (
    <div data-ui="" className="fragment h-full">
      <Chrome name="Customer feedback" right="Autosaved">
        <div className="grid h-full grid-cols-1 text-[13px] min-[1100px]:grid-cols-[142px_1fr]">
          <ul className="m-0 hidden list-none overflow-hidden border-r border-white/8 p-2 min-[1100px]:block">
            {types.map((type, i) => (
              <li
                key={type}
                className={`flex items-center gap-2 rounded-md px-2 py-[7px] ${
                  i === 2 ? "bg-white/8 text-white" : "text-[var(--ink-soft)]"
                }`}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-50" />
                <span className="truncate">{type}</span>
              </li>
            ))}
          </ul>

          <div className="overflow-hidden p-5">
            <p className="mono text-[11px] text-[var(--muted)]">Question 3 of 6</p>
            <p className="mt-3 text-[17px] leading-tight text-white">How did you hear about us?</p>
            <ul className="mt-4 grid list-none gap-2 p-0">
              {["A friend", "Search", "A conference", "Somewhere else"].map((option, i) => (
                <li
                  key={option}
                  className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${
                    i === 1 ? "border-[var(--accent)] text-white" : "border-white/12 text-[var(--ink-soft)]"
                  }`}
                >
                  <span className="mono text-[11px] text-[var(--muted)]">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Chrome>
    </div>
  );
}

/* ------------------------------------------------------------------ SpendWise
   The token exchange the API actually performs, including the rate limit. */

function Auth() {
  const lines: Array<[string, string]> = [
    ["req", "POST /api/auth/register"],
    ["res", "201  activation email sent"],
    ["req", "POST /api/auth/login"],
    ["res", "200  access 15m · refresh 7d"],
    ["req", "GET  /api/budgets  Bearer …"],
    ["res", "200  4 budgets, 2 recurring"],
    ["req", "POST /api/transactions"],
    ["res", "201  “Rent” 82% used"],
    ["req", "GET  /api/reports.xlsx"],
    ["res", "200  ms-excel"],
    ["req", "POST /api/auth/refresh"],
    ["res", "200  rotated"],
    ["req", "POST /api/auth/login       x6"],
    ["err", "429  Too many requests"],
  ];

  return (
    <div data-ui="" className="fragment h-full">
      <Chrome name="spendwise · auth" right="Docker">
        <ul className="mono m-0 list-none p-4 text-[12.5px] leading-[26px]">
          {lines.map(([kind, text], i) => (
            <li key={i} className="flex gap-3">
              <span
                className={
                  kind === "req"
                    ? "text-[var(--muted)]"
                    : kind === "err"
                      ? "text-[#f0a39a]"
                      : "text-[var(--accent)]"
                }
              >
                {kind === "req" ? "›" : "‹"}
              </span>
              <span className={`truncate ${kind === "err" ? "text-[#f0a39a]" : "text-white/85"}`}>
                {text}
              </span>
            </li>
          ))}
        </ul>
      </Chrome>
    </div>
  );
}

/* ------------------------------------------------------------------ TAILORAI
   Resume bullets, before and after, with the rule that protects the facts. */

function Diff() {
  const hunks: Array<[string, string]> = [
    ["-", "\\item Built REST APIs for the login system."],
    ["+", "\\item Built 6+ REST APIs for authentication and session management in Node.js."],
    ["-", "\\item Worked on payments."],
    ["+", "\\item Integrated third-party payment and email APIs, cutting handling time by 60%."],
    ["-", "\\item Did code reviews."],
    ["+", "\\item Caught a critical payment flow bug across 10+ React and Node.js pull requests."],
  ];

  return (
    <div data-ui="" className="fragment h-full">
      <Chrome name="resume.tex" right="Backend Engineer">
        <div className="mono p-4 text-[12.5px] leading-[22px]">
          {hunks.map(([sign, text], i) => (
            <p
              key={i}
              className={`flex gap-3 rounded px-2 py-1 ${i % 2 ? "mb-3" : ""} ${
                sign === "-"
                  ? "bg-[#f0a39a]/10 text-[#f0a39a]"
                  : "bg-[var(--accent)]/10 text-[var(--accent)]"
              }`}
            >
              <span className="shrink-0">{sign}</span>
              <span>{text}</span>
            </p>
          ))}
          <p className="flex gap-3 px-2 text-[var(--muted)]">
            <span className="shrink-0 text-[var(--muted)]">·</span>
            <span>\section&#123;Certifications&#125; — locked, never rewritten</span>
          </p>
        </div>
      </Chrome>
    </div>
  );
}

const panels: Record<Panel, () => React.JSX.Element> = {
  router: Router,
  builder: Builder,
  auth: Auth,
  diff: Diff,
};

export function ProjectPanel({ kind }: { kind: Panel }) {
  const Component = panels[kind];
  return <Component />;
}
