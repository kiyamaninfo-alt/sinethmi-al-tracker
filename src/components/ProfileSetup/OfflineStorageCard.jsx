import { useState } from 'react';
import StorageAndSystemTelemetry from './StorageAndSystemTelemetry';
import OfflineSyncAndCacheActions from './OfflineSyncAndCacheActions';
import AppInstallAndUpdate from './AppInstallAndUpdate';
import AppInfoAndPrivacy from './AppInfoAndPrivacy';
import DataBackupAndReset from './DataBackupAndReset';

export default function OfflineStorageCard({ profile, onReset }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl bg-surface-container-low/80 border border-outline-variant/30 backdrop-blur-md overflow-hidden transition-all duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left hover:bg-white/[0.02] cursor-pointer transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-emerald-400 text-[20px] shrink-0">cloud_sync</span>
          <div>
            <h3 className="text-sm font-bold text-on-surface">Offline Storage &amp; Application Architecture</h3>
            <p className="text-xs text-outline">Manage PWA caching, memory telemetry, updates, and data persistence</p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <div className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>PWA Sync Ready</span>
          </div>
          <span className={`material-symbols-outlined text-slate-400 text-[20px] transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`}>
            expand_more
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="p-5 pt-0 space-y-4 border-t border-outline-variant/20 animate-in fade-in duration-150">
          <StorageAndSystemTelemetry />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <OfflineSyncAndCacheActions />
            <AppInstallAndUpdate />
          </div>
          <AppInfoAndPrivacy />
          <DataBackupAndReset profile={profile} onReset={onReset} />
        </div>
      )}
    </div>
  );
}
