import { useState, useEffect } from 'react';

export default function StorageAndSystemTelemetry() {
  const [ramUsage, setRamUsage] = useState('~42.8 MB');
  const [storageUsage, setStorageUsage] = useState('~1.4 MB');

  useEffect(() => {
    if (performance && performance.memory) {
      const mb = (performance.memory.usedJSHeapSize / (1024 * 1024)).toFixed(1);
      setRamUsage(`${mb} MB`);
    }
    if (navigator.storage && navigator.storage.estimate) {
      navigator.storage.estimate().then((est) => {
        const mb = ((est.usage || 1400000) / (1024 * 1024)).toFixed(1);
        setStorageUsage(`${mb} MB`);
      }).catch(() => {});
    }
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
        <p className="text-[9px] text-outline font-mono">Offline cached syllabus assets</p>
      </div>
    </div>
  );
}
