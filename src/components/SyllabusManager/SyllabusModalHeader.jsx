import CompactLanguageToggle from '../common/CompactLanguageToggle';

export default function SyllabusModalHeader({
  onClose, totalUnits, totalSubUnits, isDbConnected, isLoading,
  language = 'si', onLanguageChange
}) {
  return (
    <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 shrink-0 gap-3">
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
          <span className="material-symbols-outlined text-[20px]">menu_book</span>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide truncate">Syllabus Manager</h3>
            <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border flex items-center gap-1 ${
              isDbConnected ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isDbConnected ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'}`} />
              <span>{isLoading ? 'FETCHING DB...' : isDbConnected ? 'DB CONNECTED' : 'CURRICULUM SYNC'}</span>
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            {totalUnits} Units &bull; {totalSubUnits} Sub-Units Active
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <CompactLanguageToggle value={language} onChange={onLanguageChange} />
        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          aria-label="Close Syllabus Manager"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
    </div>
  );
}
