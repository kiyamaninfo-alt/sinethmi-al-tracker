export default function ScoreTables() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Table 1: Full Paper Analytics */}
      <div className="glass-panel-elevated p-4 rounded-2xl border border-white/5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon-violet" /> Full Paper සාමාන්‍ය ලකුණු විග්‍රහය (Analytics)
          </span>
          <span className="text-[10px] font-mono text-neon-violet bg-neon-violet/10 px-2 py-0.5 rounded border border-neon-violet/30">Median 96.0%</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 block uppercase font-mono">Count Avg (Paper Intervals)</span>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">Papers 3:</span> <span className="font-mono font-bold text-white">96.0%</span></div>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">Papers 7:</span> <span className="font-mono font-bold text-white">96.0%</span></div>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">Papers 14:</span> <span className="font-mono font-bold text-white">96.0%</span></div>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">සියලු Papers:</span> <span className="font-mono font-bold text-neon-cyan">96.0%</span></div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 block uppercase font-mono">Time Window Avg</span>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">දින 3:</span> <span className="font-mono font-bold text-white">96.0%</span></div>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">දින 7:</span> <span className="font-mono font-bold text-white">96.0%</span></div>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">දින 14:</span> <span className="font-mono font-bold text-white">96.0%</span></div>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">දින 30/60/90:</span> <span className="font-mono font-bold text-neon-violet">96.0%</span></div>
          </div>
        </div>
      </div>

      {/* Table 2: Unit Paper Analytics */}
      <div className="glass-panel-elevated p-4 rounded-2xl border border-white/5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon-emerald" /> Unit Paper සාමාන්‍ය ලකුණු විග්‍රහය (Analytics)
          </span>
          <span className="text-[10px] font-mono text-neon-emerald bg-neon-emerald/10 px-2 py-0.5 rounded border border-neon-emerald/30">Avg 88.4% (34 Papers)</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 block uppercase font-mono">Count Avg (Paper Intervals)</span>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">Papers 3:</span> <span className="font-mono font-bold text-white">98.0%</span></div>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">Papers 7:</span> <span className="font-mono font-bold text-white">94.5%</span></div>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">Papers 14:</span> <span className="font-mono font-bold text-white">91.2%</span></div>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">සියලු Papers:</span> <span className="font-mono font-bold text-neon-emerald">88.4%</span></div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 block uppercase font-mono">Time Window Avg</span>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">දින 3:</span> <span className="font-mono font-bold text-white">98.0%</span></div>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">දින 7:</span> <span className="font-mono font-bold text-white">95.0%</span></div>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">දින 14:</span> <span className="font-mono font-bold text-white">92.4%</span></div>
            <div className="flex justify-between text-[11px]"><span className="text-slate-400">දින 30/60/90:</span> <span className="font-mono font-bold text-neon-cyan">88.4%</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
