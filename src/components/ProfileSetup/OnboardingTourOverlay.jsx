import { useDraggable } from '../../hooks/useDraggable';

export default function OnboardingTourOverlay({
  currentStep, onNext, onPrev, onSkip, totalSteps, stepData
}) {
  const { position, isDragging, handlePointerDown } = useDraggable();
  if (!stepData) return null;
  const isLast = currentStep >= totalSteps - 1;
  const stepNum = String(currentStep + 1).padStart(2, '0');
  const totalNum = String(totalSteps).padStart(2, '0');

  return (
    <aside aria-label="Candidate Onboarding Guide"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      className="fixed bottom-6 right-4 sm:right-8 z-50 w-[92vw] max-w-md pointer-events-auto select-none transition-shadow touch-none">
      <div className={`relative rounded-2xl bg-[#070e1c]/95 border-2 border-cyan-400 p-6 shadow-[0_0_45px_rgba(34,211,238,0.45)] backdrop-blur-2xl space-y-3.5 ${isDragging ? 'cursor-grabbing opacity-90' : ''}`}>
        <div onPointerDown={handlePointerDown} className="flex items-center justify-between border-b border-cyan-500/25 pb-2.5 cursor-grab">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-400 text-[18px]">drag_indicator</span>
            <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase font-black">
              Guide {stepNum}/{totalNum} (Drag to Move)
            </span>
          </div>
          <button type="button" onClick={onSkip} className="text-xs font-mono font-bold text-slate-400 hover:text-rose-400 px-2 py-0.5 rounded bg-white/5 border border-white/10 cursor-pointer">
            ✕ Skip
          </button>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-400 text-[24px]">explore</span>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white">{stepData.sinhalaTitle}</h2>
              <span className="text-xs font-mono text-cyan-300 font-semibold">{stepData.title}</span>
            </div>
          </div>
          <p className="text-sm font-medium text-slate-100 leading-relaxed font-sans">{stepData.sinhalaDesc}</p>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold">
          <span className="material-symbols-outlined text-[18px] animate-bounce shrink-0">near_me</span>
          <span>Highlighting active field on screen ↗</span>
        </div>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentStep ? 'w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]' : idx < currentStep ? 'w-3 bg-cyan-600' : 'w-2 bg-slate-700'
            }`} />
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-cyan-500/25">
          {currentStep > 0 ? (
            <button type="button" onClick={onPrev} className="px-3.5 py-1.5 rounded-xl border border-slate-700 text-xs font-bold text-slate-200 hover:text-white cursor-pointer">
              ← Back
            </button>
          ) : <div />}
          <button type="button" onClick={onNext} className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-inverse-primary text-on-primary text-xs font-black tracking-wide flex items-center gap-1.5 shadow-xl shadow-primary/30 hover:brightness-110 active:scale-95 cursor-pointer">
            <span>{isLast ? 'Save Candidate Profile & Enter Mission Control ->' : 'Next Step →'}</span>
            <span className="material-symbols-outlined text-[15px]">{isLast ? 'rocket_launch' : 'arrow_forward'}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
