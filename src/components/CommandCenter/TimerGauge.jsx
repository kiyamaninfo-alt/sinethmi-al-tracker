export default function TimerGauge({
  secondsLeft, totalSeconds, isActive, isPaused, sessionMode, currentRound, totalRounds
}) {
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const timeFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  const safeTotal = totalSeconds > 0 ? totalSeconds : (secondsLeft > 0 ? secondsLeft : 3000);
  const pct = Math.max(0, Math.min(100, (secondsLeft / safeTotal) * 100));
  const radius = 100;
  const circ = 2 * Math.PI * radius;
  const strokeDashoffset = circ * (1 - pct / 100);

  const secRadius = 85;
  const secCirc = 2 * Math.PI * secRadius;
  const secVal = !isActive ? 60 : (secondsLeft === 0 ? 0 : (secs === 0 ? 60 : secs));
  const secOffset = secCirc * (1 - secVal / 60);

  const isBreak = sessionMode === 'break';
  const tipAngleRad = (pct / 100) * 2 * Math.PI;
  const beaconX = 120 + radius * Math.cos(tipAngleRad);
  const beaconY = 120 + radius * Math.sin(tipAngleRad);

  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <div className={`absolute inset-4 rounded-full blur-2xl ${
        isBreak ? 'bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-transparent'
                : 'bg-gradient-to-tr from-neon-violet/20 via-neon-cyan/15 to-transparent'
      }`} />
      <svg className="w-full h-full transform -rotate-90" style={{ width: '100%', height: '100%' }} viewBox="0 0 240 240">
        <defs>
          <linearGradient id="timerGradient" x1="0%" x2="100%" y1="0%" x2="100%">
            <stop offset="0%" stopColor={isBreak ? '#10B981' : '#8B5CF6'} />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor={isBreak ? '#34D399' : '#10B981'} />
          </linearGradient>
        </defs>
        <circle cx="120" cy="120" fill="none" r={radius} stroke="rgba(255, 255, 255, 0.12)" strokeWidth="11" />
        <circle
          cx="120" cy="120" fill="none" r={radius}
          stroke="url(#timerGradient)" strokeLinecap="round" strokeWidth="11"
          strokeDasharray={`${circ.toFixed(2)} ${circ.toFixed(2)}`}
          strokeDashoffset={strokeDashoffset.toFixed(2)}
          style={{ strokeDashoffset: strokeDashoffset.toFixed(2), transition: isActive && !isPaused ? 'stroke-dashoffset 1s linear' : 'stroke-dashoffset 0.4s ease-out' }}
          className={isActive && !isPaused ? 'drop-shadow-[0_0_12px_rgba(6,182,212,0.65)]' : ''}
        />
        {isActive && (
          <circle cx={beaconX.toFixed(2)} cy={beaconY.toFixed(2)} r="5" fill={isBreak ? '#34D399' : '#06B6D4'} className="drop-shadow-[0_0_8px_#06B6D4] animate-pulse" />
        )}
        <circle cx="120" cy="120" fill="none" r={secRadius} stroke="rgba(255, 255, 255, 0.08)" strokeWidth="5" />
        <circle
          cx="120" cy="120" fill="none" r={secRadius}
          stroke={isBreak ? '#34D399' : '#06B6D4'} strokeLinecap="round" strokeWidth="5"
          strokeDasharray={`${secCirc.toFixed(2)} ${secCirc.toFixed(2)}`}
          strokeDashoffset={secOffset.toFixed(2)}
          style={{ strokeDashoffset: secOffset.toFixed(2), transition: isActive && !isPaused ? 'stroke-dashoffset 1s linear' : 'stroke-dashoffset 0.3s ease-out' }}
          className={isActive && !isPaused ? 'drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'opacity-70'}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-primary drop-shadow-[0_0_20px_rgba(208,188,255,0.45)]">
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
