export default function VisualAnalyticsHeader({ onBack }) {
  const timeRanges = ['7D', '14D', '30D', '6M', '2028'];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060e20]/90 backdrop-blur-xl px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-[1780px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3.5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-400 bg-surface-container hover:text-white hover:bg-slate-800 border border-white/5 transition cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span>Dashboard</span>
          </button>
          <div className="h-5 w-px bg-slate-800" />
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-0.5 flex-shrink-0 drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]">
              <div className="w-full h-full bg-[#0b1326] rounded-[10px] flex items-center justify-center">
                <span className="material-symbols-outlined text-purple-400 text-[20px]">insights</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm md:text-base font-bold tracking-tight text-white flex items-center gap-2">
                  Sinethmi A-Level Mission Control
                </h1>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  A/L 2028 Pipeline • Telemetry v4.9
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span>අධ්‍යයන දෘශ්‍යකරණ විධාන මධ්‍යස්ථානය</span>
                <span>•</span>
                <span className="text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  LIVE SYNCED (2028 PIPELINE)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 self-end md:self-auto">
          <div className="flex items-center bg-[#10192e] rounded-lg p-1 border border-white/5 text-xs text-slate-400">
            {timeRanges.map((r, i) => (
              <button
                key={r}
                type="button"
                className={`px-2.5 py-1 rounded transition cursor-pointer ${
                  i === 2 ? 'bg-purple-600 font-bold text-white shadow-md shadow-purple-600/30' : 'hover:text-white'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <button type="button" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-surface-container hover:bg-slate-700 border border-white/5 transition">
              <span className="material-symbols-outlined text-[15px]">file_download</span><span>Export Charts</span>
            </button>
            <button type="button" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-surface-container hover:bg-slate-700 border border-white/5 transition">
              <span className="material-symbols-outlined text-[15px]">fullscreen</span><span className="hidden sm:inline">Fullscreen</span>
            </button>
            <button type="button" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_16px_rgba(139,92,246,0.4)] transition">
              <span className="material-symbols-outlined text-[15px]">share</span><span>Share Telemetry</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
