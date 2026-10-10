import { useNavigate } from 'react-router-dom';

export default function FocusTimerHeader({ isMuted, onToggleMute, showVideoToggle, onToggleVideo, isVideoOpen }) {
  const navigate = useNavigate();

  const handleOpenSettings = () => {
    navigate('/profile-setup#focus-alarm-settings');
  };

  return (
    <div className="flex items-center justify-between pb-3 border-b border-white/5">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white">Deep Focus Session Timer</h3>
          <p className="text-xs text-slate-300">අඛණ්ඩව අධ්‍යයන කාල සටහන සහ අවධානය රඳවාගැනීම</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {showVideoToggle && (
          <button
            type="button"
            onClick={onToggleVideo}
            title={isVideoOpen ? 'Minimize Video' : 'Reopen Video'}
            className="px-2.5 py-1.5 rounded-xl border border-cyan-400/40 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">
              {isVideoOpen ? 'videocam_off' : 'videocam'}
            </span>
            <span className="hidden sm:inline">{isVideoOpen ? 'Hide' : 'Reopen Video'}</span>
          </button>
        )}
        <button
          type="button"
          onClick={onToggleMute}
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          className={`p-2 rounded-xl border transition-all cursor-pointer ${
            isMuted
              ? 'bg-rose-500/15 border-rose-500/40 text-rose-300'
              : 'bg-surface-container border-white/10 text-cyan-300 hover:bg-white/10'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">
            {isMuted ? 'volume_off' : 'volume_up'}
          </span>
        </button>

        <button
          type="button"
          onClick={handleOpenSettings}
          title="Open Focus alarms and session reminders in Profile Setup"
          className="p-2 rounded-xl bg-surface-container hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">settings</span>
        </button>
      </div>
    </div>
  );
}
