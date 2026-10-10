import { useState, useEffect } from 'react';
import { DEFAULT_NOTIFICATION_SETTINGS } from '../../constants/notificationSettings';
import NotificationMasterToggle from './NotificationMasterToggle';
import NotificationChannelList from './NotificationChannelList';
import HapticAndAudioFeedback from './HapticAndAudioFeedback';

export default function NotificationAlertsCard({ settings = {}, onChange }) {
  const current = { ...DEFAULT_NOTIFICATION_SETTINGS, ...settings };
  const [browserPermission, setBrowserPermission] = useState('default');

  useEffect(() => {
    if ('Notification' in window) {
      setBrowserPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if ('Notification' in window) {
      const res = await Notification.requestPermission();
      setBrowserPermission(res);
    }
  };

  const handleMasterToggle = (val) => {
    onChange({ ...current, masterEnabled: val });
  };

  const handleChannelToggle = (key, val) => {
    onChange({ ...current, [key]: val });
  };

  return (
    <div className="rounded-xl bg-surface-container-low/80 border border-outline-variant/30 p-5 space-y-4 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/20 pb-3">
        <div>
          <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-400 text-[18px]">campaign</span>
            Notifications, Feedback &amp; System Alerts
          </h3>
          <p className="text-xs text-outline">Manage master alert switch, key audio, vibration haptics &amp; channels</p>
        </div>
        <div className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${
            current.masterEnabled && browserPermission === 'granted'
              ? 'bg-emerald-400'
              : current.masterEnabled
              ? 'bg-amber-400'
              : 'bg-rose-500'
          }`} />
          <span className="text-slate-300">
            Permission: <span className="font-bold uppercase text-cyan-300">{browserPermission}</span>
          </span>
        </div>
      </div>

      <NotificationMasterToggle
        masterEnabled={current.masterEnabled}
        onToggleMaster={handleMasterToggle}
        browserPermission={browserPermission}
        onRequestPermission={requestPermission}
      />

      <HapticAndAudioFeedback
        keySoundEnabled={current.keySoundEnabled}
        vibrateEnabled={current.vibrateEnabled}
        onToggleKeySound={(val) => handleChannelToggle('keySoundEnabled', val)}
        onToggleVibrate={(val) => handleChannelToggle('vibrateEnabled', val)}
        disabled={!current.masterEnabled}
      />

      <NotificationChannelList
        settings={current}
        onToggleChannel={handleChannelToggle}
        disabled={!current.masterEnabled}
      />
    </div>
  );
}
