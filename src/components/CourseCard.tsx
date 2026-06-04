"use client";

import { motion } from "framer-motion";
import { Code, Rocket, Network, FileCode, LucideIcon, ArrowRight } from "lucide-react";
import { Course } from "@/types/course";

const icons: Record<string, LucideIcon> = { Code, Rocket, Network, FileCode };

const colors: Record<string, string> = {
  Code: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 border-orange-200 dark:border-orange-500/30",
  Rocket: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border-blue-200 dark:border-blue-500/30",
  Network: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400 border-green-200 dark:border-green-500/30",
  FileCode: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 border-purple-200 dark:border-purple-500/30",
};

const barColors: Record<string, string> = {
  Code: "bg-orange-500",
  Rocket: "bg-blue-500",
  Network: "bg-green-500",
  FileCode: "bg-purple-500",
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export default function CourseCard({ course }: { course: Course }) {
  const Icon = icons[course.icon_name] || Code;
  const iconColor = colors[course.icon_name] || colors.Code;
  const barColor = barColors[course.icon_name] || barColors.Code;

  return (
    <motion.div
      variants={item}
      whileHover="hover"
      className="relative rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card)] p-6 h-full flex flex-col cursor-pointer overflow-hidden group transition-colors hover:border-[var(--foreground)]"
    >
      {/* Crazy SVG background pattern revealed on hover */}
      <motion.div 
        variants={{ hover: { opacity: 0.05, scale: 1.1, rotate: 5 } }}
        initial={{ opacity: 0, scale: 1, rotate: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`pattern-${course.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-[var(--foreground)]" />
              <path d="M10,10 L15,15 M15,10 L10,15" stroke="currentColor" strokeWidth="1" className="text-[var(--foreground)]" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#pattern-${course.id})`} />
        </svg>
      </motion.div>

      <div className="relative z-10 flex items-start justify-between mb-6">
        <div className={`w-14 h-14 rounded-[14px] flex items-center justify-center border-2 ${iconColor} transform -rotate-3 group-hover:rotate-0 transition-transform`}>
          <Icon size={24} strokeWidth={2.5} />
        </div>
        <motion.div 
          variants={{ hover: { x: 5, opacity: 1 } }}
          initial={{ x: -10, opacity: 0 }}
          className="w-10 h-10 rounded-full bg-[var(--foreground)] text-[var(--background)] flex items-center justify-center shadow-md"
        >
          <ArrowRight size={20} strokeWidth={2.5} />
        </motion.div>
      </div>

      <div className="relative z-10 flex-1">
        <h3 className="font-black text-xl leading-tight mb-2 group-hover:text-[var(--accent)] transition-colors">{course.title}</h3>
        <p className="text-sm font-medium text-[var(--muted)]">
          {Math.round((course.progress / 100) * 24)} of 24 lessons
        </p>
      </div>

      <div className="relative z-10 mt-6 pt-5 border-t-2 border-dashed border-[var(--card-border)]">
        <div className="flex items-end justify-between mb-3">
          <span className="text-xs font-bold text-[var(--muted)] uppercase tracking-widest">Progress</span>
          <span className="text-xl font-black tabular-nums leading-none">{course.progress}%</span>
        </div>
        
        {/* SVG Progress Bar for a unique look */}
        <div className="h-3 w-full relative">
          <svg className="absolute inset-0 w-full h-full rounded-full" preserveAspectRatio="none">
            <rect width="100%" height="100%" fill="currentColor" className="text-neutral-100 dark:text-neutral-800 rounded-full" rx="6" />
          </svg>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.1 }}
            className={`absolute inset-y-0 left-0 ${barColor} rounded-full flex items-center justify-end pr-1`}
          >
             {/* Little knob inside the progress bar */}
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
