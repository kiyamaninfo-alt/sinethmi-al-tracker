export default function HeroFloatingCard() {
  return (
    <div className="relative rounded-3xl bg-slate-900/90 border border-cyan-500/30 p-5 sm:p-6 shadow-2xl backdrop-blur-2xl space-y-4 max-w-md w-full mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono font-bold text-slate-200">Live Cognitive Telemetry</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
          A/L Target 2028
        </span>
      </div>

      <div className="bg-slate-950/70 rounded-2xl p-4 border border-white/5 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-300 font-medium">ICT • Computer Systems</span>
          <span className="font-mono text-emerald-400 font-bold">92% Retention</span>
        </div>
        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-[92%]" />
        </div>
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Spaced Interval: Next Review in 48h</span>
          <span className="text-cyan-300">Box 4</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-1">
        <div className="p-3 rounded-xl bg-surface-container/60 border border-white/5 space-y-1">
          <span className="text-[10px] text-slate-400 font-mono block">Active Protocol</span>
          <span className="text-xs font-bold text-white font-mono">50m Study / 10m Rest</span>
        </div>
        <div className="p-3 rounded-xl bg-surface-container/60 border border-white/5 space-y-1">
          <span className="text-[10px] text-slate-400 font-mono block">Cognitive Gap</span>
          <span className="text-xs font-bold text-amber-400 font-mono">2 Sub-units Queued</span>
        </div>
      </div>
    </div>
  );
}
