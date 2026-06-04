"use client";

import { motion } from "framer-motion";

const weeks = 12;
const daysPerWeek = 7;

function getLevel(w: number, d: number) {
  return Math.floor(Math.abs(Math.sin((w * 7 + d) * 3.7)) * 4);
}

const levelClasses = [
  "bg-neutral-900 border-neutral-800",
  "bg-[var(--accent)]/30 border-[var(--accent)]/50",
  "bg-[var(--accent)]/70 border-[var(--accent)]",
  "bg-[var(--accent)] border-[var(--accent)] shadow-[0_0_10px_rgba(59,130,246,0.5)]",
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export default function ActivityTile() {
  return (
    <motion.section
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 h-full flex flex-col overflow-hidden glow-on-hover group"
    >
      <div className="bg-grain rounded-2xl absolute inset-0 pointer-events-none" />

      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[var(--accent)]/20 transition-colors duration-500" />

      <div className="relative z-10 flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg text-[var(--foreground)]">Activity</h3>
        <span className="text-[10px] font-bold bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800 text-[var(--muted)]">Last {weeks} weeks</span>
      </div>

      <div className="relative z-10 flex gap-[5px] mb-4 overflow-x-auto pb-2 scrollbar-hide">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-[5px]">
            {Array.from({ length: daysPerWeek }).map((_, d) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (w * 7 + d) * 0.005, type: "spring" }}
                whileHover={{ scale: 1.3 }}
                className={`w-3 h-3 rounded-[3px] border ${levelClasses[getLevel(w, d)]} cursor-pointer transition-colors`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-center gap-1.5 text-[9px] font-bold text-[var(--muted)] uppercase tracking-widest mt-auto pt-4 border-t border-neutral-900">
        <span>Less</span>
        {levelClasses.map((cls, i) => (
          <div key={i} className={`w-2.5 h-2.5 rounded-[2px] border ${cls}`} />
        ))}
        <span>More</span>
      </div>
    </motion.section>
  );
}
