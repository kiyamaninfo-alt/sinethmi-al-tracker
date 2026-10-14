import { useState } from 'react';
import { saveProfileToCloud } from './profileSyncHelper';

export default function OfflineSyncAndCacheActions({ profile }) {
  const [syncStatus, setSyncStatus] = useState('Idle');
  const [cacheStatus, setCacheStatus] = useState('Clear Cache');

  const handleManualSync = async () => {
    if (!navigator.onLine) {
      setSyncStatus('Offline (Queued)');
      setTimeout(() => setSyncStatus('Idle'), 2500);
      return;
    }
    setSyncStatus('Syncing Telemetry...');
    try {
      const res = await saveProfileToCloud(profile);
      setSyncStatus(res?.success ? 'Synchronized!' : 'Sync Failed');
    } catch {
      setSyncStatus('Sync Failed');
    }
    setTimeout(() => setSyncStatus('Idle'), 2500);
  };

  const handleClearCache = async () => {
    setCacheStatus('Clearing...');
    try {
      if ('caches' in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      }
      window.dispatchEvent(new CustomEvent('app_cache_cleared'));
      setCacheStatus('Cache Cleared!');
    } catch {
      setCacheStatus('Error Clearing');
    }
    setTimeout(() => setCacheStatus('Clear Cache'), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={handleManualSync}
        className="flex-1 py-1.5 px-3 rounded-lg border border-cyan-400/40 bg-cyan-500/15 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center gap-1.5 hover:bg-cyan-500/25 transition-all cursor-pointer"
      >
        <span className="material-symbols-outlined text-[15px]">sync</span>
        <span>{syncStatus === 'Idle' ? 'Manual Sync' : syncStatus}</span>
      </button>

      <button
        type="button"
        onClick={handleClearCache}
        className="py-1.5 px-3 rounded-lg border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high text-slate-300 text-xs font-mono flex items-center justify-center gap-1.5 transition-all cursor-pointer"
      >
        <span className="material-symbols-outlined text-[15px] text-amber-400">mop</span>
        <span>{cacheStatus}</span>
      </button>
    </div>
  );
}
