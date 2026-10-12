export default function StreamTourHintBox({ onNext, onSkip }) {
  return (
    <div
      role="alert"
      className="fixed top-5 left-5 z-50 max-w-xs sm:max-w-sm rounded-2xl bg-[#070e1c]/95 border-2 border-cyan-400 p-4 shadow-[0_0_35px_rgba(34,211,238,0.45)] backdrop-blur-2xl space-y-3 pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-300"
    >
      <div className="flex items-start gap-2.5">
        <span className="material-symbols-outlined text-cyan-400 text-[22px] shrink-0 mt-0.5">
          account_tree
        </span>
        <div className="space-y-1">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
            Stream Guidance
          </p>
          <p className="text-sm font-bold text-white leading-snug">
            Select your subject stream and subjects
          </p>
          <p className="text-xs text-slate-300 font-sans">
            ඔබේ විභාග විෂය ධාරාව සහ අදාළ විෂයයන් තෝරන්න.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-cyan-500/20">
        <button
          type="button"
          onClick={onSkip}
          className="text-xs font-mono font-semibold text-slate-400 hover:text-rose-400 px-2.5 py-1 rounded bg-white/5 border border-white/10 cursor-pointer"
        >
          ✕ Skip
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-3.5 py-1 rounded-xl bg-gradient-to-r from-primary to-inverse-primary text-on-primary text-xs font-black font-mono tracking-wide flex items-center gap-1 shadow-md shadow-primary/30 hover:brightness-110 active:scale-95 cursor-pointer"
        >
          <span>Next →</span>
          <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
