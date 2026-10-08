import ExamCountdown from './ExamCountdown';

export default function Header() {
  return (
    <header className="glass-panel rounded-3xl p-5 sm:p-7 shadow-glow-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-emerald opacity-80" />
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-center lg:text-left space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
            A/L 2028 Target Cohort • Batch Protocol Activated
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center lg:justify-start gap-3">
            <img src="/emblem.svg" alt="Mission Emblem" className="w-8 h-8 sm:w-9 sm:h-9 object-contain inline-block drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
            <span>Sinethmi A/L 2028 Mission Control</span>
            <span className="text-xs tracking-wider px-2 py-0.5 rounded-md bg-neon-violet/20 text-neon-violet font-mono border border-neon-violet/30 uppercase">PRO v3.4</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            "විභාගයෙන් ජය නොවෙලඳදාම ප්‍රතිඵලයක් සිතා තීරණාත්මකව සූදානම් වෙමු. ක්‍රමානුකූල ඉලක්කගත අධ්‍යයනය."
          </p>
        </div>

        <ExamCountdown />
      </div>

      <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
          <button type="button" className="px-3.5 py-1.5 rounded-xl bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30 flex items-center gap-1.5 shadow-sm transition hover:bg-neon-cyan/25 cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
            All Subjects (සමස්තය)
          </button>
          <button type="button" className="px-3 py-1.5 rounded-xl glass-pill text-slate-300 border-white/10 hover:border-emerald-400 hover:text-white transition flex items-center gap-1.5 cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            ICT (තොරතුරු හා සංනිවේදන)
          </button>
          <button type="button" className="px-3 py-1.5 rounded-xl glass-pill text-slate-300 border-white/10 hover:border-neon-violet hover:text-white transition flex items-center gap-1.5 cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-violet" />
            ET (ඉංජිනේරු තාක්ෂණවේදය)
          </button>
          <button type="button" className="px-3 py-1.5 rounded-xl glass-pill text-slate-300 border-white/10 hover:border-neon-cyan hover:text-white transition flex items-center gap-1.5 cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            SFT (තාක්ෂණවේදය සඳහා විද්‍යාව)
          </button>
          <div className="hidden xl:flex items-center gap-2 ml-2 pl-2 border-l border-white/10 font-mono text-[11px]">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Unit Papers: 33</span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Full Unit: 1</span>
            <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">Full Papers: 2</span>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button type="button" className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30 hover:border-amber-400 flex items-center gap-1.5 transition cursor-pointer">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Syllabus Manager
          </button>
          <button type="button" className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600/30 to-neon-cyan/20 text-cyan-200 border border-neon-cyan/40 hover:border-neon-cyan flex items-center gap-1.5 transition cursor-pointer">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Submit Marks
          </button>
        </div>
      </div>
    </header>
  );
}
