import { supabase } from '../lib/supabase';

export async function getProfile(userId) {
  if (!userId) return { data: null, error: new Error('User ID is required') };
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      console.error('[profileService] getProfile error:', error.message);
      return { data: null, error };
    }
    return { data, error: null };
  } catch (err) {
    console.error('[profileService] getProfile unexpected error:', err);
    return { data: null, error: err };
  }
}

export async function upsertProfile(profileData) {
  if (!profileData || !profileData.id) {
    return { data: null, error: new Error('Valid profile data with id is required') };
  }
  try {
    const { data, error } = await supabase
      .from('profiles')
      .upsert(profileData, { onConflict: 'id' })
      .select()
      .single();

    if (error) {
      console.error('[profileService] upsertProfile error:', error.message);
      return { data: null, error };
    }
    return { data, error: null };
  } catch (err) {
    console.error('[profileService] upsertProfile unexpected error:', err);
    return { data: null, error: err };
  }
}
