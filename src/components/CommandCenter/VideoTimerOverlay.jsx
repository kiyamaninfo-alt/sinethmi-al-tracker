import { getTimerMessages } from '../../constants/timerMessages';

export default function VideoTimerOverlay({ secondsLeft, sessionMode, isPaused, language = 'si' }) {
  if (typeof secondsLeft !== 'number') return null;
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const timeFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  const isBreak = sessionMode === 'break';
  const msgs = getTimerMessages(language);

  const statusLabel = isPaused ? msgs.pausedStatus : isBreak ? msgs.breakStatus : msgs.focusStatus;

  return (
    <div className="absolute top-3 left-3 z-20 pointer-events-none select-none flex flex-col gap-0.5">
      <div className="flex items-center gap-2">
        <span className={`w-3.5 h-3.5 rounded-full ${isBreak ? 'bg-emerald-400' : 'bg-cyan-400'} ${!isPaused ? 'animate-ping' : ''}`} />
        <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.98)]">
          {timeFormatted}
        </span>
      </div>
      <span className={`text-xs sm:text-sm font-black font-sans tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.98)] ${isBreak ? 'text-emerald-300' : 'text-cyan-300'}`}>
        {statusLabel}
      </span>
    </div>
  );
}
