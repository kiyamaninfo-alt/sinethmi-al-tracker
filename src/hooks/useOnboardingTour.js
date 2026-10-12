import { useState, useEffect } from 'react';
import { ONBOARDING_STEPS } from '../constants/onboardingTour';

function isReturningUser() {
  return localStorage.getItem('onboarding_completed') === 'true';
}

function updateTourActiveFlag(isActive) {
  try {
    sessionStorage.setItem('onboarding_tour_active', isActive ? 'true' : 'false');
    window.dispatchEvent(new CustomEvent('tourstatechange', { detail: { isActive } }));
  } catch (e) {}
}

export function useOnboardingTour(onComplete) {
  const [tourStep, setTourStep] = useState(0);
  const [showTour, setShowTour] = useState(() => {
    const active = !isReturningUser();
    updateTourActiveFlag(active);
    return active;
  });

  useEffect(() => {
    updateTourActiveFlag(showTour);
  }, [showTour]);

  useEffect(() => {
    if (!showTour) return;
    const current = ONBOARDING_STEPS[tourStep];
    const el = current?.targetId ? document.getElementById(current.targetId) : null;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.focus?.();
      el.classList.add('ring-4', 'ring-cyan-400', 'ring-offset-2', 'ring-offset-slate-950');
      const timer = setTimeout(() => {
        el.classList.remove('ring-4', 'ring-cyan-400', 'ring-offset-2', 'ring-offset-slate-950');
      }, 3500);
      return () => {
        clearTimeout(timer);
        el.classList.remove('ring-4', 'ring-cyan-400', 'ring-offset-2', 'ring-offset-slate-950');
      };
    }
  }, [tourStep, showTour]);

  const handleNext = () => {
    if (tourStep < ONBOARDING_STEPS.length - 1) {
      setTourStep((s) => s + 1);
    } else {
      sessionStorage.removeItem('tour_manually_opened');
      localStorage.setItem('onboarding_completed', 'true');
      setShowTour(false);
      if (onComplete) onComplete();
    }
  };

  const handlePrev = () => setTourStep((s) => Math.max(0, s - 1));

  const handleSkip = () => {
    sessionStorage.removeItem('tour_manually_opened');
    localStorage.setItem('onboarding_completed', 'true');
    setShowTour(false);
  };

  const jumpToStep = (idx) => {
    if (typeof idx === 'number' && idx >= 0 && idx < ONBOARDING_STEPS.length) {
      setTourStep(idx);
      setShowTour(true);
    }
  };

  return {
    showTour, tourStep, totalSteps: ONBOARDING_STEPS.length,
    currentStepData: ONBOARDING_STEPS[tourStep],
    handleNext, handlePrev, handleSkip, startTour, jumpToStep
  };
}
