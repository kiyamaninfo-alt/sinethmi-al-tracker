export default function StudyAnalyticsHeader({ onBack }) {
  return (
    <header className="sticky top-0 z-50 border-b border-obsidian-border bg-obsidian-deep/80 backdrop-blur-xl px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-[1720px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide text-slate-400 bg-obsidian-surface hover:text-white hover:bg-slate-800 border border-obsidian-border transition cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            Dashboard
          </button>
          <div className="h-6 w-px bg-slate-800" />
          
          <div className="flex items-center gap-3">
            <img
              src="/emblem.svg"
              alt="Mission Control Logo"
              className="w-10 h-10 shrink-0 drop-shadow-[0_0_12px_rgba(139,92,246,0.5)] object-contain"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base md:text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  Study Analytics &amp; Focus Intelligence
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30">
                  PRO INTEL
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                ගැඹුරු අධ්‍යයන දත්ත, අඛණ්ඩතා Heatmap සහ විෂය ප්‍රගති විශ්ලේෂණය
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-end md:self-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Online Synced
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/30 shadow-[0_0_15px_rgba(139,92,246,0.35)] transition cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
            Add Session
          </button>

          <button
            type="button"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-obsidian-surface hover:bg-slate-800 border border-obsidian-border transition cursor-pointer"
            title="Refresh Telemetry"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
