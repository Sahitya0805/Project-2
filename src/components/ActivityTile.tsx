"use client";

import { motion } from "framer-motion";
import { GitCommit } from "lucide-react";

const weeks = Array.from({ length: 15 });
const days = Array.from({ length: 7 });

function getLevel(w: number, d: number) {
  return Math.floor(Math.abs(Math.sin((w * 7 + d) * 3.7)) * 4);
}

const levels = [
  "bg-zinc-100 dark:bg-white/[0.03] border-zinc-200/60 dark:border-white/[0.04]",
  "bg-violet-200/60 dark:bg-violet-500/20 border-violet-300/40 dark:border-violet-500/20",
  "bg-violet-400/70 dark:bg-violet-500/50 border-violet-400 dark:border-violet-500/40",
  "bg-violet-500 dark:bg-violet-500 border-violet-600 dark:border-violet-400 shadow-[0_0_6px_rgba(139,92,246,0.5)]",
];

const recentActivity = [
  { action: "Completed lesson", course: "React Patterns", time: "2h ago", icon: "✅" },
  { action: "Started module", course: "Next.js Mastery", time: "5h ago", icon: "🚀" },
  { action: "Quiz passed", course: "TypeScript", time: "1d ago", icon: "🏆" },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ActivityTile() {
  return (
    <motion.article
      variants={item}
      className="rounded-3xl p-6 bg-white/60 dark:bg-white/[0.03] backdrop-blur-2xl border border-zinc-200/80 dark:border-white/[0.06] shadow-xl shadow-zinc-200/40 dark:shadow-black/40 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-black text-zinc-900 dark:text-white">Activity</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 font-medium mt-0.5">Last 15 weeks</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
          <GitCommit size={12} className="text-violet-500" />
          <span className="text-xs font-bold text-violet-500">48 days</span>
        </div>
      </div>

      <div className="flex gap-1.5 mb-5">
        {weeks.map((_, w) => (
          <div key={w} className="flex flex-col gap-1.5">
            {days.map((_, d) => {
              const level = getLevel(w, d);
              return (
                <motion.div
                  key={d}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: (w * 7 + d) * 0.005, type: "spring" }}
                  whileHover={{ scale: 1.6, zIndex: 10 }}
                  className={`w-3 h-3 rounded-[3px] border ${levels[level]} transition-all cursor-pointer`}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-wider mb-5">
        <span>Less</span>
        <div className="flex gap-1">
          {levels.map((cls, i) => (
            <div key={i} className={`w-3 h-3 rounded-[3px] border ${cls}`} />
          ))}
        </div>
        <span>More</span>
      </div>

      <div className="mt-auto pt-4 border-t border-zinc-200/60 dark:border-white/5 space-y-3">
        <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-600">Recent</p>
        {recentActivity.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="text-sm">{a.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">{a.action} · <span className="text-zinc-500">{a.course}</span></p>
            </div>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-600 shrink-0">{a.time}</span>
          </motion.div>
        ))}
      </div>
    </motion.article>
  );
}
