"use client";

import { motion } from "framer-motion";
import { Flame, Trophy, Clock, BarChart3 } from "lucide-react";

const stats = [
  { label: "Streak", value: "12 days", icon: Flame, color: "text-orange-500" },
  { label: "Completed", value: "23", icon: Trophy, color: "text-yellow-500" },
  { label: "Hours", value: "142", icon: Clock, color: "text-blue-500" },
  { label: "Avg Score", value: "87%", icon: BarChart3, color: "text-green-500" },
];

export default function HeroTile() {
  return (
    <motion.section
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative rounded-2xl border border-[var(--card-border)] bg-[var(--card)] h-full overflow-hidden flex flex-col justify-between glow-on-hover"
    >
      <div className="bg-grain rounded-2xl absolute inset-0 pointer-events-none" />

      {/* Abstract Gradient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

      <div className="relative z-10 p-6 lg:p-10 mb-6 lg:mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--muted)]">Daily Overview</p>
        </div>
        
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight text-[var(--foreground)]"
          >
            Welcome back,
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--muted)]"
          >
            Sahitya.
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm text-[var(--muted)] max-w-sm font-medium leading-relaxed"
        >
          Your learning trajectory is currently performing <strong className="text-[var(--accent)] font-bold">24% above</strong> the community average.
        </motion.p>
      </div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-[1px] bg-neutral-900 border-t border-[var(--card-border)]">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[var(--card)] p-5 hover:bg-neutral-900 transition-colors"
          >
            <div className={`mb-3 ${stat.color}`}>
              <stat.icon size={18} strokeWidth={2.5} />
            </div>
            <p className="text-xl font-bold leading-none mb-1 text-[var(--foreground)]">{stat.value}</p>
            <p className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
