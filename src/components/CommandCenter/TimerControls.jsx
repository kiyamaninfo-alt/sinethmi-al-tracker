export default function TimerControls({
  isActive, isPaused, sessionMode, onStart, onPause, onResume, onReset,
  duration, onSelectDuration
}) {
  return (
    <div className="flex flex-col items-center gap-3 mt-3">
      {!isActive && onSelectDuration && (
        <div className="flex items-center gap-1.5 text-[10px] font-mono">
          {[
            { id: 1, label: '1m Test' },
            { id: 25, label: '25m Pomodoro' },
            { id: 50, label: '50m Deep Work' }
          ].map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelectDuration(preset.id)}
              className={`px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                duration === preset.id
                  ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 font-bold'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3">
        {!isActive ? (
          <button
            type="button" onClick={onStart}
            className="px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-neon-violet to-neon-cyan text-white shadow-glow-cyan hover:opacity-95 hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">play_arrow</span>
            <span>Start Process</span>
          </button>
        ) : isPaused ? (
          <button
            type="button" onClick={onResume}
            className="px-6 py-2.5 rounded-xl font-bold text-xs bg-emerald-500 text-slate-950 shadow-md hover:brightness-110 active:scale-95 transition flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">play_arrow</span>
            <span>Resume {sessionMode === 'study' ? 'Focus' : 'Break'}</span>
          </button>
        ) : (
          <button
            type="button" onClick={onPause}
            className="px-6 py-2.5 rounded-xl font-bold text-xs bg-amber-500 text-slate-950 shadow-md hover:brightness-110 active:scale-95 transition flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">pause</span>
            <span>Pause Session</span>
          </button>
        )}

        <button
          type="button" onClick={onReset}
          className="px-4 py-2.5 rounded-xl font-bold text-xs glass-pill text-slate-300 border-white/10 hover:border-white/25 hover:text-white active:scale-95 transition flex items-center gap-1.5 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[15px]">restart_alt</span>
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}
