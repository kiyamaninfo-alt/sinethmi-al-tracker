const WEAK_PAPERS = [
  { rank: '#1', sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 3.3', name: 'සේවා ක්‍රම', score: '91.7%', date: '2026-09-29' },
  { rank: '#2', sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 3.2', name: 'අන්තර්ජාල අතුරු මුහුණත් භාවිතය තීරණය', score: '91.7%', date: '2026-09-29' },
  { rank: '#3', sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 3.1', name: 'තාක්ෂණ පද්ධති සහ පරිවර්තන', score: '91.7%', date: '2026-09-29' },
  { rank: '#4', sub: 'ET', subColor: 'bg-neon-violet/20 text-neon-violet', unit: 'Unit 1.1', name: 'මානව හා පරිසර සාරධර්ම වලට ඉංජිනේරු සාක්ෂරතාවයේ දායකත්වය', score: '95.0%', date: '2026-09-21' },
  { rank: '#5', sub: 'ET', subColor: 'bg-neon-violet/20 text-neon-violet', unit: 'Unit 2.1', name: 'පරිගණකගත ප්‍රතිපාදන', score: '96.0%', date: '2026-09-01' },
];

export default function WeakAreasTable() {
  return (
    <section className="glass-panel rounded-3xl p-6 flex flex-col justify-between h-auto lg:h-[510px]">
      <div className="flex items-center justify-between pb-3 border-b border-white/5 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-lg">⚠️</span>
          <div>
            <h3 className="text-base font-bold text-white">අඩු ලකුණු සහිත Unit Papers</h3>
            <p className="text-xs text-slate-400">නැවත සමාලෝචනය හා ප්‍රතිසංස්කරණය කළ යුතු පාඩම්</p>
          </div>
        </div>
        <button type="button" className="px-3 py-1 rounded-lg text-xs font-semibold bg-rose-500/15 text-rose-400 border border-rose-500/30 cursor-pointer">Top 10</button>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 text-[11px] pb-1 shrink-0">
        <button type="button" className="px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-400 border border-rose-500/30">All Subjects</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">ICT (3)</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">ET (2)</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">SFT (0)</button>
      </div>

      <div className="space-y-2.5 flex-1 flex flex-col justify-between my-2">
        {WEAK_PAPERS.map((p) => (
          <div key={p.name} className="glass-panel-elevated p-3 rounded-xl border border-white/5 flex items-center justify-between gap-3 hover:border-white/10 transition">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="font-mono font-bold text-xs text-rose-400 shrink-0">{p.rank}</span>
              <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold shrink-0 ${p.subColor}`}>{p.sub}</span>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-white truncate block">{p.unit} • {p.name}</span>
                <span className="text-[10px] font-mono text-slate-400 mt-0.5 block">{p.date}</span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className="px-2 py-0.5 rounded font-mono font-bold text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20">{p.score}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 text-center border-t border-white/5 shrink-0">
        <button type="button" className="text-xs font-mono text-rose-400 hover:underline inline-flex items-center gap-1 cursor-pointer">
          More Papers →
        </button>
      </div>
    </section>
  );
}
