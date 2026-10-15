export default function SyllabusSearchField({ searchQuery, onSearchChange, onClear }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[14px] text-amber-400">search</span>
          <span>Search Units &amp; Sub-Units</span>
        </label>
        {searchQuery && (
          <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            Filtering active
          </span>
        )}
      </div>
      <div className="relative flex items-center">
        <span className="absolute left-3 text-slate-400 material-symbols-outlined text-[18px] pointer-events-none">
          manage_search
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Type number (1, 1.2) or characters (e.g. concrete, engine)..."
          className="w-full bg-[#080d1a] border border-white/15 focus:border-amber-400/80 rounded-xl pl-9 pr-9 py-2.5 text-xs text-white placeholder-slate-500 font-medium outline-none transition shadow-inner"
          autoFocus
        />
        {searchQuery ? (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-2.5 p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
            title="Clear search"
          >
            <span className="material-symbols-outlined text-[16px]">cancel</span>
          </button>
        ) : (
          <span className="absolute right-3 text-[10px] font-mono text-slate-500 pointer-events-none">
            ESC
          </span>
        )}
      </div>
    </div>
  );
}
