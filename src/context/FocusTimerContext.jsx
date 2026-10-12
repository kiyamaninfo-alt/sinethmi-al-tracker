import { createContext, useContext } from 'react';
import { useCandidateProfile } from '../hooks/useCandidateProfile';
import { useFocusTimerLogic } from '../hooks/useFocusTimerLogic';

const FocusTimerContext = createContext(null);

export function FocusTimerProvider({ children }) {
  const profile = useCandidateProfile();
  const timer = useFocusTimerLogic(profile?.alarmSettings || {}, profile?.preferences || {});

  return (
    <FocusTimerContext.Provider value={{ timer, profile }}>
      {children}
    </FocusTimerContext.Provider>
  );
}

export function useGlobalFocusTimer() {
  const ctx = useContext(FocusTimerContext);
  if (!ctx) throw new Error('useGlobalFocusTimer must be used within FocusTimerProvider');
  return ctx;
}
