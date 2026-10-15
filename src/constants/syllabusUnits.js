import { ET_UNITS } from './etUnits.js';
import { SFT_UNITS } from './sftUnits.js';
import { ICT_UNITS } from './ictUnits.js';

export const DEFAULT_UNITS = [
  {
    num: 1, title: 'Foundational Principles & Concepts', sinhala: 'මූලික සංකල්ප සහ මූලධර්ම', tamil: 'அடிப்படை கோட்பாடுகள் & கருத்துக்கள்',
    subUnits: [
      { num: '1.1', title: 'Scope, Framework & Core Theories', tamil: 'கட்டமைப்பு & அடிப்படைக் கோட்பாடுகள்', hours: 4 },
      { num: '1.2', title: 'Methodology & Standard Models', tamil: 'முறைமை & நிலையான மாதிரிகள்', hours: 5 },
      { num: '1.3', title: 'Analytical Tools & Computations', tamil: 'பகுப்பாய்வுக் கருவிகள் & கணிப்புகள்', hours: 3 }
    ]
  },
  {
    num: 2, title: 'Intermediate Systems & Applications', sinhala: 'මධ්‍ය පද්ධති සහ ප්‍රායෝගික යෙදවුම්', tamil: 'இடைநிலை அமைப்புகள் & பயன்பாடுகள்',
    subUnits: [
      { num: '2.1', title: 'Structural Analysis & Operations', tamil: 'கட்டமைப்பு பகுப்பாய்வு & செயல்பாடுகள்', hours: 6 },
      { num: '2.2', title: 'Design, Processing & Case Studies', tamil: 'வடிவமைப்பு & ஆய்வு வழக்குகள்', hours: 5 },
      { num: '2.3', title: 'Quality Controls & Optimizations', tamil: 'தரக்கட்டுப்பாடு & மேம்பாடுகள்', hours: 4 }
    ]
  },
  {
    num: 3, title: 'Advanced Domain Problem Solving', sinhala: 'උසස් ක්ෂේත්‍ර ගැටලු විසඳීම සහ සම්මන්ත්‍රණ', tamil: 'மேம்பட்ட சிக்கல் தீர்க்கும் முறை',
    subUnits: [
      { num: '3.1', title: 'Integrative Analysis & Past Paper Review', tamil: 'கடந்த கால வினாத்தாள் பகுப்பாய்வு', hours: 6 },
      { num: '3.2', title: 'Complex Modeling & Examination Techniques', tamil: 'சிக்கலான மாதிரி & தேர்வு உத்திகள்', hours: 6 },
      { num: '3.3', title: 'Model Papers & Time Trials Evaluation', tamil: 'மாதிரி வினாத்தாள்கள் மதிப்பீடு', hours: 5 }
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
