export default function StreamActionBar({ isEditing, onToggleEdit }) {
  return (
    <div className="pt-3 border-t border-outline-variant/20 flex flex-wrap items-center justify-end gap-2.5">
      <button
        type="button"
        onClick={onToggleEdit}
        className={`w-full sm:w-auto px-4 py-2 rounded-lg border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 ${
          isEditing ? 'bg-amber-500/20 text-amber-300 border-amber-500/50' : 'bg-surface-container-high hover:bg-cyan-500/20 text-cyan-300 border-cyan-400/40 hover:border-cyan-400'
        }`}
      >
        <span className="material-symbols-outlined text-[15px]">{isEditing ? 'lock' : 'edit'}</span>
        <span>{isEditing ? 'Lock Streams' : 'Edit Stream & Subjects'}</span>
      </button>
    </div>
  );
}
