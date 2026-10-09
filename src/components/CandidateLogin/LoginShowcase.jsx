const PILLARS = [
  {
    icon: 'cloud_sync',
    title: 'Zero-Data-Loss PWA Telemetry',
    desc: 'Local-first IndexedDB buffering and resilient offline background synchronization.',
  },
  {
    icon: 'speed',
    title: 'Active Cognitive Pacing',
    desc: 'Adaptive study cadence, focus rhythm tracking, and distributed retention nodes.',
  },
  {
    icon: 'insights',
    title: 'Adaptive Syllabus Analytics',
    desc: 'Real-time unit coverage, credit weightings, velocity metrics, and merit projection.',
  },
];

export default function LoginShowcase() {
  return (
    <div className="relative hidden lg:flex flex-col justify-between p-10 xl:p-14 bg-[#050b14]/95 border-r border-cyan-500/20 backdrop-blur-2xl overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.12)]">
      {/* Subtle Cyan Glow & Radial Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Brand Header */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-cyan-500/30 flex items-center justify-center p-2 shadow-lg shadow-cyan-500/10">
            <img src="/emblem.svg" alt="Mission Control Emblem" className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]" />
          </div>
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-cyan-400 font-bold">Powered by KrishSoft</div>
            <h2 className="text-2xl font-black tracking-tight text-white">A-Level Mission Control</h2>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>AUTONOMOUS CANDIDATE FLIGHT DECK</span>
        </div>
      </div>

      {/* Mission Capability Cards */}
      <div className="relative z-10 space-y-3.5 my-8">
        <p className="text-xs uppercase tracking-wider text-slate-400 font-mono">Mission Parameters &amp; Engine</p>
        <div className="space-y-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all flex items-start gap-3.5 backdrop-blur-sm">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <span className="material-symbols-outlined text-[20px]">{p.icon}</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-100">{p.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Telemetry Status Footer */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-cyan-400">
          <span className="material-symbols-outlined text-[16px]">verified_user</span>
          KrishSoft Engine v3.4.12
        </span>
        <span>Colombo Tier 1 Gateway</span>
      </div>
    </div>
  );
}
