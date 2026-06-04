"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";
import { Course } from "@/types/course";
import { Search, Bell, SlidersHorizontal } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function TopBar() {
  return (
    <div className="flex items-center gap-3 mb-6 lg:mb-8">
      <div className="relative flex-1 max-w-sm">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-600" />
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.06] text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/30 backdrop-blur-xl transition-all"
        />
      </div>
      <button className="w-10 h-10 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.06] backdrop-blur-xl flex items-center justify-center text-zinc-500 dark:text-zinc-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
        <SlidersHorizontal size={16} />
      </button>
      <button className="relative w-10 h-10 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.06] backdrop-blur-xl flex items-center justify-center text-zinc-500 dark:text-zinc-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
        <Bell size={16} />
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-violet-500 border-2 border-background" />
      </button>
    </div>
  );
}

export default function BentoGrid({ courses }: { courses: Course[] }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <main className="flex min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-violet-500/5 dark:bg-violet-500/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/5 blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/[0.02] dark:bg-cyan-500/[0.02] blur-[120px]" />
      </div>

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 relative z-10 min-w-0">
        <section className="p-4 md:p-6 lg:p-8 pb-28 lg:pb-8 w-full max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -15, transition: { duration: 0.15 } }}
              >
                <TopBar />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 auto-rows-min">
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                    className="md:col-span-2"
                  >
                    <HeroTile />
                  </motion.div>

                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                    className="md:col-span-2 xl:col-span-1"
                  >
                    <ActivityTile />
                  </motion.div>

                  {courses.map((course) => (
                    <div key={course.id} className="min-h-[240px]">
                      <CourseCard course={course} />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "courses" && (
              <motion.div
                key="courses"
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -15, transition: { duration: 0.15 } }}
              >
                <TopBar />
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  className="mb-6"
                >
                  <h1 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white">All Courses</h1>
                  <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-1 font-medium">{courses.length * 2} courses available</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
                  {courses.map((course) => (
                    <div key={course.id} className="min-h-[240px]">
                      <CourseCard course={course} />
                    </div>
                  ))}
                  {courses.map((course) => (
                    <div key={`${course.id}-b`} className="min-h-[240px]">
                      <CourseCard course={{ ...course, id: `${course.id}-b`, title: `${course.title} — Advanced`, progress: Math.max(0, course.progress - 45) }} />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "settings" && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15, transition: { duration: 0.15 } }}
                className="max-w-2xl"
              >
                <div className="mb-8">
                  <h1 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white">Settings</h1>
                  <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-1 font-medium">Manage your profile and preferences</p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl p-6 bg-white/60 dark:bg-white/[0.03] backdrop-blur-2xl border border-zinc-200/80 dark:border-white/[0.06] shadow-xl shadow-zinc-200/40 dark:shadow-black/30">
                    <h3 className="text-sm font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-widest">Profile</h3>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-violet-500/30">S</div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-background flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-zinc-900 dark:text-white">Sahitya</p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-500">sahitya@example.com</p>
                      </div>
                      <button className="ml-auto px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-bold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-500/20">
                        Edit
                      </button>
                    </div>
                  </div>

                  <div className="rounded-3xl p-6 bg-white/60 dark:bg-white/[0.03] backdrop-blur-2xl border border-zinc-200/80 dark:border-white/[0.06] shadow-xl shadow-zinc-200/40 dark:shadow-black/30">
                    <h3 className="text-sm font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-widest">Preferences</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Email Notifications", desc: "Receive course updates via email", on: true },
                        { label: "Weekly Report", desc: "Get a learning summary every Monday", on: false },
                        { label: "Achievement Alerts", desc: "Notify me when I earn badges", on: true },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between py-1">
                          <div>
                            <p className="text-sm font-semibold text-zinc-900 dark:text-white">{item.label}</p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">{item.desc}</p>
                          </div>
                          <div className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${item.on ? "bg-violet-600" : "bg-zinc-200 dark:bg-white/10"}`}>
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${item.on ? "left-5" : "left-1"}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}
