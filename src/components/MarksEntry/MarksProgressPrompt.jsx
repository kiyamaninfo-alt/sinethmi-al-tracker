export default function MarksProgressPrompt({
  paperScope, completedCount, isValid, isSubmitting, onCancel, onSubmit
}) {
  const isFull = paperScope === 'full_syllabus';
  const nextNum = completedCount + 1;
  const submitLabel = isFull ? 'ලකුණු ඇතුළත් කරන්න 🚀' : `${nextNum} වන Paper එක Tick කරන්න ✓`;

  return (
    <div className="space-y-3 pt-2 border-t border-white/10">
      {!isFull && (
        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-start gap-2.5">
          <span className="material-symbols-outlined text-cyan-300 text-[18px] shrink-0 mt-0.5">
            insights
          </span>
          <p className="text-xs text-cyan-200 font-sans leading-relaxed">
            ඔබ මෙම උප-පාඩම සඳහා දැනට Unit Papers <strong className="text-white font-mono">{completedCount}</strong> ක් අවසන් කර ඇත. <strong className="text-amber-300 font-mono">{nextNum}</strong> වන Paper එක සලකුණු (Tick) කරන්නද?
          </p>
        </div>
      )}

      <div className="flex items-center justify-between gap-3 pt-1">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono font-bold transition cursor-pointer border border-white/10"
        >
          ✕ Cancel
        </button>

        <button
          type="button"
          onClick={onSubmit}
          disabled={!isValid || isSubmitting}
          className={`px-5 py-2 rounded-xl text-xs font-bold font-sans flex items-center gap-1.5 transition shadow-lg cursor-pointer ${
            isValid && !isSubmitting
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-cyan-500/25 hover:brightness-110 active:scale-95'
              : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60'
          }`}
        >
          <span className="material-symbols-outlined text-[15px]">
            {isFull ? 'send' : 'task_alt'}
          </span>
          <span>{submitLabel}</span>
        </button>
      </div>
    </div>
  );
}
