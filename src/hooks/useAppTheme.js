import { useEffect } from 'react';

export function useAppTheme(theme) {
  useEffect(() => {
    const activeTheme = theme || 'cyberpunk';
    document.documentElement.setAttribute('data-theme', activeTheme);
    if (activeTheme === 'minimal_light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);
}
