import { supabase } from '../../lib/supabase';
import { upsertProfile } from '../../services/profileService';
import { syncCandidateSubjects } from '../../services/subjectService';

export async function saveProfileToCloud(profile) {
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      const err = new Error('User not authenticated');
      console.warn('[saveProfileToCloud] Auth check failed:', authError?.message || 'No user session');
      return { success: false, error: err };
    }

    const { error: profileError } = await upsertProfile({
      id: user.id,
      name: profile.name,
      school: profile.school,
      province: profile.province,
      district: profile.district,
      town: profile.town,
      phone: profile.phone,
      stream: profile.stream,
      target_year: Number(profile.targetYear) || 2028,
      target_rank: profile.targetRank,
      target_z_score: Number(profile.targetZScore) || 2.45,
    });
    if (profileError) return { success: false, error: profileError };

    const { error: subjectsError } = await syncCandidateSubjects(user.id, profile.subjects || []);
    if (subjectsError) return { success: false, error: subjectsError };

    return { success: true, error: null };
  } catch (err) {
    console.error('[saveProfileToCloud] Unexpected sync failure:', err);
    return { success: false, error: err };
  }
}
