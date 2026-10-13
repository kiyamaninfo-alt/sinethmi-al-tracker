import { getLandingCopy } from '../../constants/landingCopy';
import { getComparisonData } from '../../constants/landingComparisonData';

export default function ProblemSolutionSection({ lang = 'si' }) {
  const { traditional, smart } = getComparisonData(lang);
  const copy = getLandingCopy(lang);

  return (
    <section id="problem-solution" className="py-16 sm:py-24 border-t border-white/5 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">The Reality Check</span>
          <h2 className="text-xl sm:text-3xl font-black text-white">{copy.comparisonTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans">{copy.comparisonSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div className="rounded-3xl bg-rose-950/15 border border-rose-500/20 p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-rose-500/20">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-rose-400">close</span>
                {traditional.title}
              </h3>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300">
                {traditional.tag}
              </span>
            </div>
            <ul className="space-y-3.5">
              {traditional.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-sans">
                  <span className="material-symbols-outlined text-rose-400 text-[18px] shrink-0 mt-0.5">cancel</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-emerald-950/30 via-slate-900/90 to-cyan-950/30 border border-emerald-400/40 p-6 sm:p-8 space-y-5 shadow-2xl ring-1 ring-emerald-400/20">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-400/20">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-400">check_circle</span>
                {smart.title}
              </h3>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
                {smart.tag}
              </span>
            </div>
            <ul className="space-y-3.5">
              {smart.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-sans font-medium">
                  <span className="material-symbols-outlined text-emerald-400 text-[18px] shrink-0 mt-0.5">task_alt</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
