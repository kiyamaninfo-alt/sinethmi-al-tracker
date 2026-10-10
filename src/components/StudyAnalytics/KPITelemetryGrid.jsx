const METRICS = [
  { label: 'Current Streak', icon: '🔥', value: '3', unit: 'Days', sub: 'Best: 3 Days', color: 'from-amber-500', valClass: 'text-white' },
  { label: 'Total Focus Time', icon: '⏱️', value: '11.6', unit: 'Hrs', sub: 'Total: 697 Mins', color: 'from-purple-500', valClass: 'text-white' },
  { label: "Today's Focus", icon: '📅', value: '222', unit: 'Mins', sub: 'Target: 180m (+42m)', color: 'from-cyan-400', valClass: 'text-cyan-400', border: 'border-purple-500/30' },
  { label: 'Daily Avg (7D)', icon: '📈', value: '92', unit: 'm/day', sub: 'This Week: 647m', color: 'from-emerald-500', valClass: 'text-white' },
  { label: 'Peak Time', icon: '🎯', value: 'Afternoon', unit: '(12–5 PM)', sub: 'Slot Share: 43%', color: 'from-amber-400', valClass: 'text-white text-lg font-bold' },
  { label: 'Week Focus', icon: '📊', value: '9.1', unit: 'Hrs', sub: 'Target: 45% (20h)', color: 'from-blue-500', valClass: 'text-white' },
  { label: 'Active Days', icon: '📆', value: '3', unit: 'Days', sub: 'This Month: 50%', color: 'from-rose-500', valClass: 'text-white' },
  { label: 'Top Subject', icon: '🏆', value: 'SFT', unit: '(6.0h)', sub: 'Share: 51%', color: 'from-cyan-400', valClass: 'text-cyan-400', border: 'border-cyan-500/30' },
  { label: 'Completion', icon: '🎯', value: '36%', unit: '', sub: 'Goal: 25h/w (Cur: 9.1h)', color: 'from-red-500', valClass: 'text-white' },
];

export default function KPITelemetryGrid() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-3">
      {METRICS.map((m) => (
        <div
          key={m.label}
          className={`glass-card glass-card-interactive p-3 rounded-xl flex flex-col justify-between h-36 min-h-[144px] relative overflow-hidden ${
            m.border || ''
          }`}
        >
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-semibold tracking-wider uppercase shrink-0">
            <span className="truncate mr-1">{m.label}</span>
            <span className="shrink-0">{m.icon}</span>
          </div>
          <div className="my-auto py-1">
            <div className="flex items-baseline gap-1">
              <span className={`text-xl sm:text-2xl font-black tracking-tight leading-none ${m.valClass}`}>
                {m.value}
              </span>
              {m.unit && <span className="text-[10px] font-medium text-slate-400 shrink-0">{m.unit}</span>}
            </div>
          </div>
          <div className="text-[10px] text-slate-400 truncate shrink-0 pt-1 border-t border-white/5">
            {m.sub}
          </div>
          <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${m.color} to-transparent`} />
        </div>
      ))}
    </section>
  );
}
