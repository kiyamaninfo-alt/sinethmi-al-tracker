export default function SubUnitButtonToggles({
  godaDamuda,
  wadeIwarai,
  onToggleGodaDamuda,
  onToggleWadeIwarai
}) {
  const btnBase =
    'h-7 px-2.5 rounded-lg border text-[11px] font-semibold tracking-tight transition-all duration-200 flex items-center gap-1 cursor-pointer active:scale-95 whitespace-nowrap shadow-xs';

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <button
        type="button"
        onClick={onToggleGodaDamuda}
        className={`${btnBase} ${
          godaDamuda
            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-[0_0_8px_rgba(52,211,153,0.25)]'
            : 'bg-surface-container-high/60 text-slate-300 border-white/10 hover:border-amber-400/40 hover:text-amber-200'
        }`}
        title={godaDamuda ? 'Marked as Goda Dapu Ewa' : 'Click to mark as Goda Dapu Ewa'}
      >
        <span className="material-symbols-outlined text-[13px]">
          {godaDamuda ? 'check_circle' : 'help_outline'}
        </span>
        <span>{godaDamuda ? 'ගොඩ දාපු ඒවා' : 'ගොඩ දාමුද?'}</span>
      </button>

      <button
        type="button"
        onClick={onToggleWadeIwarai}
        className={`${btnBase} ${
          wadeIwarai
            ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400/50 shadow-[0_0_8px_rgba(6,182,212,0.25)]'
            : 'bg-surface-container-high/60 text-slate-300 border-white/10 hover:border-cyan-400/40 hover:text-cyan-200'
        }`}
        title={wadeIwarai ? 'Marked as Wade Iwarai Supiri' : 'Click to complete'}
      >
        <span className="material-symbols-outlined text-[13px]">
          {wadeIwarai ? 'verified' : 'task_alt'}
        </span>
        <span>{wadeIwarai ? 'වැඩේ ඉවරයි සුපිරි' : 'වැඩේ ඉවර කරපු ඒවා'}</span>
      </button>
    </div>
  );
}
