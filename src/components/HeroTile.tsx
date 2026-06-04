export default function HeroTile() {
  return (
    <article className="rounded-3xl p-6 lg:p-8 bg-zinc-900 border border-zinc-800/60 flex flex-col justify-center h-full min-h-[180px] relative overflow-hidden group">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl transition-opacity duration-700 group-hover:bg-purple-500/30" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transition-opacity duration-700 group-hover:bg-blue-500/20" />
      
      <div className="relative z-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">Welcome back, Sahitya</h1>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950/50 border border-zinc-800/50 backdrop-blur-md">
          <span className="text-orange-500 animate-pulse">🔥</span> 
          <span className="text-zinc-300 font-medium text-sm">12 Day Streak</span>
        </div>
      </div>
    </article>
  );
}
