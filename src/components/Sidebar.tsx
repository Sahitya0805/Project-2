"use client";

import { motion, LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";
import { LayoutDashboard, BookOpen, Settings, LogOut, Book, Sun, Moon, Zap } from "lucide-react";
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
      <aside className="hidden lg:flex flex-col lg:sticky lg:top-0 lg:h-screen lg:w-[260px] z-50">
        <div className="flex flex-col h-full m-3 rounded-3xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-2xl border border-zinc-200/80 dark:border-white/[0.06] shadow-xl shadow-zinc-200/40 dark:shadow-black/40 p-5">
          
          <div className="flex items-center gap-3 mb-8 px-2 pt-2">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 opacity-20 blur-sm" />
              <div className="relative w-10 h-10 bg-zinc-950 dark:bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Book size={18} className="text-white dark:text-zinc-900" />
              </div>
            </div>
            <span className="font-bold text-lg text-zinc-900 dark:text-white tracking-tight">LearnUI</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-zinc-100/80 dark:bg-white/5 border border-zinc-200/60 dark:border-white/5 mb-6">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold shrink-0">S</div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white truncate leading-none mb-0.5">Sahitya</p>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-500 truncate">sahitya@example.com</p>
            </div>
            <div className="ml-auto flex items-center gap-1 shrink-0">
              <Zap size={12} className="text-amber-500" />
              <span className="text-[10px] font-bold text-amber-500">12</span>
            </div>
          </div>

          <p className="text-[10px] font-bold tracking-widest text-zinc-400 dark:text-zinc-600 uppercase px-3 mb-2">Menu</p>

          <nav className="flex flex-col gap-1 flex-1">
            <LayoutGroup>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 text-left w-full ${
                    activeTab === item.id
                      ? "text-white dark:text-white"
                      : "text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 hover:bg-zinc-100/60 dark:hover:bg-white/5"
                  }`}
                >
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/30"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <item.icon size={18} className="relative z-10 shrink-0" />
                  <span className="relative z-10 text-sm font-semibold">{item.label}</span>
                  {activeTab === item.id && (
                    <div className="ml-auto relative z-10 w-1.5 h-1.5 rounded-full bg-white/60" />
                  )}
                </button>
              ))}
            </LayoutGroup>
          </nav>

          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-zinc-200/60 dark:border-white/5">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center justify-between px-4 py-3 rounded-2xl bg-zinc-100/80 dark:bg-white/5 border border-zinc-200/60 dark:border-white/5 text-zinc-600 dark:text-zinc-400 hover:border-violet-300 dark:hover:border-violet-500/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  {theme === "dark" ? (
                    <Moon size={16} className="text-violet-400" />
                  ) : (
                    <Sun size={16} className="text-amber-500" />
                  )}
                  <span className="text-sm font-semibold">{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
                </div>
                <div className={`w-9 h-5 rounded-full transition-colors duration-300 relative ${theme === "dark" ? "bg-violet-600" : "bg-zinc-300"}`}>
                  <motion.div
                    animate={{ x: theme === "dark" ? 16 : 2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"
                  />
                </div>
              </button>
            )}
            <button className="flex items-center gap-3 px-4 py-3 rounded-2xl text-zinc-500 hover:text-red-500 dark:text-zinc-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-200">
              <LogOut size={16} />
              <span className="text-sm font-semibold">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="mx-3 mb-3 rounded-2xl bg-white/80 dark:bg-zinc-950/90 backdrop-blur-2xl border border-zinc-200/80 dark:border-white/10 shadow-xl shadow-black/20 px-2 py-2">
          <LayoutGroup>
            <div className="flex items-center justify-around">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex flex-col items-center gap-1 px-6 py-2.5 rounded-xl transition-all duration-200 ${
                    activeTab === item.id
                      ? "text-white"
                      : "text-zinc-400 dark:text-zinc-500"
                  }`}
                >
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="active-tab-mobile"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/30"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <item.icon size={20} className="relative z-10" />
                  <span className="relative z-10 text-[10px] font-bold">{item.label}</span>
                </button>
              ))}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex flex-col items-center gap-1 px-6 py-2.5 rounded-xl text-zinc-400 dark:text-zinc-500"
                >
                  {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
                  <span className="text-[10px] font-bold">Theme</span>
                </button>
              )}
            </div>
          </LayoutGroup>
        </div>
      </div>
    </>
  );
}
