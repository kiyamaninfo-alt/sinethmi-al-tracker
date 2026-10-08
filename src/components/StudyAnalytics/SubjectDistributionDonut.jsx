export default function SubjectDistributionDonut() {
  const filters = ['7 Days', '14 Days', '1 Month', '3 Months', '1 Year', 'All Time'];
  const legend = [
    { name: 'ICT (19%)', color: 'bg-ict' },
    { name: 'ET (29%)', color: 'bg-et' },
    { name: 'SFT (52%)', color: 'bg-sft' },
  ];

  return (
    <div className="lg:col-span-5 glass-card rounded-2xl p-5 border border-obsidian-border flex flex-col justify-between">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-obsidian-border">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">🍩</span>
            <h2 className="text-sm font-bold text-white">
              විෂය අනුව කාලය බෙදීම <span className="text-xs text-slate-400 font-normal">(Subject Distribution)</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1 mt-3 text-[11px] bg-obsidian-surface p-1 rounded-lg border border-obsidian-border w-fit">
          {filters.map((f, i) => (
            <button
              key={f}
              type="button"
              className={`px-2 py-0.5 rounded transition ${
                i === 5 ? 'text-white font-bold bg-purple-600/70 border border-purple-400/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative py-8 flex items-center justify-center">
          <div className="w-64 h-64 relative flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" fill="transparent" r="38" stroke="#131b2e" strokeWidth="12" />
              <circle className="drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" cx="50" cy="50" fill="transparent" r="38" stroke="#06B6D4" strokeDasharray="124.1 238.7" strokeDashoffset="0" strokeLinecap="round" strokeWidth="12" />
              <circle className="drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" cx="50" cy="50" fill="transparent" r="38" stroke="#8B5CF6" strokeDasharray="69.2 238.7" strokeDashoffset="-124.1" strokeLinecap="round" strokeWidth="12" />
              <circle className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" cx="50" cy="50" fill="transparent" r="38" stroke="#10B981" strokeDasharray="45.4 238.7" strokeDashoffset="-193.3" strokeLinecap="round" strokeWidth="12" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Total Tracked</span>
              <span className="text-3xl font-black text-white tracking-tight">11.6 <span className="text-xs font-normal text-purple-400">Hrs</span></span>
              <span className="text-[11px] text-emerald-400 font-medium">17 Logged Sessions</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 pt-3 border-t border-obsidian-border text-xs">
        {legend.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${item.color}`} />
            <span className="text-slate-300 font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
