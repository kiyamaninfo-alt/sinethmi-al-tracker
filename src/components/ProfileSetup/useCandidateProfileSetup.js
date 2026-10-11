import { useState, useEffect, useRef } from 'react';
import { saveProfileToCloud } from './profileSyncHelper';
import { capitalizeWords } from '../../utils/formatters';

const CAPITALIZED_FIELDS = new Set(['name', 'school', 'town', 'district']);

export function useCandidateProfileSetup(initialProfile) {
  const [profile, setProfile] = useState(initialProfile);
  const [isSaved, setIsSaved] = useState(false);
  const debounceTimerRef = useRef(null);

  const handleChange = (field, val) => {
    const formattedVal = CAPITALIZED_FIELDS.has(field) ? capitalizeWords(val) : val;
    setProfile((prev) => {
      const next = { ...prev, [field]: formattedVal };
      localStorage.setItem('candidate_profile', JSON.stringify(next));

      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = setTimeout(async () => {
        setIsSaved(true);
        await saveProfileToCloud(next);
        setTimeout(() => setIsSaved(false), 2000);
      }, 700);

      return next;
    });
  };

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, []);

  return { profile, setProfile, isSaved, handleChange };
}
