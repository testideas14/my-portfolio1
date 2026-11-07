import Image from "next/image";
import { featured, alsoShipped, type Project } from "@/data/projects";
import { links } from "@/data/profile";
import { ProjectPanel } from "@/components/Panels";

/** Marks drawn in near-black: turned for this ground, never recoloured otherwise. */
const INK = new Set(["langchain", "github", "vercel", "railway", "express", "openai", "nextjs"]);

/** The real mark for each name in a project's stack, where one exists. */
const MARK: Record<string, string> = {
  Python: "python",
  LangChain: "langchain",
  Polly: "python",
  Django: "django",
  DRF: "django",
  PostgreSQL: "postgres",
  Java: "java",
  "Spring Boot": "spring",
  MongoDB: "mongodb",
  "Node.js": "nodejs",
};

function Marks({ stack, size = 20 }: { stack: string[]; size?: number }) {
  const files = [...new Set(stack.map((name) => MARK[name]).filter(Boolean))];
  return (
    <span className="flex shrink-0 items-center gap-3">
      {files.map((file) => (
        <Image
          key={file}
          src={`/icons/${file}.svg`}
          alt=""
          width={size}
          height={size}
          style={{ width: size, height: size }}
          className={`object-contain ${INK.has(file) ? "invert" : ""}`}
        />
      ))}
    </span>
  );
}

function Arrow() {
  return (
    <svg
      className="m-arrow"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 6h8" />
      <path d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

function Card({ project }: { project: Project }) {
  const href = project.live ?? project.repo;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card col-span-12 md:col-span-6"
    >
      <div className="flex items-start justify-between gap-4">
        <h3>{project.title}</h3>
        <span className="label mono shrink-0 pt-1">{project.live ? "Live" : "Source"}</span>
      </div>

      <p>{project.summary}</p>

      <p className="mono mt-4 text-[13px] text-[var(--accent)]">{project.fact}</p>

      <ul className="mt-3 flex list-none flex-wrap gap-x-3 gap-y-1 p-0 text-[13px] text-[var(--muted)]">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="panel">
        <ProjectPanel kind={project.panel} />
      </div>
    </a>
  );
}

export function Work() {
  const [first, second, third, fourth] = featured;

  return (
    <section className="section g2" id="work" style={{ "--h": 2, "--hm": 2 } as React.CSSProperties}>
      <div className="wrap">
        <div className="flex min-h-0 flex-col">
          <div className="section-head">
            <h2>Projects</h2>
            <p>
              Four systems I designed, built and deployed. Every number on a card is one its
              repository shows.
            </p>
          </div>
          <div className="g12 fill">
            <Card project={first} />
            <Card project={second} />
          </div>
        </div>

        <div className="g12 fill min-h-0">
          <Card project={third} />
          <Card project={fourth} />
        </div>
      </div>
    </section>
  );
}

export function Shipped() {
  return (
    <section className="section" id="shipped">
      <div className="wrap">
        <div className="section-head section-head--row">
          <div>
            <h2>More repositories</h2>
            <p>Four more services in public repositories, across Python, Java and Node.</p>
          </div>
          <a className="link" href={links.repos} target="_blank" rel="noopener noreferrer">
            See all repositories
            <Arrow />
          </a>
        </div>

        <div className="g12 fill">
          {alsoShipped.map((item, i) => {
            // the row alternates a wide card and a narrow one, so no two sit the same way
            const wide = i % 3 === 0;
            return (
              <a
                key={item.title}
                href={item.live ?? item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={`card col-span-12 ${wide ? "sm:col-span-7" : "sm:col-span-5"}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3>{item.title}</h3>
                  <span className="label mono shrink-0 pt-1">{item.live ? "Live" : "Source"}</span>
                </div>
                <p>{item.summary}</p>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8">
                  <Marks stack={item.stack} size={24} />
                  <span className="mono truncate text-[12.5px] text-[var(--muted)]">
                    {item.slug}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
