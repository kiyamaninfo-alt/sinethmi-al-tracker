export default function HapticAndAudioFeedback({
  keySoundEnabled,
  vibrateEnabled,
  onToggleKeySound,
  onToggleVibrate,
  disabled
}) {
  const handleTestVibrate = () => {
    if ('vibrate' in navigator) navigator.vibrate(50);
  };

  return (
    <div className={`p-3 rounded-xl bg-surface-container/40 border border-outline-variant/25 transition-opacity ${
      disabled ? 'opacity-40 pointer-events-none' : ''
    }`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-mono text-outline flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[14px] text-cyan-400">touch_app</span>
          Interactive Feedback &amp; Haptics
        </span>
        {vibrateEnabled && (
          <button
            type="button"
            onClick={handleTestVibrate}
            className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
          >
            Test Pulse
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div
          onClick={() => onToggleKeySound(!keySoundEnabled)}
          className={`p-2.5 rounded-lg border flex items-center justify-between transition-all cursor-pointer ${
            keySoundEnabled ? 'bg-surface-container-high/80 border-cyan-400/40 text-on-surface' : 'bg-surface-container-low/40 border-outline-variant/20 text-outline'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className={`material-symbols-outlined text-[16px] ${keySoundEnabled ? 'text-cyan-400' : 'text-outline'}`}>keyboard</span>
            <div>
              <div className="text-xs font-bold">Key Sound</div>
              <div className="text-[9px] text-outline font-mono">Audio clicks on key taps</div>
            </div>
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
            keySoundEnabled ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' : 'bg-slate-800 text-slate-400'
          }`}>
            {keySoundEnabled ? 'ON' : 'OFF'}
          </span>
        </div>

        <div
          onClick={() => onToggleVibrate(!vibrateEnabled)}
          className={`p-2.5 rounded-lg border flex items-center justify-between transition-all cursor-pointer ${
            vibrateEnabled ? 'bg-surface-container-high/80 border-emerald-400/40 text-on-surface' : 'bg-surface-container-low/40 border-outline-variant/20 text-outline'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className={`material-symbols-outlined text-[16px] ${vibrateEnabled ? 'text-emerald-400' : 'text-outline'}`}>vibration</span>
            <div>
              <div className="text-xs font-bold">Vibration</div>
              <div className="text-[9px] text-outline font-mono">Haptic tactile alerts</div>
            </div>
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
            vibrateEnabled ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' : 'bg-slate-800 text-slate-400'
          }`}>
            {vibrateEnabled ? 'ON' : 'OFF'}
          </span>
        </div>
      </div>
    </div>
  );
}
