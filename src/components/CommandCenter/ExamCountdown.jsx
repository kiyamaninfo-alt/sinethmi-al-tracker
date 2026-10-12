import { useState, useEffect } from 'react';
import { getTargetExamDate, calculateDetailedCountdown } from '../../constants/countdownUtils';

const COUNTDOWN_CONFIG = [
  {
    key: 'days',
    sinhala: 'දින',
    en: 'DAYS',
    textColor: 'text-neon-violet',
    glow: 'drop-shadow-[0_0_12px_rgba(139,92,246,0.55)]',
    borderColor: 'border-neon-violet/30',
    bg: 'bg-neon-violet/5'
  },
  {
    key: 'hours',
    sinhala: 'පැය',
    en: 'HOURS',
    textColor: 'text-neon-cyan',
    glow: 'drop-shadow-[0_0_12px_rgba(6,182,212,0.55)]',
    borderColor: 'border-neon-cyan/30',
    bg: 'bg-neon-cyan/5'
  },
  {
    key: 'minutes',
    sinhala: 'මිනිත්තු',
    en: 'MIN',
    textColor: 'text-neon-emerald',
    glow: 'drop-shadow-[0_0_12px_rgba(16,185,129,0.55)]',
    borderColor: 'border-neon-emerald/30',
    bg: 'bg-neon-emerald/5'
  },
  {
    key: 'seconds',
    sinhala: 'තත්පර',
    en: 'SEC',
    textColor: 'text-neon-amber',
    glow: 'drop-shadow-[0_0_12px_rgba(245,158,11,0.55)]',
    borderColor: 'border-neon-amber/30',
    bg: 'bg-neon-amber/5'
  }
];

export default function ExamCountdown({ targetYear, customExamDate }) {
  const targetDate = getTargetExamDate(targetYear, customExamDate);
  const [timeLeft, setTimeLeft] = useState(() => calculateDetailedCountdown(targetDate));

  useEffect(() => {
    const target = getTargetExamDate(targetYear, customExamDate);
    setTimeLeft(calculateDetailedCountdown(target));
    const interval = setInterval(() => {
      setTimeLeft(calculateDetailedCountdown(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetYear, customExamDate]);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full lg:w-auto items-stretch">
      {COUNTDOWN_CONFIG.map(({ key, sinhala, en, textColor, glow, borderColor, bg }) => (
        <div
          key={key}
          className={`glass-pill ${bg} px-2.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl flex flex-col items-center justify-center text-center ${borderColor} shadow-inner min-w-[70px] sm:min-w-[92px]`}
        >
          <span className={`block text-2xl sm:text-3xl font-black font-mono tabular-nums tracking-tight leading-none mb-1.5 ${textColor} ${glow}`}>
            {timeLeft[key]}
          </span>
          <div className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${textColor} flex items-center justify-center gap-1 whitespace-nowrap leading-tight`}>
            <span>{sinhala}</span>
            <span className="opacity-80">({en})</span>
          </div>
        </div>
      ))}
    </div>
  );
}
