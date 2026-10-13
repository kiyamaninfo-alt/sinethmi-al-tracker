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
      const popupHeight = 100;
      const isNameField = targetId === 'candidate-name-input';
      const isStreamTarget = targetId === 'candidate-stream-select';
      const isSaveTarget = targetId === 'candidate-save-identity';

      if (isNameField) {
        const top = Math.max(12, Math.round(rect.top - popupHeight - 32));
        setCoords({ top, isAbove: true });
        return;
      }

      if (isStreamTarget) {
        const top = Math.max(12, Math.round(rect.top - popupHeight - 20));
        setCoords({ top, isAbove: true });
        return;
      }

      if (isSaveTarget) {
        const top = Math.max(12, Math.round(rect.top - popupHeight - 16));
        setCoords({ top, isAbove: true });
        return;
      }

      if (rect.top >= popupHeight + 25) {
        setCoords({ top: Math.max(12, Math.round(rect.top - popupHeight - 20)), isAbove: true });
      } else if (window.innerHeight - rect.bottom >= popupHeight + 25) {
        setCoords({ top: Math.round(rect.bottom + 16), isAbove: false });
      } else {
        setCoords({ top: 12, isAbove: true });
      }
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
