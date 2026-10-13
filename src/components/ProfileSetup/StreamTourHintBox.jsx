import { useTourPosition } from '../../hooks/useTourPosition';

export default function StreamTourHintBox({ onNext, onSkip }) {
  const mobileCoords = useTourPosition('candidate-stream-select');
  const containerStyle = mobileCoords ? { top: `${mobileCoords.top}px` } : {};

  return (
    <div
      role="alert"
      style={containerStyle}
      className={`fixed z-50 pointer-events-auto select-none transition-all ${
        mobileCoords ? 'left-3 right-3 max-w-sm mx-auto' : 'top-5 left-5 max-w-xs sm:max-w-sm'
      }`}
    >
      <div className="rounded-xl sm:rounded-2xl bg-[#070e1c]/95 border border-cyan-400 sm:border-2 p-2.5 sm:p-4 shadow-[0_0_20px_rgba(34,211,238,0.35)] sm:shadow-[0_0_35px_rgba(34,211,238,0.45)] backdrop-blur-2xl space-y-1.5 sm:space-y-3">
        <div className="flex items-start gap-2">
          <span className="material-symbols-outlined text-cyan-400 text-[18px] sm:text-[22px] shrink-0 mt-0.5">
            account_tree
          </span>
          <div className="space-y-0.5 truncate">
            <p className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              Stream Guidance
            </p>
            <p className="text-xs sm:text-sm font-bold text-white leading-tight truncate">
              Select your subject stream and subjects
            </p>
            <p className="text-[11px] sm:text-xs text-slate-300 font-sans line-clamp-2">
              ඔබේ විභාග විෂය ධාරාව සහ අදාළ විෂයයන් තෝරන්න.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-cyan-500/20">
          <button
            type="button"
            onClick={onSkip}
            className="text-[10px] sm:text-xs font-mono font-semibold text-slate-400 hover:text-rose-400 px-2 py-0.5 rounded bg-white/5 border border-white/10 cursor-pointer"
          >
            ✕ Skip
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-2.5 sm:px-3.5 py-1 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-inverse-primary text-on-primary text-[10px] sm:text-xs font-black font-mono tracking-wide flex items-center gap-1 shadow-md shadow-primary/30 hover:brightness-110 active:scale-95 cursor-pointer"
          >
            <span>Next →</span>
            <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
