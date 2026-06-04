"use client";

import { motion, LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";
import { LayoutDashboard, BookOpen, Settings, LogOut, BookMarked, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <aside className="hidden lg:flex flex-col sticky top-0 h-screen w-[240px] shrink-0 border-r border-[var(--card-border)] bg-[var(--card)] p-4">
        <div className="flex items-center gap-2.5 px-3 mb-8 mt-2">
          <BookMarked size={22} className="text-[var(--accent)]" />
          <span className="font-extrabold text-lg tracking-tight">LearnUI</span>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          <LayoutGroup>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-xl text-left w-full transition-all group ${
                  activeTab === item.id
                    ? "text-[var(--background)] font-black"
                    : "text-[var(--muted)] font-bold hover:text-[var(--foreground)]"
                }`}
              >
                {activeTab === item.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-xl bg-[var(--foreground)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <item.icon size={20} className={`relative z-10 ${activeTab !== item.id && "group-hover:scale-110 transition-transform"}`} strokeWidth={activeTab === item.id ? 2.5 : 2} />
                <span className="relative z-10 text-[15px]">{item.label}</span>
              </button>
            ))}
          </LayoutGroup>
        </nav>

        <div className="flex flex-col gap-1 pt-4 border-t border-[var(--card-border)]">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-left w-full"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              <span className="text-sm">{theme === "dark" ? "Light mode" : "Dark mode"}</span>
            </button>
          )}
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[var(--muted)] hover:text-red-500 transition-colors text-left w-full">
            <LogOut size={18} />
            <span className="text-sm">Log out</span>
          </button>
        </div>
      </aside>

      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[var(--card)] border-t border-[var(--card-border)]">
        <div className="flex items-center justify-around px-2 py-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "text-[var(--accent)]"
                  : "text-[var(--muted)]"
              }`}
            >
              <item.icon size={20} />
              <span className="text-[10px] font-semibold">{item.label}</span>
            </button>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex flex-col items-center gap-0.5 px-4 py-2 text-[var(--muted)]"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              <span className="text-[10px] font-semibold">Theme</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
