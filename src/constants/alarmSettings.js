export const AVAILABLE_SOUNDS = [
  { id: 'radar_ping', name: 'Radar Ping', icon: 'sensors' },
  { id: 'cyber_chime', name: 'Cyber Chime', icon: 'notifications_active' },
  { id: 'zen_bell', name: 'Zen Bell', icon: 'notifications' },
  { id: 'lofi_synth', name: 'Lo-Fi Synth', icon: 'music_note' },
  { id: 'pulse_alarm', name: 'Pulse Alarm', icon: 'alarm' }
];

export const AVAILABLE_VIDEOS = [
  { id: 'lofi_study', name: 'Lofi Cyber Cafe', url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk' },
  { id: 'rain_neon', name: 'Neon Rain Ambience', url: 'https://www.youtube.com/watch?v=mPZkdNFkNps' },
  { id: 'deep_focus', name: 'Deep Space Focus', url: 'https://www.youtube.com/watch?v=WPni755-Krg' },
  { id: 'synthwave', name: 'Synthwave Odyssey', url: 'https://www.youtube.com/watch?v=4xDzrJKXOOY' }
];

export const TIMER_COLORS = [
  { id: 'cyan', name: 'Neon Cyan', colorClass: 'text-cyan-400', borderClass: 'border-cyan-400', bgClass: 'bg-cyan-500/20' },
  { id: 'emerald', name: 'Matrix Emerald', colorClass: 'text-emerald-400', borderClass: 'border-emerald-400', bgClass: 'bg-emerald-500/20' },
  { id: 'amber', name: 'Solar Amber', colorClass: 'text-amber-400', borderClass: 'border-amber-400', bgClass: 'bg-amber-500/20' },
  { id: 'rose', name: 'Crimson Rose', colorClass: 'text-rose-400', borderClass: 'border-rose-400', bgClass: 'bg-rose-500/20' },
  { id: 'purple', name: 'Void Purple', colorClass: 'text-purple-400', borderClass: 'border-purple-400', bgClass: 'bg-purple-500/20' }
];

export const DEFAULT_ALARM_SETTINGS = {
  durationMinutes: 50,
  soundEnabled: true,
  soundTrack: 'radar_ping',
  randomSound: false,
  videoEnabled: false,
  videoTrack: 'lofi_study',
  customVideoUrl: '',
  randomVideo: false,
  timerColor: 'cyan'
};
