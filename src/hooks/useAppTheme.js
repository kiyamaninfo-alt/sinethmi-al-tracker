import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useAppTheme(theme) {
  const location = useLocation();
  const isLanding = location.pathname === '/' || location.pathname === '/landing';
  const activeTheme = isLanding ? 'cyberpunk' : (theme || 'cyberpunk');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
    if (activeTheme === 'minimal_light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [activeTheme]);
}

