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
    <div className="relative rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 lg:p-10 h-full overflow-hidden flex flex-col justify-between">
      {/* Decorative SVGs for a "handmade tech" feel */}
      <svg className="absolute top-0 right-0 w-64 h-64 text-[var(--accent)] opacity-10 -rotate-12 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M38.1,-60.6C47.8,-53.4,53.2,-40,60.5,-27.1C67.8,-14.2,77.1,-1.8,77.4,10.8C77.7,23.4,69,36.2,58,45.4C47,54.6,33.7,60.2,20.4,63.9C7.1,67.6,-6.2,69.4,-19.1,65.8C-32,62.2,-44.5,53.2,-52.1,41.4C-59.7,29.6,-62.4,14.8,-63.3,-0.5C-64.2,-15.8,-63.3,-31.6,-55.4,-42.6C-47.5,-53.6,-32.6,-59.8,-18.8,-62.4C-5,-65,9.8,-64,22.1,-63C34.4,-62,46.1,-63.5,38.1,-60.6Z" transform="translate(100 100)" />
      </svg>
      
      <motion.svg 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-12 -left-12 w-48 h-48 text-[var(--muted)] opacity-5 pointer-events-none" 
        viewBox="0 0 100 100"
      >
        <polygon points="50,5 95,95 5,95" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5"/>
      </motion.svg>

      <div className="relative z-10 mb-8 lg:mb-12">
        <p className="text-sm font-medium text-[var(--muted)] mb-2 tracking-wide uppercase">Good morning</p>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
          className="relative inline-block"
        >
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Welcome back,<br/>
            <span className="text-[var(--accent)] relative inline-block">
              Sahitya
              {/* Hand-drawn underline SVG */}
              <motion.svg 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full h-3 text-[var(--accent)]" 
                viewBox="0 0 100 10" preserveAspectRatio="none"
              >
                <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </motion.svg>
            </span> 👋
          </h1>
        </motion.div>
        <p className="text-base text-[var(--muted)] mt-4 max-w-sm">You're making great progress. Jump back in and crush those goals.</p>
      </div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            className="group rounded-xl border border-[var(--card-border)] bg-[var(--background)] px-5 py-4 cursor-pointer transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg bg-[var(--card)] border border-[var(--card-border)] ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon size={18} />
              </div>
            </div>
            <p className="text-2xl font-black leading-none mb-1">{stat.value}</p>
            <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
