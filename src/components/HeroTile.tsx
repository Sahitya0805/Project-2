"use client";

import { motion } from "framer-motion";
import { Zap, Target, TrendingUp, Clock } from "lucide-react";

const stats = [
  { label: "Courses", value: "6", icon: Target, color: "text-violet-500", bg: "bg-violet-500/10 dark:bg-violet-500/10" },
  { label: "Hours", value: "142", icon: Clock, color: "text-cyan-500", bg: "bg-cyan-500/10 dark:bg-cyan-500/10" },
  { label: "Streak", value: "12", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10 dark:bg-amber-500/10" },
  { label: "XP", value: "4.2k", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-500/10 dark:bg-emerald-500/10" },
];

export default function HeroTile() {
  const words = ["Welcome", "back,", "Sahitya"];

  return (
    <article className="rounded-3xl p-7 lg:p-9 relative overflow-hidden flex flex-col justify-between min-h-[200px] h-full bg-white/60 dark:bg-white/[0.03] backdrop-blur-2xl border border-zinc-200/80 dark:border-white/[0.06] shadow-xl shadow-zinc-200/40 dark:shadow-black/40">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-violet-400/30 to-indigo-500/20 dark:from-violet-500/20 dark:to-indigo-600/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-500/10 dark:from-cyan-500/10 dark:to-blue-600/5 blur-2xl" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-8 right-8 w-24 h-24 rounded-full border border-dashed border-violet-200/40 dark:border-violet-500/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-16 h-16 rounded-full border border-dashed border-indigo-200/50 dark:border-indigo-500/15"
      />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">Active Learning</span>
        </div>

        <h1 className="text-3xl lg:text-5xl font-black tracking-tight mb-5 leading-[1.1]">
          {words.map((word, wi) => (
            <span key={wi} className="inline-block mr-[0.25em]">
              {word.split("").map((char, ci) => (
                <motion.span
                  key={ci}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: (wi * 5 + ci) * 0.025, type: "spring", damping: 15, stiffness: 200 }}
                  className={`inline-block ${wi === 2 ? "bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-indigo-300 bg-clip-text text-transparent" : "text-zinc-900 dark:text-white"}`}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <div className="flex flex-wrap gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/30 text-white text-sm font-bold"
          >
            <Zap size={14} className="fill-current" />
            12 Day Streak
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.75, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 text-sm font-semibold"
          >
            🏆 Top Learner
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-4 gap-3 mt-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl ${stat.bg} border border-transparent hover:scale-105 transition-transform cursor-default`}
          >
            <stat.icon size={16} className={stat.color} />
            <span className={`text-lg font-black ${stat.color}`}>{stat.value}</span>
            <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-wide">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </article>
  );
}
