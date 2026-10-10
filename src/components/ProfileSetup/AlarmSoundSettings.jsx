import { AVAILABLE_SOUNDS } from '../../constants/alarmSettings';

export default function AlarmSoundSettings({
  soundEnabled,
  soundTrack,
  randomSound,
  isAudioLockedByVideo,
  onChangeSoundEnabled,
  onChangeSoundTrack,
  onChangeRandomSound
}) {
  return (
    <div className={`p-3.5 rounded-xl border transition-all ${
      isAudioLockedByVideo
        ? 'bg-surface-container-lowest/40 border-outline-variant/20 opacity-75'
        : 'bg-surface-container/60 border-outline-variant/30'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`material-symbols-outlined text-[18px] ${soundEnabled ? 'text-cyan-400' : 'text-outline'}`}>
            {soundEnabled ? 'volume_up' : 'volume_off'}
          </span>
          <span className="text-xs font-bold text-on-surface">Audio Alert Settings</span>
        </div>
        <button
          type="button"
          onClick={() => onChangeSoundEnabled(!soundEnabled)}
          className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-all cursor-pointer ${
            soundEnabled ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40' : 'bg-slate-800 text-slate-400 border border-slate-700'
          }`}
        >
          {soundEnabled ? 'Sound ON' : 'Muted'}
        </button>
      </div>

      {isAudioLockedByVideo && (
        <p className="text-[10px] text-amber-400/90 font-mono mb-2 flex items-center gap-1">
          <span className="material-symbols-outlined text-[13px]">lock</span>
          Audio selection disabled because video is active (Mute toggle still active).
        </p>
      )}

      <div className={`space-y-3 ${isAudioLockedByVideo || !soundEnabled ? 'pointer-events-none opacity-40' : ''}`}>
        <div className="flex items-center justify-between gap-2">
          <label className="text-[10px] text-outline font-mono">Alert Tone Selection</label>
          <label className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 cursor-pointer">
            <input
              type="checkbox"
              checked={!!randomSound}
              onChange={(e) => onChangeRandomSound(e.target.checked)}
              className="accent-cyan-400 cursor-pointer"
            />
            Play Random Sound
          </label>
        </div>

        <select
          value={soundTrack || AVAILABLE_SOUNDS[0].id}
          disabled={randomSound}
          onChange={(e) => onChangeSoundTrack(e.target.value)}
          className="w-full bg-surface-container-high/80 border border-outline-variant/40 rounded-lg px-2.5 py-1.5 text-xs text-on-surface font-mono focus:border-cyan-400 focus:outline-none cursor-pointer disabled:opacity-50"
        >
          {AVAILABLE_SOUNDS.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
