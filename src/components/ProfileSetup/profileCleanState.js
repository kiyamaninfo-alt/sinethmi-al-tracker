import { INITIAL_PROFILE } from '../../constants/profileSetup';
import { supabase } from '../../lib/supabase';
import { mapCloudPreferences } from '../../services/preferenceService';

export function getInitialCleanProfile() {
  try {
    const saved = localStorage.getItem('candidate_profile');
    if (saved) return { ...INITIAL_PROFILE, ...JSON.parse(saved) };
  } catch (err) {
    console.warn('[getInitialCleanProfile] Local storage parse error:', err);
  }
  return INITIAL_PROFILE;
}

export async function hydrateProfileWithAuth(currentProfile, setProfile) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.id) return;
    const isEmailVerified = Boolean(user.email_confirmed_at || user.user_metadata?.email_verified);
    const cached = localStorage.getItem('candidate_profile');
    const parsedCache = cached ? JSON.parse(cached) : null;
    if (parsedCache?.userId && parsedCache.userId !== user.id) localStorage.removeItem('candidate_profile');

    const [{ data: cloudProfile }, { data: cloudSubjects }, { data: cloudPrefs }] = await Promise.all([
      supabase.from('profiles').select('*').eq('id', user.id).maybeSingle(),
      supabase.from('subjects').select('*').eq('user_id', user.id).order('display_order', { ascending: true }),
      supabase.from('student_preferences').select('*').eq('user_id', user.id).maybeSingle()
    ]);

    const generatedIndex = String(Math.abs(user.id.split('').reduce((acc, c) => ((acc << 5) - acc) + c.charCodeAt(0), 0)) % 9000000 + 1000000);
    const mappedSubjects = cloudSubjects?.length ? cloudSubjects.map((cs) => ({
      id: cs.slug, code: cs.code, name: cs.name, sinhala: cs.sinhala, color: cs.color,
      hours: Number(cs.weekly_hours), units: Number(cs.total_units), credits: Number(cs.credits),
      targetScore: Number(cs.target_score)
    })) : null;
    const cp = mapCloudPreferences(cloudPrefs);

    if (cloudProfile?.name) {
      const merged = {
        ...INITIAL_PROFILE, ...(parsedCache || {}), ...cloudProfile,
        preferences: { ...INITIAL_PROFILE.preferences, ...(parsedCache?.preferences || {}), ...(cp.preferences || {}) },
        notificationSettings: { ...INITIAL_PROFILE.notificationSettings, ...(parsedCache?.notificationSettings || {}), ...(cp.notificationSettings || {}) },
        alarmSettings: { ...INITIAL_PROFILE.alarmSettings, ...(parsedCache?.alarmSettings || {}), ...(cp.alarmSettings || {}) },
        subjects: mappedSubjects || parsedCache?.subjects || INITIAL_PROFILE.subjects,
        userId: user.id, email: user.email,
        candidateIndex: cloudProfile.candidate_index || parsedCache?.candidateIndex || generatedIndex,
        isEmailVerified, targetYear: String(cloudProfile.target_year || parsedCache?.targetYear || '2028'),
        targetRank: cloudProfile.target_rank || parsedCache?.targetRank || INITIAL_PROFILE.targetRank,
        targetZScore: String(cloudProfile.target_z_score || parsedCache?.targetZScore || INITIAL_PROFILE.targetZScore),
      };
      setProfile(merged);
      localStorage.setItem('candidate_profile', JSON.stringify(merged));
      localStorage.setItem('onboarding_completed', 'true');
      window.dispatchEvent(new CustomEvent('candidate_profile_updated', { detail: merged }));
    } else {
      setProfile((prev) => {
        const base = (prev.userId && prev.userId !== user.id) ? INITIAL_PROFILE : prev;
        const fresh = {
          ...base, preferences: { ...base.preferences, ...(cp.preferences || {}) },
          notificationSettings: { ...base.notificationSettings, ...(cp.notificationSettings || {}) },
          alarmSettings: { ...base.alarmSettings, ...(cp.alarmSettings || {}) },
          userId: user.id, email: user.email, candidateIndex: base.candidateIndex || generatedIndex, isEmailVerified
        };
        localStorage.setItem('candidate_profile', JSON.stringify(fresh));
        window.dispatchEvent(new CustomEvent('candidate_profile_updated', { detail: fresh }));
        return fresh;
      });
    }
  } catch (err) {
    console.warn('[hydrateProfileWithAuth] Auth fetch failed:', err);
  }
}
