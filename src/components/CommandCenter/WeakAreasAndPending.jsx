const WEAK_PAPERS = [
  { rank: '#1', sub: 'ICT', subColor: 'text-emerald-400', unit: 'Unit 3.3', name: 'සේවා ක්‍රම', score: '91.7%', date: '2026-09-29' },
  { rank: '#2', sub: 'ICT', subColor: 'text-emerald-400', unit: 'Unit 3.2', name: 'අන්තර්ජාල අතුරු මුහුණත් භාවිතය තීරණය', score: '91.7%', date: '2026-09-29' },
  { rank: '#3', sub: 'ICT', subColor: 'text-emerald-400', unit: 'Unit 3.1', name: 'තාක්ෂණ පද්ධති සහ පරිවර්තන', score: '91.7%', date: '2026-09-29' },
  { rank: '#4', sub: 'ET', subColor: 'text-neon-violet', unit: 'Unit 1.1', name: 'මානව හා පරිසර සාරධර්ම වලට ඉංජිනේරු සාක්ෂරතාවයේ දායකත්වය', score: '95.0%', date: '2026-09-21' },
  { rank: '#5', sub: 'ET', subColor: 'text-neon-violet', unit: 'Unit 2.1', name: 'පරිගණකගත ප්‍රතිපාදන', score: '96.0%', date: '2026-09-01' },
];

export default function WeakAreasAndPending() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <section className="glass-panel rounded-3xl p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚠️</span>
            <div>
              <h3 className="text-base font-bold text-white">අඩු ලකුණු සහිත Unit Papers</h3>
              <p className="text-xs text-slate-400">නැවත සමාලෝචනය හා ප්‍රතිසංස්කරණය කළ යුතු පාඩම්</p>
            </div>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30">Action Needed</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-white/5">
              {WEAK_PAPERS.map((p) => (
                <tr key={p.name} className="hover:bg-white/[0.02] transition">
                  <td className="py-2.5 px-2 font-mono font-bold text-rose-400">{p.rank}</td>
                  <td className={`py-2.5 px-2 font-mono font-bold ${p.subColor}`}>{p.sub}</td>
                  <td className="py-2.5 px-2 font-mono text-slate-300">{p.unit}</td>
                  <td className="py-2.5 px-2 text-slate-200">{p.name}</td>
                  <td className="py-2.5 px-2 text-center"><span className="px-2 py-0.5 rounded font-mono font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20">{p.score}</span></td>
                  <td className="py-2.5 px-2 text-right font-mono text-slate-400">{p.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="glass-panel rounded-3xl p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-lg">📋</span>
            <div>
              <h3 className="text-base font-bold text-white">දැනට උපදෙස් නොලැබි හා නොකෙරුනු පාඩම්</h3>
              <p className="text-xs text-slate-400">Print status, Paper Days සහ ආකෘති සූදානම් කිරීම්</p>
            </div>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">Queue Sync</span>
        </div>
        <div className="space-y-3">
          <div className="glass-panel-elevated p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2"><span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-neon-violet/20 text-neon-violet">ET</span><span className="text-xs font-semibold text-white">Unit 3.1 • මූලික විද්‍යුත් හා පරිපථ තාක්ෂණය</span></div>
              <p className="text-[10px] text-slate-400 mt-0.5">දැනට උපදෙස් නොලැබි පාඩම් • Lesson Days: 28</p>
            </div>
            <div className="text-right"><span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">Print Ready</span></div>
          </div>
          <div className="glass-panel-elevated p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2"><span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-500/20 text-cyan-300">SFT</span><span className="text-xs font-semibold text-white">Unit 2.3 • ද්‍රව්‍යවල යාන්ත්‍රික සහ තාප ගුණ</span></div>
              <p className="text-[10px] text-slate-400 mt-0.5">ආකෘති සදහා තියෙන නමුත් තවමත් නොකෙරුනු • Paper Days: 19</p>
            </div>
            <div className="text-right"><span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Printed ✓</span></div>
          </div>
          <div className="glass-panel-elevated p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2"><span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300">ICT</span><span className="text-xs font-semibold text-white">Unit 2.4 • තාර්කික ද්වාර සහ සංඛ්‍යාංක පරිපථ</span></div>
              <p className="text-[10px] text-slate-400 mt-0.5">ආකෘති සදහා තියෙන නමුත් තවමත් නොකෙරුනු • Paper Days: 14</p>
            </div>
            <div className="text-right"><span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30">Scheduled</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}
