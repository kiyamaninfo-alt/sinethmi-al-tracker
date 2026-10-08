export const hourLabels = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));

export const circadianDays = [
  { day: 'Mon', theme: 'purple', peakStart: 13, peakEnd: 17, focusHours: [4, 5, 6, 9, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22] },
  { day: 'Tue', theme: 'cyan', peakStart: 13, peakEnd: 17, focusHours: [4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22] },
  { day: 'Wed', theme: 'emerald', peakStart: 13, peakEnd: 17, focusHours: [4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22] },
  { day: 'Thu', theme: 'purple', peakStart: 13, peakEnd: 17, focusHours: [4, 5, 6, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22] },
  { day: 'Fri', theme: 'cyan', peakStart: 13, peakEnd: 17, focusHours: [4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22] },
  { day: 'Sat', theme: 'emerald', peakStart: 13, peakEnd: 17, focusHours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
  { day: 'Sun', theme: 'purple', peakStart: 13, peakEnd: 17, focusHours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
];

export function getBlockStyle(theme, hour, isFocus, isPeak) {
  if (!isFocus) return 'bg-[#121c32] hover:bg-slate-700';
  if (isPeak) {
    if (theme === 'purple') return 'bg-purple-500 shadow-[0_0_10px_#8B5CF6] hover:scale-105';
    if (theme === 'cyan') return 'bg-cyan-500 shadow-[0_0_10px_#06B6D4] hover:scale-105';
    return 'bg-emerald-500 shadow-[0_0_10px_#10B981] hover:scale-105';
  }
  if (hour === 12 || hour === 17 || hour === 20) {
    if (theme === 'purple') return 'bg-purple-600/90 shadow-[0_0_8px_#8B5CF6] hover:bg-purple-500';
    if (theme === 'cyan') return 'bg-cyan-600/90 shadow-[0_0_8px_#06B6D4] hover:bg-cyan-500';
    return 'bg-emerald-600/90 shadow-[0_0_8px_#10B981] hover:bg-emerald-500';
  }
  if (hour < 7 || hour > 21) {
    if (theme === 'purple') return 'bg-purple-950/40 hover:bg-purple-900';
    if (theme === 'cyan') return 'bg-cyan-950/40 hover:bg-cyan-900';
    return 'bg-emerald-950/40 hover:bg-emerald-900';
  }
  if (theme === 'purple') return 'bg-purple-700/70 hover:bg-purple-600';
  if (theme === 'cyan') return 'bg-cyan-700/70 hover:bg-cyan-600';
  return 'bg-emerald-700/70 hover:bg-emerald-600';
}
