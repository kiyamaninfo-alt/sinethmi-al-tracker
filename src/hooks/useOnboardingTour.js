import { useState, useEffect, useMemo } from 'react';
import { ONBOARDING_STEPS } from '../constants/onboardingTour';
import { isReturningVisitor, getMissingStepIdsForProfile } from '../components/ProfileSetup/profileValidation';
import { updateTourActiveFlag, isMobile, finishTourStorage, highlightTourElement } from './onboardingTourStorage';

export function useOnboardingTour(profile, onComplete) {
  const [tourStep, setTourStep] = useState(0);

  const initialSteps = useMemo(() => {
    if (sessionStorage.getItem('tour_manually_opened') === 'true') return ONBOARDING_STEPS;
    const missing = getMissingStepIdsForProfile(profile);
    return ONBOARDING_STEPS.filter((s) => missing.includes(s.id));
  }, []);

  const [activeSteps, setActiveSteps] = useState(initialSteps);
  const [showTour, setShowTour] = useState(() => {
    if (isMobile()) return false;
    if (sessionStorage.getItem('tour_manually_opened') === 'true') return true;
    const returning = isReturningVisitor(profile);
    const missing = getMissingStepIdsForProfile(profile);
    localStorage.setItem('has_visited', 'true');
    if (returning && missing.length === 0) return false;
    return missing.length > 0;
  });

  useEffect(() => {
    if (isMobile()) return setShowTour(false);
    if (sessionStorage.getItem('tour_manually_opened') === 'true') return;
    const missing = getMissingStepIdsForProfile(profile);
    if (missing.length === 0) setShowTour(false);
    else setActiveSteps(ONBOARDING_STEPS.filter((s) => missing.includes(s.id)));
  }, [profile?.name, profile?.phone, profile?.stream, profile?.targetYear, profile?.subjects?.length]);

  useEffect(() => { updateTourActiveFlag(showTour); }, [showTour]);

  useEffect(() => {
    if (!showTour) return;
    return highlightTourElement(activeSteps[tourStep]?.targetId);
  }, [tourStep, showTour, activeSteps]);

  const finishTour = () => { finishTourStorage(); setShowTour(false); };
  const handlePrev = () => setTourStep((s) => Math.max(0, s - 1));
  const handleNext = () => {
    if (tourStep < activeSteps.length - 1) setTourStep((s) => s + 1);
    else { finishTour(); onComplete?.(); }
  };
  const startTour = () => {
    if (isMobile()) return;
    sessionStorage.setItem('tour_manually_opened', 'true');
    setActiveSteps(ONBOARDING_STEPS);
    setTourStep(0);
    setShowTour(true);
  };
  const startFilteredTour = (stepIds) => {
    if (isMobile() || !stepIds?.length) return;
    const filtered = ONBOARDING_STEPS.filter((s) => stepIds.includes(s.id));
    if (!filtered.length) return;
    sessionStorage.setItem('tour_manually_opened', 'true');
    setActiveSteps(filtered);
    setTourStep(0);
    setShowTour(true);
  };

  return {
    showTour, tourStep, totalSteps: activeSteps.length,
    currentStepData: activeSteps[tourStep],
    handleNext, handlePrev, handleSkip: finishTour, startTour, startFilteredTour
  };
}
