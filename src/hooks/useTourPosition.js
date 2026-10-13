import { useState, useEffect } from 'react';

export function useTourPosition(targetId) {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    const updatePosition = () => {
      if (!targetId || window.innerWidth >= 640) {
        setCoords(null);
        return;
      }
      const el = document.getElementById(targetId);
      if (!el) {
        setCoords(null);
        return;
      }
      const rect = el.getBoundingClientRect();
      const popupHeight = 120;
      const isSaveTarget = targetId === 'candidate-save-identity';

      if (isSaveTarget) {
        const top = Math.max(12, Math.round(rect.top - popupHeight - 14));
        setCoords({ top, isAbove: true });
        return;
      }

      if (rect.top >= popupHeight + 20) {
        setCoords({ top: Math.max(12, Math.round(rect.top - popupHeight - 12)), isAbove: true });
      } else if (window.innerHeight - rect.bottom >= popupHeight + 20) {
        setCoords({ top: Math.round(rect.bottom + 12), isAbove: false });
      } else {
        setCoords({ top: 12, isAbove: true });
      }
    };

    updatePosition();
    const handleScrollOrResize = () => updatePosition();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });
    const timer = setTimeout(updatePosition, 350);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [targetId]);

  return coords;
}
