"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";
import { Course } from "@/types/course";
import { User, Bell, Shield, Key } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function BentoGrid({ courses }: { courses: Course[] }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center relative overflow-hidden bg-[var(--background)]">
        <div className="fixed inset-0 bg-grain pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[var(--accent)]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full max-w-md p-8 rounded-3xl border border-[var(--card-border)] bg-[var(--card)]/80 backdrop-blur-xl shadow-2xl"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
            <Key size={32} className="text-[var(--accent)]" />
          </div>
          <h1 className="text-3xl font-black text-center text-white mb-2 tracking-tight">Welcome Back</h1>
          <p className="text-center text-[var(--muted)] text-sm mb-8">Sign in to your learning dashboard</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[var(--muted)] uppercase tracking-wider mb-2">Email</label>
              <input type="email" disabled placeholder="student@example.com" className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[var(--accent)] transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[var(--muted)] uppercase tracking-wider mb-2">Password</label>
              <input type="password" disabled placeholder="••••••••" className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-[var(--accent)] transition-colors" />
            </div>
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="w-full py-3.5 mt-4 bg-[var(--accent)] text-white font-black rounded-xl hover:bg-[var(--accent)]/90 transition-colors shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:scale-[1.02] active:scale-[0.98] duration-200"
            >
              Sign In to Dashboard
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen relative overflow-hidden bg-[var(--background)]">
      <div className="fixed inset-0 bg-grain pointer-events-none z-0" />

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={() => setIsLoggedIn(false)} />

      <main className="flex-1 min-w-0 pb-24 md:pb-0 relative z-10">
        <div className="p-4 md:p-6 lg:p-10 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                variants={stagger}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="space-y-4 md:space-y-6"
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } } }}>
                  <HeroTile />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } } }}
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
                  <h1 className="text-4xl font-black tracking-tight text-white">Course Library</h1>
                  <p className="text-sm font-medium text-[var(--muted)] mt-2">
                    <strong className="text-[var(--accent)]">{courses.length} courses</strong> active in your curriculum.
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                  {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
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
                className="max-w-3xl"
              >
                <h1 className="text-4xl font-black tracking-tight text-white mb-8">Settings</h1>

                <div className="space-y-6">
                  <section className="relative rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 lg:p-8 overflow-hidden group glow-on-hover">
                    <div className="bg-grain rounded-2xl absolute inset-0 pointer-events-none" />
                    <div className="relative z-10 flex items-center gap-6">
                      <div className="w-20 h-20 rounded-2xl bg-neutral-900 border border-neutral-800 text-[var(--accent)] flex items-center justify-center font-black text-3xl shadow-lg shrink-0">S</div>
                      <div className="flex-1">
                        <p className="font-black text-2xl text-white mb-1">Sahitya</p>
                        <p className="text-sm font-semibold text-[var(--muted)] mb-4">Student ID: #908412</p>
                        <button className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors">
                          Edit Profile
                        </button>
                      </div>
                    </div>
                  </section>

                  <section className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 lg:p-8 relative overflow-hidden">
                    <div className="bg-grain rounded-2xl absolute inset-0 pointer-events-none" />
                    <h3 className="font-bold text-lg text-white mb-6 relative z-10 flex items-center gap-3"><Bell size={20} className="text-[var(--accent)]" /> Notifications</h3>
                    <div className="space-y-5 relative z-10">
                      {[
                        { label: "Course Announcements", desc: "Critical updates regarding your enrolled modules.", on: true },
                        { label: "Weekly Progress Report", desc: "Automated summary of your streak and hours.", on: false },
                        { label: "Achievement Alerts", desc: "Instant notifications for milestones and badges.", on: true },
                      ].map((pref) => (
                        <div key={pref.label} className="flex items-center justify-between pb-5 border-b border-neutral-900 last:border-0 last:pb-0">
                          <div>
                            <p className="text-sm font-bold text-white mb-1">{pref.label}</p>
                            <p className="text-xs font-medium text-[var(--muted)]">{pref.desc}</p>
                          </div>
                          <div className={`w-12 h-6 rounded-full relative cursor-pointer border border-neutral-800 transition-colors ${pref.on ? "bg-[var(--accent)] border-[var(--accent)] shadow-[0_0_10px_-2px_rgba(59,130,246,0.5)]" : "bg-neutral-900"}`}>
                            <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${pref.on ? "left-[26px]" : "left-[3px] bg-neutral-500"}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  
                  <section className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 lg:p-8 relative overflow-hidden">
                    <div className="bg-grain rounded-2xl absolute inset-0 pointer-events-none" />
                    <h3 className="font-bold text-lg text-white mb-6 relative z-10 flex items-center gap-3"><Shield size={20} className="text-red-400" /> Security</h3>
                    <div className="relative z-10 flex items-center justify-between">
                       <div>
                          <p className="text-sm font-bold text-white mb-1">Active Sessions</p>
                          <p className="text-xs font-medium text-[var(--muted)]">You are currently logged in on 1 device.</p>
                       </div>
                       <button onClick={() => setIsLoggedIn(false)} className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-colors">
                          Log out of all devices
                        </button>
                    </div>
                  </section>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
