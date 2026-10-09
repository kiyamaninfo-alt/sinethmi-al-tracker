import { useState, useEffect, useMemo } from 'react';

export default function LoginFooter() {
  const [isOnline, setIsOnline] = useState(() => (typeof navigator !== 'undefined' ? navigator.onLine : true));
  const [onlineCount] = useState(() => Math.floor(Math.random() * 7) + 9);

  useEffect(() => {
    const setOn = () => setIsOnline(true);
    const setOff = () => setIsOnline(false);
    window.addEventListener('online', setOn);
    window.addEventListener('offline', setOff);
    return () => {
      window.removeEventListener('online', setOn);
      window.removeEventListener('offline', setOff);
    };
  }, []);

  const daysRemaining = useMemo(() => {
    const saved = localStorage.getItem('candidate_profile');
    const year = saved ? JSON.parse(saved).targetYear || 2028 : 2028;
    const diff = new Date(`${year}-11-15T00:00:00`) - new Date();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <div className="w-full mt-4 pt-4 border-t border-cyan-500/15 flex flex-col gap-3 font-mono text-xs">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2.5 rounded-xl bg-[#050b14]/90 border border-cyan-500/20 backdrop-blur-md">
        <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
          <span className="text-on-surface-variant text-[11px]">
            COUNTDOWN: <strong className="text-white">{daysRemaining} DAYS</strong>
          </span>
        </div>

        <div className="flex items-center gap-1.5 justify-start sm:justify-center">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-emerald-400 font-bold text-[11px]">{onlineCount}* ONLINE</span>
        </div>

        <div className="flex items-center gap-1.5 justify-end">
          <span className={`w-2 h-2 rounded-full shrink-0 ${isOnline ? 'bg-cyan-400' : 'bg-amber-400'}`} />
          <span className={`text-[11px] font-bold ${isOnline ? 'text-cyan-300' : 'text-amber-300'}`}>
            {isOnline ? 'CLOUD SYNCED' : 'LOCAL CACHE ACTIVE'}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900/80 border border-cyan-500/20 text-cyan-400 font-semibold tracking-wider uppercase text-[10px]">
          <span className="material-symbols-outlined text-[13px]">shield</span>
          <span>ENCRYPTED GATEWAY • ZERO-DATA-LOSS PROTOCOL</span>
        </div>
        <p className="text-[11px] text-outline mt-0.5">
          KrishSoft Mission Core • Enterprise PWA v4.2.0
        </p>
      </div>
    </div>
  );
}
