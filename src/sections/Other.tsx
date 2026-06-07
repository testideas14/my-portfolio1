"use client";

import { motion } from "framer-motion";
import { BookOpen, Link2, Trophy, ArrowRight } from "lucide-react";

export function Other() {
  const items = [
    {
      key: "guestbook",
      icon: BookOpen,
      title: "Guestbook",
      desc: "Leave your mark and see what others have to say.",
      href: "#other",
      gradient: "from-violet-500 to-purple-600",
      iconBg: "from-violet-500 to-purple-500",
    },
    {
      key: "achievements",
      icon: Trophy,
      title: "Achievements",
      desc: "Milestones, certifications, and accomplishments.",
      href: "#other",
      gradient: "from-amber-500 to-orange-600",
      iconBg: "from-amber-500 to-orange-500",
    },
    {
      key: "links",
      icon: Link2,
      title: "My Links",
      desc: "Find me across the web and social platforms.",
      href: "#other",
      gradient: "from-blue-500 to-cyan-600",
      iconBg: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section
      id="other"
      className="relative overflow-hidden pt-0 pb-24 sm:pb-32"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-(--accent) sm:text-base">
            Discover more
          </span>
          <h2 className="mt-2 mb-4 px-2 text-3xl font-bold text-pretty sm:text-5xl md:text-6xl">
            More to{" "}
            <span className="text-gradient-shimmer">Explore</span>
          </h2>
          <p className="mx-auto max-w-2xl px-3 text-base text-(--muted) sm:text-lg">
            Check out these additional resources and connect with me.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.a
              key={item.key}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-(--card-border) bg-(--card)/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-violet-500/5 sm:p-8"
            >
              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.06]`}
              />

              <div className="relative z-10 flex flex-col gap-4">
                {/* Icon */}
                <div
                  className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${item.iconBg} p-0.5`}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-(--background)">
                    <item.icon
                      size={28}
                      style={{ color: "var(--foreground)" }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`bg-gradient-to-br ${item.gradient} bg-clip-text text-xl font-bold text-transparent sm:text-2xl`}
                >
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm leading-relaxed text-(--muted)">
                  {item.desc}
                </p>

                {/* Explore link */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-(--muted) transition-all duration-300 group-hover:text-(--foreground) group-hover:gap-2.5">
                  <span>Explore</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
