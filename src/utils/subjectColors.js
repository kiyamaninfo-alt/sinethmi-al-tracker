import { COLOR_SWATCHES } from '../constants/profileSetup';

export function getAvailableColor(existingSubjects = [], preferredColor = null) {
  const usedColors = new Set(existingSubjects.map((s) => s.color).filter(Boolean));
  if (preferredColor && !usedColors.has(preferredColor)) {
    return preferredColor;
  }
  const available = COLOR_SWATCHES.find((sw) => !usedColors.has(sw.id));
  return available ? available.id : COLOR_SWATCHES[0].id;
}

export function ensureUniqueSubjectColors(subjects = []) {
  const usedColors = new Set();
  return subjects.map((sub) => {
    let color = sub.color;
    if (!color || usedColors.has(color)) {
      const next = COLOR_SWATCHES.find((sw) => !usedColors.has(sw.id));
      color = next ? next.id : COLOR_SWATCHES[0].id;
    }
    usedColors.add(color);
    return { ...sub, color };
  });
}
