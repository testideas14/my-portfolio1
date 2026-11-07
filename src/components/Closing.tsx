import { profile, links } from "@/data/profile";

/**
 * The close and the footer are one section (footer.closing): row 1 the close,
 * row 2 the directory, the legal row and the one credits line.
 */

const directory = [
  {
    heading: "Page",
    items: [
      { label: "Work", href: "#work" },
      { label: "Also shipped", href: "#shipped" },
      { label: "Experience", href: "#experience" },
      { label: "Stack", href: "#stack" },
      { label: "Record", href: "#record" },
    ],
  },
  {
    heading: "Elsewhere",
    items: [
      { label: "GitHub", href: links.github },
      { label: "LinkedIn", href: links.linkedin },
      { label: "LeetCode", href: links.leetcode },
      { label: "Resume", href: profile.resume },
    ],
  },
];

export function Closing() {
  const year = new Date().getFullYear();

  return (
    <footer className="section" id="contact">
      <div className="wrap grid grid-rows-[1fr_auto] gap-12">
        <div className="flex min-h-0 flex-col justify-center">
          <h2 className="max-w-[18ch] text-[length:var(--t-h1)] leading-[1.02] tracking-[var(--display-tracking-xl)]">
            Looking for someone to build the backend.
          </h2>
          <p className="muted mt-8 max-w-[48ch] text-[length:var(--t-lead)]">
            I am in {profile.location} and answer within a day. Tell me what you are building and I
            will tell you how I would ship it.
          </p>
          <div className="btn-row mt-8">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a
              className="btn btn--secondary"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the code
            </a>
          </div>
        </div>

        <div>
          <div className="g12 pt-4">
            <div className="col-span-12 mb-6 sm:mb-0 md:col-span-6">
            <p className="flex items-center gap-2.5 text-[20px] leading-none">
              <span
                aria-hidden="true"
                className="grid h-7 w-9 shrink-0 place-items-center rounded-md bg-[var(--accent)] text-[12px] font-medium tracking-tight text-[var(--accent-ink)]"
              >
                MS
              </span>
              {profile.name}
            </p>
            <p className="mt-4 max-w-[28ch] text-[15px] text-[var(--muted)]">
              {profile.role}, {profile.location}.
            </p>
            </div>

            {directory.map((column) => (
              <div key={column.heading} className="col-span-6 md:col-span-3">
                <p className="label">{column.heading}</p>
                <ul className="mt-4 grid list-none gap-2.5 p-0">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <a
                        className="link text-[15px] font-normal text-[var(--muted)] hover:text-[var(--ink)]"
                        href={item.href}
                        {...(item.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="g12 mt-14 text-[13px] text-[var(--muted)]">
            <span className="col-span-12 md:col-span-4">
              {profile.name} · {year}
            </span>
            <span className="col-span-12 md:col-span-8 md:text-right">
              Icons: SVG Logos (CC0). Product names and logos are trademarks of their owners.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
