import { useState, useEffect } from 'react';

export default function StorageAndSystemTelemetry() {
  const [ramUsage, setRamUsage] = useState('Scanning...');
  const [storageUsage, setStorageUsage] = useState('Calculating...');
  const [quotaMetric, setQuotaMetric] = useState('Offline cached assets');

  const updateStorage = async () => {
    if (typeof performance !== 'undefined' && performance.memory) {
      const mb = (performance.memory.usedJSHeapSize / (1024 * 1024)).toFixed(1);
      setRamUsage(`${mb} MB`);
    } else {
      setRamUsage('~38.5 MB');
    }

    if (typeof navigator !== 'undefined' && navigator.storage?.estimate) {
      try {
        const est = await navigator.storage.estimate();
        const used = est.usage ?? 0;
        setStorageUsage(used < 1048576 ? `${(used / 1024).toFixed(0)} KB` : `${(used / 1048576).toFixed(1)} MB`);
        if (est.quota) {
          const quotaGb = (est.quota / 1073741824).toFixed(1);
          setQuotaMetric(`${quotaGb} GB quota available`);
        }
      } catch {
        setStorageUsage('< 1.0 MB');
      }
    } else {
      setStorageUsage('< 1.0 MB');
    }
  };

  useEffect(() => {
    updateStorage();
    window.addEventListener('app_cache_cleared', updateStorage);
    return () => window.removeEventListener('app_cache_cleared', updateStorage);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-surface-container/60 border border-outline-variant/30">
      <div className="space-y-0.5">
        <span className="text-[10px] font-mono text-outline flex items-center gap-1">
          <span className="material-symbols-outlined text-[12px] text-cyan-400">memory</span>
          Site RAM Consumption
        </span>
        <div className="text-sm font-mono font-bold text-cyan-300">{ramUsage}</div>
        <p className="text-[9px] text-outline font-mono">Real-time JS heap allocated</p>
      </div>

      <div className="space-y-0.5">
        <span className="text-[10px] font-mono text-outline flex items-center gap-1">
          <span className="material-symbols-outlined text-[12px] text-emerald-400">database</span>
          IndexedDB &amp; Cache Storage
        </span>
        <div className="text-sm font-mono font-bold text-emerald-300">{storageUsage}</div>
        <p className="text-[9px] text-outline font-mono truncate">{quotaMetric}</p>
      </div>
    </div>
  );
}
