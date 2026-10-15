import { supabase } from '../lib/supabase';

export async function persistSyllabusUnitsToDB(subjectId, units = []) {
  if (!subjectId || !units.length) return { count: 0 };
  try {
    let insertedUnitsCount = 0;
    for (const u of units) {
      const { data: unitRow, error: uErr } = await supabase
        .from('syllabus_units')
        .upsert(
          { subject_id: subjectId, unit_number: Number(u.num), title: u.title, sinhala_title: u.sinhala || '' },
          { onConflict: 'subject_id,unit_number' }
        )
        .select('id')
        .single();

      if (uErr || !unitRow?.id) continue;
      insertedUnitsCount++;

      const subPayload = (u.subUnits || []).map((su) => ({
        unit_id: unitRow.id,
        sub_number: String(su.num),
        title: su.title || '',
        target_hours: Number(su.hours || 4)
      }));

      if (subPayload.length > 0) {
        await supabase
          .from('syllabus_subunits')
          .upsert(subPayload, { onConflict: 'unit_id,sub_number' });
      }
    }
    return { count: insertedUnitsCount, error: null };
  } catch (err) {
    console.warn('[syllabusSync] Failed to persist units to DB:', err);
    return { count: 0, error: err };
  }
}
