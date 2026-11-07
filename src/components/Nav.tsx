"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

/**
 * One fixed bar, opaque from the first paint, the same at every scroll depth:
 * no blur, shrink, hide, colour flip or floating pill. Nothing else on the page is fixed.
 */

const items = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#record", label: "Record" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  // the sheet is the only thing that locks the page, and only while it is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="nav fixed inset-x-0 top-0 z-10 border-b border-[var(--line)] bg-[var(--bg)]"
      style={{ height: "var(--nav)" }}
    >
      <div className="wrap flex h-full items-center justify-between gap-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[20px] leading-none"
          aria-label={`${profile.name} — back to the top`}
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-9 shrink-0 place-items-center rounded-md bg-[var(--accent)] text-[12px] font-medium tracking-tight text-[var(--accent-ink)]"
          >
            MS
          </span>
          <span className="hidden whitespace-nowrap lg:inline">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="link text-[15px] font-medium">
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="link text-[15px] font-medium"
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <span className="contents md:hidden">
          <button
            type="button"
            className="btn btn--secondary h-11 w-11 !px-0"
            aria-expanded={open}
            aria-controls="nav-sheet"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {open ? <path d="M4 4l10 10M14 4L4 14" /> : <path d="M2 5h14M2 13h14" />}
            </svg>
          </button>
          </span>
        </div>
      </div>

      {/* under 640 the menu is a full-screen sheet of 56px rows that closes on any tap */}
      {open ? (
        <div
          id="nav-sheet"
          className="fixed inset-0 top-[var(--nav)] z-10 bg-[var(--bg)] md:hidden"
          onClick={() => setOpen(false)}
        >
          <ul className="wrap m-0 list-none p-0 pt-2">
            {[...items, { href: profile.resume, label: "Resume" }].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex h-14 items-center border-b border-[var(--line)] text-[18px]"
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
      ) : null}
    </header>
  );
}
