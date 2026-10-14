export default function SubUnitBadges({
  repetitionCycle = 1,
  repetitionDate = '',
  papersAverage = 82,
  onRestartRepetition
}) {
  const badgeBase =
    'h-7 px-2.5 rounded-lg border text-[11px] font-mono font-medium flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-xs relative group whitespace-nowrap';

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {/* Badge 3: Spaced Repetition Restart with Tooltip */}
      <button
        type="button"
        onClick={onRestartRepetition}
        className={`${badgeBase} bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border-purple-500/30 hover:border-purple-400`}
        title="Spaced Repetition Review Station"
      >
        <span className="material-symbols-outlined text-[13px] text-purple-400 group-hover:rotate-180 transition-transform duration-300">
          restart_alt
        </span>
        <span>Space Repetition Restart</span>

        {/* Hover Tooltip */}
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center bg-slate-950/95 border border-purple-500/40 text-[10px] font-mono text-purple-200 px-2.5 py-1.5 rounded-lg shadow-2xl z-30 pointer-events-none min-w-[110px]">
          <span className="font-bold text-white">Cycle - {repetitionCycle}</span>
          <span className="text-purple-300/90 text-[9px]">Date - {repetitionDate || '2026-10-14'}</span>
          <div className="w-1.5 h-1.5 bg-slate-950 rotate-45 border-r border-b border-purple-500/40 absolute -bottom-1 left-1/2 -translate-x-1/2" />
        </div>
      </button>

      {/* Badge 4: Papers Completed with Tooltip */}
      <div
        className={`${badgeBase} bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border-blue-500/30 hover:border-blue-400`}
      >
        <span className="material-symbols-outlined text-[13px] text-blue-400">
          assignment_turned_in
        </span>
        <span>Papers Completed</span>

        {/* Hover Tooltip */}
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center bg-slate-950/95 border border-cyan-500/40 text-[10px] font-mono text-cyan-200 px-2.5 py-1.5 rounded-lg shadow-2xl z-30 pointer-events-none whitespace-nowrap min-w-[100px]">
          <span className="font-bold text-white">Show Average</span>
          <span className="text-cyan-300/90 text-[9px]">{papersAverage}% Score Avg</span>
          <div className="w-1.5 h-1.5 bg-slate-950 rotate-45 border-r border-b border-cyan-500/40 absolute -bottom-1 left-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}
