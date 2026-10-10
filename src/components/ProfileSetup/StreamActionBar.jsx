export default function StreamActionBar({ isEditing, onToggleEdit, onUpdate, isSaved }) {
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
      <button
        type="button"
        onClick={onUpdate}
        className="w-full sm:w-auto px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-inverse-primary text-on-primary text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
      >
        <span className="material-symbols-outlined text-[15px]">{isSaved ? 'check_circle' : 'sync'}</span>
        <span>{isSaved ? 'Profile Updated ✓' : 'Update Profile'}</span>
      </button>
    </div>
  );
}
