export default function SyllabusModalHeader({ onClose, totalUnits, totalSubUnits, isDbConnected, isLoading }) {
  return (
    <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 shrink-0">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
          <span className="material-symbols-outlined text-[20px]">menu_book</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">Syllabus Manager</h3>
            <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border flex items-center gap-1 ${
              isDbConnected ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isDbConnected ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'}`} />
              <span>{isLoading ? 'SYNCING DB...' : isDbConnected ? 'DB CONNECTED' : 'CURRICULUM SYNC'}</span>
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            {totalUnits} Units &bull; {totalSubUnits} Sub-Units Active
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
        aria-label="Close Syllabus Manager"
      >
        <span className="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>
  );
}
