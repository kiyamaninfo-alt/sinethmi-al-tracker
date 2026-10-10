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

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'candidate_profile' && e.newValue) {
        try {
          setProfile(JSON.parse(e.newValue));
        } catch (err) {}
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return profile;
}
