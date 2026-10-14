import { useState, useEffect } from 'react';
import { APP_METADATA } from '../../constants/offlineSettings';

export default function AppInstallAndUpdate() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [updateMsg, setUpdateMsg] = useState('Check Update');

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice?.outcome === 'accepted') setDeferredPrompt(null);
    } else {
      alert('PWA is already installed or accessible directly from your browser menu.');
    }
  };

  const handleUpdate = async () => {
    setUpdateMsg('Checking...');
    try {
      if ('serviceWorker' in navigator) {
        const reg = await navigator.serviceWorker.getRegistration();
        if (reg) await reg.update();
      }
      setUpdateMsg(`Latest (${APP_METADATA.version.split('-')[0]})`);
    } catch {
      setUpdateMsg('Up to date');
    }
    setTimeout(() => setUpdateMsg('Check Update'), 2500);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleUpdate}
        className="flex-1 py-1.5 px-3 rounded-lg border border-primary/40 bg-primary/20 text-primary text-xs font-mono font-bold flex items-center justify-center gap-1.5 hover:bg-primary/30 transition-all cursor-pointer"
      >
        <span className="material-symbols-outlined text-[15px]">system_update</span>
        <span>{updateMsg}</span>
      </button>

      <button
        type="button"
        onClick={handleInstall}
        className="flex-1 py-1.5 px-3 rounded-lg border border-outline-variant/40 bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
      >
        <span className="material-symbols-outlined text-[15px] text-cyan-400">install_mobile</span>
        <span>Install as App</span>
      </button>
    </div>
  );
}
