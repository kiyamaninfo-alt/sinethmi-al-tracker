import { WORKFLOW_STEPS } from '../../constants/landingSteps';

export default function WorkflowStepsSection() {
  return (
    <section id="workflow" className="py-16 sm:py-24 border-t border-white/5 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">Simple 3-Step Flow</span>
          <h2 className="text-xl sm:text-3xl font-black text-white">පියවර 3කින් ඔබේ පාඩම් රටාව විද්‍යාත්මක කරන්න</h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans">
            අනවශ්‍ය ආතතියෙන් තොරව දිනපතා ලකුණු සහ ප්‍රගතිය ඉහළට ගෙන යන ක්‍රමවේදය
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {WORKFLOW_STEPS.map((s) => (
            <div
              key={s.step}
              className="group relative rounded-3xl bg-slate-900/80 hover:bg-slate-900 border border-white/10 hover:border-cyan-400/50 p-6 sm:p-7 flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-cyan-400/80 group-hover:text-cyan-300">
                    {s.step}
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border bg-gradient-to-r ${s.accent}`}>
                    {s.badge}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:border-cyan-400/40 transition">
                  <span className="material-symbols-outlined text-[24px]">{s.icon}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white leading-snug font-sans">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 font-bold">
                <span>Automated Telemetry</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
