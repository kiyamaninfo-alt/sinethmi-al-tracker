import { useState, useEffect, useRef } from 'react';

export function useStreamAutoLock(isEditing, setIsEditing, subjectsCount) {
  const [timeLeft, setTimeLeft] = useState(60);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isEditing || subjectsCount < 3) {
      setTimeLeft(60);
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setTimeLeft(60);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setIsEditing(false);
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isEditing, subjectsCount, setIsEditing]);

  const resetTimer = () => setTimeLeft(60);

  return { timeLeft, resetTimer };
}
