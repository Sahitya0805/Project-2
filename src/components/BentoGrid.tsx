"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";
import { Course } from "@/types/course";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function BentoGrid({ courses }: { courses: Course[] }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen relative overflow-hidden">
      {/* Global SVG Background - Dotted "Blueprint" pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] dark:opacity-[0.15] z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-[var(--muted)]" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 min-w-0 pb-24 lg:pb-0 relative z-10">
        <div className="p-4 md:p-6 lg:p-10 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                variants={stagger}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="space-y-6"
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                  <HeroTile />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                    className="md:col-span-2 xl:col-span-1 xl:row-span-2"
                  >
                    <ActivityTile />
                  </motion.div>

                  {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "courses" && (
              <motion.div
                key="courses"
                variants={stagger}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} className="mb-8">
                  <h1 className="text-4xl font-black tracking-tight">Course Library</h1>
                  <p className="text-base font-medium text-[var(--muted)] mt-2">
                    <span className="text-[var(--foreground)] font-bold">{courses.length * 2}</span> courses currently available for you.
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                  {courses.map((course) => (
                    <CourseCard
                      key={`${course.id}-adv`}
                      course={{ ...course, id: `${course.id}-adv`, title: `${course.title} — Masterclass`, progress: Math.max(0, course.progress - 50) }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "settings" && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="max-w-2xl"
              >
                <h1 className="text-4xl font-black tracking-tight mb-8">Account Settings</h1>

                <div className="space-y-6">
                  <div className="relative rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card)] p-6 lg:p-8 overflow-hidden group">
                    <h3 className="font-black text-lg mb-6 relative z-10">Public Profile</h3>
                    <div className="flex items-center gap-6 relative z-10">
                      <div className="w-16 h-16 rounded-[16px] bg-[var(--accent)] text-white flex items-center justify-center font-black text-2xl transform -rotate-6 group-hover:rotate-0 transition-transform shadow-lg">S</div>
                      <div className="flex-1">
                        <p className="font-black text-xl mb-1">Sahitya</p>
                        <p className="text-sm font-semibold text-[var(--muted)]">sahitya@example.com</p>
                      </div>
                      <button className="px-5 py-2.5 text-sm font-bold rounded-xl border-2 border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] hover:bg-transparent hover:text-[var(--foreground)] transition-all">
                        Edit Profile
                      </button>
                    </div>
                  </div>

                  <div className="rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card)] p-6 lg:p-8">
                    <h3 className="font-black text-lg mb-6">Notifications</h3>
                    <div className="space-y-5">
                      {[
                        { label: "Email updates", desc: "Course progress and reminders", on: true },
                        { label: "Weekly digest", desc: "Summary every Monday", on: false },
                        { label: "Achievement alerts", desc: "Badge and milestone notifications", on: true },
                      ].map((pref) => (
                        <div key={pref.label} className="flex items-center justify-between pb-5 border-b border-dashed border-[var(--card-border)] last:border-0 last:pb-0">
                          <div>
                            <p className="text-base font-bold mb-1">{pref.label}</p>
                            <p className="text-sm font-medium text-[var(--muted)]">{pref.desc}</p>
                          </div>
                          <div className={`w-12 h-6 rounded-full relative cursor-pointer border-2 border-[var(--foreground)] ${pref.on ? "bg-[var(--foreground)]" : "bg-transparent"}`}>
                            <div className={`absolute top-0.5 w-4 h-4 bg-[var(--background)] rounded-full transition-all ${pref.on ? "left-[22px]" : "left-[2px] bg-[var(--foreground)]"}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
