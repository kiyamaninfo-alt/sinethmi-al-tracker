export function getStoredLanguage() {
  try {
    const raw = localStorage.getItem('candidate_profile');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed?.preferences?.language) return parsed.preferences.language;
    }
  } catch {}
  return 'si';
}

export function setStoredLanguage(newLang) {
  try {
    const raw = localStorage.getItem('candidate_profile');
    const profile = raw ? JSON.parse(raw) : {};
    const updated = {
      ...profile,
      preferences: { ...(profile.preferences || {}), language: newLang }
    };
    localStorage.setItem('candidate_profile', JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('candidate_profile_updated', { detail: updated }));
    return updated;
  } catch {
    return null;
  }
}
