export default function TimerGauge({
  secondsLeft,
  totalSeconds,
  isActive,
  isPaused,
  sessionMode,
  currentRound,
  totalRounds
}) {
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const timeFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const pct = totalSeconds > 0 ? (secondsLeft / totalSeconds) * 100 : 100;
  const strokeDashoffset = 628 - (628 * pct) / 100;

  const isBreak = sessionMode === 'break';

  return (
    <div className="relative w-60 h-60 flex items-center justify-center">
      <div className={`absolute inset-4 rounded-full blur-2xl ${
        isBreak
          ? 'bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-transparent'
          : 'bg-gradient-to-tr from-neon-violet/20 via-neon-cyan/15 to-transparent'
      }`} />
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 240 240">
        <circle cx="120" cy="120" fill="none" r="100" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="12" />
        <defs>
          <linearGradient id="timerGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={isBreak ? '#10B981' : '#8B5CF6'} />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <circle
          cx="120"
          cy="120"
          fill="none"
          r="100"
          stroke="url(#timerGradient)"
          strokeLinecap="round"
          strokeWidth="12"
          strokeDasharray="628"
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500 ease-linear"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]">
          {timeFormatted}
        </span>
        <span className={`mt-1 text-[11px] font-bold uppercase tracking-widest flex items-center gap-1.5 ${
          isBreak ? 'text-emerald-400' : 'text-neon-cyan'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${isBreak ? 'bg-emerald-400' : 'bg-neon-cyan'} ${isActive && !isPaused ? 'animate-ping' : ''}`} />
          {!isActive ? 'READY TO FOCUS' : isPaused ? 'PAUSED' : isBreak ? 'REST INTERVAL' : 'FOCUSING'}
        </span>
        <span className="text-[10px] text-slate-300 font-mono mt-0.5">
          Round {String(currentRound).padStart(2, '0')} of {String(totalRounds).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
