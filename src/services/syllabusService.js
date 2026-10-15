import { supabase } from '../lib/supabase';
import { persistSyllabusUnitsToDB } from './syllabusSync';

export async function fetchDBSubjects(userId) {
  try {
    let uid = userId;
    if (!uid) {
      const { data: authData } = await supabase.auth.getUser();
      uid = authData?.user?.id;
    }
    if (!uid) return { data: null, error: new Error('Unauthenticated') };

    const { data, error } = await supabase
      .from('subjects')
      .select('*')
      .eq('user_id', uid)
      .order('display_order', { ascending: true });

    return { data, error };
  } catch (err) {
    return { data: null, error: err };
  }
}

export async function fetchSubjectSyllabus(subject) {
  if (!subject) return [];
  const dbId = subject.dbId || (typeof subject.id === 'string' && subject.id.length > 20 ? subject.id : null);

  if (dbId) {
    try {
      const { data, error } = await supabase
        .from('syllabus_units')
        .select('*, syllabus_subunits(*)')
        .eq('subject_id', dbId)
        .order('unit_number', { ascending: true });

      if (!error && data?.length) {
        return data.map((u) => ({
          id: u.id,
          num: u.unit_number,
          title: u.title,
          sinhala: u.sinhala_title,
          subUnits: (u.syllabus_subunits || [])
            .sort((a, b) => a.sub_number.localeCompare(b.sub_number, undefined, { numeric: true }))
            .map((su) => ({ num: su.sub_number, title: su.title, hours: su.target_hours }))
        }));
      }
    } catch (e) {
      console.warn('[syllabusService] DB query failed, falling back to curriculum:', e);
    }
  }

  const { getUnitsForSubject } = await import('../constants/syllabusUnits');
  const fallbackUnits = getUnitsForSubject(subject);
  if (dbId && fallbackUnits.length) {
    persistSyllabusUnitsToDB(dbId, fallbackUnits).catch(() => {});
  }
  return fallbackUnits;
}

export async function fetchAllSyllabus(subjects = []) {
  const map = {};
  await Promise.all(
    subjects.map(async (s) => {
      const units = await fetchSubjectSyllabus(s);
      map[s.id || s.slug || s.code] = units;
    })
  );
  return map;
}
