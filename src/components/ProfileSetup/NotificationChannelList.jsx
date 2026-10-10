export default function NotificationChannelList({ settings, onToggleChannel, disabled }) {
  const channels = [
    { key: 'studySessionAlerts', label: 'Study Session End Alerts', desc: 'Audio tone & popup when timer runs out', icon: 'timer' },
    { key: 'dailyMilestones', label: 'Daily Milestone Pings', desc: 'Alert upon reaching targeted hours', icon: 'military_tech' },
    { key: 'examCountdowns', label: 'Exam Countdown Horizon', desc: 'Weekly remaining days reminder', icon: 'event_upcoming' }
  ];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-2.5 transition-opacity ${disabled ? 'opacity-40 pointer-events-none' : ''}`}>
      {channels.map((ch) => {
        const isChecked = !!settings[ch.key];
        return (
          <div
            key={ch.key}
            onClick={() => onToggleChannel(ch.key, !isChecked)}
            className={`p-3 rounded-xl border transition-all cursor-pointer ${
              isChecked
                ? 'bg-surface-container/70 border-cyan-500/30 ring-1 ring-cyan-500/20'
                : 'bg-surface-container-low/40 border-outline-variant/20 hover:border-outline-variant/40'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className={`material-symbols-outlined text-[18px] ${isChecked ? 'text-cyan-400' : 'text-outline'}`}>
                {ch.icon}
              </span>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => {}}
                className="accent-cyan-400 pointer-events-none"
              />
            </div>
            <div className="text-xs font-bold text-on-surface">{ch.label}</div>
            <div className="text-[10px] text-outline font-mono mt-0.5">{ch.desc}</div>
          </div>
        );
      })}
    </div>
  );
}
