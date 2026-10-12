import { useEffect } from 'react';

export function useTimerTabSync({
  isActive, isPaused, secondsLeft, sessionMode, currentRound, totalRounds
}) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!isActive) {
      document.title = 'Sinethmi A/L Mission Control';
      return;
    }

    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const modeTag = sessionMode === 'study' ? 'Focus' : 'Break';
    const statusTag = isPaused ? '⏸️' : '⏱️';

    document.title = `${statusTag} [${timeStr}] ${modeTag} R${currentRound}/${totalRounds} • Mission Control`;
  }, [isActive, isPaused, secondsLeft, sessionMode, currentRound, totalRounds]);
}
