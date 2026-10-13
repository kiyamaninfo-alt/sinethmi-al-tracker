import { useState, useEffect } from 'react';
import { ONBOARDING_STEPS } from '../constants/onboardingTour';

function updateTourActiveFlag(isActive) {
  try {
    sessionStorage.setItem('onboarding_tour_active', isActive ? 'true' : 'false');
    window.dispatchEvent(new CustomEvent('tourstatechange', { detail: { isActive } }));
  } catch {}
}

export function useOnboardingTour(onComplete) {
  const [tourStep, setTourStep] = useState(0);
  const [activeSteps, setActiveSteps] = useState(ONBOARDING_STEPS);
  const [showTour, setShowTour] = useState(() => {
    const active = localStorage.getItem('onboarding_completed') !== 'true';
    updateTourActiveFlag(active);
    return active;
  });

  useEffect(() => { updateTourActiveFlag(showTour); }, [showTour]);

  useEffect(() => {
    if (!showTour) return;
    const current = activeSteps[tourStep];
    const el = current?.targetId ? document.getElementById(current.targetId) : null;
    if (el) {
      const isMobile = window.innerWidth < 640;
      el.scrollIntoView({ behavior: 'smooth', block: isMobile ? 'nearest' : 'center' });
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
  }, [tourStep, showTour, activeSteps]);

  const handlePrev = () => setTourStep((s) => Math.max(0, s - 1));
  const finishTour = () => {
    sessionStorage.removeItem('tour_manually_opened');
    localStorage.setItem('onboarding_completed', 'true');
    setShowTour(false);
  };
  const handleSkip = finishTour;
  const handleNext = () => {
    if (tourStep < activeSteps.length - 1) setTourStep((s) => s + 1);
    else { finishTour(); if (onComplete) onComplete(); }
  };



  const startTour = () => {
    sessionStorage.setItem('tour_manually_opened', 'true');
    setActiveSteps(ONBOARDING_STEPS);
    setTourStep(0);
    setShowTour(true);
  };

  const startFilteredTour = (stepIds) => {
    if (!stepIds || stepIds.length === 0) return;
    const filtered = ONBOARDING_STEPS.filter((s) => stepIds.includes(s.id));
    if (filtered.length === 0) return;
    sessionStorage.setItem('tour_manually_opened', 'true');
    setActiveSteps(filtered);
    setTourStep(0);
    setShowTour(true);
  };

  return {
    showTour, tourStep, totalSteps: activeSteps.length,
    currentStepData: activeSteps[tourStep],
    handleNext, handlePrev, handleSkip, startTour, startFilteredTour
  };
}

