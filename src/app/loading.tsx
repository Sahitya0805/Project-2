export default function Loading() {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden lg:flex w-[260px] shrink-0 m-3">
        <div className="w-full rounded-3xl bg-white/60 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.06] animate-pulse" />
      </div>
      <div className="flex-1 p-4 md:p-8">
        <div className="h-10 w-64 rounded-2xl bg-zinc-200/60 dark:bg-white/5 animate-pulse mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <div className="md:col-span-2 h-[300px] rounded-3xl bg-zinc-200/60 dark:bg-white/5 animate-pulse" />
          <div className="h-[300px] rounded-3xl bg-zinc-200/60 dark:bg-white/5 animate-pulse" />
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-[240px] rounded-3xl bg-zinc-200/60 dark:bg-white/5 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
