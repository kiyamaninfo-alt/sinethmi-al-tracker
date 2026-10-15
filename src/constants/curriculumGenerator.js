export function generateSubjectUnits(subject) {
  const name = subject?.name || 'Subject';
  const sinhala = subject?.sinhala || name;
  const code = subject?.code || 'AL';

  return [
    {
      num: 1,
      title: `${name} - Foundational Principles & Core Framework`,
      sinhala: `${sinhala} - මූලික සංකල්ප සහ මූලධර්ම`,
      subUnits: [
        { num: '1.1', title: `${name}: Historical Framework & Fundamental Theories (${code})`, hours: 4 },
        { num: '1.2', title: `${name}: Analytical Methodologies & Core Models (${code})`, hours: 5 },
        { num: '1.3', title: `${name}: Domain Terminologies & Scientific Concepts (${code})`, hours: 4 }
      ]
    },
    {
      num: 2,
      title: `${name} - Systems, Dynamics & Applied Methodology`,
      sinhala: `${sinhala} - ප්‍රායෝගික පද්ධති සහ යෙදවුම්`,
      subUnits: [
        { num: '2.1', title: `${name}: Structural Design & Practical Analysis (${code})`, hours: 5 },
        { num: '2.2', title: `${name}: Empirical Case Studies & Operational Techniques (${code})`, hours: 5 },
        { num: '2.3', title: `${name}: Evaluation Standards & Optimization Processes (${code})`, hours: 4 }
      ]
    },
    {
      num: 3,
      title: `${name} - Advanced Problem Solving & Past Paper Review`,
      sinhala: `${sinhala} - උසස් ගැටලු විසඳීම හා විභාග සම්මන්ත්‍රණ`,
      subUnits: [
        { num: '3.1', title: `${name}: Multi-Year Past Paper Question Review (${code})`, hours: 6 },
        { num: '3.2', title: `${name}: Complex Problem Solving & Exam Time Trials (${code})`, hours: 6 },
        { num: '3.3', title: `${name}: Model Paper Evaluation & Speed Practice (${code})`, hours: 5 }
      ]
    }
  ];
}
