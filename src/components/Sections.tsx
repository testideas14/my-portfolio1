import Image from "next/image";
import { experience, positions, achievements, education } from "@/data/profile";

/** Marks drawn in near-black: turned for this ground, never recoloured otherwise. */
const INK = new Set(["langchain", "github", "vercel", "railway", "express", "openai", "nextjs"]);

/** The authentication and session surface built during the internship. */
const ENDPOINTS = [
  "POST /auth/register",
  "POST /auth/login",
  "POST /auth/refresh",
  "POST /sessions",
  "GET  /sessions/:id",
];

/** What the Corporate Cruise work actually ran on. */
const TOOLS = [
  { file: "nodejs", name: "Node.js" },
  { file: "react", name: "React" },
  { file: "openai", name: "OpenAI" },
  { file: "langchain", name: "LangChain" },
];

/* ---------------------------------------------------------------- Experience */

export function Experience() {
  const [role] = experience;

  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head">
          <h2>Experience</h2>
          <p>Three months on a production codebase, and two years running clubs at university.</p>
        </div>

        <div className="g12 fill">
          <article className="card col-span-12 lg:col-span-7" style={{ "--p-h": "260px" } as React.CSSProperties}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3>{role.title}</h3>
              <span className="mono text-[13px] text-[var(--muted)]">
                {role.from} – {role.to}
              </span>
            </div>
            <p className="!mt-1 !text-[var(--accent)]">{role.org}</p>

            <ul className="mt-6 grid list-none gap-4 p-0">
              {role.points.map((point) => (
                <li key={point} className="flex gap-3 text-[var(--t-body)] leading-[1.5]">
                  <span aria-hidden="true" className="mt-[9px] h-px w-4 shrink-0 bg-[var(--line-strong)]" />
                  <span className="text-white/80">{point}</span>
                </li>
              ))}
            </ul>

            <div className="panel panel--fade !mt-auto">
              <div data-ui="" className="fragment flex flex-col">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  {TOOLS.map((tool) => (
                    <span key={tool.file} className="chip">
                      <Image
                        src={`/icons/${tool.file}.svg`}
                        alt=""
                        width={26}
                        height={26}
                        className={`h-[26px] w-[26px] object-contain ${
                          INK.has(tool.file) ? "invert" : ""
                        }`}
                      />
                      <span>{tool.name}</span>
                    </span>
                  ))}
                </div>

                <div className="win mt-6">
                  <div className="win__bar">
                    <span className="win__dots">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span>auth and sessions</span>
                  </div>
                  <ul className="mono m-0 grid list-none gap-[7px] p-4 text-[12.5px]">
                    {ENDPOINTS.map((line) => (
                      <li key={line} className="truncate">
                        <span className="text-[var(--accent)]">{line.split(" ")[0]}</span>
                        <span className="text-white/75"> {line.split(" ").slice(1).join(" ")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <div className="col-span-12 grid content-start gap-[var(--card-gap)] lg:col-span-5">
            <article className="card">
              <h3>{education.degree}</h3>
              <p>
                {education.school}, {education.from} to {education.to}. CGPA {education.cgpa}.
              </p>
            </article>

            <article className="card">
              <h3>Clubs and leadership</h3>
              <ul className="mt-5 grid list-none gap-5 p-0">
                {positions.map((position) => (
                  <li key={position.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <p className="text-white">{position.title}</p>
                      <span className="mono text-[13px] text-[var(--muted)]">
                        {position.years}
                      </span>
                    </div>
                    <p className="text-[var(--muted)]">{position.org}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Stack
   Real marks in their own colours; the black ones are turned for this ground. */

const stack: Array<{ file: string; name: string }> = [
  { file: "python", name: "Python" },
  { file: "typescript", name: "TypeScript" },
  { file: "javascript", name: "JavaScript" },
  { file: "java", name: "Java" },
  { file: "nodejs", name: "Node.js" },
  { file: "fastapi", name: "FastAPI" },
  { file: "django", name: "Django" },
  { file: "spring", name: "Spring Boot" },
  { file: "nextjs", name: "Next.js" },
  { file: "react", name: "React" },
  { file: "tailwindcss", name: "Tailwind" },
  { file: "langchain", name: "LangChain" },
  { file: "qdrant", name: "Qdrant" },
  { file: "openai", name: "OpenAI" },
  { file: "mongodb", name: "MongoDB" },
  { file: "postgres", name: "PostgreSQL" },
  { file: "mysql", name: "MySQL" },
  { file: "redis", name: "Redis" },
  { file: "docker", name: "Docker" },
  { file: "linux-tux", name: "Linux" },
  { file: "git", name: "Git" },
  { file: "github", name: "GitHub" },
  { file: "postman", name: "Postman" },
  { file: "railway", name: "Railway" },
];

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <div className="section-head">
          <h2>Stack</h2>
          <p>
            What I reach for: agent frameworks and vector search on top of Python and Java
            services, with the front end in TypeScript.
          </p>
        </div>

        <ul className="stack-wall visual fill m-0 grid list-none grid-cols-3 gap-px bg-[var(--line)] p-0 sm:grid-cols-4 lg:grid-cols-6">
          {stack.map((item) => (
            <li
              key={item.file}
              className="flex min-h-[104px] flex-col items-center justify-center gap-3 bg-[var(--surface)] px-2 py-5 text-center"
            >
              <Image
                src={`/icons/${item.file}.svg`}
                alt=""
                width={32}
                height={32}
                className={`h-9 w-9 object-contain ${INK.has(item.file) ? "invert" : ""}`}
              />
              <span className="text-[13px] text-[var(--muted)]">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Record */

export function Record() {
  const [leetcode, codechef, paper] = achievements;

  return (
    <section className="section" id="record">
      <div className="wrap">
        <div className="section-head">
          <h2>Record</h2>
          <p>Contest ratings, and one co-authored paper on satellite image segmentation.</p>
        </div>

        <div className="g12 fill">
          {[leetcode, codechef].map((item) => (
            <article key={item.label} className="card col-span-12 sm:col-span-6 lg:col-span-3">
              <p className="mono text-[length:var(--t-stat)] leading-none text-[var(--accent)]">
                {item.figure}
              </p>
              <h3 className="mt-4">{item.label}</h3>
              <p>{item.note}</p>
              {item.href ? (
                <a
                  className="link mt-auto pt-6 text-[15px]"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the profile
                </a>
              ) : null}
            </article>
          ))}

          <article className="card col-span-12 lg:col-span-6">
            <p className="mono text-[length:var(--t-stat)] leading-none text-[var(--accent)]">
              {paper.figure}
            </p>
            <h3 className="mt-4">{paper.label}</h3>
            <p className="max-w-[52ch]">{paper.note}</p>

            {/* the framework the paper describes: seven input channels into SegFormer */}
            <div className="panel">
              <div data-ui="" className="fragment flex items-center justify-center">
              <svg
                viewBox="0 0 560 150"
                className="w-full max-w-[560px]"
                role="img"
                aria-label="Seven input channels feed a SegFormer encoder, reaching 81.04 per cent overall accuracy"
              >
                {Array.from({ length: 7 }, (_, i) => (
                  <g key={i}>
                    <rect
                      className="dg-node"
                      x="1"
                      y={6 + i * 19}
                      width="92"
                      height="14"
                      rx="3"
                      opacity={0.5 + i * 0.07}
                    />
                    <path className="dg-line" d={`M93 ${13 + i * 19} C 130 ${13 + i * 19}, 150 75, 196 75`} />
                  </g>
                ))}
                <text x="47" y="146" textAnchor="middle" fill="#2b2e24" fontSize="11.5">
                  7 channels
                </text>

                <rect className="dg-node" x="196" y="52" width="130" height="46" rx="8" />
                <text x="261" y="80" textAnchor="middle" fill="#eef0e8" fontSize="13">
                  SegFormer
                </text>

                <path className="dg-line" d="M326 75h62" />
                <path className="dg-pulse" d="M326 75h62" />

                <rect className="dg-node" x="388" y="52" width="171" height="46" rx="8" />
                <text x="473" y="74" textAnchor="middle" fill="#dafa9c" fontSize="13">
                  81.04% overall
                </text>
                <text x="473" y="90" textAnchor="middle" fill="#9ba18f" fontSize="11.5">
                  Globe2Dox, ICCET-2026
                </text>
              </svg>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
