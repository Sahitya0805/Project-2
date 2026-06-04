"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)] p-4 text-center">
      <div className="bg-grain absolute inset-0 pointer-events-none" />
      <div className="relative z-10 max-w-md p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-2xl">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
          <AlertCircle size={32} />
        </div>
        <h2 className="text-2xl font-black text-white mb-2">Connection Failed</h2>
        <p className="text-sm text-[var(--muted)] mb-8">
          We couldn't connect to the database to fetch your courses. Please check your connection and ensure your Supabase credentials are valid.
        </p>
        <button
          onClick={() => reset()}
          className="w-full py-3 px-4 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-xl hover:scale-105 transition-transform"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
