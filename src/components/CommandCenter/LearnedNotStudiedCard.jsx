const NOT_STUDIED_ITEMS = [
  { id: 1, sub: 'SFT', subColor: 'bg-cyan-500/20 text-cyan-300', unit: 'Unit 3.2 • තාප ගති විද්‍යාව සහ යෙදවුම්', desc: 'පන්තියේ සාකච්ඡා කළා • Study Time: 0h', status: 'Needs Study', statusColor: 'bg-rose-500/15 text-rose-300 border-rose-500/30' },
  { id: 2, sub: 'ET', subColor: 'bg-neon-violet/20 text-neon-violet', unit: 'Unit 2.2 • ද්‍රව්‍ය විද්‍යාව සහ ඉංජිනේරු භාවිත', desc: 'පන්තියේ සාකච්ඡා කළා • Study Time: 0h', status: 'Pending Review', statusColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
  { id: 3, sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 4.1 • දත්ත සමුදාය කළමනාකරණය (DBMS)', desc: 'පන්තියේ සාකච්ඡා කළා • Study Time: 0h', status: 'Queued', statusColor: 'bg-neon-cyan/15 text-neon-cyan border-neon-cyan/30' },
  { id: 4, sub: 'ET', subColor: 'bg-neon-violet/20 text-neon-violet', unit: 'Unit 3.3 • ඩිජිටල් ඉලෙක්ට්‍රොනික්ස් මූලධර්ම', desc: 'පන්තියේ සාකච්ඡා කළා • Study Time: 0h', status: 'Needs Study', statusColor: 'bg-rose-500/15 text-rose-300 border-rose-500/30' },
  { id: 5, sub: 'SFT', subColor: 'bg-cyan-500/20 text-cyan-300', unit: 'Unit 1.3 • ආහාර හා ජෛව ක්‍රියාවලි තාක්ෂණය', desc: 'පන්තියේ සාකච්ඡා කළා • Study Time: 0h', status: 'Queued', statusColor: 'bg-neon-cyan/15 text-neon-cyan border-neon-cyan/30' },
];

export default function LearnedNotStudiedCard() {
  return (
    <section className="glass-panel rounded-3xl p-6 flex flex-col justify-between h-auto lg:h-[510px]">
      <div className="flex items-center justify-between pb-3 border-b border-white/5 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-lg">📖</span>
          <div>
            <h3 className="text-base font-bold text-white">Learned but not studied</h3>
            <p className="text-xs text-slate-400">පන්තියේ ආවරණය කළ නමුත් තනිව අධ්‍යයනය නොකළ ඒකක</p>
          </div>
        </div>
        <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">Self-Study Pending</span>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 text-[11px] pb-1 shrink-0">
        <button type="button" className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">Filter: සියල්ල</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">Needs Study (2)</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">Review (1)</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">Queued (2)</button>
      </div>

      <div className="space-y-2.5 flex-1 flex flex-col justify-between my-2">
        {NOT_STUDIED_ITEMS.map((item) => (
          <div key={item.id} className="glass-panel-elevated p-3 rounded-xl border border-white/5 flex items-center justify-between gap-3 hover:border-white/10 transition">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold shrink-0 ${item.subColor}`}>{item.sub}</span>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-white block truncate">{item.unit}</span>
                <span className="text-[10px] text-slate-400 block truncate">{item.desc}</span>
              </div>
            </div>
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono shrink-0 border ${item.statusColor}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-2 text-center border-t border-white/5 shrink-0">
        <button type="button" className="text-xs font-mono text-amber-300 hover:underline inline-flex items-center gap-1 cursor-pointer">
          More Lessons →
        </button>
      </div>
    </section>
  );
}
