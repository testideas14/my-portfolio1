"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Send, Sparkles } from "lucide-react";

const quickActions = ["Work", "About me", "Skills", "Contact"];

export function Hero() {
  const [chatInput, setChatInput] = useState("");

  return (
    <section
      id="home"
      className="section relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pb-16 pt-28 sm:pt-32"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="flex w-full max-w-2xl flex-col items-center text-center">
        {/* Memoji / Avatar placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/10 shadow-lg shadow-violet-500/10"
        >
          <span className="text-3xl">👋</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient-shimmer">Mandeep Singh</span>
        </motion.h1>

        {/* AI Chat Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 w-full rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 backdrop-blur-sm"
        >
          {/* AI assistant header */}
          <div className="mb-4 flex items-center gap-2 text-sm text-(--muted)">
            <Sparkles size={14} className="text-(--accent)" />
            <span>Ask me anything about Mandeep...</span>
          </div>

          {/* Quick action pills */}
          <div className="mb-4 flex flex-wrap gap-2">
            {quickActions.map((action) => (
              <button
                key={action}
                className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-(--muted) transition-all duration-200 hover:border-(--accent) hover:text-(--foreground)"
              >
                {action}
              </button>
            ))}
          </div>

          {/* Chat input */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask anything about Paweł..."
              className="flex-1 bg-transparent text-sm text-(--foreground) placeholder:text-(--muted)/60 outline-none"
            />
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-(--accent) text-white transition-transform hover:scale-105 active:scale-95">
              <Send size={14} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-(--muted)"
      >
        <span className="text-xs uppercase tracking-[0.2em]">
          Scroll to explore
        </span>
        <ChevronDown size={16} className="bounce-down" />
      </motion.div>
    </section>
  );
}
