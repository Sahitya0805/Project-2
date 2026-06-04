"use client";

import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ActivityTile() {
  return (
    <motion.article 
      variants={item}
      className="p-6 lg:p-8 rounded-3xl bg-zinc-900 border border-zinc-800/60 h-full flex flex-col justify-between group"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-1">Learning Activity</h3>
        <p className="text-zinc-500 text-sm">Contributions in the last 30 days</p>
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {Array.from({ length: 35 }).map((_, i) => {
          // Generate deterministic pseudo-random heights and colors for the graph
          const randomLevel = Math.floor(Math.abs(Math.sin(i * 12.5)) * 4); 
          const colors = [
            "bg-zinc-950 border-zinc-800/50",
            "bg-purple-900/40 border-purple-500/20",
            "bg-purple-700/60 border-purple-500/40",
            "bg-purple-500 border-purple-400",
          ];
          
          return (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.02, type: "spring" }}
              key={i}
              className={`w-[14px] h-[14px] rounded-[3px] border ${colors[randomLevel]} hover:scale-125 hover:border-white transition-transform cursor-pointer`}
              title={`Activity level ${randomLevel}`}
            />
          );
        })}
      </div>
      
      <div className="mt-8 flex justify-between items-center text-xs font-medium text-zinc-500">
        <span>Less</span>
        <div className="flex gap-[3px]">
          <div className="w-[12px] h-[12px] rounded-[2px] bg-zinc-950 border border-zinc-800/50" />
          <div className="w-[12px] h-[12px] rounded-[2px] bg-purple-900/40 border border-purple-500/20" />
          <div className="w-[12px] h-[12px] rounded-[2px] bg-purple-700/60 border border-purple-500/40" />
          <div className="w-[12px] h-[12px] rounded-[2px] bg-purple-500 border border-purple-400" />
        </div>
        <span>More</span>
      </div>
    </motion.article>
  );
}
