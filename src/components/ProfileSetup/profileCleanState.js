import { INITIAL_PROFILE } from '../../constants/profileSetup';
import { supabase } from '../../lib/supabase';

export function getInitialCleanProfile() {
  try {
    const saved = localStorage.getItem('candidate_profile');
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...INITIAL_PROFILE, ...parsed };
    }
  } catch (err) {
    console.warn('[getInitialCleanProfile] Error parsing local storage:', err);
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

    if (parsedCache && parsedCache.userId && parsedCache.userId !== user.id) {
      localStorage.removeItem('candidate_profile');
    }

    const [{ data: cloudProfile }, { data: cloudSubjects }] = await Promise.all([
      supabase.from('profiles').select('*').eq('id', user.id).maybeSingle(),
      supabase.from('subjects').select('*').eq('user_id', user.id).order('display_order', { ascending: true })
    ]);

    const generatedIndex = String(Math.abs(user.id.split('').reduce((acc, c) => ((acc << 5) - acc) + c.charCodeAt(0), 0)) % 9000000 + 1000000);

    const mappedSubjects = cloudSubjects && cloudSubjects.length > 0 ? cloudSubjects.map((cs) => ({
      id: cs.slug, code: cs.code, name: cs.name, sinhala: cs.sinhala, color: cs.color,
      hours: Number(cs.weekly_hours), units: Number(cs.total_units), credits: Number(cs.credits),
      targetScore: Number(cs.target_score)
    })) : null;

    if (cloudProfile && cloudProfile.name) {
      const merged = {
        ...INITIAL_PROFILE,
        ...cloudProfile,
        subjects: mappedSubjects || parsedCache?.subjects || INITIAL_PROFILE.subjects,
        userId: user.id,
        email: user.email,
        candidateIndex: cloudProfile.candidate_index || generatedIndex,
        isEmailVerified,
        targetYear: String(cloudProfile.target_year || '2028'),
        targetRank: cloudProfile.target_rank || INITIAL_PROFILE.targetRank,
        targetZScore: String(cloudProfile.target_z_score || INITIAL_PROFILE.targetZScore),
      };
      setProfile(merged);
      localStorage.setItem('candidate_profile', JSON.stringify(merged));
      localStorage.setItem('onboarding_completed', 'true');
    } else {
      setProfile((prev) => {
        const isPreviousUser = prev.userId && prev.userId !== user.id;
        const base = isPreviousUser ? INITIAL_PROFILE : prev;
        const fresh = {
          ...base,
          userId: user.id,
          email: user.email,
          candidateIndex: base.candidateIndex || generatedIndex,
          isEmailVerified
        };
        localStorage.setItem('candidate_profile', JSON.stringify(fresh));
        return fresh;
      });
    }
  } catch (err) {
    console.warn('[hydrateProfileWithAuth] Auth fetch failed:', err);
  }
}
