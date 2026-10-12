import FeedbackToggleItem from './FeedbackToggleItem';
import { playClickSound } from '../../constants/clickSound';

export default function HapticAndAudioFeedback({
  clickSoundEnabled = true,
  keySoundEnabled = true,
  vibrateEnabled = true,
  onToggleClickSound,
  onToggleKeySound,
  onToggleVibrate,
  disabled
}) {
  const handleTestVibrate = () => {
    playClickSound('subtle');
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <FeedbackToggleItem
          title="Click Sounds"
          subtitle="Audio click on UI buttons &amp; actions"
          icon="volume_up"
          enabled={clickSoundEnabled}
          onToggle={onToggleClickSound}
          color="cyan"
          disabled={disabled}
        />
        <FeedbackToggleItem
          title="Key Sound"
          subtitle="Audio clicks on keyboard typing"
          icon="keyboard"
          enabled={keySoundEnabled}
          onToggle={onToggleKeySound}
          color="cyan"
          disabled={disabled}
        />
        <FeedbackToggleItem
          title="Vibration"
          subtitle="Haptic tactile alerts on touch"
          icon="vibration"
          enabled={vibrateEnabled}
          onToggle={onToggleVibrate}
          color="emerald"
          disabled={disabled}
        />
      </div>
    </div>
  );
}
