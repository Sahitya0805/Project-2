"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Code, Rocket, Network, FileCode, LucideIcon, ChevronRight } from "lucide-react";
import { Course } from "@/types/course";
import { MouseEvent } from "react";

const icons: Record<string, LucideIcon> = { Code, Rocket, Network, FileCode };

const iconColors: Record<string, { text: string; bg: string; glow: string }> = {
  Code:     { text: "text-violet-500", bg: "bg-violet-500/10", glow: "rgba(139,92,246,0.5)" },
  Rocket:   { text: "text-cyan-500",   bg: "bg-cyan-500/10",   glow: "rgba(6,182,212,0.5)"  },
  Network:  { text: "text-indigo-500", bg: "bg-indigo-500/10", glow: "rgba(99,102,241,0.5)" },
  FileCode: { text: "text-fuchsia-500",bg: "bg-fuchsia-500/10",glow: "rgba(217,70,239,0.5)" },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 280, damping: 22 },
  },
};

export default function CourseCard({ course }: { course: Course }) {
  const Icon = icons[course.icon_name] || Code;
  const color = iconColors[course.icon_name] || iconColors.Code;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 500, damping: 35 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 500, damping: 35 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    rotateX.set(((clientY - top) / height - 0.5) * -20);
    rotateY.set(((clientX - left) / width - 0.5) * 20);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const progressRing = 2 * Math.PI * 22;
  const progressOffset = progressRing - (course.progress / 100) * progressRing;

  return (
    <motion.article
      variants={item}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative rounded-3xl p-6 h-full flex flex-col bg-white/60 dark:bg-white/[0.03] backdrop-blur-2xl border border-zinc-200/80 dark:border-white/[0.06] shadow-xl shadow-zinc-200/30 dark:shadow-black/30 overflow-hidden group z-10 hover:z-50 cursor-pointer"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`radial-gradient(350px at ${mouseX}px ${mouseY}px, rgba(139,92,246,0.12), transparent 80%)`,
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div style={{ transform: "translateZ(40px)" }} className="flex items-start justify-between mb-6">
        <div className={`w-12 h-12 rounded-2xl ${color.bg} flex items-center justify-center border border-white/10 dark:border-white/5 shadow-lg`}>
          <Icon size={22} strokeWidth={1.75} className={color.text} />
        </div>

        <div className="relative w-12 h-12" style={{ transform: "translateZ(20px)" }}>
          <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="3" className="text-zinc-200 dark:text-white/5" />
            <motion.circle
              cx="24" cy="24" r="22" fill="none" strokeWidth="3"
              stroke={`url(#grad-${course.id})`}
              strokeLinecap="round"
              strokeDasharray={progressRing}
              initial={{ strokeDashoffset: progressRing }}
              animate={{ strokeDashoffset: progressOffset }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
            <defs>
              <linearGradient id={`grad-${course.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] font-black text-zinc-700 dark:text-zinc-300">{course.progress}%</span>
          </div>
        </div>
      </div>

      <div style={{ transform: "translateZ(50px)" }} className="flex-1">
        <h3 className="text-base font-black text-zinc-900 dark:text-white mb-1.5 leading-tight line-clamp-2">{course.title}</h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-500 font-medium mb-5">
          {course.progress < 50 ? "Just started" : course.progress < 80 ? "Making progress" : "Almost done"} · {Math.round((course.progress / 100) * 24)} hrs
        </p>

        <div className="space-y-2">
          <div className="h-1.5 w-full bg-zinc-200/80 dark:bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="h-full rounded-full relative"
              style={{ background: "linear-gradient(90deg, #7c3aed, #6366f1, #818cf8)" }}
            >
              <motion.div
                animate={{ x: ["-100%", "400%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                className="absolute inset-y-0 w-16 bg-white/50 blur-[2px] skew-x-[-20deg]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="flex items-center justify-between mt-5 pt-4 border-t border-zinc-200/60 dark:border-white/5">
        <span className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-600">Continue</span>
        <motion.div
          whileHover={{ x: 4 }}
          className={`w-7 h-7 rounded-full ${color.bg} flex items-center justify-center border border-white/10`}
        >
          <ChevronRight size={14} className={color.text} />
        </motion.div>
      </div>
    </motion.article>
  );
}
