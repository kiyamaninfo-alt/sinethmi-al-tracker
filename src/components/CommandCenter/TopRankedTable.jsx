const TOP_PAPERS = [
  { rank: '🥇 1st', rankColor: 'text-amber-400', sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 1.2', name: 'නිෂ්පාදන පිරිවිතර නිර්මාණයේ මූලික අවශ්‍යතා', score: '100%', count: '(2 Papers)', date: '2026-09-22' },
  { rank: '🥈 2nd', rankColor: 'text-slate-300', sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 1.4', name: 'දත්ත ආරක්ෂණ ක්‍රමවේද', score: '99%', count: '(1 Paper)', date: '2026-09-15' },
  { rank: '🥉 3rd', rankColor: 'text-amber-600', sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 1.1', name: '1.1 දත්ත සහ තොරතුරු සංකල්ප', score: '98%', count: '(2 Papers)', date: '2026-10-02' },
  { rank: '4th', rankColor: 'text-slate-400', sub: 'SFT', subColor: 'bg-cyan-500/20 text-cyan-300', unit: 'Unit 4.4', name: 'ජල ජීව විද්‍යාත්මක පදනම', score: '98%', count: '(1 Paper)', date: '2026-09-15' },
  { rank: '5th', rankColor: 'text-slate-400', sub: 'SFT', subColor: 'bg-cyan-500/20 text-cyan-300', unit: 'Unit 4.5', name: 'ජල ජීවීන්ගේ සාධනීය භාවිත', score: '97%', count: '(1 Paper)', date: '2026-09-19' },
];

export default function TopRankedTable() {
  return (
    <section className="glass-panel rounded-3xl p-6 flex flex-col justify-between h-auto lg:h-[510px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5 shrink-0">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">🏆</span>
          <div>
            <h3 className="text-base font-bold text-white">වැඩිම ලකුණු සහිත Unit Papers (Top Mastery)</h3>
            <p className="text-xs text-slate-400">විෂය සවිස්තරාත්මක සාමාර්ථ්‍ය හා ප්‍රතිඵල පුවරුව (Zero-mark excluded)</p>
          </div>
        </div>
        <button type="button" className="px-3 py-1 rounded-lg text-xs font-semibold bg-neon-emerald/15 text-neon-emerald border border-neon-emerald/30 cursor-pointer">Top 10</button>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 text-[11px] pb-1 shrink-0">
        <button type="button" className="px-2.5 py-1 rounded-lg bg-neon-emerald/15 text-neon-emerald border border-neon-emerald/30">All Subjects</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">ICT (3)</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">SFT (2)</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">ET (0)</button>
      </div>

      <div className="space-y-2.5 flex-1 flex flex-col justify-between my-2">
        {TOP_PAPERS.map((row) => (
          <div key={row.name} className="glass-panel-elevated p-3 rounded-xl border border-white/5 flex items-center justify-between gap-3 hover:border-white/10 transition">
            <div className="flex items-center gap-3 min-w-0">
              <span className={`font-mono font-bold text-xs sm:text-sm w-12 shrink-0 ${row.rankColor}`}>{row.rank}</span>
              <span className={`px-2 py-0.5 rounded font-mono font-bold text-[10px] shrink-0 ${row.subColor}`}>{row.sub}</span>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-white block truncate">{row.unit} • {row.name}</span>
                <span className="text-[10px] font-mono text-slate-400 block truncate">Exam: {row.date} • {row.count}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="px-2.5 py-1 rounded-full font-mono font-black text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {row.score}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                Printed ✓
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 text-center border-t border-white/5 shrink-0">
        <button type="button" className="text-xs font-mono text-neon-emerald hover:underline inline-flex items-center gap-1 cursor-pointer">
          More Papers →
        </button>
      </div>
    </section>
  );
}
