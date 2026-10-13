import { useState, useEffect } from 'react';
import { INITIAL_PROFILE } from '../constants/profileSetup';

export function useCandidateProfile() {
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('candidate_profile');
      return saved ? JSON.parse(saved) : INITIAL_PROFILE;
    } catch (e) {
      return INITIAL_PROFILE;
    }
  });

  const updateProfile = (updater) => {
    setProfile((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater };
      try {
        localStorage.setItem('candidate_profile', JSON.stringify(next));
        window.dispatchEvent(new CustomEvent('candidate_profile_updated', { detail: next }));
      } catch {}
      return next;
    });
  };

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'candidate_profile' && e.newValue) {
        try { setProfile(JSON.parse(e.newValue)); } catch {}
      }
    };
    const handleCustom = (e) => { if (e.detail) setProfile(e.detail); };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('candidate_profile_updated', handleCustom);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('candidate_profile_updated', handleCustom);
    };
  }, []);

  return Object.assign(profile, { updateProfile });
}
