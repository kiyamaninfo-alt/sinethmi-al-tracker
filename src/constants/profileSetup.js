export const STANDARD_STREAMS = [
  { id: 'tech', name: 'Technology', code: 'ET/SFT/ICT', sinhala: 'තාක්ෂණවේදය' },
  { id: 'maths', name: 'Physical Science', code: 'Combined Maths', sinhala: 'භෞතික විද්‍යා' },
  { id: 'bio', name: 'Biological Science', code: 'Biology', sinhala: 'ජීව විද්‍යා' },
  { id: 'commerce', name: 'Commerce', code: 'Accounting/Econ', sinhala: 'වාණිජ අංශය' },
  { id: 'arts', name: 'Arts', code: 'Social Sciences', sinhala: 'කලා අංශය' },
  { id: 'biosystems', name: 'Biosystems Tech', code: 'BST/SFT/Agr', sinhala: 'ජෛව පද්ධති' }
];

export const COLOR_SWATCHES = [
  { id: 'cyan', name: 'Cyan', border: 'border-cyan-400', bg: 'bg-cyan-500/20', text: 'text-cyan-400', dot: 'bg-cyan-400' },
  { id: 'emerald', name: 'Emerald', border: 'border-emerald-400', bg: 'bg-emerald-500/20', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  { id: 'violet', name: 'Violet', border: 'border-purple-400', bg: 'bg-purple-500/20', text: 'text-purple-400', dot: 'bg-purple-400' },
  { id: 'amber', name: 'Amber', border: 'border-amber-400', bg: 'bg-amber-500/20', text: 'text-amber-400', dot: 'bg-amber-400' },
  { id: 'rose', name: 'Rose', border: 'border-rose-400', bg: 'bg-rose-500/20', text: 'text-rose-400', dot: 'bg-rose-400' }
];

export const PROVINCES_MAP = {
  Western: ['Colombo', 'Gampaha', 'Kalutara'],
  Central: ['Kandy', 'Matale', 'Nuwara Eliya'],
  Southern: ['Galle', 'Matara', 'Hambantota'],
  'North Western': ['Kurunegala', 'Puttalam'],
  Northern: ['Jaffna', 'Kilinochchi', 'Mannar'],
  Eastern: ['Batticaloa', 'Ampara', 'Trincomalee'],
  'North Central': ['Anuradhapura', 'Polonnaruwa'],
  Uva: ['Badulla', 'Monaragala'],
  Sabaragamuwa: ['Ratnapura', 'Kegalle']
};

export const INITIAL_PROFILE = {
  name: 'Sinethmi Rathnayake',
  avatarUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1X_PS4ssj3l1MLwBhuXGwsVh1pDEBb4aHZkZ7uXn5TnvOOC5penLaH1rKhot9-NejghHngxQbYl-inE4WaRqJvO7mowZwjl-L8pkiqJs3TL_qnfhciMQ1suxunGUPCxs3bkfkiDrFLFDSB8gnpJFW9B7nof1xJOlFIYmYRSjcmYnieRAMJckzkLMBAAMcAMMNR7pYd5wpSJjDYsRZKbUR3Eb6PQ6zV5qeWSHJ397V8SAQ',
  school: 'Visakha Vidyalaya Colombo',
  province: 'Western',
  district: 'Colombo',
  town: 'Bambalapitiya',
  phone: '+94 77 123 4567',
  stream: 'Technology',
  targetYear: '2028',
  targetRank: 'Top 50 Island Rank',
  targetZScore: '2.450',
  subjects: [
    { id: 'et', code: 'ET-065', name: 'Engineering Technology', sinhala: 'ඉංජිනේරු තාක්ෂණවේදය', color: 'violet', units: 14, hours: 16 },
    { id: 'sft', code: 'SFT-066', name: 'Science for Technology', sinhala: 'තාක්ෂණවේදය සඳහා විද්‍යාව', color: 'cyan', units: 23, hours: 14 },
    { id: 'ict', code: 'ICT-020', name: 'Information & Comm. Tech', sinhala: 'තොරතුරු හා සන්නිවේදන', color: 'emerald', units: 13, hours: 12 }
  ]
};
