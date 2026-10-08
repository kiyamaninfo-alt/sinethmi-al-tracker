import { sessionHistoryData } from './sessionHistoryData';
import SessionHistoryRow from './SessionHistoryRow';

export default function SessionHistoryTable() {
  const timePresets = ['1 Day', '7 Days', '14 Days', '1 Month', '3 Months', '1 Year', 'All Time'];
  const subjects = [
    { name: 'සියල්ල (All)', active: true, cls: 'text-white font-semibold bg-slate-700/60 border border-slate-600' },
    { name: 'ICT', active: false, cls: 'text-emerald-400 hover:text-white' },
    { name: 'ET', active: false, cls: 'text-purple-400 hover:text-white' },
    { name: 'SFT', active: false, cls: 'text-cyan-400 hover:text-white' },
  ];

  return (
    <section className="glass-card rounded-2xl p-5 border border-obsidian-border space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-3 border-b border-obsidian-border">
        <div className="flex items-center gap-3">
          <span className="text-lg">📜</span>
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">
              අධ්‍යයන සැසි වාර්තාව <span className="text-slate-400 font-normal text-sm font-sans">(Session History Log)</span>
            </h2>
            <p className="text-xs text-slate-400">Individual focus timers logged to local datastore and cloud sync</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center bg-obsidian-surface p-1 rounded-xl border border-obsidian-border">
            {timePresets.map((preset, i) => (
              <button
                key={preset}
                type="button"
                className={`px-2 py-1 rounded-lg transition ${
                  i === 6 ? 'text-white font-semibold bg-purple-600/70 border border-purple-400/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>

          <div className="flex items-center bg-obsidian-surface p-1 rounded-xl border border-obsidian-border">
            {subjects.map((sub) => (
              <button key={sub.name} type="button" className={`px-2.5 py-1 rounded-lg transition ${sub.cls}`}>{sub.name}</button>
            ))}
          </div>

          <div className="px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-[11px] font-semibold text-slate-300">
            Total Logged: <span className="text-purple-400 font-bold">17</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left text-xs whitespace-nowrap">
          <thead>
            <tr className="text-slate-400 border-b border-slate-800 font-semibold uppercase tracking-wider text-[10px]">
              {['ටයිමර් ආරම්භය (Timer Start)', 'ටයිමර් අවසානය (Timer Stop)', 'විෂය (Subject)', 'පාඩම / ඒකකය (Unit / Topic)', 'කාලය (Mins)', 'තත්ත්වය (Status)'].map((h) => (
                <th key={h} className="py-3 px-3">{h}</th>
              ))}
              <th className="py-3 px-3 text-right">ක්‍රියා (Actions)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-sans">
            {sessionHistoryData.map((session) => (
              <SessionHistoryRow key={session.id} session={session} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-obsidian-border text-xs">
        <button type="button" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-obsidian-surface text-slate-400 hover:text-white border border-obsidian-border transition">← Previous</button>
        <span className="font-medium text-slate-400">Page <strong className="text-white">1</strong> of 2</span>
        <button type="button" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-obsidian-surface text-slate-200 hover:text-white border border-purple-500/30 transition hover:bg-slate-800">Next →</button>
      </div>
    </section>
  );
}
