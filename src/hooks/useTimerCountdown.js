import { useEffect } from 'react';

export function useTimerCountdown({
  isActive,
  isPaused,
  sessionMode,
  setSessionMode,
  currentRound,
  totalRounds,
  durationMin,
  breakMin,
  setSecondsLeft,
  preAlarmFired,
  triggerSound,
  setIsPreAlarm,
  setModalAlert,
  setIsPaused,
  setIsActive,
  setPendingNextRound
}) {
  useEffect(() => {
    if (!isActive || isPaused) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 11 && !preAlarmFired.current) {
          preAlarmFired.current = true;
          triggerSound(0.6);
          setIsPreAlarm(true);
          setModalAlert('Warning: 10 seconds remaining in your current session!');
        }
        if (prev <= 1) {
          triggerSound(1.2);
          setIsPreAlarm(false);
          if (sessionMode === 'study') {
            setSessionMode('break');
            preAlarmFired.current = false;
            setModalAlert('Focus session complete! Interval break started.');
            return breakMin * 60;
          }
          if (currentRound < totalRounds) {
            setIsPaused(true);
            setPendingNextRound(currentRound + 1);
            return durationMin * 60;
          }
          setIsActive(false);
          setModalAlert('All focus rounds completed! Excellent effort.');
          return durationMin * 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive, isPaused, sessionMode, currentRound, totalRounds, durationMin, breakMin]);
}
