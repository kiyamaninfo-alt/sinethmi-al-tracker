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
      let top = rect.top - popupHeight - 8;
      if (top < 12) {
        top = Math.min(window.innerHeight - popupHeight - 16, rect.bottom + 8);
      }
      setCoords({ top: Math.max(12, Math.round(top)) });
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
