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
      const popupHeight = targetId === 'candidate-stream-select' ? 96 : 130;
      const gap = 16;
      let top = Math.round(rect.top - popupHeight - gap);
      if (top < 12) {
        top = Math.round(rect.bottom + gap);
      }
      setCoords({ top });
    };

    updatePosition();
    const handleScrollOrResize = () => updatePosition();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });
    const timer = setTimeout(updatePosition, 250);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [targetId]);

  return coords;
}
