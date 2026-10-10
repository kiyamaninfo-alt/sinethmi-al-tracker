export const DEFAULT_UNITS = [
  {
    num: 1,
    title: 'Foundational Principles & Concepts',
    sinhala: 'මූලික සංකල්ප සහ මූලධර්ම',
    subUnits: [
      { num: '1.1', title: 'Scope, Framework & Core Theories', hours: 4 },
      { num: '1.2', title: 'Methodology & Standard Models', hours: 5 },
      { num: '1.3', title: 'Analytical Tools & Computations', hours: 3 }
    ]
  },
  {
    num: 2,
    title: 'Intermediate Systems & Applications',
    sinhala: 'මධ්‍ය පද්ධති සහ ප්‍රායෝගික යෙදවුම්',
    subUnits: [
      { num: '2.1', title: 'Structural Analysis & Operations', hours: 6 },
      { num: '2.2', title: 'Design, Processing & Case Studies', hours: 5 },
      { num: '2.3', title: 'Quality Controls & Optimizations', hours: 4 }
    ]
  },
  {
    num: 3,
    title: 'Advanced Domain Problem Solving',
    sinhala: 'උසස් ක්ෂේත්‍ර ගැටලු විසඳීම සහ සම්මන්ත්‍රණ',
    subUnits: [
      { num: '3.1', title: 'Integrative Analysis & Past Paper Review', hours: 6 },
      { num: '3.2', title: 'Complex Modeling & Examination Techniques', hours: 8 }
    ]
  }
];

export function getUnitsForSubject(subject) {
  if (!subject) return [];
  const baseUnits = DEFAULT_UNITS;
  const count = subject.units || 14;
  return baseUnits.map((u) => ({
    ...u,
    title: `${subject.name} - ${u.title}`,
    subUnits: u.subUnits.map((su) => ({
      ...su,
      title: `${su.title} (${subject.code || 'AL'})`
    }))
  }));
}
