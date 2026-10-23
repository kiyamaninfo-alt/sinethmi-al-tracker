import { CORE_NAMES, CORE_SINHALA, CORE_TAMIL, ELECTIVE_NAMES } from './streamSubjectsData.js';

export const SUBJECT_CATEGORIES = [
  { id: 'core', label: 'Core Stream Disciplines', count: 50, desc: 'Primary syllabus tracks' },
  { id: 'elective', label: 'Elective & Basket Modules', count: 50, desc: 'Complementary tracks' }
];

const COLORS = ['emerald', 'cyan', 'violet', 'amber', 'rose'];

export const MOCK_100_SUBJECTS = Array.from({ length: 100 }, (_, i) => {
  const isCore = i < 50;
  const num = String(i + 1).padStart(3, '0');
  const baseName = isCore ? CORE_NAMES[i % CORE_NAMES.length] : ELECTIVE_NAMES[i % ELECTIVE_NAMES.length];
  const sinhala = isCore ? CORE_SINHALA[i % CORE_SINHALA.length] : 'අතිරේක මොඩියුලය';
  const tamil = isCore ? CORE_TAMIL[i % CORE_TAMIL.length] : 'கூடுதல் தொகுதி';
  const name = i < CORE_NAMES.length || (i >= 50 && i < 75) ? baseName : `${baseName} (Module II)`;
  return {
    id: `subj-${num}`,
    code: `AL-${num}`,
    name,
    sinhala,
    tamil,
    category: isCore ? 'core' : 'elective',
    color: COLORS[i % COLORS.length],
    hours: 12 + ((i % 4) * 2),
    units: 12 + (i % 8),
    credits: 4.0
  };
});
