export const HEATMAP_LEVEL_CLS = [
  'bg-white/5 border-white/5', 'bg-neon-cyan/30 border-neon-cyan/20', 'bg-neon-cyan/60 border-neon-cyan/40',
  'bg-emerald-500/80 border-emerald-400 shadow-glow-emerald/30', 'bg-gradient-to-tr from-neon-cyan to-neon-violet border-white'
];

export function getLocalDateString(d = new Date()) {
  const date = typeof d === 'string' ? new Date(d) : d;
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${m}-${day}`;
}

export function calculateStreak(studyDatesSet = new Set()) {
  if (!studyDatesSet || studyDatesSet.size === 0) return 0;
  const curr = new Date();
  let streak = 0;
  if (studyDatesSet.has(getLocalDateString(curr))) {
    streak = 1;
    curr.setDate(curr.getDate() - 1);
  } else {
    curr.setDate(curr.getDate() - 1);
    if (!studyDatesSet.has(getLocalDateString(curr))) return 0;
    streak = 1;
    curr.setDate(curr.getDate() - 1);
  }
  while (studyDatesSet.has(getLocalDateString(curr))) {
    streak++;
    curr.setDate(curr.getDate() - 1);
  }
  return streak;
}

export function calculateTodayMinutes(sessions = []) {
  const todayStr = getLocalDateString();
  return sessions.reduce((acc, s) => {
    const sDate = s.sessionDate || s.session_date;
    return sDate === todayStr ? acc + (Number(s.durationMinutes || s.duration_minutes) || 0) : acc;
  }, 0);
}

export function calculateVsYesterday(sessions = []) {
  const todayStr = getLocalDateString();
  const yest = new Date();
  yest.setDate(yest.getDate() - 1);
  const yestStr = getLocalDateString(yest);

  let todayM = 0; let yestM = 0;
  for (const s of sessions) {
    const sDate = s.sessionDate || s.session_date;
    const dur = Number(s.durationMinutes || s.duration_minutes) || 0;
    if (sDate === todayStr) todayM += dur;
    if (sDate === yestStr) yestM += dur;
  }
  if (yestM === 0) return { pct: todayM > 0 ? 100 : 0, isIncrease: true };
  const diff = todayM - yestM;
  return { pct: Math.round(Math.abs(diff) / yestM * 100), isIncrease: diff >= 0 };
}

export function get14DayActivity(studyDatesSet = new Set(), sessions = []) {
  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const todayStr = getLocalDateString();
  return Array.from({ length: 14 }, (_, idx) => {
    const d = new Date();
    d.setDate(d.getDate() - (13 - idx));
    const dStr = getLocalDateString(d);
    const mins = sessions.filter((s) => (s.sessionDate || s.session_date) === dStr)
      .reduce((a, b) => a + (Number(b.durationMinutes || b.duration_minutes) || 0), 0);
    const isStudied = studyDatesSet.has(dStr);
    const level = mins >= 90 ? 4 : mins >= 50 ? 3 : (mins > 25 ? 2 : (mins > 0 || isStudied ? 1 : 0));
    return { date: dStr, label: dayNames[d.getDay()], minutes: mins, level, isToday: dStr === todayStr };
  });
}
