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
      const popupHeight = 92;
      const gap = 12;

      // Calculate candidate top position directly above element
      let top = Math.round(rect.top - popupHeight - gap);

      // If too close to viewport top, ensure it stays visible
      if (top < 10) {
        top = Math.round(rect.bottom + gap);
      }

      setCoords({ top });
    };

    updatePosition();
    const handleScrollOrResize = () => updatePosition();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });
    const timer = setTimeout(updatePosition, 300);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [targetId]);

  return coords;
}
