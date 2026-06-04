export default function Loading() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`h-40 rounded-3xl bg-zinc-900 border border-zinc-800 animate-pulse ${
              i === 0 ? "md:col-span-2 min-h-[160px]" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
