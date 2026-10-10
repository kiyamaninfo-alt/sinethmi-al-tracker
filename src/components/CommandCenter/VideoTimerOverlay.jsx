export default function VideoTimerOverlay({ secondsLeft, sessionMode, isPaused }) {
  if (typeof secondsLeft !== 'number') return null;
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const timeFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  const isBreak = sessionMode === 'break';

  return (
    <div className="absolute top-3 left-3 z-20 pointer-events-none select-none flex items-center gap-1.5">
      <span className={`w-2 h-2 rounded-full ${isBreak ? 'bg-emerald-400' : 'bg-cyan-400'} ${!isPaused ? 'animate-ping' : ''}`} />
      <span className="text-xl sm:text-2xl font-black font-mono tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
        {timeFormatted}
      </span>
      <span className={`text-[10px] font-mono font-bold uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] ${isBreak ? 'text-emerald-400' : 'text-cyan-300'}`}>
        {isPaused ? 'PAUSED' : isBreak ? 'REST' : 'FOCUS'}
      </span>
    </div>
  );
}
