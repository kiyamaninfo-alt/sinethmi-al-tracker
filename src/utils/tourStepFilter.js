import { ONBOARDING_STEPS } from '../constants/onboardingTour';

export function isFieldFilled(stepId, profile) {
  if (!profile) return false;
  if (stepId === 'tour-name') return Boolean(profile.name && profile.name.trim().length > 0);
  if (stepId === 'tour-whatsapp') {
    const raw = (profile.phone || '').replace(/\D/g, '');
    return raw.length >= 9;
  }
  if (stepId === 'tour-stream') return Boolean(profile.stream && profile.stream.trim().length > 0);
  if (stepId === 'tour-year') return Boolean(profile.targetYear);
  return false;
}

export function filterStepsForMobile(steps = ONBOARDING_STEPS, profile) {
  if (typeof window === 'undefined' || window.innerWidth >= 640) {
    return steps;
  }
  const filtered = steps.filter((step) => {
    if (step.id === 'tour-save') return true;
    return !isFieldFilled(step.id, profile);
  });
  return filtered.length > 0 ? filtered : steps;
}
