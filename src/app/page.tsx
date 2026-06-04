import BentoGrid from "@/components/BentoGrid";
import { supabase } from "@/lib/supabase";

export const revalidate = 0;

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error || !courses || courses.length === 0) {
    const mockCourses = [
      { id: "1", title: "Advanced React Patterns", progress: 75, icon_name: "Code" },
      { id: "2", title: "Next.js Mastery", progress: 60, icon_name: "Rocket" },
      { id: "3", title: "System Design", progress: 40, icon_name: "Network" },
      { id: "4", title: "TypeScript Deep Dive", progress: 85, icon_name: "FileCode" },
      { id: "5", title: "Framer Motion Physics", progress: 92, icon_name: "Code" },
      { id: "6", title: "Tailwind v4 Secrets", progress: 30, icon_name: "Rocket" },
    ];
    
    return <BentoGrid courses={mockCourses} />;
  }

  return <BentoGrid courses={courses} />;
}
