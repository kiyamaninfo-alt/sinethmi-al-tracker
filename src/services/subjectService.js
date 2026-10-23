import { supabase } from '../lib/supabase';

export async function getCandidateSubjects(userId) {
  if (!userId) return { data: null, error: new Error('User ID is required') };
  try {
    const { data, error } = await supabase
      .from('subjects')
      .select('*')
      .eq('user_id', userId)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('[subjectService] getCandidateSubjects error:', error.message);
      return { data: null, error };
    }
    return { data, error: null };
  } catch (err) {
    console.error('[subjectService] getCandidateSubjects unexpected error:', err);
    return { data: null, error: err };
  }
}

export async function syncCandidateSubjects(userId, subjectsArray = []) {
  if (!userId) return { data: null, error: new Error('User ID is required') };
  try {
    if (subjectsArray.length === 0) {
      const { error: delErr } = await supabase.from('subjects').delete().eq('user_id', userId);
      return { data: [], error: delErr };
    }

    const payload = subjectsArray.map((s, idx) => ({
      user_id: userId,
      slug: s.id || s.slug || `sub_${idx}`,
      code: s.code || s.id?.toUpperCase() || `SUB-${idx}`,
      name: s.name || '',
      sinhala: s.sinhala || '',
      tamil: s.tamil || '',
      color: s.color || 'cyan',
      target_score: Number(s.targetScore ?? s.target_score ?? 75),
      weekly_hours: Number(s.hours ?? s.weekly_hours ?? 8),
      total_units: Number(s.units ?? s.total_units ?? 14),
      credits: Number(s.credits ?? 4.0),
      display_order: idx
    }));

    const activeSlugs = payload.map((p) => p.slug);
    await supabase.from('subjects').delete().eq('user_id', userId).not('slug', 'in', `(${activeSlugs.join(',')})`);

    const { data, error } = await supabase
      .from('subjects')
      .upsert(payload, { onConflict: 'user_id,slug' })
      .select();

    if (error) {
      console.error('[subjectService] syncCandidateSubjects error:', error.message);
      return { data: null, error };
    }
    return { data, error: null };
  } catch (err) {
    console.error('[subjectService] syncCandidateSubjects unexpected error:', err);
    return { data: null, error: err };
  }
}
