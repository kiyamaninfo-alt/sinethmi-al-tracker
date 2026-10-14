export default function UnitProgressBar({ progress = 0, isFullyComplete = false }) {
  return (
    <div className="flex items-center gap-1.5 shrink-0">
      {/* Unit Completion Checkmark (✓) in front of that lesson/unit */}
      {isFullyComplete && (
        <span
          className="w-5 h-5 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-400/50 flex items-center justify-center text-xs font-black shadow-[0_0_10px_rgba(52,211,153,0.4)] animate-in fade-in"
          title="All Sub-units Fully Completed"
        >
          ✓
        </span>
      )}

      {/* Progress Bar & Percentage (%) in front of unit number */}
      <div className="flex items-center gap-1.5">
        <div className="w-12 sm:w-16 h-2 rounded-full bg-slate-800/90 border border-white/10 overflow-hidden shrink-0">
          <div
            className={`h-full transition-all duration-300 ${
              isFullyComplete
                ? 'bg-gradient-to-r from-emerald-400 to-cyan-400'
                : progress > 0
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-400'
                : 'bg-transparent'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span
          className={`text-[10px] font-mono font-bold min-w-[28px] text-right ${
            isFullyComplete
              ? 'text-emerald-300'
              : progress > 0
              ? 'text-cyan-300'
              : 'text-slate-400'
          }`}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
}
