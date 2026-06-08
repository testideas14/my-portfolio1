"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send, Sparkles, User, Bot, Loader2 } from "lucide-react";
import { useChat } from "@ai-sdk/react";

const quickActions = ["Work", "About me", "Skills", "Contact"];

export function Hero() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState("");
  const isLoading = status === "submitted" || status === "streaming";
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickAction = (action: string) => {
    sendMessage({ role: 'user', parts: [{ type: 'text', text: `Tell me about your ${action.toLowerCase()}` }] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ role: 'user', parts: [{ type: 'text', text: input }] });
    setInput("");
  };

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

          {/* Chat Messages Area */}
          <AnimatePresence>
            {messages.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="mb-4 max-h-[250px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent flex flex-col gap-3 text-left"
              >
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex items-start gap-2 text-sm ${
                      m.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        m.role === "user"
                          ? "bg-(--accent)/20 text-(--accent)"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      {m.role === "user" ? <User size={12} /> : <Bot size={12} />}
                    </div>
                    <div
                      className={`rounded-2xl px-3 py-2 max-w-[85%] leading-relaxed ${
                        m.role === "user"
                          ? "bg-(--accent)/20 text-(--foreground) rounded-tr-none"
                          : "bg-white/5 text-(--muted) rounded-tl-none border border-white/5 whitespace-pre-wrap"
                      }`}
                    >
                      {m.parts ? m.parts.map((p: any) => p.type === 'text' ? p.text : '').join('') : (m as any).content || (m as any).text || ''}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-2 text-sm">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                      <Bot size={12} />
                    </div>
                    <div className="rounded-2xl rounded-tl-none border border-white/5 bg-white/5 px-3 py-2">
                      <Loader2 size={14} className="animate-spin text-(--muted)" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick action pills */}
          {messages.length === 0 && (
            <div className="mb-4 flex flex-wrap gap-2 justify-center">
              {quickActions.map((action) => (
                <button
                  key={action}
                  onClick={() => handleQuickAction(action)}
                  className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-(--muted) transition-all duration-200 hover:border-(--accent) hover:text-(--foreground)"
                >
                  {action}
                </button>
              ))}
            </div>
          )}

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Mandeep..."
              className="flex-1 bg-transparent text-sm text-(--foreground) placeholder:text-(--muted)/60 outline-none"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-(--accent) text-white transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Send size={14} />
            </button>
          </form>
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
