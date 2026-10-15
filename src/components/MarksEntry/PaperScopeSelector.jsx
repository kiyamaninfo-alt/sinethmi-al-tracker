const SCOPES = [
  { id: 'full_syllabus', label: 'Full Syllabus Paper', sub: 'සම්පූර්ණ විභාගය', icon: 'auto_stories' },
  { id: 'unit_paper', label: 'Unit Paper', sub: 'පාඩම් ප්‍රශ්න පත්‍රය', icon: 'menu_book' },
  { id: 'sub_unit_paper', label: 'Sub-unit Paper', sub: 'උප-පාඩම් ප්‍රශ්න පත්‍රය', icon: 'segment' }
];

export default function PaperScopeSelector({ paperScope, onSelectScope }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[14px] text-cyan-400">layers</span>
        <span>Paper Scope Selection *</span>
      </label>
      <div className="grid grid-cols-3 gap-2">
        {SCOPES.map(({ id, label, sub, icon }) => {
          const isSelected = paperScope === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onSelectScope(id)}
              className={`p-2.5 rounded-xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'border-cyan-400 bg-cyan-500/15 text-white shadow-sm shadow-cyan-400/20 ring-1 ring-cyan-400/40'
                  : 'border-white/10 bg-white/[0.03] text-slate-400 hover:text-slate-200 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`material-symbols-outlined text-[18px] ${isSelected ? 'text-cyan-300' : 'text-slate-500'}`}>
                  {icon}
                </span>
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400 shadow-[0_0_6px_#22d3ee]' : 'bg-transparent'}`} />
              </div>
              <div className="mt-1.5 truncate">
                <p className="text-xs font-bold leading-tight truncate">{label}</p>
                <p className="text-[10px] text-slate-400 truncate">{sub}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
