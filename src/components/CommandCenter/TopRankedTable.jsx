const TOP_PAPERS = [
  { rank: '🥇 1st', rankColor: 'text-amber-400', sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 1.2', name: 'නිෂ්පාදන පිරිවිතර නිර්මාණයේ මූලික අවශ්‍යතා', score: '100%', count: '(2 Papers)', date: '2026-09-22' },
  { rank: '🥈 2nd', rankColor: 'text-slate-300', sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 1.4', name: 'දත්ත ආරක්ෂණ ක්‍රමවේද', score: '99%', count: '(1 Paper)', date: '2026-09-15' },
  { rank: '🥉 3rd', rankColor: 'text-amber-600', sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 1.1', name: '1.1 දත්ත සහ තොරතුරු සංකල්ප', score: '98%', count: '(2 Papers)', date: '2026-10-02' },
  { rank: '4th', rankColor: 'text-slate-400', sub: 'SFT', subColor: 'bg-cyan-500/20 text-cyan-300', unit: 'Unit 4.4', name: 'ජල ජීව විද්‍යාත්මක පදනම', score: '98%', count: '(1 Paper)', date: '2026-09-15' },
  { rank: '5th', rankColor: 'text-slate-400', sub: 'SFT', subColor: 'bg-cyan-500/20 text-cyan-300', unit: 'Unit 4.5', name: 'ජල ජීවීන්ගේ සාධනීය භාවිත', score: '97%', count: '(1 Paper)', date: '2026-09-19' },
];

export default function TopRankedTable() {
  return (
    <section className="glass-panel rounded-3xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">🏆</span>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">වැඩිම ලකුණු සහිත Unit Papers (Top Mastery)</h3>
            <p className="text-xs text-slate-400">විෂය සවිස්තරාත්මක සාමාර්ථ්‍ය හා ප්‍රතිඵල පුවරුව (Zero-mark excluded)</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="px-3 py-1 rounded-lg text-xs font-semibold bg-neon-emerald/15 text-neon-emerald border border-neon-emerald/30">Top 5 High</button>
          <button type="button" className="px-3 py-1 rounded-lg text-xs font-semibold glass-pill text-slate-400 hover:text-white">Least 5 (දුර්වල ලකුණු)</button>
        </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="text-slate-400 border-b border-white/10 uppercase font-mono text-[10px]">
              <th className="py-2.5 px-3">Rank</th>
              <th className="py-2.5 px-3">Subject</th>
              <th className="py-2.5 px-3">Unit</th>
              <th className="py-2.5 px-3">Unit / Lesson Name</th>
              <th className="py-2.5 px-3 text-center">Avg Marks</th>
              <th className="py-2.5 px-3 text-right">Exam Date</th>
              <th className="py-2.5 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {TOP_PAPERS.map((row) => (
              <tr key={row.name} className="hover:bg-white/[0.03] transition">
                <td className={`py-3.5 px-3 font-bold flex items-center gap-1.5 font-mono ${row.rankColor}`}>{row.rank}</td>
                <td className="py-3.5 px-3"><span className={`px-2 py-0.5 rounded font-mono font-bold text-[10px] ${row.subColor}`}>{row.sub}</span></td>
                <td className="py-3.5 px-3 font-mono text-slate-300">{row.unit}</td>
                <td className="py-3.5 px-3 text-white font-medium">{row.name}</td>
                <td className="py-3.5 px-3 text-center">
                  <span className="px-2.5 py-1 rounded-full font-mono font-black text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {row.score}
                  </span>
                  <span className="block text-[9px] text-slate-400 mt-0.5">{row.count}</span>
                </td>
                <td className="py-3.5 px-3 text-right font-mono text-slate-400">{row.date}</td>
                <td className="py-3.5 px-3 text-right">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">Printed ✓</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
