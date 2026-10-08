export default function FocusTrendChart() {
  const resolutions = ['7D', '14D', '1M', '3M', '1Y', 'All'];
  const yLabels = ['350m', '300m', '250m', '200m', '150m', '100m', '0m'];
  const emptyDays = ['Wed 23', 'Thu 24', 'Fri 25', 'Sat 26', 'Sun 27', 'Mon 28', 'Tue 29', 'Wed 30', 'Thu 1', 'Fri 2', 'Sat 3'];

  return (
    <div className="lg:col-span-7 glass-card rounded-2xl p-5 border border-obsidian-border flex flex-col justify-between">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-obsidian-border">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">📊</span>
            <h2 className="text-sm font-bold text-white">
              ප්‍රගති ප්‍රවණතාව <span className="text-xs text-slate-400 font-normal">(14-Day Focus Trend)</span>
            </h2>
          </div>
          <div className="flex items-center gap-1 bg-obsidian-surface p-1 rounded-lg border border-obsidian-border text-xs self-start sm:self-auto">
            {resolutions.map((r, i) => (
              <button key={r} type="button" className={`px-2.5 py-0.5 rounded transition ${i === 1 ? 'text-white font-bold bg-purple-600/70 border border-purple-400/30' : 'text-slate-400 hover:text-white'}`}>{r}</button>
            ))}
          </div>
        </div>

        <div className="pt-6 pb-2">
          <div className="relative h-64 flex items-end">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] font-mono text-slate-500">
              {yLabels.map((yl) => (
                <div key={yl} className="border-b border-slate-800/80 pb-0.5 flex justify-between"><span>{yl}</span></div>
              ))}
            </div>

            <div className="relative w-full h-full flex items-end justify-between gap-1 sm:gap-2 px-6 pt-4">
              {emptyDays.map((day) => (
                <div key={day} className="flex-1 flex flex-col items-center h-full justify-end group">
                  <div className="w-full max-w-[28px] h-0 bg-transparent" />
                  <span className="text-[9px] text-slate-500 mt-2">{day}</span>
                </div>
              ))}
              <div className="flex-1 flex flex-col items-center h-full justify-end group">
                <div className="w-full max-w-[28px] rounded-t overflow-hidden shadow-lg transition-all group-hover:brightness-125 h-[40%]">
                  <div className="w-full h-full bg-emerald-500" title="Sun 4: 140 Mins ICT" />
                </div>
                <span className="text-[9px] font-bold text-emerald-400 mt-2">Sun 4</span>
              </div>
              <div className="flex-1 flex flex-col items-center h-full justify-end group">
                <div className="w-full max-w-[28px] rounded-t overflow-hidden shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all group-hover:brightness-125 flex flex-col-reverse h-[95%]">
                  <div className="w-full bg-emerald-500 h-[15%]" title="ICT" />
                  <div className="w-full bg-cyan-400 h-[25%]" title="SFT" />
                  <div className="w-full bg-purple-600 h-[60%]" title="ET" />
                </div>
                <span className="text-[9px] font-bold text-purple-400 mt-2">Mon 5</span>
              </div>
              <div className="flex-1 flex flex-col items-center h-full justify-end group">
                <div className="w-full max-w-[28px] rounded-t overflow-hidden shadow-[0_0_12px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/50 transition-all group-hover:brightness-125 flex flex-col-reverse h-[64%]">
                  <div className="w-full bg-cyan-400 h-[60%]" title="SFT 72m" />
                  <div className="w-full bg-purple-600 h-[40%]" title="ET 150m" />
                </div>
                <span className="text-[9px] font-bold text-cyan-400 mt-2">Tue 6</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 pt-3 border-t border-obsidian-border text-xs">
        {[{ name: 'ICT', color: 'bg-emerald-500' }, { name: 'ET', color: 'bg-purple-600' }, { name: 'SFT', color: 'bg-cyan-400' }].map((leg) => (
          <div key={leg.name} className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded ${leg.color}`} />
            <span className="text-slate-300 font-medium">{leg.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
