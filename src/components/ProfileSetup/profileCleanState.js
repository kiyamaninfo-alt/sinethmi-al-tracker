import { INITIAL_PROFILE } from '../../constants/profileSetup';

export function getInitialCleanProfile() {
  try {
    const saved = localStorage.getItem('candidate_profile');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.name && parsed.name.includes('Sinethmi Rathnayake')) {
        localStorage.removeItem('candidate_profile');
        return INITIAL_PROFILE;
      }
      return { ...INITIAL_PROFILE, ...parsed };
    }
  } catch (err) {
    console.warn('[getInitialCleanProfile] Error parsing local storage:', err);
  }
  return INITIAL_PROFILE;
}
