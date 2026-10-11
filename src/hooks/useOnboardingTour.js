import { useState, useEffect } from 'react';
import { ONBOARDING_STEPS } from '../constants/onboardingTour';

export function useOnboardingTour() {
  const [tourStep, setTourStep] = useState(0);
  const [showTour, setShowTour] = useState(() => !localStorage.getItem('onboarding_completed'));

  useEffect(() => {
    if (!showTour) return;
    const current = ONBOARDING_STEPS[tourStep];
    if (current?.targetId) {
      const el = document.getElementById(current.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.focus?.();
        el.classList.add('ring-2', 'ring-cyan-400', 'transition-all');
        const timer = setTimeout(() => {
          el.classList.remove('ring-2', 'ring-cyan-400');
        }, 2500);
        return () => {
          clearTimeout(timer);
          el.classList.remove('ring-2', 'ring-cyan-400');
        };
      }
    }
  }, [tourStep, showTour]);

  const handleNext = () => {
    if (tourStep < ONBOARDING_STEPS.length - 1) {
      setTourStep((s) => s + 1);
    } else {
      localStorage.setItem('onboarding_completed', 'true');
      setShowTour(false);
    }
  };

  const handlePrev = () => setTourStep((s) => Math.max(0, s - 1));

  const handleSkip = () => {
    localStorage.setItem('onboarding_completed', 'true');
    setShowTour(false);
  };

  const startTour = () => {
    setTourStep(0);
    setShowTour(true);
  };

  return {
    showTour,
    tourStep,
    totalSteps: ONBOARDING_STEPS.length,
    currentStepData: ONBOARDING_STEPS[tourStep],
    handleNext,
    handlePrev,
    handleSkip,
    startTour
  };
}
