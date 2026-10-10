import { COLOR_SWATCHES } from '../../constants/profileSetup';

export default function SubjectInfoModal({ subject, onClose }) {
  if (!subject) return null;

  const swatch = COLOR_SWATCHES.find((s) => s.id === subject.color) || COLOR_SWATCHES[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0b1020] border border-outline-variant/40 rounded-2xl max-w-md w-full p-5 space-y-4 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${swatch.bg} ${swatch.border} ${swatch.text}`}>
              <span className="material-symbols-outlined text-[20px]">menu_book</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">{subject.code || 'SUBJECT'}</span>
              <h3 className="text-base font-bold text-white">{subject.name}</h3>
              <p className="text-xs text-slate-300 font-medium">{subject.sinhala}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center font-mono">
          <div className="p-2 rounded-lg bg-surface-container/50">
            <span className="text-[10px] text-outline block">Total Units</span>
            <span className="text-sm font-bold text-white">{subject.units || 14}</span>
          </div>
          <div className="p-2 rounded-lg bg-surface-container/50">
            <span className="text-[10px] text-outline block">Hours / Wk</span>
            <span className="text-sm font-bold text-cyan-300">{subject.hours || 8}h</span>
          </div>
          <div className="p-2 rounded-lg bg-surface-container/50">
            <span className="text-[10px] text-outline block">Color Swatch</span>
            <span className={`text-xs font-bold capitalize ${swatch.text}`}>{subject.color || 'cyan'}</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-surface-container/40 border border-white/5 text-xs text-slate-300 space-y-1">
          <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
            <span className="material-symbols-outlined text-[15px]">info</span>
            <span>Database Status: Active Telemetry</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Detailed syllabus content and question database will be dynamically populated in future syllabus updates.
          </p>
        </div>

        <div className="flex justify-end pt-1">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-mono font-bold hover:bg-cyan-500/30 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
