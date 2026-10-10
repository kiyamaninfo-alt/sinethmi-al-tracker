export default function TimerControls({
  isActive,
  isPaused,
  sessionMode,
  canStart,
  onStart,
  onPause,
  onResume,
  onReset
}) {
  return (
    <div className="flex items-center gap-3 mt-4">
      {!isActive ? (
        <button
          type="button"
          onClick={onStart}
          className="px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-neon-violet to-neon-cyan text-white shadow-glow-cyan hover:opacity-95 hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">play_arrow</span>
          <span>Start Process</span>
        </button>
      ) : isPaused ? (
        <button
          type="button"
          onClick={onResume}
          className="px-6 py-2.5 rounded-xl font-bold text-xs bg-emerald-500 text-slate-950 shadow-md hover:brightness-110 active:scale-95 transition flex items-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">play_arrow</span>
          <span>Resume {sessionMode === 'study' ? 'Focus' : 'Break'}</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={onPause}
          className="px-6 py-2.5 rounded-xl font-bold text-xs bg-amber-500 text-slate-950 shadow-md hover:brightness-110 active:scale-95 transition flex items-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">pause</span>
          <span>Pause Session</span>
        </button>
      )}

      <button
        type="button"
        onClick={onReset}
        className="px-4 py-2.5 rounded-xl font-bold text-xs glass-pill text-slate-300 border-white/10 hover:border-white/25 hover:text-white active:scale-95 transition flex items-center gap-1.5 cursor-pointer"
      >
        <span className="material-symbols-outlined text-[15px]">restart_alt</span>
        <span>Reset</span>
      </button>
    </div>
  );
}
