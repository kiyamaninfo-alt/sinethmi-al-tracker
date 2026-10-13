import CompactLanguageToggle from '../common/CompactLanguageToggle';

const QUOTES = {
  si: '“විභාග ජයග්රහණය හුදෙක් වාසනාව නොව, විනයගරුක සැලැස්මක සහ අඛණ්ඩ කැපවීමේ සැබෑ ප්රතිඵලයකි.”',
  ta: '“පරීක්‍ෂෛ වෙත්‍රී එන්පදු වෙරුම් අදිර්ෂ්ටම් අල්ල, අදු ඔලුක්කමාන තිට්ටමිඩල් මට්‍රුම් තොඩර්ච්චියාන අර්ප්පණිප්පින් උණ්මෛයාන පලනාගුම්.”',
  en: '“Exam victory is never sheer chance; it is the realized dividend of relentless discipline and structured persistence.”'
};

export default function LoginHeader({ lang = 'si', onLangChange }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-between pb-3.5 border-b border-outline-variant/15 gap-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold hidden sm:inline">Live Feed</span>
        </div>

        <CompactLanguageToggle value={lang} onChange={onLangChange} />

        <div className="text-[11px] font-mono text-outline flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px] text-cyan-400">lock</span>
          <span>GATEWAY</span>
        </div>
      </div>

      <div className="relative flex items-center justify-center mt-4 mb-2">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 to-violet-500/30 blur-xl opacity-50 scale-125" />
        <img src="/emblem.svg" alt="Emblem" className="relative w-14 h-14 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
      </div>

      <div className="text-center mt-1">
        <span className="inline-block text-xs uppercase font-mono tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-300 to-violet-400 font-bold drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
          ✦ Sinethmi ✦
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-on-surface tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mt-1">
          A-Level Mission Control
        </h1>

        <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
          <span className="material-symbols-outlined text-[13px] animate-spin" style={{ animationDuration: '8s' }}>radar</span>
          <span>A-Level Target Cohort - Encrypted Gateway</span>
        </div>

        <p className="text-xs text-on-surface-variant/90 mt-2.5 max-w-md mx-auto leading-relaxed font-sans italic">
          {QUOTES[lang] || QUOTES.si}
        </p>
      </div>
    </div>
  );
}
