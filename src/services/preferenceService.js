import { supabase } from '../lib/supabase';

export function mapCloudPreferences(p) {
  if (!p) return {};
  return {
    preferences: { fontSize: p.font_size || 'default', theme: p.theme || 'cyberpunk', language: p.language || 'si' },
    notificationSettings: {
      masterEnabled: p.master_notifications !== false,
      studySessionAlerts: p.study_session_alerts !== false,
      dailyMilestones: p.daily_milestones !== false,
      examCountdowns: p.exam_countdowns !== false,
      keySoundEnabled: p.key_sound_enabled !== false,
      vibrateEnabled: p.vibrate_enabled !== false,
      clickSoundEnabled: p.click_sound_enabled !== undefined ? p.click_sound_enabled : true
    },
    alarmSettings: {
      durationMinutes: p.duration_minutes || 50, breakMinutes: p.break_minutes || 10,
      rounds: p.rounds || 3, soundEnabled: p.sound_enabled !== false,
      soundTrack: p.sound_track || 'radar_ping', randomSound: Boolean(p.random_sound),
      videoEnabled: Boolean(p.video_enabled), videoTrack: p.video_track || 'lofi_study',
      customVideoUrl: p.custom_video_url || '', randomVideo: Boolean(p.random_video),
      timerColor: p.timer_color || 'cyan'
    }
  };
}

export async function getStudentPreferences(userId) {
  if (!userId) return { data: null, error: new Error('User ID required') };
  try {
    const { data, error } = await supabase.from('student_preferences').select('*').eq('user_id', userId).maybeSingle();
    return { data, error };
  } catch (err) {
    return { data: null, error: err };
  }
}

export async function upsertStudentPreferences(userId, profile) {
  if (!userId) return { data: null, error: new Error('User ID required') };
  const notif = profile?.notificationSettings || {};
  const pref = profile?.preferences || {};
  const alarm = profile?.alarmSettings || {};

  const payload = {
    user_id: userId,
    selected_technique: profile.studyTechnique || 'rule_50_10',
    duration_minutes: Number(alarm.durationMinutes) || 50,
    break_minutes: Number(alarm.breakMinutes) || 10,
    rounds: Number(alarm.rounds) || 3,
    sound_enabled: alarm.soundEnabled !== false,
    sound_track: alarm.soundTrack || 'radar_ping',
    random_sound: Boolean(alarm.randomSound),
    video_enabled: Boolean(alarm.videoEnabled),
    video_track: alarm.videoTrack || 'lofi_study',
    custom_video_url: alarm.customVideoUrl || '',
    random_video: Boolean(alarm.randomVideo),
    timer_color: alarm.timerColor || 'cyan',
    font_size: pref.fontSize || 'default',
    theme: pref.theme || 'cyberpunk',
    language: pref.language || 'si',
    master_notifications: notif.masterEnabled !== false,
    study_session_alerts: notif.studySessionAlerts !== false,
    daily_milestones: notif.dailyMilestones !== false,
    exam_countdowns: notif.examCountdowns !== false,
    key_sound_enabled: notif.keySoundEnabled !== false,
    vibrate_enabled: notif.vibrateEnabled !== false,
    click_sound_enabled: notif.clickSoundEnabled !== false
  };

  try {
    let { data, error } = await supabase.from('student_preferences').upsert(payload, { onConflict: 'user_id' }).select();
    if (error && error.message?.includes('click_sound_enabled')) {
      const fallback = { ...payload };
      delete fallback.click_sound_enabled;
      const res = await supabase.from('student_preferences').upsert(fallback, { onConflict: 'user_id' }).select();
      data = res.data; error = res.error;
    }
    return { data, error };
  } catch (err) { return { data: null, error: err }; }
}
