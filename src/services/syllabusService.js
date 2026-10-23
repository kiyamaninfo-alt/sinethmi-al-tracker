import { supabase } from '../lib/supabase';
import { persistSyllabusUnitsToDB } from './syllabusSync';
import { getUnitTitleByLang, getSubUnitTitleByLang } from '../utils/syllabusFilter';

export async function fetchDBSubjects(userId) {
  try {
    let uid = userId;
    if (!uid) {
      const { data: authData } = await supabase.auth.getUser();
      uid = authData?.user?.id;
    }
    if (!uid) return { data: null, error: new Error('Unauthenticated') };
    const { data, error } = await supabase
      .from('subjects').select('*').eq('user_id', uid).order('display_order', { ascending: true });
    return { data, error };
  } catch (err) {
    return { data: null, error: err };
  }
}

function mapSubUnit(su, lang) {
  return {
    id: su.id, num: su.sub_number || su.num, title: getSubUnitTitleByLang(su, lang),
    rawTitle: su.title, sinhala: su.sinhala_title || su.sinhala,
    tamil: su.tamil_title || su.tamil, hours: su.target_hours || su.hours
  };
}

function mapUnit(u, lang) {
  const subs = (u.syllabus_subunits || u.subUnits || []).slice().sort((a, b) =>
    (a.sub_number || a.num).localeCompare(b.sub_number || b.num, undefined, { numeric: true })
  );
  return {
    id: u.id, num: u.unit_number ?? u.num, title: getUnitTitleByLang(u, lang),
    rawTitle: u.title, sinhala: u.sinhala_title || u.sinhala,
    tamil: u.tamil_title || u.tamil, subUnits: subs.map((su) => mapSubUnit(su, lang))
  };
}

export async function fetchSubjectSyllabus(subject, language = 'si') {
  if (!subject) return [];
  const dbId = subject.dbId || (typeof subject.id === 'string' && subject.id.length > 20 ? subject.id : null);
  if (dbId) {
    try {
      const { data, error } = await supabase
        .from('syllabus_units').select('*, syllabus_subunits(*)').eq('subject_id', dbId).order('unit_number', { ascending: true });
      if (!error && data?.length) return data.map((u) => mapUnit(u, language));
    } catch (e) {
      console.warn('[syllabusService] DB query failed, fallback:', e);
    }
  }
  const { getUnitsForSubject } = await import('../constants/syllabusUnits');
  const fallback = getUnitsForSubject(subject);
  if (dbId && fallback.length) persistSyllabusUnitsToDB(dbId, fallback).catch(() => {});
  return fallback.map((u) => mapUnit(u, language));
}

export async function fetchAllSyllabus(subjects = [], language = 'si') {
  const map = {};
  await Promise.all(subjects.map(async (s) => {
    map[s.id || s.slug || s.code] = await fetchSubjectSyllabus(s, language);
  }));
  return map;
}
