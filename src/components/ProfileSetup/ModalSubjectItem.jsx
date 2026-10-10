export default function ModalSubjectItem({ subject, isSelected, onToggle }) {
  return (
    <button
      type="button"
      onClick={() => onToggle(subject)}
      className={`p-3 rounded-xl border text-left transition-all duration-150 flex items-center justify-between text-xs cursor-pointer group select-none ${
        isSelected
          ? 'border-cyan-400 bg-cyan-500/20 text-white ring-1 ring-cyan-400/60 shadow-sm shadow-cyan-500/20'
          : 'border-outline-variant/20 bg-surface-container/30 text-slate-300 hover:border-cyan-500/50 hover:bg-surface-container/60'
      }`}
    >
      <div className="flex items-center gap-2.5 min-w-0 pr-2">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-[10px] font-bold shrink-0 ${
          isSelected ? 'bg-cyan-400 text-slate-950 font-black' : 'bg-surface-container-high text-cyan-400'
        }`}>
          {subject.code.replace('AL-', '')}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-cyan-400 font-semibold">{subject.code}</span>
            {subject.sinhala && <span className="text-[11px] font-medium text-slate-300 truncate">• {subject.sinhala}</span>}
          </div>
          <div className="font-bold text-slate-100 truncate text-xs mt-0.5 group-hover:text-cyan-200">
            {subject.name}
          </div>
        </div>
      </div>

      <div className={`shrink-0 transition-transform ${isSelected ? 'scale-110 text-cyan-400' : 'text-outline group-hover:text-cyan-400/70'}`}>
        <span className="material-symbols-outlined text-[20px]">
          {isSelected ? 'check_circle' : 'radio_button_unchecked'}
        </span>
      </div>
    </button>
  );
}
