import { supabase } from '../lib/supabase';

const LOCAL_STORAGE_KEY = 'paper_evaluations_history';

function getLocalHistory() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  } catch (err) {
    void err;
    return [];
  }
}

export async function getCompletedPaperCount(subjectId, unitCode) {
  if (!subjectId) return 0;
  try {
    const { count, error } = await supabase
      .from('paper_evaluations')
      .select('id', { count: 'exact', head: true })
      .eq('unit_code', unitCode || 'ALL');

    if (!error && typeof count === 'number') return count;
  } catch (err) {
    void err;
  }

  const local = getLocalHistory();
  return local.filter((p) => p.subjectId === subjectId && (!unitCode || p.unitCode === unitCode)).length;
}

export async function submitPaperMarks(entry) {
  const localList = getLocalHistory();
  const currentCount = localList.filter((p) => p.subjectId === entry.subjectId && (!entry.unitCode || p.unitCode === entry.unitCode)).length;
  const paperNumber = currentCount + 1;

  const payload = {
    subject_id: entry.subjectId,
    paper_type: entry.paperType,
    paper_number: paperNumber,
    unit_code: entry.unitCode || 'FULL',
    paper_title: entry.paperTitle || `Paper #${paperNumber}`,
    score_percentage: Number(entry.marks),
    evaluated_date: entry.evaluatedDate ? entry.evaluatedDate.split('T')[0] : new Date().toISOString().split('T')[0],
  };

  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (user?.id) {
      const { data, error } = await supabase
        .from('paper_evaluations')
        .insert({ ...payload, user_id: user.id })
        .select()
        .single();
      if (!error && data) return { success: true, data, paperNumber };
    }
  } catch (err) {
    void err;
  }

  const localSaved = { ...entry, id: `pe-${Date.now()}`, paperNumber, createdAt: new Date().toISOString() };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([localSaved, ...localList]));
  return { success: true, data: localSaved, paperNumber };
}
