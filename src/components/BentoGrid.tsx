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
      <div className="fixed inset-0 bg-grain pointer-events-none z-0" />

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

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
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                  {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
