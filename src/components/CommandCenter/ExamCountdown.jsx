import { useState, useEffect } from 'react';
import { getTargetExamDate, calculateDetailedCountdown } from '../../constants/countdownUtils';

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
    <div className="grid grid-cols-4 gap-2 sm:gap-3.5 w-full lg:w-auto">
      <div className="glass-pill px-3 py-2.5 sm:px-5 sm:py-3 rounded-2xl text-center border-neon-violet/25 shadow-inner">
        <span className="block text-2xl sm:text-3xl font-black font-mono tracking-tight text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
          {timeLeft.days}
        </span>
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neon-violet">
          දින (DAYS)
        </span>
      </div>

      <div className="glass-pill px-3 py-2.5 sm:px-5 sm:py-3 rounded-2xl text-center border-neon-cyan/25 shadow-inner">
        <span className="block text-2xl sm:text-3xl font-black font-mono tracking-tight text-white drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
          {timeLeft.hours}
        </span>
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neon-cyan">
          පැය (HOURS)
        </span>
      </div>

      <div className="glass-pill px-3 py-2.5 sm:px-5 sm:py-3 rounded-2xl text-center border-neon-emerald/25 shadow-inner">
        <span className="block text-2xl sm:text-3xl font-black font-mono tracking-tight text-white drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]">
          {timeLeft.minutes}
        </span>
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neon-emerald">
          මිනිත්තු (MIN)
        </span>
      </div>

      <div className="glass-pill px-3 py-2.5 sm:px-5 sm:py-3 rounded-2xl text-center border-neon-amber/25 shadow-inner">
        <span className="block text-2xl sm:text-3xl font-black font-mono tracking-tight text-neon-amber drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]">
          {timeLeft.seconds}
        </span>
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neon-amber">
          තත්පර (SEC)
        </span>
      </div>
    </div>
  );
}
