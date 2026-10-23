import { getTargetExamDate } from '../constants/countdownUtils';

const SINHALA_MONTHS = ['ජනවාරි', 'පෙබරවාරි', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජූනි', 'ජූලි', 'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්', 'නොවැම්බර්', 'දෙසැම්බර්'];

export const SUBJECT_COLOR_THEMES = {
  emerald: { stroke: '#10B981', colorClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30', borderClass: 'border-neon-emerald/25 hover:border-neon-emerald/50' },
  violet: { stroke: '#8B5CF6', colorClass: 'text-neon-violet bg-neon-violet/15 border-neon-violet/30', borderClass: 'border-neon-violet/25 hover:border-neon-violet/50' },
  cyan: { stroke: '#06B6D4', colorClass: 'text-neon-cyan bg-neon-cyan/15 border-neon-cyan/30', borderClass: 'border-neon-cyan/25 hover:border-neon-cyan/50' },
  amber: { stroke: '#F59E0B', colorClass: 'text-amber-400 bg-amber-500/15 border-amber-500/30', borderClass: 'border-amber-500/25 hover:border-amber-500/50' },
  rose: { stroke: '#F43F5E', colorClass: 'text-rose-400 bg-rose-500/15 border-rose-500/30', borderClass: 'border-rose-500/25 hover:border-rose-500/50' }
};

export function calculateWeeksToExam(targetYear, customExamDate) {
  const target = getTargetExamDate(targetYear, customExamDate);
  const diff = Math.max(7 * 24 * 3600 * 1000, target.getTime() - Date.now());
  return Math.max(1, Math.round(diff / (7 * 24 * 3600 * 1000)));
}

export function buildSubjectTrack(subject, units = [], completed = 0, defaultColor = 'cyan') {
  const total = units.reduce((acc, u) => acc + (u.subUnits?.length || 1), 0) || 50;
  const done = Math.min(total, completed);
  const pct = Math.round((done / total) * 100);
  const remain = Math.max(0, total - done);
  const theme = SUBJECT_COLOR_THEMES[subject.color] || SUBJECT_COLOR_THEMES[defaultColor] || SUBJECT_COLOR_THEMES.cyan;
  const rawVel = Math.round(((Number(subject.hours) || 12) / 4.2) * 10) / 10;
  const weeksToFinish = Math.ceil(remain / Math.max(0.1, rawVel));
  const finishDate = new Date(Date.now() + weeksToFinish * 7 * 86400 * 1000);
  const target = `${finishDate.getFullYear()} ${SINHALA_MONTHS[finishDate.getMonth()]} නිමාව`;

  return {
    id: subject.id,
    name: `${subject.code || subject.id} (${subject.sinhala || subject.name})`,
    unitsLabel: `Unit ${done} / ${total}`,
    pct,
    remain,
    rawVel,
    vel: `${rawVel}/wk`,
    target,
    stroke: theme.stroke,
    offset: Math.round(251.2 - (251.2 * pct / 100)),
    colorClass: theme.colorClass,
    borderClass: theme.borderClass
  };
}

export function buildVelocitySummary(tracks = [], weeksToExam = 96) {
  const totalRemaining = tracks.reduce((a, t) => a + t.remain, 0);
  const requiredVelocity = weeksToExam > 0 ? (totalRemaining / weeksToExam).toFixed(1) : '0.0';
  const currentVelocity = tracks.reduce((a, t) => a + t.rawVel, 0).toFixed(1);
  return { totalRemaining, requiredVelocity, currentVelocity };
}
