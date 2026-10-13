import { useState, useEffect, useRef } from 'react';
import { saveProfileToCloud } from './profileSyncHelper';
import { capitalizeWords } from '../../utils/formatters';
import { ensureUniqueSubjectColors } from '../../utils/subjectColors';

const CAPITALIZED_FIELDS = new Set(['name', 'school', 'town', 'district']);

export function useCandidateProfileSetup(initialProfile) {
  const [profile, setProfile] = useState(() => {
    const init = typeof initialProfile === 'function' ? initialProfile() : initialProfile;
    return init?.subjects ? { ...init, subjects: ensureUniqueSubjectColors(init.subjects) } : init;
  });
  const [isSaved, setIsSaved] = useState(false);
  const debounceTimerRef = useRef(null);

  const handleChange = (field, val) => {
    let finalVal = val;
    if (CAPITALIZED_FIELDS.has(field)) {
      finalVal = capitalizeWords(val);
    } else if (field === 'subjects' && Array.isArray(val)) {
      finalVal = ensureUniqueSubjectColors(val);
    }

    setProfile((prev) => {
      const next = { ...prev, [field]: finalVal };
      localStorage.setItem('candidate_profile', JSON.stringify(next));
      window.dispatchEvent(new CustomEvent('candidate_profile_updated', { detail: next }));

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
    const handleUpdate = (e) => {
      if (e.detail) setProfile((prev) => ({ ...prev, ...e.detail }));
    };
    window.addEventListener('candidate_profile_updated', handleUpdate);
    return () => {
      window.removeEventListener('candidate_profile_updated', handleUpdate);
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, []);

  return { profile, setProfile, isSaved, handleChange };
}
