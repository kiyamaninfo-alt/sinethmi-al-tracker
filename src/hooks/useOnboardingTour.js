import { useState, useEffect } from 'react';
import { ONBOARDING_STEPS } from '../constants/onboardingTour';
import { isProfileDataAvailable } from '../components/ProfileSetup/profileValidation';
import { updateTourActiveFlag, finishTourStorage, saveTourStep, getSavedTourStep } from './onboardingTourStorage';
import { attachTourSpotlight, isMobile } from './tourElementSpotlight';

export function useOnboardingTour(profile, onComplete) {
  const [tourStep, setTourStep] = useState(() => getSavedTourStep());
  const [activeSteps, setActiveSteps] = useState(ONBOARDING_STEPS);
  const [isManuallyOpened, setIsManuallyOpened] = useState(() => {
    try {
      return sessionStorage.getItem('tour_manually_opened') === 'true';
    } catch {
      return false;
    }
  });
  const [isDismissed, setIsDismissed] = useState(false);

  const isDataAvailable = isProfileDataAvailable(profile);
  const isCompleted = typeof window !== 'undefined' && (
    localStorage.getItem('onboarding_completed') === 'true' ||
    localStorage.getItem('has_visited') === 'true' ||
    sessionStorage.getItem('onboarding_tour_active') === 'false'
  );

  const showTour = !isMobile() && (
    isManuallyOpened || (!isDismissed && !isDataAvailable && !isCompleted)
  );

  useEffect(() => { updateTourActiveFlag(showTour); }, [showTour]);
  useEffect(() => { saveTourStep(tourStep); }, [tourStep]);

  useEffect(() => {
    if (!showTour) return;
    return attachTourSpotlight(activeSteps[tourStep]?.targetId);
  }, [tourStep, showTour, activeSteps]);

  const finishTour = () => {
    setIsManuallyOpened(false);
    setIsDismissed(true);
    sessionStorage.removeItem('tour_manually_opened');
    finishTourStorage();
  };

  const handlePrev = () => setTourStep((s) => Math.max(0, s - 1));
  const handleNext = () => {
    if (tourStep < activeSteps.length - 1) setTourStep((s) => s + 1);
    else { finishTour(); onComplete?.(); }
  };

  const startTour = () => {
    if (isMobile()) return;
    sessionStorage.setItem('tour_manually_opened', 'true');
    setIsDismissed(false);
    setIsManuallyOpened(true);
    setActiveSteps(ONBOARDING_STEPS);
    setTourStep(0);
  };

  const startFilteredTour = (stepIds) => {
    if (isMobile() || !stepIds?.length) return;
    const filtered = ONBOARDING_STEPS.filter((s) => stepIds.includes(s.id) || s.id === 'tour-save');
    if (!filtered.length) return;
    sessionStorage.setItem('tour_manually_opened', 'true');
    setIsDismissed(false);
    setIsManuallyOpened(true);
    setActiveSteps(filtered);
    setTourStep(0);
  };

  return {
    showTour, tourStep, totalSteps: activeSteps.length,
    currentStepData: activeSteps[tourStep],
    handleNext, handlePrev, handleSkip: finishTour, startTour, startFilteredTour
  };
}
