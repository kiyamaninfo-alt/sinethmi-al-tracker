export default function LessonCompletionToggles({ isTaught, onToggleTaught, isStudied, onToggleStudied }) {
  return (
    <div className="space-y-1.5 p-3 rounded-2xl bg-white/[0.02] border border-white/10">
      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
        Lesson Completion Status (පාඩමේ ප්‍රගතිය)
      </label>
      <div className="grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={() => onToggleTaught(!isTaught)}
          className={`py-2 px-3 rounded-xl border text-xs font-bold font-sans transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            isTaught
              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-400/40'
              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">
            {isTaught ? 'check_circle' : 'help_outline'}
          </span>
          <span>{isTaught ? 'උගන්නලා ඉවරයි' : 'උගන්නලා ඉවරද?'}</span>
        </button>

        <button
          type="button"
          onClick={() => onToggleStudied(!isStudied)}
          className={`py-2 px-3 rounded-xl border text-xs font-bold font-sans transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            isStudied
              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-400/40'
              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">
            {isStudied ? 'check_circle' : 'help_outline'}
          </span>
          <span>{isStudied ? 'පාඩම් කරලා ඉවරයි' : 'පාඩම් කරලා ඉවරද?'}</span>
        </button>
      </div>
    </div>
  );
}
