export default function TimerGauge({ isActive }) {
  return (
    <div className="relative w-60 h-60 flex items-center justify-center">
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-neon-violet/20 via-neon-cyan/15 to-transparent blur-2xl" />
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 240 240">
        <circle cx="120" cy="120" fill="none" r="100" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="12" />
        <defs>
          <linearGradient id="timerGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <circle className="timer-ring-circle" cx="120" cy="120" fill="none" r="100" stroke="url(#timerGradient)" strokeLinecap="round" strokeWidth="12" />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]">
          {isActive ? '49:45' : '50:00'}
        </span>
        <span className="mt-1 text-[11px] font-bold uppercase tracking-widest text-neon-cyan flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" />
          {isActive ? 'FOCUSING' : 'READY TO FOCUS'}
        </span>
        <span className="text-[10px] text-slate-400 mt-0.5">Cycle 03 of 06</span>
      </div>
    </div>
  );
}
