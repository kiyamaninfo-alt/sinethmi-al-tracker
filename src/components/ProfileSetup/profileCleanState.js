import { INITIAL_PROFILE } from '../../constants/profileSetup';
import { supabase } from '../../lib/supabase';

export function getInitialCleanProfile() {
  try {
    const saved = localStorage.getItem('candidate_profile');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.name && parsed.name.includes('Sinethmi Rathnayake')) {
        localStorage.removeItem('candidate_profile');
        return INITIAL_PROFILE;
      }
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

    const { data: cloudProfile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();

    const generatedIndex = String(Math.abs(user.id.split('').reduce((acc, c) => ((acc << 5) - acc) + c.charCodeAt(0), 0)) % 9000000 + 1000000);

    if (cloudProfile && cloudProfile.name) {
      const merged = {
        ...INITIAL_PROFILE,
        ...cloudProfile,
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
