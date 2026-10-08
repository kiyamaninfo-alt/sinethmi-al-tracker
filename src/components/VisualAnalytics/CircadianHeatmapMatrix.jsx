import { hourLabels, circadianDays, getBlockStyle } from './circadianMatrixData';

export default function CircadianHeatmapMatrix() {
  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-purple-400 text-[20px]">grid_view</span>
            <h3 className="text-sm font-extrabold text-white tracking-tight">24x7 Circadian Focus Heatmap</h3>
          </div>
          <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
            PEAK 13:00–17:00
          </span>
        </div>
        <p className="text-[11px] text-slate-400">පැය 24 අධ්‍යයන ඝනත්වය සහ Flow-State තීව්‍රතාව (All 7 Days × 24h Telemetry)</p>
      </div>

      <div className="overflow-x-auto custom-scrollbar my-2.5">
        <div className="min-w-[540px] space-y-1.5">
          <div className="grid grid-cols-[38px_repeat(24,1fr)] gap-1 text-[8px] font-mono text-slate-400 text-center items-center pb-0.5">
            <span className="text-left font-sans font-semibold text-slate-500">Day</span>
            {hourLabels.map((hr, idx) => (
              <span key={hr} className={idx >= 12 && idx <= 17 ? 'text-purple-400 font-bold' : ''}>{hr}</span>
            ))}
          </div>

          {circadianDays.map((cd) => (
            <div key={cd.day} className="grid grid-cols-[38px_repeat(24,1fr)] gap-1 items-center">
              <span className="text-[10px] font-bold text-slate-300">{cd.day}</span>
              {Array.from({ length: 24 }).map((_, h) => {
                const isFocus = cd.focusHours.includes(h);
                const isPeak = h >= cd.peakStart && h <= cd.peakEnd;
                return (
                  <div
                    key={h}
                    className={`h-4 rounded-[4px] transition ${getBlockStyle(cd.theme, h, isFocus, isPeak)}`}
                    title={`${cd.day} ${h}:00`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-3 border-t border-white/5 text-[11px] text-slate-400 gap-2">
        <div className="flex items-center gap-1.5 font-mono text-slate-400">
          <span>Rest</span>
          <div className="flex items-center gap-1">
            <span className="w-3.5 h-3 rounded bg-[#121c32]" />
            <span className="w-3.5 h-3 rounded bg-purple-900/50" />
            <span className="w-3.5 h-3 rounded bg-purple-700/70" />
            <span className="w-3.5 h-3 rounded bg-purple-600/90" />
            <span className="w-3.5 h-3 rounded bg-purple-500 shadow-[0_0_6px_#8B5CF6]" />
          </div>
          <span className="text-purple-300 font-bold">Ultra Flow</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px]">
          <span className="flex items-center gap-1 text-purple-300"><span className="w-2 h-2 rounded-full bg-purple-500" /> ET</span>
          <span className="flex items-center gap-1 text-cyan-300"><span className="w-2 h-2 rounded-full bg-cyan-400" /> SFT</span>
          <span className="flex items-center gap-1 text-emerald-300"><span className="w-2 h-2 rounded-full bg-emerald-500" /> ICT</span>
          <span className="text-amber-400 font-bold">• 13:00–17:00 Optimal Flow</span>
        </div>
      </div>
    </div>
  );
}
