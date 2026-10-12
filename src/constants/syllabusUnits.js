import { ET_UNITS } from './etUnits';
import { SFT_UNITS } from './sftUnits';
import { ICT_UNITS } from './ictUnits';

export const DEFAULT_UNITS = [
  {
    num: 1, title: 'Foundational Principles & Concepts', sinhala: 'මූලික සංකල්ප සහ මූලධර්ම',
    subUnits: [
      { num: '1.1', title: 'Scope, Framework & Core Theories', hours: 4 },
      { num: '1.2', title: 'Methodology & Standard Models', hours: 5 },
      { num: '1.3', title: 'Analytical Tools & Computations', hours: 3 }
    ]
  },
  {
    num: 2, title: 'Intermediate Systems & Applications', sinhala: 'මධ්‍ය පද්ධති සහ ප්‍රායෝගික යෙදවුම්',
    subUnits: [
      { num: '2.1', title: 'Structural Analysis & Operations', hours: 6 },
      { num: '2.2', title: 'Design, Processing & Case Studies', hours: 5 },
      { num: '2.3', title: 'Quality Controls & Optimizations', hours: 4 }
    ]
  },
  {
    num: 3, title: 'Advanced Domain Problem Solving', sinhala: 'උසස් ක්ෂේත්‍ර ගැටලු විසඳීම සහ සම්මන්ත්‍රණ',
    subUnits: [
      { num: '3.1', title: 'Integrative Analysis & Past Paper Review', hours: 6 },
      { num: '3.2', title: 'Complex Modeling & Examination Techniques', hours: 6 },
      { num: '3.3', title: 'Model Papers & Time Trials Evaluation', hours: 5 }
    ]
  }
];

export function getUnitsForSubject(subject) {
  if (!subject) return [];
  const id = String(subject.id || '').toLowerCase();
  const code = String(subject.code || '').toLowerCase();
  const name = String(subject.name || '').toLowerCase();

  if (id === 'subj-007' || code.includes('007') || name.includes('engineering tech')) return ET_UNITS;
  if (id === 'subj-008' || code.includes('008') || name.includes('science for tech')) return SFT_UNITS;
  if (id === 'subj-005' || code.includes('005') || name.includes('information & communication')) return ICT_UNITS;

  return DEFAULT_UNITS.map((u) => ({
    ...u,
    title: `${subject.name} - ${u.title}`,
    subUnits: u.subUnits.map((su) => ({ ...su, title: `${su.title} (${subject.code || 'AL'})` }))
  }));
}
