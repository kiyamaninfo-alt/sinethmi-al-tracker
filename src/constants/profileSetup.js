export const STANDARD_STREAMS = [
  { id: 'tech', name: 'Technology', sinhala: 'තාක්ෂණවේදය', icon: 'engineering' },
  { id: 'maths', name: 'Physical Science', sinhala: 'භෞතික විද්‍යා', icon: 'calculate' },
  { id: 'bio', name: 'Biological Science', sinhala: 'ජීව විද්‍යා', icon: 'biotech' },
  { id: 'commerce', name: 'Commerce', sinhala: 'වාණිජ අංශය', icon: 'trending_up' },
  { id: 'arts', name: 'Arts', sinhala: 'කලා අංශය', icon: 'palette' },
  { id: 'biosystems', name: 'Biosystems Tech', sinhala: 'ජෛව පද්ධති', icon: 'eco' }
];

export const COLOR_SWATCHES = [
  { id: 'cyan', name: 'Cyan', border: 'border-cyan-400', bg: 'bg-cyan-500/20', text: 'text-cyan-300', dot: 'bg-cyan-400', glow: 'shadow-[0_0_20px_rgba(34,211,238,0.25)] ring-1 ring-cyan-400/50' },
  { id: 'emerald', name: 'Emerald', border: 'border-emerald-400', bg: 'bg-emerald-500/20', text: 'text-emerald-300', dot: 'bg-emerald-400', glow: 'shadow-[0_0_20px_rgba(52,211,153,0.25)] ring-1 ring-emerald-400/50' },
  { id: 'violet', name: 'Violet', border: 'border-purple-400', bg: 'bg-purple-500/20', text: 'text-purple-300', dot: 'bg-purple-400', glow: 'shadow-[0_0_20px_rgba(192,132,252,0.25)] ring-1 ring-purple-400/50' },
  { id: 'amber', name: 'Amber', border: 'border-amber-400', bg: 'bg-amber-500/20', text: 'text-amber-300', dot: 'bg-amber-400', glow: 'shadow-[0_0_20px_rgba(251,191,36,0.25)] ring-1 ring-amber-400/50' },
  { id: 'rose', name: 'Rose', border: 'border-rose-400', bg: 'bg-rose-500/20', text: 'text-rose-300', dot: 'bg-rose-400', glow: 'shadow-[0_0_20px_rgba(251,113,133,0.25)] ring-1 ring-rose-400/50' }
];

export const RANK_TARGET_OPTIONS = [
  { label: 'Top 10 Island Rank', minZ: '2.650' },
  { label: 'Top 20 Island Rank', minZ: '2.550' },
  { label: 'Top 50 Island Rank', minZ: '2.400' },
  { label: 'Top 100 Island Rank', minZ: '2.250' },
  { label: 'Top 200 Island Rank', minZ: '2.100' },
  { label: 'Top 500 Island Rank', minZ: '1.950' },
  { label: 'District Top 10 Rank', minZ: '2.200' },
  { label: 'University Merit Pass', minZ: '1.800' }
];

export { PROVINCES_MAP } from './provinces';

export const INITIAL_PROFILE = {
  name: '',
  candidateIndex: '',
  avatarUrl: '',
  school: '',
  province: '',
  district: '',
  town: '',
  phone: '',
  stream: '',
  targetYear: '2028',
  targetRank: 'Top 50 Island Rank',
  targetZScore: '2.450',
  zScoreCriteria: { subjectMean: '52.5', standardDeviation: '14.2' },
  alarmSettings: {
    durationMinutes: 50,
    soundEnabled: true,
    soundTrack: 'radar_ping',
    randomSound: false,
    videoEnabled: false,
    videoTrack: 'lofi_study',
    customVideoUrl: '',
    randomVideo: false,
    timerColor: 'cyan'
  },
  preferences: {
    fontSize: 'default',
    theme: 'cyberpunk',
    language: 'si'
  },
  notificationSettings: {
    masterEnabled: true,
    studySessionAlerts: true,
    dailyMilestones: true,
    examCountdowns: true,
    clickSoundEnabled: true,
    keySoundEnabled: true,
    vibrateEnabled: true
  },
  subjectScoreTargets: {},
  subjects: []
};
