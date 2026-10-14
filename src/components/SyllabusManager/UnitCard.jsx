import { useState } from 'react';
import UnitProgressBar from './UnitProgressBar';
import SubUnitItem from './SubUnitItem';
import { getSubUnitKey } from '../../services/syllabusService';

export default function UnitCard({
  unit, subject, swatch, isMatch, syllabusHooks, onUnitClick,
  inFullscreen = false, defaultExpanded = false
}) {
  const [isExpanded, setIsExpanded] = useState(() => defaultExpanded);
  const { getSubUnit, toggleGodaDamuda, toggleWadeIwarai, restartSpacedRepetition } = syllabusHooks;
  const progress = syllabusHooks.calculateUnitProgress(subject, unit);
  const isComplete = syllabusHooks.isUnitFullyComplete(subject, unit);

  const handleClick = () => {
    if (inFullscreen) setIsExpanded((p) => !p);
    else onUnitClick?.(subject, unit.num);
  };

  return (
    <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
      isMatch ? `${swatch.bg} ${swatch.border} ring-1 ring-cyan-400/30` : 'bg-surface-container/50 border-white/5 hover:border-white/15'
    }`}>
      <div
        role="button" tabIndex={0} onClick={handleClick}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        className="p-3.5 flex items-center justify-between gap-2 cursor-pointer select-none bg-surface-container-high/30 hover:bg-surface-container-high/60 transition"
      >
        <div className="flex items-center gap-2 min-w-0">
          <UnitProgressBar progress={progress} isFullyComplete={isComplete} />
          <span className={`px-2 py-0.5 rounded-lg text-xs font-mono font-bold border shrink-0 ${swatch.bg} ${swatch.border} ${swatch.text}`}>
            UNIT {unit.num}
          </span>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-white truncate">{unit.title}</h4>
            <p className="text-[10px] text-slate-400 truncate">{unit.sinhala}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-mono text-slate-400">
            {unit.subUnits.length} sub-units
          </span>
          <span className="material-symbols-outlined text-slate-400 text-[18px]">
            {inFullscreen ? (isExpanded ? 'expand_less' : 'expand_more') : 'open_in_full'}
          </span>
        </div>
      </div>

      {inFullscreen && isExpanded && (
        <div className="p-3 space-y-2 border-t border-white/5 bg-surface-container-low/40">
          {unit.subUnits.map((su) => {
            const key = getSubUnitKey(subject, su.num);
            return (
              <SubUnitItem
                key={su.num} subUnit={su} swatch={swatch} subUnitData={getSubUnit(key)}
                onToggleGodaDamuda={() => toggleGodaDamuda(key)}
                onToggleWadeIwarai={() => toggleWadeIwarai(key)}
                onRestartRepetition={() => restartSpacedRepetition(key)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
