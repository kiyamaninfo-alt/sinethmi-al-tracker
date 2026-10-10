export default function NotificationMasterToggle({ masterEnabled, onToggleMaster, browserPermission, onRequestPermission }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-surface-container/60 border border-outline-variant/30">
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
          masterEnabled ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300' : 'bg-surface-container-high border-outline-variant/30 text-outline'
        }`}>
          <span className="material-symbols-outlined text-[20px]">
            {masterEnabled ? 'notifications_active' : 'notifications_off'}
          </span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-on-surface">Master Telemetry Alerts</span>
            <span className={`text-[10px] px-2 py-0.2 rounded-full font-mono font-bold ${
              masterEnabled ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' : 'bg-slate-800 text-slate-400 border border-slate-700'
            }`}>
              {masterEnabled ? 'System Active' : 'All Disabled'}
            </span>
          </div>
          <p className="text-[11px] text-outline font-mono">
            Global on/off killswitch for countdowns, alarms &amp; milestone reminders
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 self-end sm:self-center">
        {browserPermission === 'default' && (
          <button
            type="button"
            onClick={onRequestPermission}
            className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
          >
            Request Permission
          </button>
        )}
        <button
          type="button"
          onClick={() => onToggleMaster(!masterEnabled)}
          className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            masterEnabled
              ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 hover:brightness-110'
              : 'bg-surface-container-high text-slate-300 border border-outline-variant/40 hover:text-white'
          }`}
        >
          {masterEnabled ? 'SWITCH ON' : 'SWITCH OFF'}
        </button>
      </div>
    </div>
  );
}
