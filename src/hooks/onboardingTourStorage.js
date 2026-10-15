import { attachTourSpotlight, isMobile } from './tourElementSpotlight';

export { isMobile, attachTourSpotlight };
export const highlightTourElement = attachTourSpotlight;

export function updateTourActiveFlag(isActive) {
  try {
    sessionStorage.setItem('onboarding_tour_active', isActive ? 'true' : 'false');
    queueMicrotask(() => {
      window.dispatchEvent(new CustomEvent('tourstatechange', { detail: { isActive } }));
    });
  } catch {}
}

export function saveTourStep(step) {
  try {
    sessionStorage.setItem('onboarding_tour_step', String(step));
  } catch {}
}

export function getSavedTourStep() {
  try {
    const s = parseInt(sessionStorage.getItem('onboarding_tour_step'), 10);
    return isNaN(s) ? 0 : s;
  } catch {
    return 0;
  }
}

export function finishTourStorage() {
  try {
    sessionStorage.removeItem('tour_manually_opened');
    sessionStorage.removeItem('onboarding_tour_step');
    updateTourActiveFlag(false);
    localStorage.setItem('has_visited', 'true');
    localStorage.setItem('onboarding_completed', 'true');
  } catch {}
}
