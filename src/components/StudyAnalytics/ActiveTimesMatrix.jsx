const HOURS = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

const DAYS_SCHEDULE = [
  { day: 'Monday', sin: 'සඳුදා', activeHours: [5, 6, 7, 10, 12, 14, 17] },
  { day: 'Tuesday', sin: 'අඟහරුවාදා', activeHours: [10, 12, 15] },
  { day: 'Wednesday', sin: 'බදාදා', activeHours: [] },
  { day: 'Thursday', sin: 'බ්‍රහස්පතින්දා', activeHours: [] },
  { day: 'Friday', sin: 'සිකුරාදා', activeHours: [] },
  { day: 'Saturday', sin: 'සෙනසුරාදා', activeHours: [] },
  { day: 'Sunday', sin: 'ඉරිදා', activeHours: [13, 14, 17] },
];

export default function ActiveTimesMatrix() {
  return (
    <section className="glass-card rounded-2xl p-5 border border-obsidian-border space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-obsidian-border">
        <div className="flex items-center gap-3">
          <span className="text-lg">📊</span>
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">
              සතිපතා දෛනික හා කාල පරාස අනුකෘතිය <span className="text-slate-400 font-normal text-sm">(24 × 7 Active Times Matrix)</span>
            </h2>
            <p className="text-xs text-slate-400">සතියේ දින 7 සහ පැය 24 පුරා අධ්‍යයන රටාව (Weekly Focus Habits)</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <div className="min-w-[1080px]">
          <div className="grid grid-cols-[140px_repeat(24,1fr)] gap-1 text-center text-[10px] font-mono text-slate-400 pb-2">
            <div className="text-left font-sans font-semibold text-slate-400">Day / Time</div>
            {HOURS.map((h) => <div key={h}>{h}</div>)}
          </div>

          <div className="space-y-1.5">
            {DAYS_SCHEDULE.map((d) => (
              <div key={d.day} className="grid grid-cols-[140px_repeat(24,1fr)] gap-1 items-center">
                <div className="text-xs font-medium text-slate-300">
                  <span className="font-bold text-white">{d.day}</span> <span className="text-[11px] text-slate-500">{d.sin}</span>
                </div>
                {Array.from({ length: 24 }).map((_, h) => {
                  const isActive = d.activeHours.includes(h);
                  return (
                    <div
                      key={`${d.day}-${h}`}
                      className={`h-6 rounded transition ${
                        isActive
                          ? 'bg-purple-600 shadow-[0_0_8px_#8B5CF6] border border-purple-400'
                          : 'bg-slate-800/30'
                      }`}
                      title={`${d.day} ${h}:00 ${isActive ? 'Active' : ''}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-amber-400">💡</span>
              <span>Hover any cell to inspect hourly focus time</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500">Less</span>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-sm bg-slate-800/50" />
                <span className="w-3 h-3 rounded-sm bg-purple-900" />
                <span className="w-3 h-3 rounded-sm bg-purple-600" />
                <span className="w-3 h-3 rounded-sm bg-cyan-400" />
              </div>
              <span className="text-[11px] text-slate-500">More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
