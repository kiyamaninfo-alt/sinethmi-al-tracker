import { useEffect, useRef } from 'react';
import { getTimerMessages } from '../constants/timerMessages';

export function useTimerCountdown({
  isActive, isPaused, sessionMode, setSessionMode,
  currentRound, totalRounds, durationMin, breakMin,
  setSecondsLeft, preAlarmFired, triggerSound, startAlarm,
  setModalAlert, setIsPaused, setIsActive,
  setPendingNextRound, setShowVideo, language = 'si',
  onStudyCompleted
}) {
  const msgs = getTimerMessages(language);
  const reportedRoundRef = useRef(null);

  useEffect(() => {
    if (!isActive || isPaused) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          startAlarm();
          if (sessionMode === 'study') {
            if (reportedRoundRef.current !== currentRound) {
              reportedRoundRef.current = currentRound;
              if (typeof onStudyCompleted === 'function') onStudyCompleted({ currentRound, durationMin });
            }
            if (currentRound >= totalRounds) {
              setIsActive(false);
              setShowVideo(false);
              setModalAlert(msgs.allRoundsCompleted);
              return 0;
            }
            setSessionMode('break');
            preAlarmFired.current = false;
            setModalAlert(msgs.sessionCompleted);
            return breakMin * 60;
          }
          reportedRoundRef.current = null;
          setIsPaused(true);
          preAlarmFired.current = false;
          if (currentRound < totalRounds) {
            setPendingNextRound(currentRound + 1);
          } else {
            setIsActive(false);
            setShowVideo(false);
            setModalAlert(msgs.allRoundsCompleted);
          }
          return durationMin * 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive, isPaused, sessionMode, currentRound, totalRounds, durationMin, breakMin, language, onStudyCompleted]);
}
