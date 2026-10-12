export const MOCK_PROFILE = {
  name: 'Sinethmi Rathnayake',
  candidateIndex: 'AL2028-984210',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256',
  school: 'Visakha Vidyalaya Colombo',
  province: 'Western',
  district: 'Colombo',
  town: 'Bambalapitiya',
  phone: '+94 77 123 4567',
  stream: 'Technology',
  targetYear: '2028',
  targetRank: 'Top 50 Island Rank',
  targetZScore: '2.450',
  customExamDate: '2028-08-01',
  zScoreCriteria: { subjectMean: '52.5', standardDeviation: '14.2' },
  alarmSettings: {
    durationMinutes: 50,
    breakMinutes: '10m',
    rounds: 4,
    selectedTechnique: 'pomodoro_50_10',
    soundEnabled: true,
    soundTrack: 'radar_ping',
    randomSound: false,
    videoEnabled: true,
    videoTrack: 'lofi_study',
    customVideoUrl: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
    randomVideo: false,
    timerColor: 'cyan'
  },
  preferences: { fontSize: 'default', theme: 'cyberpunk', language: 'si' },
  notificationSettings: {
    masterEnabled: true,
    studySessionAlerts: true,
    dailyMilestones: true,
    examCountdowns: true,
    clickSoundEnabled: true,
    keySoundEnabled: true,
    vibrateEnabled: true
  },
  subjectScoreTargets: { 'subj-007': '88', 'subj-008': '92', 'subj-005': '85' },
  subjects: [
    { id: 'subj-007', code: 'AL-007', name: 'Engineering Technology', sinhala: 'ඉංජිනේරු තාක්ෂණය', category: 'core', color: 'emerald', hours: 14, units: 14, credits: 4.0 },
    { id: 'subj-008', code: 'AL-008', name: 'Science for Technology', sinhala: 'තාක්ෂණවේදය සඳහා විද්‍යාව', category: 'core', color: 'cyan', hours: 12, units: 16, credits: 4.0 },
    { id: 'subj-005', code: 'AL-005', name: 'Information & Communication Tech', sinhala: 'තොරතුරු තාක්ෂණය', category: 'core', color: 'violet', hours: 10, units: 12, credits: 4.0 }
  ]
};
