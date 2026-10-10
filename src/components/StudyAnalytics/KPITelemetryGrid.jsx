const METRICS = [
  { label: 'Current Streak', icon: '🔥', value: '3', unit: 'Days', sub: 'Best: 3 Days', color: 'from-amber-500', valClass: 'text-white' },
  { label: 'Total Focus Time', icon: '⏱️', value: '11.6', unit: 'Hrs', sub: 'Total: 697 Mins', color: 'from-purple-500', valClass: 'text-white' },
  { label: "Today's Focus", icon: '📅', value: '222', unit: 'Mins', sub: 'Target: 180m (+42m)', color: 'from-cyan-400', valClass: 'text-cyan-400', border: 'border-purple-500/30' },
  { label: 'Daily Avg (7D)', icon: '📈', value: '92', unit: 'm/day', sub: 'This Week: 647m', color: 'from-emerald-500', valClass: 'text-white' },
  { label: 'Peak Time', icon: '🎯', value: 'Afternoon', unit: '12–5 PM', sub: 'Slot Share: 43%', color: 'from-amber-400', valClass: 'text-white' },
  { label: 'Week Focus', icon: '📊', value: '9.1', unit: 'Hrs', sub: 'Target: 45% (20h)', color: 'from-blue-500', valClass: 'text-white' },
  { label: 'Active Days', icon: '📆', value: '3', unit: 'Days', sub: 'This Month: 50%', color: 'from-rose-500', valClass: 'text-white' },
  { label: 'Top Subject', icon: '🏆', value: 'SFT', unit: '6.0h', sub: 'Share: 51%', color: 'from-cyan-400', valClass: 'text-cyan-400', border: 'border-cyan-500/30' },
  { label: 'Completion', icon: '🎯', value: '36%', unit: '', sub: 'Goal: 25h/w', color: 'from-red-500', valClass: 'text-white' },
];

export default function KPITelemetryGrid() {
  return (
    <div className="overflow-x-auto">
      <section className="flex gap-3 min-w-max lg:min-w-0 lg:grid lg:grid-cols-9">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className={`glass-card glass-card-interactive rounded-xl flex flex-col items-center text-center p-3 h-32 w-32 lg:w-auto relative overflow-hidden shrink-0 lg:shrink ${
              m.border || ''
            }`}
          >
            <div className="text-base mb-0.5">{m.icon}</div>
            <div className="text-[9px] font-semibold tracking-wider uppercase text-slate-400 truncate w-full text-center leading-tight mb-1">
              {m.label}
            </div>
            <div className="flex items-baseline justify-center gap-0.5 my-auto">
              <span className={`text-xl font-black tracking-tight leading-none ${m.valClass}`}>
                {m.value}
              </span>
              {m.unit && (
                <span className="text-[10px] font-medium text-slate-400">{m.unit}</span>
              )}
            </div>
            <div className="text-[9px] text-slate-400 truncate w-full mt-1 pt-1 border-t border-white/5">
              {m.sub}
            </div>
            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${m.color} to-transparent`} />
          </div>
        ))}
      </section>
    </div>
  );
}
