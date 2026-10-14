import { useEffect } from 'react';
import { COLOR_SWATCHES } from '../../constants/profileSetup';
import { getUnitsForSubject } from '../../constants/syllabusUnits';
import UnitCard from './UnitCard';

export default function FullscreenSubjectView({ subject, activeUnitNum, onBack, syllabusHooks }) {
  const swatch = COLOR_SWATCHES.find((s) => s.id === subject.color) || COLOR_SWATCHES[0];
  const units = getUnitsForSubject(subject);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onBack(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack]);

  return (
    <div className="space-y-5 animate-in fade-in zoom-in-95 duration-200">
      <div className={`p-4 sm:p-5 rounded-3xl border backdrop-blur-xl ${swatch.bg} ${swatch.border} shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
        <div className="flex items-center gap-3">
          <button
            type="button" onClick={onBack} title="Return to 3-Subject Overview (Esc)"
            className="px-3 py-2 rounded-xl bg-surface-container hover:bg-white/10 text-slate-200 hover:text-white border border-white/15 transition flex items-center gap-1.5 text-xs font-semibold cursor-pointer shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Back to 3-Subject Overview</span>
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${swatch.dot}`} />
              <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase">{subject.code || 'AL'}</span>
              <span className="text-[10px] font-mono text-slate-400">Fullscreen Focus Mode</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">{subject.name}</h2>
            <p className="text-xs text-slate-300">{subject.sinhala}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center">
          <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${swatch.border} ${swatch.text}`}>
            {units.length} Units Total
          </span>
          <button
            type="button" onClick={onBack} title="Close Fullscreen View (Esc)"
            className="p-2 rounded-xl bg-surface-container hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 border border-white/10 transition cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
      </div>

      <div className="space-y-3.5 max-w-5xl mx-auto">
        {units.map((u) => (
          <UnitCard
            key={u.num} unit={u} subject={subject} swatch={swatch} isMatch={false}
            syllabusHooks={syllabusHooks} inFullscreen={true}
            defaultExpanded={activeUnitNum ? u.num === activeUnitNum : true}
          />
        ))}
      </div>
    </div>
  );
}
