export default function RadialGaugeCard({ gauge }) {
  return (
    <div className="glass-card rounded-2xl p-4 flex items-center justify-between relative overflow-hidden group">
      <div className={`absolute -right-6 -bottom-6 w-28 h-28 ${gauge.glowBg} rounded-full blur-2xl group-hover:opacity-100 transition`} />
      <div className="space-y-1 z-10">
        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${gauge.dotColor}`} />
          {gauge.title}
        </span>
        <div className="flex items-baseline gap-1.5">
          <span className={`text-3xl font-black ${gauge.valColor || 'text-white'} tracking-tight`}>{gauge.val}</span>
          <span className={`text-xs ${gauge.unitColor} font-bold`}>{gauge.unit}</span>
        </div>
        <div className="text-[11px] text-slate-400 flex items-center gap-1">
          {gauge.trendIcon && <span className={`material-symbols-outlined text-[14px] ${gauge.trendColor}`}>{gauge.trendIcon}</span>}
          {gauge.trendText && <span className={`${gauge.trendColor} font-medium`}>{gauge.trendText}</span>}
          <span className="text-slate-500">{gauge.subText}</span>
        </div>
      </div>

      <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center z-10">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" fill="none" r="32" stroke="#1f293d" strokeWidth="6" />
          <circle
            className={`chart-glow ${gauge.strokeClass}`}
            cx="40" cy="40" fill="none" r="32"
            stroke={gauge.stroke}
            strokeDasharray="201"
            strokeDashoffset={gauge.offset}
            strokeLinecap="round"
            strokeWidth="6"
          />
        </svg>
        <div className="absolute text-center">
          {gauge.centerIcon ? (
            <span className={`material-symbols-outlined ${gauge.centerColor} text-[18px]`}>{gauge.centerIcon}</span>
          ) : (
            <span className={`text-xs font-black ${gauge.centerColor}`}>{gauge.centerText}</span>
          )}
          <div className={`text-[8px] ${gauge.centerSubColor} uppercase font-semibold`}>{gauge.centerSub}</div>
        </div>
      </div>
    </div>
  );
}
