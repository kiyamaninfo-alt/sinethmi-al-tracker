const STORAGE_KEY = 'syllabus_tracker_state';

export function getStoredSyllabusState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    return {};
  }
}

export function saveStoredSyllabusState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('syllabus_tracker_updated', { detail: state }));
  } catch (err) {}
}

export function getSubUnitKey(subject, subNum) {
  const sCode = subject?.code || subject?.id || 'SUB';
  return `${sCode}_${subNum}`;
}

export function getDefaultSubUnitData() {
  return {
    godaDamuda: false,
    wadeIwarai: false,
    repetitionCycle: 1,
    repetitionDate: new Date().toISOString().slice(0, 10),
    papersCompleted: 3,
    papersAverage: 82
  };
}

export function calculateUnitProgress(state, subject, unit) {
  if (!unit?.subUnits?.length) return 0;
  const completed = unit.subUnits.filter((su) => {
    const key = getSubUnitKey(subject, su.num);
    return state[key]?.wadeIwarai;
  }).length;
  return Math.round((completed / unit.subUnits.length) * 100);
}

export function isUnitFullyComplete(state, subject, unit) {
  if (!unit?.subUnits?.length) return false;
  return unit.subUnits.every((su) => {
    const key = getSubUnitKey(subject, su.num);
    const item = state[key];
    return item?.godaDamuda && item?.wadeIwarai;
  });
}
