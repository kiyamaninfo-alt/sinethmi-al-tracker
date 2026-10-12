import { useState, useEffect } from 'react';
import { ONBOARDING_STEPS } from '../constants/onboardingTour';

function isReturningUser() {
  if (localStorage.getItem('onboarding_completed') === 'true') return true;
  try {
    const raw = localStorage.getItem('candidate_profile');
    if (raw) {
      const p = JSON.parse(raw);
      if (p?.name?.trim() || p?.userId || (p?.subjects && p.subjects.length > 0)) {
        return true;
      }
    }
  } catch (e) {}
  return false;
}

export function useOnboardingTour(isExistingUser = false) {
  const [tourStep, setTourStep] = useState(0);
  const [showTour, setShowTour] = useState(() => !isReturningUser() && !isExistingUser);

  useEffect(() => {
    if (isExistingUser && showTour && !sessionStorage.getItem('tour_manually_opened')) {
      setShowTour(false);
    }
  }, [isExistingUser, showTour]);

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
    }
  };

  const handlePrev = () => setTourStep((s) => Math.max(0, s - 1));

  const handleSkip = () => {
    sessionStorage.removeItem('tour_manually_opened');
    localStorage.setItem('onboarding_completed', 'true');
    setShowTour(false);
  };

  const startTour = () => {
    sessionStorage.setItem('tour_manually_opened', 'true');
    setTourStep(0);
    setShowTour(true);
  };

  return {
    showTour, tourStep, totalSteps: ONBOARDING_STEPS.length,
    currentStepData: ONBOARDING_STEPS[tourStep],
    handleNext, handlePrev, handleSkip, startTour
  };
}
