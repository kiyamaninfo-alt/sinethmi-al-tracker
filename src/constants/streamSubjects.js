export const SUBJECT_CATEGORIES = [
  { id: 'core', label: 'Core Stream Disciplines', count: 50, desc: 'Primary syllabus tracks' },
  { id: 'elective', label: 'Elective & Basket Modules', count: 50, desc: 'Complementary tracks' }
];

const CORE_NAMES = [
  'Biology', 'Chemistry', 'Physics', 'Combined Mathematics',
  'Information & Communication Tech', 'Agricultural Science', 'Engineering Technology',
  'Science for Technology', 'Accounting', 'Business Studies', 'Economics', 'Political Science',
  'Logic & Scientific Method', 'Geography', 'Sinhala Language', 'English Literature',
  'Buddhist Culture', 'Art & Design', 'Communication & Media', 'Applied Statistics',
  'Higher Mathematics', 'Civil Tech Studies', 'Mechanical Tech Systems',
  'Electrical & Electronic Tech', 'Food & Bio Process Tech'
];

const CORE_SINHALA = [
  'ජීව විද්‍යාව', 'රසායන විද්‍යාව', 'භෞතික විද්‍යාව', 'සංයුක්ත ගණිතය',
  'තොරතුරු තාක්ෂණය', 'කෘෂි විද්‍යාව', 'ඉංජිනේරු තාක්ෂණය',
  'තාක්ෂණවේදය සඳහා විද්‍යාව', 'ගිණුම්කරණය', 'ව්‍යාපාර අධ්‍යයනය', 'ආර්ථික විද්‍යාව',
  'දේශපාලන විද්‍යාව', 'තර්ක ශාස්ත්‍රය', 'භූගෝල විද්‍යාව', 'සිංහල', 'ඉංග්‍රීසි සාහිත්‍යය',
  'බෞද්ධ සංස්කෘතිය', 'චිත්‍ර කලාව', 'සන්නිවේදනය හා මාධ්‍ය', 'සංඛ්‍යානය',
  'උසස් ගණිතය', 'සිවිල් තාක්ෂණය', 'යාන්ත්‍රික තාක්ෂණය', 'ඉලෙක්ට්‍රොනික', 'ආහාර තාක්ෂණය'
];

const CORE_TAMIL = [
  'உயிரியல்', 'வேதியியல்', 'பௌதிகவியல்', 'இணைந்த கணிதம்',
  'தகவல் மற்றும் தொடர்பாடல் தொழில்நுட்பம்', 'விவசாய அறிவியல்', 'பொறியியல் தொழில்நுட்பம்',
  'தொழில்நுட்பத்திற்கான அறிவியல்', 'கணக்கியல்', 'வணிகக் கல்வி', 'பொருளியல்',
  'அரசியல் அறிவியல்', 'அளவையியலும் விஞ்ஞான முறையும்', 'புவியியல்', 'சிங்கள மொழி', 'ஆங்கில இலக்கியம்',
  'பௌத்த கலாச்சாரம்', 'சித்திரக்கலை', 'தொடர்பாடலும் ஊடகக் கல்வியும்', 'புள்ளிவிவரவியல்',
  'உயர் கணிதம்', 'சிவில் தொழில்நுட்பம்', 'இயந்திர தொழில்நுட்பம்', 'மின் மற்றும் மின்னணு', 'உணவு தொழில்நுட்பம்'
];

const ELECTIVE_NAMES = [
  'Software Development', 'Data Analytics & AI', 'Robotics & Embedded Systems', 'Graphic Design & VFX',
  'Cybersecurity Fundamentals', 'Environmental Science', 'Astronomy & Astrophysics', 'Marine Biology',
  'Business Analytics', 'Entrepreneurship & Innovation', 'International Relations', 'Psychology & Behaviour',
  'Creative Writing', 'Media Production & Journalism', 'Foreign Languages (French/German)', 'Music & Audio Tech',
  'Philosophy & Ethics', 'Urban Planning & Architecture', 'Forensic Science', 'Nutrition & Health Sciences',
  'Nanotechnology Basics', 'Renewable Energy Systems', 'Financial Markets & Trading', 'Digital Marketing',
  'Heritage & Archaeology'
];

const COLORS = ['emerald', 'cyan', 'violet', 'amber', 'rose'];

export const MOCK_100_SUBJECTS = Array.from({ length: 100 }, (_, i) => {
  const isCore = i < 50;
  const num = String(i + 1).padStart(3, '0');
  const baseName = isCore ? CORE_NAMES[i % CORE_NAMES.length] : ELECTIVE_NAMES[i % ELECTIVE_NAMES.length];
  const sinhala = isCore ? CORE_SINHALA[i % CORE_SINHALA.length] : 'අතිරේක මොඩියුලය';
  const tamil = isCore ? CORE_TAMIL[i % CORE_TAMIL.length] : 'கூடுதல் தொகுதி';
  const name = i < 25 || (i >= 50 && i < 75) ? baseName : `${baseName} (Module II)`;
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
