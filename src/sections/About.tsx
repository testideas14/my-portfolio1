"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiFlutter,
  SiPython,
  SiNodedotjs,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiLangchain,
} from "react-icons/si";

const educationTabs = [
  {
    key: "science",
    label: "Clubs & Leadership",
    content:
      "Operations Head at the Full Stack Club, Social Media Head at the DevOps BU Club, and Joint Secretary at BU-Gamers Club. Run tech sessions, manage community content, and coordinate club operations across teams.",
  },
  {
    key: "university",
    label: "Bennett University",
    content:
      "B.Tech in Computer Science, CGPA 8.9 (graduating May 2027). Coursework covers algorithms, software engineering, AI/ML, and systems design. Built production-grade projects across backend, full-stack, and LLM integration tracks.",
  },
  {
    key: "competitions",
    label: "Competitive Programming",
    content:
      "1700+ rating on both LeetCode and CodeChef, 500+ problems solved. Consistent focus on DSA — currently working through Striver's SDE Sheet. Also documenting a self-directed 30-day Rust learning challenge publicly on LinkedIn.",
  },
];

const passions = [
  { name: "Traveling", emoji: "✈️" },
  { name: "Cricket", emoji: "🏏" },
  { name: "Running", emoji: "🏃" },
  { name: "Gym", emoji: "💪" },
];

const techTags = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiLangchain, name: "Langchain" },
  { icon: SiPython, name: "Python" },
  { icon: SiNodedotjs, name: "Node" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiGit, name: "Git" },
];

export function About() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activePassion, setActivePassion] = useState(0);

  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-4 pb-32 pt-0"
      style={{ scrollMarginTop: "120px" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl">
          About <span className="text-gradient-shimmer">Me</span>
        </h2>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-[minmax(9rem,auto)_auto_minmax(9rem,auto)]">
        {/* 1. Name Card — Row 1, Col 1 */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="card-glow flex items-center justify-center rounded-2xl border border-(--card-border) bg-gradient-to-br from-(--card) to-(--card-border)/50 p-6 text-center"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300">
              Profile
            </p>
            <h3 className="mt-2 text-2xl font-black uppercase leading-[1.05] tracking-wide sm:text-3xl">
              Mandeep
              <br />
              Singh
            </h3>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-(--muted)">
              AI & Fullstack Developer
            </p>
          </div>
        </motion.article>

        {/* 2. Education Tabs — Row 1, Col 2-3 */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="card-glow col-span-1 sm:col-span-1 md:col-span-2 rounded-2xl border border-(--card-border) bg-gradient-to-br from-(--card) to-(--card-border)/50 p-5 flex flex-col"
        >
          <h3 className="mb-3 text-sm font-bold uppercase text-(--foreground)">
            Education & Achievements
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {educationTabs.map((tab) => (
              <div
                key={tab.key}
                onMouseEnter={() => setActiveTab(tab.key)}
                onMouseLeave={() => setActiveTab(null)}
                className={`cursor-pointer rounded-xl border p-2 sm:p-3 text-center transition-all duration-300 ${activeTab === tab.key
                  ? "border-violet-500/40 bg-violet-500/10"
                  : "border-white/5 bg-white/[0.02]"
                  }`}
              >
                <p
                  className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${activeTab === tab.key
                    ? "text-violet-300"
                    : "text-(--muted)"
                    }`}
                >
                  {tab.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex-1">
            <AnimatePresence mode="wait">
              {activeTab ? (
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs sm:text-sm leading-relaxed text-(--muted)"
                >
                  {educationTabs.find((t) => t.key === activeTab)?.content}
                </motion.p>
              ) : (
                <motion.p
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs sm:text-sm leading-relaxed text-(--muted)/50 italic"
                >
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.article>

        {/* 3. Mindset Card — Row 2-3, Col 1 */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card-glow row-span-1 md:row-span-2 rounded-2xl border border-(--card-border) bg-gradient-to-br from-(--card) to-(--card-border)/50 p-5"
        >
          <h3 className="text-sm font-bold">Mindset</h3>
          <p className="mt-2 text-xs leading-relaxed text-(--muted)">
            Building more than software. My passions provide the discipline and
            focus I need to grow.
          </p>

          {/* Passion cards stack */}
          <div className="relative mt-4 h-48 overflow-hidden rounded-xl">
            {passions.map((passion, i) => (
              <motion.div
                key={passion.name}
                className={`absolute inset-0 flex flex-col items-center justify-center rounded-xl border transition-all duration-500 cursor-pointer ${i === activePassion
                  ? "border-violet-500/30 bg-violet-500/10 z-10"
                  : "border-white/5 bg-white/[0.02]"
                  }`}
                style={{
                  transform: `translateY(${(i - activePassion) * 8}px) scale(${i === activePassion ? 1 : 0.95})`,
                  opacity: i === activePassion ? 1 : 0.4,
                  zIndex: i === activePassion ? 10 : 5 - Math.abs(i - activePassion),
                }}
                onClick={() => setActivePassion(i)}
                onMouseEnter={() => setActivePassion(i)}
              >
                <span className="text-4xl">{passion.emoji}</span>
                <p className="mt-2 text-sm font-semibold">{passion.name}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-4 text-[11px] italic text-(--muted)">
            Mastering body and mind is my path to excellence.
          </p>
        </motion.article>

        {/* 4. Portrait Card — Row 2, Col 2 */}
        <motion.article
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="relative aspect-square overflow-hidden rounded-2xl border border-(--card-border) bg-(--card)"
        >
          <img
            src="https://github.com/mrcoffeebean14.png"
            alt="Mandeep Singh"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none" />
        </motion.article>

        {/* 5. Craft Card — Row 2-3, Col 3 */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="card-glow row-span-1 md:row-span-2 rounded-2xl border border-(--card-border) bg-gradient-to-br from-(--card) to-(--card-border)/50 p-5"
        >
          <h3 className="text-sm font-bold">Craft</h3>
          <p className="mt-2 text-xl leading-relaxed text-(--muted)">
            Building <span className="text-gradient-shimmer">scalable website</span>s and <span className="text-gradient-shimmer">intelligent agents</span>.
          </p>
          <p className="mt-2 text-xl leading-relaxed text-(--muted)">
            I understand what advantages modern tech can provide, helping me advise on the solutions a business actually needs.
          </p>



          {/* Tech marquee */}
          <div className="mt-4 overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] py-2.5">
            <div className="marquee-track">
              {[...techTags, ...techTags].map((tag, i) => (
                <div
                  key={`${tag.name}-${i}`}
                  className="flex items-center gap-1.5 px-3"
                >
                  <tag.icon size={12} className="text-(--muted)" />
                  <span className="text-[10px] uppercase tracking-wider text-(--muted) whitespace-nowrap">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-lg leading-relaxed text-(--muted)">
            Active Hackathon competitor & Science Club member. Feel free to
            invite me to collaborate.
          </p>

          {/* Status */}
          <div className="mt-4 flex items-center gap-2">
            <span className="pulse-dot h-2 w-2 rounded-full bg-green-400" />
            <span className="text-[11px] text-green-400/80">
              Open to collaboration & freelance
            </span>
          </div>
        </motion.article>

        {/* 6. Location Card — Row 3, Col 2 */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="card-glow relative overflow-hidden rounded-2xl border border-(--card-border) bg-(--card)"
        >
          {/* Dark map-like background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10" />

          {/* World Map SVG Mask */}
         <div
           className="absolute inset-0 bg-violet-500/20"
            style={{
              maskImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')",
              maskSize: "160%",
              maskPosition: "75% 45%",
              WebkitMaskImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')",
              WebkitMaskSize: "160%",
              WebkitMaskPosition: "75% 45%",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          />

          {/* Location Dot (approximate for New Delhi) */}
          <div className="absolute top-[26%] left-[63%] flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500"></span>
          </div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          {/* Scanner line */}
          <div className="scanner-line" />

          {/* Content */}
          <div className="relative z-20 flex h-full flex-col justify-end p-4">
            <p className="text-lg font-bold leading-none sm:text-xl">
              New Delhi, India
            </p>
            <p className="mt-1 text-[10px] tracking-wider text-(--muted)">
              28.6139° N, 77.2090° E — GMT+5:30
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
