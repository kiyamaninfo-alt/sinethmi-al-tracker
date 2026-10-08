export default function SyllabusTrackCard({ track }) {
  return (
    <div className={`bg-[#0e162a] rounded-xl p-3.5 border ${track.border} flex items-center gap-4 relative overflow-hidden`}>
      <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" fill="none" r="32" stroke="#172238" strokeWidth="7" />
          <circle
            className={`chart-glow ${track.textColor}`}
            cx="40" cy="40" fill="none" r="32"
            stroke={track.stroke}
            strokeDasharray="201"
            strokeDashoffset={track.offset}
            strokeLinecap="round"
            strokeWidth="7"
          />
        </svg>
        <div className="absolute text-center">
          <span className={`text-sm font-black ${track.textColor}`}>{track.pct}</span>
          <div className="text-[7.5px] text-slate-400 font-semibold uppercase">Done</div>
        </div>
      </div>

      <div className="space-y-1 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${track.dotColor}`} />
            {track.subject}
          </span>
          <span className={`text-[10px] font-mono ${track.unitColor}`}>{track.units}</span>
        </div>

        <div className="grid grid-cols-4 gap-1 py-1">
          {track.steps.map((stepClass, idx) => (
            <div key={idx} className={`h-1.5 rounded-full ${stepClass}`} />
          ))}
        </div>

        <div className="text-[10px] text-slate-400 flex items-center justify-between font-mono">
          <span>{track.projected}</span>
          <span className={`${track.textColor} font-bold`}>{track.ahead}</span>
        </div>
      </div>
    </div>
  );
}
