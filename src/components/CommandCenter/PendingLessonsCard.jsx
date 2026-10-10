const PENDING_ITEMS = [
  { id: 1, sub: 'ET', subColor: 'bg-neon-violet/20 text-neon-violet', unit: 'Unit 3.1 • මූලික විද්‍යුත් හා පරිපථ තාක්ෂණය', desc: 'දැනට උපදෙස් නොලැබි පාඩම් • Lesson Days: 28', status: 'Print Ready', statusColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
  { id: 2, sub: 'SFT', subColor: 'bg-cyan-500/20 text-cyan-300', unit: 'Unit 2.3 • ද්‍රව්‍යවල යාන්ත්‍රික සහ තාප ගුණ', desc: 'ආකෘති සදහා තියෙන නමුත් තවමත් නොකෙරුනු • Paper Days: 19', status: 'Printed ✓', statusColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
  { id: 3, sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 2.4 • තාර්කික ද්වාර සහ සංඛ්‍යාංක පරිපථ', desc: 'ආකෘති සදහා තියෙන නමුත් තවමත් නොකෙරුනු • Paper Days: 14', status: 'Scheduled', statusColor: 'bg-neon-cyan/15 text-neon-cyan border-neon-cyan/30' },
  { id: 4, sub: 'ET', subColor: 'bg-neon-violet/20 text-neon-violet', unit: 'Unit 1.2 • ඉංජිනේරු නිර්මාණ සහ ඇඳීම්', desc: 'දැනට උපදෙස් නොලැබි පාඩම් • Lesson Days: 12', status: 'Print Ready', statusColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
  { id: 5, sub: 'SFT', subColor: 'bg-cyan-500/20 text-cyan-300', unit: 'Unit 4.1 • කෘෂි කාර්මික සහ ජෛව පද්ධති තාක්ෂණය', desc: 'ආකෘති සදහා තියෙන නමුත් තවමත් නොකෙරුනු • Paper Days: 10', status: 'Scheduled', statusColor: 'bg-neon-cyan/15 text-neon-cyan border-neon-cyan/30' },
];

export default function PendingLessonsCard() {
  return (
    <section className="glass-panel rounded-3xl p-6 flex flex-col justify-between h-auto lg:h-[510px]">
      <div className="flex items-center justify-between pb-3 border-b border-white/5 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-lg">📋</span>
          <div>
            <h3 className="text-base font-bold text-white">දැනට උපදෙස් නොලැබි හා නොකෙරුනු පාඩම්</h3>
            <p className="text-xs text-slate-400">Print status, Paper Days සහ ආකෘති සූදානම් කිරීම්</p>
          </div>
        </div>
        <span className="text-xs font-mono px-2 py-0.5 rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">Queue Sync</span>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 text-[11px] pb-1 shrink-0">
        <button type="button" className="px-2.5 py-1 rounded-lg bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30">Filter: සියල්ල</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">Print Ready (2)</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">Printed (1)</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">Scheduled (2)</button>
      </div>

      <div className="space-y-2.5 flex-1 flex flex-col justify-between my-2">
        {PENDING_ITEMS.map((item) => (
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
        <button type="button" className="text-xs font-mono text-neon-cyan hover:underline inline-flex items-center gap-1 cursor-pointer">
          More Lessons →
        </button>
      </div>
    </section>
  );
}
