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

export function isProfileDataAvailable(profile) {
  if (profile) {
    if (profile.name?.trim() || profile.stream?.trim() || profile.phone?.trim() || profile.school?.trim()) return true;
    if (profile.district?.trim() || profile.town?.trim() || (profile.candidateIndex && String(profile.candidateIndex).trim())) return true;
    if (Array.isArray(profile.subjects) && profile.subjects.length > 0) return true;
  }
  try {
    if (localStorage.getItem('onboarding_completed') === 'true') return true;
    const raw = localStorage.getItem('candidate_profile');
    if (raw) {
      const p = JSON.parse(raw);
      if (p?.name?.trim() || p?.stream?.trim() || p?.phone?.trim() || p?.school?.trim() || p?.subjects?.length) return true;
    }
  } catch {
    return false;
  }
  return false;
}

export function isReturningVisitor(profile) {
  return isProfileDataAvailable(profile);
}

export function highlightField(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.focus?.();
  }
}
