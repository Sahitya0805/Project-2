"use client";

import { motion } from "framer-motion";
import { Code, Rocket, Network, FileCode, LucideIcon, ArrowUpRight } from "lucide-react";
import { Course } from "@/types/course";

const icons: Record<string, LucideIcon> = { Code, Rocket, Network, FileCode };

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export default function CourseCard({ course }: { course: Course }) {
  const Icon = icons[course.icon_name] || Code;

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 h-full flex flex-col cursor-pointer overflow-hidden group glow-on-hover"
    >
      {/* Abstract Grain Texture Background */}
      <div className="bg-grain rounded-2xl absolute inset-0 pointer-events-none" />

      {/* Subtle glowing orb in background */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-2xl group-hover:bg-[var(--accent)]/20 transition-colors duration-500 pointer-events-none" />

      <div className="relative z-10 flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-neutral-900 border border-neutral-800 text-[var(--foreground)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)]/30 transition-colors">
          <Icon size={22} strokeWidth={2} />
        </div>
        <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 text-[var(--muted)] flex items-center justify-center group-hover:text-white transition-colors">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="relative z-10 flex-1 mb-6">
        <h3 className="font-bold text-lg leading-tight mb-2 text-[var(--foreground)]">{course.title}</h3>
        <p className="text-xs text-[var(--muted)] font-medium">
          {Math.round((course.progress / 100) * 24)} of 24 modules completed
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-neutral-900">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider">Progress</span>
          <span className="text-sm font-black text-[var(--foreground)]">{course.progress}%</span>
        </div>
        
        {/* Animated Progress Bar */}
        <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="h-full bg-[var(--accent)] rounded-full relative"
          >
            {/* Tiny glow head */}
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full blur-[1px]" />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
