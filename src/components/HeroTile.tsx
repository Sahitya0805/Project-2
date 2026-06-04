"use client";

import { motion } from "framer-motion";
import { Flame, Trophy, Clock, BarChart3, ArrowRight } from "lucide-react";

const stats = [
  { label: "Streak", value: "12 days", icon: Flame, color: "text-orange-500" },
  { label: "Completed", value: "23", icon: Trophy, color: "text-yellow-500" },
  { label: "Hours", value: "142", icon: Clock, color: "text-blue-500" },
  { label: "Avg Score", value: "87%", icon: BarChart3, color: "text-green-500" },
];

export default function HeroTile() {
  return (
    <div className="group relative rounded-2xl border border-[var(--card-border)] bg-[var(--card)] h-full overflow-hidden flex flex-col justify-between">
      {/* Award-winning editorial background pattern: A precise, human-crafted architectural grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute -top-10 -right-10 opacity-20 dark:opacity-[0.15] text-[var(--foreground)]">
          <defs>
            <pattern id="arch-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="200%" height="200%" fill="url(#arch-grid)" className="transform rotate-12" />
        </svg>
        
        {/* Animated architectural circles */}
        <motion.svg 
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[400px] h-[400px] text-[var(--foreground)] opacity-10 pointer-events-none" 
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.5" />
        </motion.svg>
      </div>

      <div className="relative z-10 p-6 lg:p-10 mb-8 lg:mb-12">
        {/* Removed GOOD MORNING label */}
        
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]"
          >
            Welcome back,
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] text-[var(--accent)]"
          >
            Sahitya.
          </motion.h1>
        </div>

        {/* Removed paragraph text */}
      </div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-[1px] bg-[var(--card-border)] border-t border-[var(--card-border)]">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[var(--card)] p-5 hover:bg-[var(--background)] transition-colors cursor-pointer"
          >
            <div className={`mb-3 ${stat.color}`}>
              <stat.icon size={20} strokeWidth={2.5} />
            </div>
            <p className="text-2xl font-black leading-none mb-1.5">{stat.value}</p>
            <p className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
