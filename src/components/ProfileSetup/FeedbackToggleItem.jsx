import { playClickSound } from '../../constants/clickSound';

export default function FeedbackToggleItem({
  title,
  subtitle,
  icon,
  enabled,
  onToggle,
  color = 'cyan',
  disabled
}) {
  const isCyan = color === 'cyan';
  const activeBorder = isCyan ? 'border-cyan-400/40' : 'border-emerald-400/40';
  const activeIcon = isCyan ? 'text-cyan-400' : 'text-emerald-400';
  const activeBadge = isCyan
    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30'
    : 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30';

  const handleClick = () => {
    if (disabled) return;
    const nextState = !enabled;
    if (icon === 'keyboard') {
      playClickSound(nextState ? 'key' : 'toggle_off');
    } else {
      playClickSound(nextState ? 'toggle_on' : 'toggle_off');
    }
    if (icon === 'vibration' && nextState && 'vibrate' in navigator) {
      try { navigator.vibrate(40); } catch (_) {}
    }
    onToggle(nextState);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-2.5 rounded-lg border flex items-center justify-between transition-all cursor-pointer ${
        enabled
          ? `bg-surface-container-high/80 ${activeBorder} text-on-surface`
          : 'bg-surface-container-low/40 border-outline-variant/20 text-outline'
      } ${disabled ? 'opacity-40 pointer-events-none' : ''}`}
    >
      <div className="flex items-center gap-2">
        <span className={`material-symbols-outlined text-[16px] ${enabled ? activeIcon : 'text-outline'}`}>
          {icon}
        </span>
        <div>
          <div className="text-xs font-bold">{title}</div>
          <div className="text-[9px] text-outline font-mono">{subtitle}</div>
        </div>
      </div>
      <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold border ${
        enabled ? activeBadge : 'bg-slate-800 text-slate-400 border-slate-700'
      }`}>
        {enabled ? 'ON' : 'OFF'}
      </span>
    </div>
  );
}
