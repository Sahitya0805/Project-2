"use client";

import { motion, LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";
import { LayoutDashboard, BookOpen, Settings, LogOut, Code2 } from "lucide-react";

const navItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "courses", icon: BookOpen, label: "Courses" },
  { id: "settings", icon: Settings, label: "Settings" },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {/* Desktop & Tablet Sidebar */}
      <aside className="hidden md:flex flex-col sticky top-0 h-screen w-[80px] lg:w-[240px] shrink-0 border-r border-[var(--card-border)] bg-[var(--card)] p-4 transition-all duration-300 z-50">
        <div className="flex items-center justify-center lg:justify-start gap-3 px-1 lg:px-3 mb-10 mt-4">
          <div className="w-10 h-10 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white shrink-0">
            <Code2 size={24} strokeWidth={2.5} />
          </div>
          <span className="hidden lg:block font-black text-xl tracking-tight">LearnUI</span>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          <LayoutGroup>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex items-center justify-center lg:justify-start gap-4 p-3 lg:px-4 lg:py-3 rounded-xl text-left w-full transition-colors group ${
                  activeTab === item.id
                    ? "text-white font-bold"
                    : "text-[var(--muted)] hover:text-white"
                }`}
                title={item.label} // Helpful for tablet view
              >
                {activeTab === item.id && (
                  <motion.div
                    layoutId="sidebar-active-tab"
                    className="absolute inset-0 rounded-xl bg-[var(--accent)] glow-on-hover shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <item.icon size={22} className="relative z-10 shrink-0" strokeWidth={activeTab === item.id ? 2.5 : 2} />
                <span className="relative z-10 hidden lg:block text-[15px]">{item.label}</span>
              </button>
            ))}
          </LayoutGroup>
        </nav>

        <nav className="flex flex-col gap-2 pt-4 border-t border-[var(--card-border)] mt-auto">
          <button className="flex items-center justify-center lg:justify-start gap-4 p-3 lg:px-4 lg:py-3 rounded-xl text-[var(--muted)] hover:text-red-400 transition-colors text-left w-full group" title="Log out">
            <LogOut size={22} className="shrink-0" />
            <span className="hidden lg:block text-[15px]">Log out</span>
          </button>
        </nav>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--card)]/80 backdrop-blur-md border-t border-[var(--card-border)] safe-area-pb">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors relative ${
                activeTab === item.id ? "text-[var(--accent)]" : "text-[var(--muted)]"
              }`}
            >
              <item.icon size={22} strokeWidth={activeTab === item.id ? 2.5 : 2} />
              <span className="text-[10px] font-bold">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
