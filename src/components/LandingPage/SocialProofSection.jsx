import { SOCIAL_PROOF_STATS } from '../../constants/landingSteps';

export default function SocialProofSection() {
  return (
    <section className="py-16 border-t border-white/5 bg-gradient-to-b from-slate-950 to-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOCIAL_PROOF_STATS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/70 border border-white/5 flex items-center gap-4 hover:border-cyan-400/30 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0">
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">{item.stat}</span>
                  <span className="text-xs font-bold text-cyan-400 uppercase font-mono">{item.label}</span>
                </div>
                <p className="text-xs text-slate-400 leading-snug font-sans">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
