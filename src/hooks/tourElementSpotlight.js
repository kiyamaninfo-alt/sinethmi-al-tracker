export const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 640;
const SPOTLIGHT_CLASSES = ['ring-4', 'ring-cyan-400', 'ring-offset-2', 'ring-offset-slate-950', 'shadow-[0_0_30px_rgba(34,211,238,0.5)]'];

const FALLBACK_MAP = {
  'candidate-identity-card': 'candidate-name-input',
  'candidate-phone-field': 'candidate-phone-input',
  'tour-name': 'candidate-name-input',
  'tour-whatsapp': 'candidate-phone-input',
  'tour-stream': 'candidate-stream-select',
  'tour-year': 'candidate-target-year',
  'tour-save': 'candidate-save-identity'
};

export function resolveTourElement(target) {
  if (!target || typeof document === 'undefined') return null;
  const rawId = target.replace(/^#/, '');
  const el = document.getElementById(rawId);
  if (el) return el;
  try {
    const qEl = document.querySelector(target) || document.querySelector(`#${rawId}`);
    if (qEl) return qEl;
  } catch {}
  const fid = FALLBACK_MAP[rawId] || FALLBACK_MAP[target];
  return fid ? (document.getElementById(fid) || document.querySelector(`#${fid}`)) : null;
}

export function attachTourSpotlight(target) {
  if (!target || typeof document === 'undefined') return () => {};
  let currentEl = null, observer = null, cancelled = false;

  const applyClasses = (el) => el && SPOTLIGHT_CLASSES.forEach((c) => el.classList.add(c));
  const removeClasses = (el) => el && SPOTLIGHT_CLASSES.forEach((c) => el.classList.remove(c));

  const attach = (el) => {
    currentEl = el;
    applyClasses(el);
    el.scrollIntoView({ behavior: 'smooth', block: isMobile() ? 'nearest' : 'center' });
    const focusTarget = el.tagName === 'INPUT' ? el : el.querySelector?.('input') || el;
    focusTarget?.focus?.();

    observer = new MutationObserver(() => { if (!cancelled && currentEl) applyClasses(currentEl); });
    observer.observe(el, { attributes: true, attributeFilter: ['class'] });
  };

  const initialEl = resolveTourElement(target);
  if (initialEl) attach(initialEl);
  else {
    let attempts = 0;
    const interval = setInterval(() => {
      if (cancelled || ++attempts > 40) return clearInterval(interval);
      const found = resolveTourElement(target);
      if (found) { clearInterval(interval); attach(found); }
    }, 50);
  }

  return () => {
    cancelled = true;
    observer?.disconnect();
    removeClasses(currentEl);
  };
}
