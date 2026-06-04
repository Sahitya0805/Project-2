"use client";

import { motion } from "framer-motion";
import { Code, Rocket, Network, FileCode, LucideIcon } from "lucide-react";
import { Course } from "@/types/course";

const icons: Record<string, LucideIcon> = {
  Code,
  Rocket,
  Network,
  FileCode,
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function CourseCard({ course }: { course: Course }) {
  const Icon = icons[course.icon_name] || Code;

  return (
    <motion.article
      variants={item}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800/60 flex flex-col h-full relative overflow-hidden group shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800/50 flex items-center justify-center mb-6 shadow-inner text-purple-400 group-hover:text-purple-300 transition-colors">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      
      <div className="mt-auto relative z-10">
        <h3 className="text-lg font-semibold text-white mb-4 line-clamp-1">{course.title}</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm items-end">
            <span className="text-zinc-500 font-medium">Progress</span>
            <span className="text-white font-bold">{course.progress}%</span>
          </div>
          <div className="h-2.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50 shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)] relative"
            >
              <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 blur-[2px]" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
