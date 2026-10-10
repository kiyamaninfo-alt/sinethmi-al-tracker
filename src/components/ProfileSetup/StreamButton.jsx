import { COLOR_SWATCHES } from '../../constants/profileSetup';

export default function StreamButton({
  stream, isSelected, isDimmed, isEditing, subjects, onClick, onDeleteCustom, onEditCustom
}) {
  return (
    <div
      onClick={isDimmed ? undefined : onClick}
      className={`group relative p-3.5 sm:p-4 rounded-xl border flex flex-col items-center justify-between text-center transition-all duration-200 select-none h-full min-h-[160px] w-full ${
        isDimmed ? 'opacity-25 pointer-events-none filter grayscale border-outline-variant/20 bg-surface-container/20' : 'cursor-pointer'
      } ${
        isSelected
          ? 'border-cyan-400 bg-gradient-to-b from-cyan-500/25 to-cyan-950/50 shadow-[0_0_25px_rgba(34,211,238,0.3)] ring-2 ring-cyan-400/80 -translate-y-0.5'
          : !isDimmed ? 'border-outline-variant/30 bg-surface-container/60 hover:border-cyan-400/70 hover:bg-gradient-to-b hover:from-cyan-500/10 hover:to-surface-container/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/15 active:scale-95' : ''
      }`}
    >
      {stream.isCustom && (
        isEditing ? (
          <>
            <button type="button" onClick={(e) => { e.stopPropagation(); onEditCustom(); }}
              className="absolute top-2 left-2 p-1 rounded-md bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 border border-cyan-400/40 transition-colors cursor-pointer z-10" title="Edit Name">
              <span className="material-symbols-outlined text-[14px]">edit</span>
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); onDeleteCustom(); }}
              className="absolute top-2 right-2 p-1 rounded-md bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/40 transition-colors cursor-pointer z-10" title="Delete Stream">
              <span className="material-symbols-outlined text-[14px]">delete</span>
            </button>
          </>
        ) : (
          <span className="absolute top-2 right-2 text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
            CUSTOM
          </span>
        )
      )}

      <div className="w-full flex flex-col items-center">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2 transition-all duration-200 ${
          isSelected ? 'bg-cyan-400/20 text-cyan-300 ring-1 ring-cyan-400/60 shadow-[0_0_12px_rgba(34,211,238,0.3)]' : 'bg-surface-container-high text-cyan-400/80 group-hover:text-cyan-300 group-hover:scale-110'
        }`}>
          <span className="material-symbols-outlined text-[24px]">{stream.icon || 'school'}</span>
        </div>
        <h4 className="text-xs sm:text-sm font-bold text-on-surface group-hover:text-white transition-colors truncate w-full text-center">{stream.name}</h4>
        {stream.sinhala && !stream.isCustom && (
          <p className="text-[12px] font-medium text-slate-200 mt-0.5 group-hover:text-white transition-colors truncate w-full text-center">{stream.sinhala}</p>
        )}
      </div>

      {isSelected && subjects && subjects.length > 0 && (
        <div className="my-2 w-full flex flex-wrap justify-center gap-1">
          {subjects.map((s) => {
            const sw = COLOR_SWATCHES.find((c) => c.id === s.color) || COLOR_SWATCHES[0];
            return (
              <span key={s.id} className={`text-[10px] px-2 py-0.5 rounded-full ${sw.bg} ${sw.text} border ${sw.border} font-mono truncate max-w-[130px] font-medium`} title={s.name}>
                {s.name}
              </span>
            );
          })}
        </div>
      )}

      <div className="mt-2 flex items-center justify-center gap-1.5 w-full">
        {isSelected ? (
          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> ACTIVE
          </span>
        ) : (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-container-high/60 text-outline border border-outline-variant/30 group-hover:border-cyan-400/40 group-hover:text-cyan-300 transition-all flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">add</span>
            <span>Add your subjects</span>
          </span>
        )}
      </div>
    </div>
  );
}
