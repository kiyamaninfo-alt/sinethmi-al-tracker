import { useState, useEffect } from 'react';
import { ONBOARDING_STEPS } from '../constants/onboardingTour';
import { isReturningVisitor, getMissingStepIdsForProfile } from '../components/ProfileSetup/profileValidation';
import { updateTourActiveFlag, finishTourStorage, saveTourStep, getSavedTourStep } from './onboardingTourStorage';
import { attachTourSpotlight, isMobile } from './tourElementSpotlight';

export function useOnboardingTour(profile, onComplete) {
  const [tourStep, setTourStep] = useState(() => getSavedTourStep());
  const [activeSteps, setActiveSteps] = useState(ONBOARDING_STEPS);

  const [showTour, setShowTour] = useState(() => {
    if (isMobile()) return false;
    if (sessionStorage.getItem('tour_manually_opened') === 'true') return true;
    if (sessionStorage.getItem('onboarding_tour_active') === 'false') return false;
    if (sessionStorage.getItem('onboarding_tour_active') === 'true') return true;
    if (localStorage.getItem('onboarding_completed') === 'true') return false;
    const returning = isReturningVisitor(profile);
    if (returning) return getMissingStepIdsForProfile(profile).length > 0;
    return true;
  });

  useEffect(() => { updateTourActiveFlag(showTour); }, [showTour]);
  useEffect(() => { saveTourStep(tourStep); }, [tourStep]);

  useEffect(() => {
    if (!showTour) return;
    return attachTourSpotlight(activeSteps[tourStep]?.targetId);
  }, [tourStep, showTour, activeSteps]);

  const finishTour = () => { finishTourStorage(); setShowTour(false); };
  const handlePrev = () => setTourStep((s) => Math.max(0, s - 1));

  const handleNext = () => {
    if (tourStep < activeSteps.length - 1) {
      setTourStep((s) => s + 1);
    } else {
      const missing = getMissingStepIdsForProfile(profile);
      if (missing.length === 0) {
        finishTour();
        onComplete?.();
      }
    }
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
    const filtered = ONBOARDING_STEPS.filter((s) => stepIds.includes(s.id) || s.id === 'tour-save');
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
