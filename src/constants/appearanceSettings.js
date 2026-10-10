export const FONT_SIZE_OPTIONS = [
  { id: 'compact', label: 'Compact', scale: '90%', desc: 'High density view' },
  { id: 'default', label: 'Default', scale: '100%', desc: 'Standard UI scaling' },
  { id: 'large', label: 'Expanded', scale: '110%', desc: 'Enhanced readability' }
];

export const THEME_OPTIONS = [
  { id: 'cyberpunk', name: 'Cyberpunk Dark', icon: 'dark_mode', border: 'border-cyan-500/40', badge: 'bg-cyan-500/20 text-cyan-300' },
  { id: 'synthwave', name: 'Neon Synthwave', icon: 'palette', border: 'border-purple-500/40', badge: 'bg-purple-500/20 text-purple-300' },
  { id: 'matrix', name: 'Matrix Green', icon: 'terminal', border: 'border-emerald-500/40', badge: 'bg-emerald-500/20 text-emerald-300' },
  { id: 'minimal_light', name: 'Clean Light', icon: 'light_mode', border: 'border-amber-500/40', badge: 'bg-amber-500/20 text-amber-300' }
];

export const LANGUAGE_OPTIONS = [
  { id: 'en', name: 'English', native: 'English', flag: 'EN' },
  { id: 'si', name: 'Sinhala', native: 'සිංහල', flag: 'සිං' },
  { id: 'ta', name: 'Tamil', native: 'தமிழ்', flag: 'தமி' }
];

export const DEFAULT_PREFERENCES = {
  fontSize: 'default',
  theme: 'cyberpunk',
  language: 'si'
};
