import { useEffect } from 'react';
import { getTimerMessages } from '../constants/timerMessages';

export function useTimerCountdown({
  isActive, isPaused, sessionMode, setSessionMode,
  currentRound, totalRounds, durationMin, breakMin,
  setSecondsLeft, preAlarmFired, triggerSound, startAlarm,
  setIsPreAlarm, setModalAlert, setIsPaused, setIsActive,
  setPendingNextRound, language = 'si'
}) {
  const msgs = getTimerMessages(language);

  useEffect(() => {
    if (!isActive || isPaused) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 11 && !preAlarmFired.current) {
          preAlarmFired.current = true;
          triggerSound(0.6);
          setIsPreAlarm(true);
          setModalAlert(msgs.timeRemainingWarning);
        }
        if (prev <= 1) {
          setIsPreAlarm(false);
          startAlarm();
          if (sessionMode === 'study') {
            setSessionMode('break');
            preAlarmFired.current = false;
            setModalAlert(msgs.sessionCompleted);
            return breakMin * 60;
          }
          // Break finished
          setIsPaused(true);
          preAlarmFired.current = false;
          if (currentRound < totalRounds) {
            setPendingNextRound(currentRound + 1);
          } else {
            setIsActive(false);
            setModalAlert(language === 'si' ? 'සියලුම වට සාර්ථකව අවසන් විය!' : 'All rounds completed!');
          }
          return durationMin * 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive, isPaused, sessionMode, currentRound, totalRounds, durationMin, breakMin, language]);
}
