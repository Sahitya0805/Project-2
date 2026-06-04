"use client";

import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";
import { Course } from "@/types/course";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function BentoGrid({ courses }: { courses: Course[] }) {
  return (
    <main className="grid lg:grid-cols-[250px_1fr] min-h-screen bg-black text-zinc-100 font-sans selection:bg-purple-500/30">
      <Sidebar />
      
      <section className="p-4 md:p-8 pb-28 lg:pb-8 w-full max-w-7xl mx-auto overflow-y-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-min"
        >
          {/* Hero Tile spanning full width on mobile, 2 columns on tablet/desktop */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="md:col-span-2"
          >
            <HeroTile />
          </motion.div>

          {/* Activity Tile */}
          <div className="md:col-span-2 lg:col-span-1 min-h-[220px]">
            <ActivityTile />
          </div>

          {/* Course Cards */}
          {courses.map((course) => (
            <div key={course.id} className="min-h-[240px]">
              <CourseCard course={course} />
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
