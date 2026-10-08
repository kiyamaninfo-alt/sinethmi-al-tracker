export default function SubjectProgressCard({ s }) {
  return (
    <div className={`glass-card p-4 rounded-xl border ${s.border} relative overflow-hidden flex flex-col justify-between`}>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded text-[11px] font-black border ${s.tagBg}`}>{s.tag}</span>
            <span className="text-xs text-slate-400">{s.sub}</span>
          </div>
          <span className={`text-lg font-black ${s.text}`}>{s.pct}</span>
        </div>
        <p className="text-xs font-medium text-slate-300 mt-2">{s.name}</p>
        <div className="grid grid-cols-3 gap-2 text-center my-4 py-2 rounded-lg bg-obsidian-surface border border-obsidian-border text-xs">
          <div><div className="text-[10px] text-slate-400">කාලය</div><div className="font-bold text-white">{s.time}</div></div>
          <div><div className="text-[10px] text-slate-400">සැසි</div><div className="font-bold text-white">{s.sessions}</div></div>
          <div><div className="text-[10px] text-slate-400">ප්‍රගතිය</div><div className={`font-bold ${s.text}`}>{s.units}</div></div>
        </div>
      </div>
      <div className="space-y-2 pt-2 border-t border-slate-800">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-400">ඉලක්ක ප්‍රගතිය: <strong className="text-slate-200">{s.pct} Coverage</strong></span>
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">In Progress ⏳</span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className={`${s.bar} h-full rounded-full`} style={{ width: s.width }} />
        </div>
        <div className="text-[10px] text-slate-500 text-right">{s.benchmark}</div>
      </div>
    </div>
  );
}
