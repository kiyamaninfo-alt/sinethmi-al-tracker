import SubUnitButtonToggles from './SubUnitButtonToggles';
import SubUnitBadges from './SubUnitBadges';

export default function SubUnitItem({
  subUnit,
  swatch,
  subUnitData,
  onToggleGodaDamuda,
  onToggleWadeIwarai,
  onRestartRepetition
}) {
  const isFullyComplete = subUnitData.godaDamuda && subUnitData.wadeIwarai;

  return (
    <div
      className={`p-3 rounded-xl border transition-all duration-200 space-y-2.5 ${
        isFullyComplete
          ? 'bg-emerald-950/20 border-emerald-500/30'
          : 'bg-surface-container-high/40 hover:bg-surface-container-high/70 border-white/5'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/40 shrink-0 ${swatch.text}`}
          >
            {subUnit.num}
          </span>
          <h5 className="text-xs font-semibold text-slate-100 truncate tracking-tight">
            {subUnit.title}
          </h5>
        </div>
        {subUnit.hours && (
          <span className="text-[10px] font-mono text-slate-400 shrink-0">
            {subUnit.hours}h
          </span>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 border-t border-white/5">
        <SubUnitButtonToggles
          godaDamuda={Boolean(subUnitData.godaDamuda)}
          wadeIwarai={Boolean(subUnitData.wadeIwarai)}
          onToggleGodaDamuda={onToggleGodaDamuda}
          onToggleWadeIwarai={onToggleWadeIwarai}
        />

        <SubUnitBadges
          repetitionCycle={subUnitData.repetitionCycle || 1}
          repetitionDate={subUnitData.repetitionDate || ''}
          papersAverage={subUnitData.papersAverage || 82}
          onRestartRepetition={onRestartRepetition}
        />
      </div>
    </div>
  );
}
