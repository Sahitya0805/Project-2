"use client";

import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { LayoutDashboard, BookOpen, Settings, LogOut, Flame } from "lucide-react";

const navItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "courses", icon: BookOpen, label: "Courses" },
  { id: "settings", icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  return (
    <aside className="fixed bottom-0 w-full lg:sticky lg:top-0 lg:h-screen lg:w-[250px] bg-zinc-950 border-t lg:border-t-0 lg:border-r border-zinc-800 p-4 z-50 flex flex-col">
      <div className="hidden lg:flex items-center gap-3 mb-10 px-4 mt-4">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
          <Flame size={20} className="text-white" />
        </div>
        <span className="font-bold text-xl text-white tracking-tight">LearnUI</span>
      </div>
      
      <nav className="flex lg:flex-col gap-2 justify-around lg:justify-start w-full">
        <LayoutGroup>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`relative flex flex-col lg:flex-row items-center gap-1 lg:gap-3 px-4 py-3 lg:py-3 rounded-xl transition-colors ${
                active === item.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {active === item.id && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-zinc-900 rounded-xl border border-zinc-800/50"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon size={22} className="relative z-10" />
              <span className="relative z-10 text-[10px] lg:text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </LayoutGroup>
      </nav>
      
      <div className="hidden lg:block mt-auto pb-4">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-zinc-500 hover:text-zinc-300 transition-colors">
          <LogOut size={22} />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}
