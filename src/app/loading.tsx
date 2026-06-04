export default function Loading() {
  return (
    <div className="flex min-h-screen relative overflow-hidden bg-[var(--background)]">
      <div className="fixed inset-0 bg-grain pointer-events-none z-0" />
      
      {/* Skeleton Sidebar */}
      <aside className="hidden md:flex flex-col sticky top-0 h-screen w-[80px] lg:w-[240px] shrink-0 border-r border-[var(--card-border)] bg-[var(--card)] p-4 z-50">
        <div className="w-10 h-10 rounded-xl bg-neutral-900 animate-pulse mb-10 mt-4 mx-auto lg:mx-0" />
        <div className="flex flex-col gap-4">
          <div className="h-10 bg-neutral-900 rounded-xl animate-pulse" />
          <div className="h-10 bg-neutral-900 rounded-xl animate-pulse" />
          <div className="h-10 bg-neutral-900 rounded-xl animate-pulse" />
        </div>
      </aside>

      <main className="flex-1 min-w-0 pb-24 md:pb-0 relative z-10">
        <div className="p-4 md:p-6 lg:p-10 max-w-7xl mx-auto space-y-4 md:space-y-6">
          <div className="h-[250px] rounded-2xl bg-[var(--card)] border border-[var(--card-border)] animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            <div className="md:col-span-2 xl:col-span-1 xl:row-span-2 h-[300px] xl:h-auto rounded-2xl bg-[var(--card)] border border-[var(--card-border)] animate-pulse" />
            <div className="h-[200px] rounded-2xl bg-[var(--card)] border border-[var(--card-border)] animate-pulse" />
            <div className="h-[200px] rounded-2xl bg-[var(--card)] border border-[var(--card-border)] animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  );
}
