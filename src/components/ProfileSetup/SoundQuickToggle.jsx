import { playClickSound } from '../../constants/clickSound';

export default function SoundQuickToggle({ enabled = true, onToggle }) {
  const handleClick = () => {
    const nextState = !enabled;
    if (nextState) playClickSound('toggle_on');
    else playClickSound('toggle_off');
    onToggle(nextState);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title={enabled ? 'Click Sounds: Enabled (Click to Mute)' : 'Click Sounds: Muted (Click to Enable)'}
      className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
        enabled
          ? 'border-cyan-400/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300'
          : 'border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-400'
      }`}
    >
      <span className="material-symbols-outlined text-[15px]">
        {enabled ? 'volume_up' : 'volume_off'}
      </span>
      <span>Clicks: {enabled ? 'ON' : 'OFF'}</span>
    </button>
  );
}
