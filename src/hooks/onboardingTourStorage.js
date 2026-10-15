export function updateTourActiveFlag(isActive) {
  try {
    sessionStorage.setItem('onboarding_tour_active', isActive ? 'true' : 'false');
    queueMicrotask(() => {
      window.dispatchEvent(new CustomEvent('tourstatechange', { detail: { isActive } }));
    });
  } catch {}
}

export const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 640;

export function finishTourStorage() {
  sessionStorage.removeItem('tour_manually_opened');
  localStorage.setItem('has_visited', 'true');
  localStorage.setItem('onboarding_completed', 'true');
}

export function highlightTourElement(targetId) {
  if (!targetId) return undefined;
  const el = document.getElementById(targetId);
  if (!el) return undefined;
  el.scrollIntoView({ behavior: 'smooth', block: isMobile() ? 'nearest' : 'center' });
  el.focus?.();
  el.classList.add('ring-4', 'ring-cyan-400', 'ring-offset-2', 'ring-offset-slate-950');
  const t = setTimeout(() => el.classList.remove('ring-4', 'ring-cyan-400', 'ring-offset-2', 'ring-offset-slate-950'), 3500);
  return () => {
    clearTimeout(t);
    el.classList.remove('ring-4', 'ring-cyan-400', 'ring-offset-2', 'ring-offset-slate-950');
  };
}
