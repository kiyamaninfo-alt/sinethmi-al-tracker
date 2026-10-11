export default function OnboardingTourOverlay({
  currentStep, onNext, onPrev, onSkip, totalSteps, stepData
}) {
  if (!stepData) return null;
  const isLast = currentStep >= totalSteps - 1;
  const stepNum = String(currentStep + 1).padStart(2, '0');
  const totalNum = String(totalSteps).padStart(2, '0');

  return (
    <aside aria-label="Candidate Onboarding Guide" className="fixed bottom-6 right-6 z-50 w-full max-w-sm pointer-events-auto animate-in slide-in-from-bottom-5 duration-300">
      <div className="rounded-2xl bg-[#070e1c]/95 border-2 border-cyan-400 p-5 shadow-[0_0_35px_rgba(34,211,238,0.35)] backdrop-blur-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase font-bold">
              Mission Guide {stepNum}/{totalNum}
            </span>
          </div>
          <button type="button" onClick={onSkip} className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer" title="Close guide at any time">
            ✕ Skip
          </button>
        </div>

        <div className="space-y-1.5">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-400 text-[18px]">explore</span>
            {stepData.title}
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">{stepData.desc}</p>
        </div>

        <div className="flex items-center gap-1.5 pt-0.5">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${
              idx === currentStep ? 'w-6 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' : idx < currentStep ? 'w-2 bg-cyan-600' : 'w-2 bg-slate-700'
            }`} />
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-cyan-500/20">
          {currentStep > 0 ? (
            <button type="button" onClick={onPrev} className="px-3 py-1 rounded-lg border border-slate-700 text-xs text-slate-300 hover:text-white hover:border-slate-500 transition-all cursor-pointer">
              Back
            </button>
          ) : <div />}
          <button type="button" onClick={onNext} className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-primary to-inverse-primary text-on-primary text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-lg shadow-primary/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer">
            <span>{isLast ? 'Got It, Start Mission ->' : 'Next Step ->'}</span>
            <span className="material-symbols-outlined text-[14px]">{isLast ? 'rocket_launch' : 'arrow_forward'}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
