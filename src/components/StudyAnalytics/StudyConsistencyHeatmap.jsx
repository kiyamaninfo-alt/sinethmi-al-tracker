export default function StudyConsistencyHeatmap() {
  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct (Current)'];
  const dayLabels = ['M', 'W', 'F', 'S'];

  return (
    <section className="glass-card rounded-2xl p-5 border border-obsidian-border">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-obsidian-border">
        <div className="flex items-center gap-3">
          <span className="text-lg">🗓️</span>
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">
              Study Consistency Heatmap <span className="text-slate-400 font-normal text-sm">(අඛණ්ඩතා දර්ශකය)</span>
            </h2>
            <p className="text-xs text-slate-400">Historical telemetry of daily active study commitment</p>
          </div>
        </div>
        <div className="flex items-center bg-obsidian-surface p-1 rounded-xl border border-obsidian-border text-xs">
          {['3 Months', '6 Months', '1 Year'].map((p, i) => (
            <button key={p} type="button" className={`px-3 py-1 rounded-lg transition ${i === 1 ? 'text-white font-semibold bg-purple-600/70 border border-purple-400/30' : 'text-slate-400 hover:text-white'}`}>{p}</button>
          ))}
        </div>
      </div>

      <div className="pt-5 overflow-x-auto custom-scrollbar">
        <div className="min-w-[760px]">
          <div className="grid grid-cols-7 text-[11px] font-medium text-slate-400 mb-2 pl-6">
            {months.map((m, i) => (
              <div key={m} className={i === 6 ? 'text-purple-400 font-semibold' : ''}>{m}</div>
            ))}
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col justify-between text-[10px] text-slate-500 font-mono py-1 pr-1 select-none">
              {dayLabels.map((d) => <span key={d}>{d}</span>)}
            </div>

            <div className="grid grid-flow-col grid-rows-7 gap-1.5 flex-1">
              {Array.from({ length: 154 }).map((_, i) => (
                <div key={`dot-${i}`} className="w-3.5 h-3.5 rounded-sm bg-slate-800/30 border border-slate-700/10" />
              ))}
              <div className="w-3.5 h-3.5 rounded-sm bg-purple-500 shadow-[0_0_8px_#8B5CF6] border border-purple-300" title="Sun 4" />
              <div className="w-3.5 h-3.5 rounded-sm bg-purple-600 shadow-[0_0_8px_#8B5CF6] border border-purple-300" title="Mon 5" />
              <div className="w-3.5 h-3.5 rounded-sm bg-cyan-400 shadow-[0_0_10px_#06B6D4] border border-white ring-2 ring-cyan-400/40" title="Tue 6 Today" />
              <div className="w-3.5 h-3.5 rounded-sm bg-slate-800/30" /><div className="w-3.5 h-3.5 rounded-sm bg-slate-800/30" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800/80 gap-3">
            <div>Total Active Days: <strong className="text-white">3</strong> / 182 <span className="text-slate-500">(1.6%)</span></div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500">Less</span>
              <div className="flex items-center gap-1">
                {['bg-slate-800/50', 'bg-purple-900/60', 'bg-purple-600', 'bg-cyan-500', 'bg-emerald-400'].map((c) => (
                  <span key={c} className={`w-3 h-3 rounded-sm ${c}`} />
                ))}
              </div>
              <span className="text-[11px] text-slate-500">More</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-purple-950/40 via-cyan-950/20 to-slate-900/60 border border-purple-500/20 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="text-rose-400 text-lg">📌</span>
          <div>
            <span className="text-xs md:text-sm font-bold text-white">අද දින තොරතුරු (Today — 2026-10-06):</span>
            <span className="text-xs md:text-sm font-extrabold text-cyan-400 ml-1.5">222 Mins (3.7h)</span>
            <span className="text-xs text-slate-400 ml-2">| 5 Sessions Logged</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">ET: 150M (2.5H)</span>
          <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">SFT: 72M (1.2H)</span>
        </div>
      </div>
    </section>
  );
}
