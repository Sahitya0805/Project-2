import BentoGrid from "@/components/BentoGrid";
import { supabase } from "@/lib/supabase";

export const revalidate = 0;

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-red-400">Failed to load courses</h2>
          <p className="text-zinc-400">Please ensure Supabase credentials are configured in .env</p>
        </div>
      </div>
    );
  }

  return <BentoGrid courses={courses || []} />;
}
