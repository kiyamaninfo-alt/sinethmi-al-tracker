import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/landing', label: 'Landing Page', color: 'border-teal-400/50 text-teal-300 bg-teal-500/20' },
  { path: '/command-center', label: 'Command Center', color: 'border-cyan-400/50 text-cyan-300 bg-cyan-500/20' },
  { path: '/profile-setup', label: 'Profile Setup', color: 'border-fuchsia-400/50 text-fuchsia-300 bg-fuchsia-500/20' },
  { path: '/visual-analytics', label: 'Visual Analytics', color: 'border-emerald-400/50 text-emerald-300 bg-emerald-500/20' },
  { path: '/study-analytics', label: 'Study Analytics', color: 'border-purple-400/50 text-purple-300 bg-purple-500/20' },
  { path: '/login', label: 'Candidate Login', color: 'border-indigo-400/50 text-indigo-300 bg-indigo-500/20' },
];

export default function DevNav() {
  const [isTourActive, setIsTourActive] = useState(() => {
    return sessionStorage.getItem('onboarding_tour_active') === 'true';
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleTourChange = (e) => setIsTourActive(Boolean(e.detail?.isActive));
    window.addEventListener('tourstatechange', handleTourChange);
    return () => window.removeEventListener('tourstatechange', handleTourChange);
  }, []);

  useEffect(() => {
    let hideTimer = null;
    const handleScroll = () => {
      setIsVisible(true);
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  if (isTourActive || !isVisible) return null;

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 p-1.5 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-2xl text-xs font-mono max-w-[95vw] overflow-x-auto transition-all animate-in fade-in duration-300">
      {navItems.map(({ path, label, color }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `px-3 py-1 rounded-full transition cursor-pointer ${
              isActive ? `${color} border font-bold shadow-sm` : 'text-slate-400 hover:text-white'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
