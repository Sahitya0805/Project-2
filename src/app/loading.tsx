export default function Loading() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block w-[240px] shrink-0 border-r border-[var(--card-border)] bg-[var(--card)]" />
      <div className="flex-1 p-4 md:p-8">
        <div className="h-[200px] rounded-2xl bg-neutral-100 dark:bg-neutral-900 animate-pulse mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className={`h-[200px] rounded-2xl bg-neutral-100 dark:bg-neutral-900 animate-pulse ${i === 0 ? "xl:row-span-2 h-auto min-h-[200px]" : ""}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
