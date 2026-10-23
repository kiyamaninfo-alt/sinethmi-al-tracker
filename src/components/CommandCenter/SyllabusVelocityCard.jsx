export default function SyllabusVelocityCard({ track }) {
  return (
    <div className={`glass-panel-elevated p-5 rounded-2xl border ${track.borderClass} transition relative overflow-hidden group`}>
      <div className="flex items-center justify-between mb-4">
        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${track.colorClass}`}>
          {track.name}
        </span>
        <span className="text-xs font-mono text-slate-400">{track.unitsLabel}</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-24 h-24 shrink-0">
          <svg className="w-full h-full transform -rotate-90" style={{ width: '100%', height: '100%' }} viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
            <circle cx="50" cy="50" fill="none" r="40" stroke={track.stroke} strokeDasharray="251.2" strokeDashoffset={track.offset} strokeLinecap="round" strokeWidth="8" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-black font-mono text-white">{track.pct}%</span>
            <span className="text-[9px] text-slate-400 uppercase">Done</span>
          </div>
        </div>
        <div className="space-y-1.5 text-right w-full">
          <div className="text-xs text-slate-300">ඉතිරි: <strong className="text-white">{track.remain}</strong></div>
          <div className="text-[11px] font-mono text-slate-300">වේගය: {track.vel}</div>
          <div className={`inline-flex items-center gap-1 text-[10px] font-semibold border px-2 py-0.5 rounded-full mt-1 ${track.colorClass}`}>
            <span>🎯</span> {track.target}
          </div>
        </div>
      </div>
    </div>
  );
}
