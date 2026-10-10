export default function HeroFloatingCard() {
  return (
    <div className="relative max-w-lg w-full mx-auto group">
      {/* Glow backlight aura */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-emerald-500/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* Main image container */}
      <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-slate-900/90 shadow-2xl">
        <div className="aspect-[4/3] w-full relative overflow-hidden">
          <img
            src="/assets/landing/al-students.jpg"
            alt="Sri Lankan A/L Students Studying with Mission Control"
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-700 ease-out"
          />
          {/* Subtle vignette gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/20" />
        </div>

        {/* Floating Top Badge */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-mono font-bold text-white tracking-wide">Live Study Cohort</span>
          </div>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 backdrop-blur-md shadow-lg">
            A/L 2028 Merit Track
          </span>
        </div>

        {/* Floating Bottom Telemetry Overlay */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/10 space-y-2 shadow-2xl">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300">ICT</span>
              <span className="font-semibold text-white">Spaced Repetition Mastery</span>
            </div>
            <span className="font-mono text-emerald-400 font-bold text-xs">96% Retention</span>
          </div>

          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 h-full w-[96%]" />
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-300 font-mono pt-0.5">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Next Review: Box 4 (24h)
            </span>
            <span className="text-cyan-300 font-semibold">Active Session Logged</span>
          </div>
        </div>
      </div>
    </div>
  );
}
