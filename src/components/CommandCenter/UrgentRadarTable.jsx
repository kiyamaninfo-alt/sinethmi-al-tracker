const RADAR_ITEMS = [
  { id: 1, sub: 'ET', subColor: 'bg-neon-violet/20 text-neon-violet', unit: 'Unit 1', name: '1.2 නිෂ්පාදන පිරිවිතර හා තාක්ෂණික කළමනාකරණය', desc: 'ඒකකය 01: ඉංජිනේරු තාක්ෂණවේදය හැඳින්වීම', elapsed: 'දින 22ක්' },
  { id: 2, sub: 'ET', subColor: 'bg-neon-violet/20 text-neon-violet', unit: 'Unit 1', name: '1.3 දේශීය කර්මාන්ත හා සේවා ක්ෂේත්‍රයේ තාක්ෂණයන්', desc: 'ඒකකය 01: ඉංජිනේරු තාක්ෂණවේදය හැඳින්වීම', elapsed: 'දින 22ක්' },
  { id: 3, sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 1', name: '1.3 පරිගණක පද්ධතියක් මූලික තාක්ෂණික පදනම', desc: 'ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණය සංකල්ප', elapsed: 'දින 22ක්' },
  { id: 4, sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 1', name: '1.5 තොරතුරු හා සන්නිවේදන තාක්ෂණයේ යෙදවුම්', desc: 'ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණය සංකල්ප', elapsed: 'දින 22ක්' },
  { id: 5, sub: 'ICT', subColor: 'bg-emerald-500/20 text-emerald-300', unit: 'Unit 1', name: '1.6 තාක්ෂණ තොරතුරු සොයාගැනීම හා භාවිතය', desc: 'ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණය සංකල්ප', elapsed: 'දින 22ක්' },
];

export default function UrgentRadarTable() {
  return (
    <section className="glass-panel rounded-3xl p-6 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-lg">⚡</span>
          <div>
            <h3 className="text-base font-bold text-white">වහාම Model Paper 1 කල යුතු පාඩම්</h3>
            <p className="text-xs text-slate-400">ප්‍රමුඛතා අනුපිළිවෙල අනුව පෙළගස්වා ඇත</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button type="button" className="text-[10px] font-mono px-2 py-0.5 rounded bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40 cursor-pointer">Sub-Unit Radar</button>
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-neon-rose/15 text-neon-rose border border-neon-rose/30 font-bold uppercase ml-1">
            URGENT RADAR
          </span>
        </div>
      </div>

      <div className="space-y-2.5">
        {RADAR_ITEMS.map((item) => (
          <div key={item.id} className="glass-panel-elevated p-3 rounded-xl flex items-center justify-between gap-3 border border-white/5 hover:border-white/10 transition">
            <div className="flex items-center gap-3 min-w-0">
              <input type="checkbox" className="rounded bg-obsidian-900 border-white/20 text-neon-cyan focus:ring-0 cursor-pointer shrink-0" />
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${item.subColor}`}>{item.sub}</span>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-white block truncate">{item.unit} • {item.name}</span>
                <span className="text-[10px] text-slate-400 block truncate">{item.desc}</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-neon-rose/15 text-neon-rose border border-neon-rose/30 whitespace-nowrap shrink-0">
              {item.elapsed}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
