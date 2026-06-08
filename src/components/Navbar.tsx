"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href:"https://drive.google.com/file/d/1GRPfHpulFemiu9hGWHZ5QiyU0e_nDC7Y/view?usp=sharing", label: "Resume"},
  { href: "#other", label: "Other" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = navItems.map((item) => item.href.replace("#", ""));
      let current = ids[0];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 130) {
          current = ids[i];
          break;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6">
      <nav className="section">
        <div className="flex items-center justify-center gap-3">
          {/* Center nav pill */}
          <div className="flex h-12 sm:h-14 items-center gap-0.5 sm:gap-1 rounded-full glass-strong px-3 sm:px-6 shadow-xl shadow-black/10">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative rounded-full px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors duration-300"
                  style={{
                    color: isActive ? "var(--foreground)" : "var(--muted)",
                  }}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "var(--accent)",
                        opacity: 0.1,
                        border: "1px solid var(--accent)",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.6,
                      }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Book a call button */}
          <a
            href="mailto:pszostak.contact@gmail.com"
            className="hidden md:flex h-12 sm:h-14 items-center gap-2 rounded-full glass-strong px-5 sm:px-6 text-sm font-semibold text-(--foreground) shadow-xl shadow-black/10 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <Calendar size={16} className="text-(--accent)" />
            <span>Book a Call</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
