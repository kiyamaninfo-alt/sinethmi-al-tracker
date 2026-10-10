import StorageAndSystemTelemetry from './StorageAndSystemTelemetry';
import OfflineSyncAndCacheActions from './OfflineSyncAndCacheActions';
import AppInstallAndUpdate from './AppInstallAndUpdate';
import AppInfoAndPrivacy from './AppInfoAndPrivacy';
import DataBackupAndReset from './DataBackupAndReset';

export default function OfflineStorageCard({ profile, onReset }) {
  return (
    <div className="rounded-xl bg-surface-container-low/80 border border-outline-variant/30 p-5 space-y-4 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/20 pb-3">
        <div>
          <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-400 text-[18px]">cloud_sync</span>
            Offline Storage &amp; Application Architecture
          </h3>
          <p className="text-xs text-outline">Manage PWA caching, memory telemetry, updates, and data persistence</p>
        </div>
        <div className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>PWA Sync Ready</span>
        </div>
      </div>

      <StorageAndSystemTelemetry />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <OfflineSyncAndCacheActions />
        <AppInstallAndUpdate />
      </div>

      <AppInfoAndPrivacy />

      <DataBackupAndReset profile={profile} onReset={onReset} />
    </div>
  );
}
