const TIME_WINDOWS = [
  { icon: '🌅', pct: '22%', title: 'Early Morning', sub: 'පාන්දර / පෙරවරුව', time: '04:00 – 08:00', hrs: '2.5', sessions: '3 Sessions', isPeak: false },
  { icon: '☀️', pct: '29%', title: 'Morning', sub: 'උදෑසන / දවල්', time: '08:00 – 12:00', hrs: '3.3', sessions: '5 Sessions', isPeak: false },
  { icon: '☀️', pct: '43%', title: 'Afternoon', sub: 'දවල් / පස්වරුව', time: '12:00 – 17:00', hrs: '5.0', sessions: '8 Sessions', isPeak: true },
  { icon: '🌇', pct: '7%', title: 'Evening', sub: 'සන්ධ්‍යා කාලය', time: '17:00 – 21:00', hrs: '0.8', sessions: '1 Session', isPeak: false },
  { icon: '🌙', pct: '0%', title: 'Late Night', sub: 'රාත්‍රී / මැදියම', time: '21:00 – 04:00', hrs: '0.0', sessions: '0 Sessions', isPeak: false },
];

export default function PeakStudyTimeSection() {
  return (
    <section className="glass-card rounded-2xl p-5 border border-obsidian-border space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-lg">🕒</span>
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">
              වැඩිපුරම පාඩම් කල කාල පරාසයන් <span className="text-slate-400 font-normal text-sm">(Peak Study Time Periods)</span>
            </h2>
            <p className="text-xs text-slate-400">Chronobiological focus efficiency across dayparts</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center bg-obsidian-surface p-1 rounded-xl border border-obsidian-border">
            <button type="button" className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white">7 Days</button>
            <button type="button" className="px-2.5 py-1 rounded-lg text-white font-semibold bg-purple-600/70 border border-purple-400/30">All Time</button>
          </div>
          <div className="flex items-center bg-obsidian-surface p-1 rounded-xl border border-obsidian-border">
            <button type="button" className="px-2.5 py-1 rounded-lg text-white font-medium bg-slate-700/50">All</button>
            <button type="button" className="px-2.5 py-1 rounded-lg text-emerald-400">ICT</button>
            <button type="button" className="px-2.5 py-1 rounded-lg text-purple-400">ET</button>
            <button type="button" className="px-2.5 py-1 rounded-lg text-cyan-400">SFT</button>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-purple-950/20 to-transparent border border-amber-500/30 flex items-start sm:items-center gap-3.5">
        <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 text-xl shrink-0">🏆</div>
        <div className="text-xs leading-relaxed text-slate-200">
          <div className="font-bold text-amber-300 text-sm mb-0.5">Peak Focus Window (ALL): Afternoon (12:00 – 17:00)</div>
          <span>ඔබ සියලු විෂයන් සඳහා වැඩිපුරම අවධානයෙන් පාඩම් කර ඇත්තේ දවල් / පස්වරුව කාලයේදීය — <strong className="text-amber-300 font-semibold">43%</strong> (5.0 පැය, සැසි 8).</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {TIME_WINDOWS.map((w) => (
          <div
            key={w.title}
            className={`glass-card p-4 rounded-xl transition flex flex-col justify-between relative overflow-hidden ${
              w.isPeak ? 'border-2 border-amber-500/50 bg-amber-500/5 shadow-[0_0_20px_rgba(245,158,11,0.15)]' : 'border border-obsidian-border'
            }`}
          >
            {w.isPeak && (
              <div className="absolute -right-6 top-2 rotate-45 bg-amber-500 text-obsidian-deep text-[8px] font-black uppercase px-6 py-0.5 tracking-wider">
                PEAK
              </div>
            )}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-base">{w.icon}</span>
                <span className={`text-[11px] font-bold ${w.isPeak ? 'text-amber-300' : 'text-slate-400'}`}>{w.pct}</span>
              </div>
              <div className="text-xs font-bold text-white">{w.title}</div>
              <div className="text-[11px] text-slate-400">{w.sub}</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">{w.time}</div>
            </div>
            <div className={`mt-4 pt-2 border-t ${w.isPeak ? 'border-amber-500/20' : 'border-slate-800'}`}>
              <div className={`text-lg font-black ${w.isPeak ? 'text-amber-300' : 'text-white'}`}>{w.hrs} <span className="text-xs font-normal text-slate-400">Hrs</span></div>
              <div className="text-[10px] text-slate-400">{w.sessions}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
