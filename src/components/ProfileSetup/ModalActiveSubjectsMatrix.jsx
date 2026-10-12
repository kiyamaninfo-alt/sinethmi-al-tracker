import { COLOR_SWATCHES } from '../../constants/profileSetup';

export default function ModalActiveSubjectsMatrix({ selectedList, onRemove }) {
  if (!selectedList || selectedList.length === 0) return null;

  return (
    <div className="p-3 rounded-xl bg-surface-container/90 border border-cyan-400/40 space-y-2.5 shadow-lg shadow-cyan-950/40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px] text-tertiary">view_in_ar</span>
          <span className="text-xs font-mono font-bold text-cyan-300">
            Active Subjects Matrix ({selectedList.length}/3 Selected)
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400">Unique color telemetry</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {selectedList.map((sub) => {
          const sw = COLOR_SWATCHES.find((c) => c.id === sub.color) || COLOR_SWATCHES[0];
          return (
            <div
              key={sub.id}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${sw.bg} border ${sw.border} ${sw.text} text-xs font-mono group`}
            >
              <span className={`w-2 h-2 rounded-full ${sw.dot}`} />
              <span className="font-bold text-white">{sub.code || 'SUB'}</span>
              <span>{sub.name}</span>
              {sub.sinhala && <span className="text-[10px] opacity-80">({sub.sinhala})</span>}
              <button
                type="button"
                onClick={() => onRemove(sub)}
                className="opacity-70 hover:opacity-100 hover:text-rose-400 transition ml-1 font-bold cursor-pointer"
                title={`Remove ${sub.name}`}
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
