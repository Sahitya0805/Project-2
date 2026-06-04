"use client";

import { motion } from "framer-motion";

const weeks = 12;
const daysPerWeek = 7;

function getLevel(w: number, d: number) {
  return Math.floor(Math.abs(Math.sin((w * 7 + d) * 3.7)) * 4);
}

const levelClasses = [
  "bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700",
  "bg-orange-200 dark:bg-orange-900/60 border-orange-300 dark:border-orange-800",
  "bg-orange-400 dark:bg-orange-600 border-orange-500 dark:border-orange-500",
  "bg-[var(--accent)] dark:bg-[var(--accent)] border-orange-600 dark:border-orange-400",
];

const recentItems = [
  { text: "Completed React Hooks lesson", time: "2h ago", icon: "🔥" },
  { text: "Passed TypeScript quiz", time: "5h ago", icon: "✨" },
  { text: "Started System Design module", time: "1d ago", icon: "🚀" },
];

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export default function ActivityTile() {
  return (
    <motion.div
      variants={item}
      className="relative rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card)] p-6 h-full flex flex-col overflow-hidden"
    >
      {/* Background SVG Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[var(--foreground)]" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-between mb-6">
        <h3 className="font-black text-xl">Activity</h3>
        <span className="text-xs font-bold bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700">Last {weeks} weeks</span>
      </div>

      <div className="relative z-10 flex gap-[6px] mb-4 overflow-x-auto pb-2 scrollbar-hide">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-[6px]">
            {Array.from({ length: daysPerWeek }).map((_, d) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (w * 7 + d) * 0.005, type: "spring" }}
                whileHover={{ scale: 1.5, borderRadius: "4px" }}
                className={`w-[14px] h-[14px] rounded-[3px] border ${levelClasses[getLevel(w, d)]} cursor-pointer transition-colors`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-center gap-2 text-[10px] font-bold text-[var(--muted)] mb-6 uppercase tracking-widest">
        <span>Less</span>
        {levelClasses.map((cls, i) => (
          <div key={i} className={`w-3 h-3 rounded-[3px] border ${cls}`} />
        ))}
        <span>More</span>
      </div>

      <div className="relative z-10 mt-auto pt-5 border-t-2 border-dashed border-[var(--card-border)] space-y-4">
        <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-widest">Recent</p>
        {recentItems.map((r, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            key={i} 
            className="flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{r.icon}</span>
              <span className="text-sm font-semibold truncate pr-4">{r.text}</span>
            </div>
            <span className="text-xs font-bold text-[var(--muted)] shrink-0">{r.time}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
