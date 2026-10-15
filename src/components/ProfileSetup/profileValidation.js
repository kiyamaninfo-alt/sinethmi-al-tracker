export function validateProfile(profile) {
  const errors = {};
  if (!profile?.name?.trim()) {
    errors.name = 'අපේක්ෂකයාගේ සම්පූර්ණ නම ඇතුළත් කිරීම අනිවාර්යයි (Candidate Full Name is required)';
  }
  if (!profile?.phone?.trim()) {
    errors.phone = 'ක්‍රියාකාරී WhatsApp අංකය ඇතුළත් කිරීම අනිවාර්යයි (WhatsApp Number is required)';
  }
  if (!profile?.stream?.trim() || !profile?.subjects || profile.subjects.length < 3) {
    errors.stream = 'විභාග විෂය ධාරාව සහ විෂයන් 3ක් තෝරාගැනීම අනිවාර්යයි (Stream & 3 subjects required)';
  }
  if (!profile?.targetYear) {
    errors.targetYear = 'ඉලක්කගත විභාග වර්ෂය තෝරාගැනීම අනිවාර්යයි (Target Exam Year is required)';
  }
  return errors;
}

export function getFieldStepIndex(errors) {
  if (errors.name) return 0;
  if (errors.phone) return 1;
  if (errors.stream) return 2;
  if (errors.targetYear) return 3;
  return -1;
}

export function getMissingTourStepIds(errors) {
  const ids = [];
  if (errors.name) ids.push('tour-name');
  if (errors.phone) ids.push('tour-whatsapp');
  if (errors.stream) ids.push('tour-stream');
  if (errors.targetYear) ids.push('tour-year');
  return ids;
}

export function getMissingStepIdsForProfile(profile) {
  return getMissingTourStepIds(validateProfile(profile));
}

export function isReturningVisitor(profile) {
  try {
    if (localStorage.getItem('has_visited') === 'true') return true;
    if (localStorage.getItem('onboarding_completed') === 'true') return true;
    if (profile?.userId || profile?.email) return true;
    const saved = localStorage.getItem('candidate_profile');
    if (saved) {
      const p = JSON.parse(saved);
      if (p?.userId || p?.name?.trim() || p?.stream) return true;
    }
  } catch {}
  return false;
}

export function highlightField(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.focus?.();
  }
}
