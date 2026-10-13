import { useState, useEffect } from 'react';
import { getStoredLanguage, setStoredLanguage } from '../utils/languageStorage';

export function useAppLanguage() {
  const [language, setLanguage] = useState(getStoredLanguage);

  useEffect(() => {
    const handleUpdate = (e) => {
      const nextLang = e.detail?.preferences?.language;
      if (nextLang && nextLang !== language) {
        setLanguage(nextLang);
      }
    };
    const handleStorage = (e) => {
      if (e.key === 'candidate_profile' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (parsed?.preferences?.language) {
            setLanguage(parsed.preferences.language);
          }
        } catch {}
      }
    };

    window.addEventListener('candidate_profile_updated', handleUpdate);
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('candidate_profile_updated', handleUpdate);
      window.removeEventListener('storage', handleStorage);
    };
  }, [language]);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    setStoredLanguage(newLang);
  };

  return [language, changeLanguage];
}
