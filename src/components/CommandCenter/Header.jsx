import { useState } from 'react';
import ExamCountdown from './ExamCountdown';
import SubjectFilterBar from './SubjectFilterBar';
import HeaderActionButtons from './HeaderActionButtons';
import { getRandomQuote, getAppVersion } from '../../constants/quotesAndVersion';
import { useCandidateProfile } from '../../hooks/useCandidateProfile';

export default function Header() {
  const profile = useCandidateProfile();
  const [quote] = useState(() => getRandomQuote());
  const appVersion = getAppVersion();

  const targetYear = profile.targetYear || '2028';
  const customExamDate = profile.customExamDate || '';

  return (
    <header className="glass-panel rounded-3xl p-5 sm:p-7 shadow-glow-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-emerald opacity-80" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-center lg:text-left space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
            A/L {targetYear} Target Cohort • Batch Protocol Activated
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center lg:justify-start gap-3">
            <img src="/emblem.svg" alt="Mission Emblem" className="w-8 h-8 sm:w-9 sm:h-9 object-contain inline-block drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
            <span>Sinethmi A/L {targetYear} Mission Control</span>
            <span className="text-xs tracking-wider px-2 py-0.5 rounded-md bg-neon-violet/20 text-neon-violet font-mono border border-neon-violet/30 uppercase">{appVersion}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            "{quote}"
          </p>
        </div>

        <ExamCountdown targetYear={targetYear} customExamDate={customExamDate} />
      </div>

      <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold">
        <SubjectFilterBar subjects={profile.subjects || []} />
        <HeaderActionButtons />
      </div>
    </header>
  );
}
