import { useEffect, useRef } from 'react';

export function useTimerLiveSettingsSync({
  isActive, sessionMode, durationMin, breakMin, setSecondsLeft
}) {
  const prevDurationRef = useRef(durationMin);
  const prevBreakRef = useRef(breakMin);

  useEffect(() => {
    const oldDur = prevDurationRef.current;
    prevDurationRef.current = durationMin;
    if (oldDur !== durationMin && sessionMode === 'study') {
      const diffSec = (durationMin - oldDur) * 60;
      setSecondsLeft((prev) => (isActive ? Math.max(1, prev + diffSec) : durationMin * 60));
    }
  }, [durationMin, sessionMode, isActive, setSecondsLeft]);

  useEffect(() => {
    const oldBrk = prevBreakRef.current;
    prevBreakRef.current = breakMin;
    if (oldBrk !== breakMin && sessionMode === 'break') {
      const diffSec = (breakMin - oldBrk) * 60;
      setSecondsLeft((prev) => (isActive ? Math.max(1, prev + diffSec) : breakMin * 60));
    }
  }, [breakMin, sessionMode, isActive, setSecondsLeft]);
}
