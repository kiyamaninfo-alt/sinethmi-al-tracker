export default function ModalCategoryTabs({ categories, activeTab, onSelectTab }) {
  return (
    <div className="grid grid-cols-2 p-1 rounded-xl bg-surface-container-high/70 border border-outline-variant/30 text-xs font-mono gap-1">
      {categories.map((c) => {
        const isActive = activeTab === c.id;
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => onSelectTab(c.id)}
            className={`py-2 px-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isActive
                ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-black'
                : 'text-outline hover:text-white hover:bg-surface-container/60'
            }`}
          >
            <span className="truncate">{c.label}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${
              isActive ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-surface-container text-cyan-400'
            }`}>
              {c.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
