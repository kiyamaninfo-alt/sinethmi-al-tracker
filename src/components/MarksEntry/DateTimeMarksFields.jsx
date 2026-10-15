export default function DateTimeMarksFields({
  dateTime, onDateTimeChange, isManualDate, onToggleManualDate, marks, onMarksChange
}) {
  const formattedDisplay = (() => {
    try {
      const d = new Date(dateTime);
      return isNaN(d.getTime()) ? dateTime : d.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
    } catch {
      return dateTime;
    }
  })();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-cyan-400">schedule</span>
            <span>Date &amp; Time</span>
          </label>
          <button
            type="button"
            onClick={() => onToggleManualDate(!isManualDate)}
            className="text-[10px] text-cyan-400 hover:text-cyan-300 flex items-center gap-0.5 cursor-pointer font-mono"
            title="Edit date and time manually"
          >
            <span className="material-symbols-outlined text-[13px]">edit</span>
            <span>{isManualDate ? 'Lock' : 'Edit'}</span>
          </button>
        </div>

        {isManualDate ? (
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => onDateTimeChange(e.target.value)}
            className="w-full bg-[#080d1a] border border-cyan-400/80 rounded-xl px-3 py-2 text-xs text-white font-mono outline-none shadow-inner"
          />
        ) : (
          <div className="flex items-center justify-between bg-[#080d1a] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-slate-200 font-mono">
            <span>{formattedDisplay}</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Auto</span>
          </div>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[14px] text-rose-400">award_star</span>
          <span>Marks / Score (0–100) *</span>
        </label>
        <div className="relative">
          <input
            type="number"
            min="0"
            max="100"
            value={marks}
            onChange={(e) => onMarksChange(e.target.value)}
            placeholder="Enter score (0 - 100)"
            className="w-full bg-[#080d1a] border border-white/15 focus:border-rose-400 rounded-xl px-3.5 py-2 text-xs text-white font-mono font-bold outline-none pr-10 shadow-inner"
          />
          <span className="absolute right-3 top-2 text-xs font-mono font-bold text-slate-500">%</span>
        </div>
      </div>
    </div>
  );
}
