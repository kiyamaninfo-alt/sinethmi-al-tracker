import { useState, useEffect, useCallback } from 'react';
import { getAllStudyDates, getLocalStudySessions } from '../services/studyActivityService';
import {
  calculateStreak,
  calculateTodayMinutes,
  calculateVsYesterday,
  get14DayActivity
} from '../utils/streakCalculator';

export function useStudyStreak() {
  const [data, setData] = useState(() => {
    const dates = getAllStudyDates();
    const sessions = getLocalStudySessions();
    return {
      streakCount: calculateStreak(dates),
      todayMinutes: calculateTodayMinutes(sessions),
      vsYesterday: calculateVsYesterday(sessions),
      heatmapDays: get14DayActivity(dates, sessions)
    };
  });

  const refreshStreak = useCallback(() => {
    const dates = getAllStudyDates();
    const sessions = getLocalStudySessions();
    setData({
      streakCount: calculateStreak(dates),
      todayMinutes: calculateTodayMinutes(sessions),
      vsYesterday: calculateVsYesterday(sessions),
      heatmapDays: get14DayActivity(dates, sessions)
    });
  }, []);

  useEffect(() => {
    refreshStreak();
    window.addEventListener('study_activity_updated', refreshStreak);
    window.addEventListener('storage', refreshStreak);
    return () => {
      window.removeEventListener('study_activity_updated', refreshStreak);
      window.removeEventListener('storage', refreshStreak);
    };
  }, [refreshStreak]);

  return { ...data, refreshStreak };
}
