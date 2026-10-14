import { useState, useEffect } from 'react';
import { APP_METADATA } from '../../constants/offlineSettings';

export default function AppInfoAndPrivacy() {
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const online = () => setIsOnline(true);
    const offline = () => setIsOnline(false);
    window.addEventListener('online', online);
    window.addEventListener('offline', offline);
    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
    };
  }, []);

  const handleInfoNotice = (title) => {
    alert(`${title}: All telemetry and personal revision metrics are encrypted in Supabase and cached locally within your private browser sandbox.`);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-surface-container/40 border border-outline-variant/20 text-[11px] font-mono">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'}`} />
          <span className={isOnline ? 'text-emerald-300' : 'text-rose-400'}>
            {isOnline ? 'Telemetry Online' : 'Offline Mode Active'}
          </span>
        </span>
        <span className="text-outline">|</span>
        <span className="text-slate-300">{APP_METADATA.version}</span>
      </div>

      <div className="flex items-center gap-3 text-outline">
        <button type="button" onClick={() => handleInfoNotice('Privacy Policy')} className="hover:text-cyan-300 underline cursor-pointer">Privacy Policy</button>
        <span>&bull;</span>
        <button type="button" onClick={() => handleInfoNotice('Terms of Service')} className="hover:text-cyan-300 underline cursor-pointer">Terms of Service</button>
      </div>
    </div>
  );
}
