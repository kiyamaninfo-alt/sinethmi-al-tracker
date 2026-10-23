import { supabase } from '../lib/supabase';
import { getLocalDateString } from '../utils/streakCalculator';
import { syncProgressFromActivity } from './syllabusProgressService';

const SESSIONS_KEY = 'study_sessions_history';
const PAPERS_KEY = 'paper_evaluations_history';
const isUuid = (id) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id);

export function getLocalStudySessions() {
  try { return JSON.parse(localStorage.getItem(SESSIONS_KEY) || '[]'); }
  catch { return []; }
}

export function notifyStudyActivityUpdated() {
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('study_activity_updated'));
}

export function getAllStudyDates() {
  const dates = new Set();
  getLocalStudySessions().forEach((s) => {
    const d = s.sessionDate || s.session_date;
    if (d) dates.add(d.slice(0, 10));
  });
  try {
    const papers = JSON.parse(localStorage.getItem(PAPERS_KEY) || '[]');
    papers.forEach((p) => {
      const d = p.evaluatedDate || p.evaluated_date || p.createdAt;
      if (d) dates.add(d.slice(0, 10));
    });
  } catch { /* ignore */ }
  return dates;
}

export async function recordStudySession({ subjectId, lessonId, topicName, durationMinutes, sessionMode = 'study', roundNumber = 1 }) {
  const now = new Date();
  const sessionDate = getLocalDateString(now);
  const timeStr = now.toTimeString().slice(0, 8);
  const newSession = {
    id: `ss-${Date.now()}`, subjectId: subjectId || 'general', lessonId: lessonId || '',
    topicName: topicName || 'Deep Focus Session', sessionDate, startTime: timeStr, stopTime: timeStr,
    durationMinutes: Number(durationMinutes) || 50, sessionMode, roundNumber: Number(roundNumber) || 1,
    roundsCompleted: 1, createdAt: now.toISOString()
  };

  const list = [newSession, ...getLocalStudySessions()];
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(list));
  if (lessonId) syncProgressFromActivity(subjectId, lessonId);
  notifyStudyActivityUpdated();

  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (user?.id) {
      let subUuid = isUuid(subjectId) ? subjectId : null;
      if (!subUuid && subjectId) {
        const { data: sRow } = await supabase.from('subjects').select('id').eq('user_id', user.id).eq('slug', subjectId).maybeSingle();
        if (sRow?.id) subUuid = sRow.id;
      }
      if (subUuid) {
        await supabase.from('study_sessions').insert({
          user_id: user.id, subject_id: subUuid, topic_name: newSession.topicName, session_date: sessionDate,
          start_time: timeStr, stop_time: timeStr, duration_minutes: newSession.durationMinutes,
          session_mode: sessionMode, round_number: newSession.roundNumber, rounds_completed: 1
        });
      }
    }
  } catch (err) { void err; }
  return newSession;
}
