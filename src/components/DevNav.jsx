import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { DEV_NAV_ITEMS } from '../constants/devNavItems';

export default function DevNav() {
  const [isTourActive, setIsTourActive] = useState(() => {
    return sessionStorage.getItem('onboarding_tour_active') === 'true';
  });

  useEffect(() => {
    const handleTourChange = (e) => setIsTourActive(Boolean(e.detail?.isActive));
    window.addEventListener('tourstatechange', handleTourChange);
    return () => window.removeEventListener('tourstatechange', handleTourChange);
  }, []);

  if (isTourActive) return null;

  return (
    <nav
      aria-label="Quick Page Navigation"
      className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-slate-950/95 border border-cyan-500/30 backdrop-blur-xl shadow-2xl text-[10px] sm:text-xs font-mono max-w-[96vw] overflow-x-auto custom-scrollbar transition-all"
    >
      {DEV_NAV_ITEMS.map(({ path, label, fullLabel, icon, color }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 shrink-0 transition cursor-pointer ${
              isActive ? `${color} border font-bold shadow-sm` : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`
          }
        >
          <span className="material-symbols-outlined text-[13px] sm:text-[15px]">{icon}</span>
          <span className="inline sm:hidden">{label}</span>
          <span className="hidden sm:inline">{fullLabel}</span>
        </NavLink>
      ))}
    </nav>
  );
}
