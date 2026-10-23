const PROGRESS_KEY = 'syllabus_completed_lessons';

function getInitialDefaults() {
  return {
    'subj-007': ['1.1', '1.2', '1.3', '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '3.1'],
    'subj-008': ['1.1', '1.2', '1.3', '1.4', '2.1', '2.2', '2.3', '3.1', '3.2', '4.1'],
    'subj-005': ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '2.1', '2.2', '2.3', '2.4', '3.1', '3.2']
  };
}

export function getCompletedLessonsMap() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) {
      const def = getInitialDefaults();
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(def));
      return def;
    }
    return JSON.parse(raw);
  } catch {
    return getInitialDefaults();
  }
}

export function notifySyllabusProgressUpdated() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('syllabus_progress_updated'));
  }
}

export function getSubjectCompletedCount(subject, totalLessons = 0) {
  if (!subject) return 0;
  const map = getCompletedLessonsMap();
  const subKeys = [subject.id, subject.slug, subject.code].filter(Boolean);
  let count = 0;
  for (const k of subKeys) {
    if (Array.isArray(map[k])) count = Math.max(count, map[k].length);
  }
  return totalLessons > 0 ? Math.min(count, totalLessons) : count;
}

export function markLessonCompleted(subjectId, lessonId) {
  if (!subjectId || !lessonId) return;
  const map = getCompletedLessonsMap();
  const list = Array.isArray(map[subjectId]) ? [...map[subjectId]] : [];
  if (!list.includes(String(lessonId))) {
    list.push(String(lessonId));
    map[subjectId] = list;
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(map));
      notifySyllabusProgressUpdated();
    } catch { /* ignore */ }
  }
}

export function syncProgressFromActivity(subjectId, lessonId) {
  if (subjectId && lessonId) {
    markLessonCompleted(subjectId, lessonId);
  }
}
