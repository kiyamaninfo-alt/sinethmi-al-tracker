const RADAR_ITEMS = [
  { id: 1, sub: 'ET', subColor: 'text-neon-violet', unit: 'Unit 1', name: '1.2 නිෂ්පාදන පිරිවිතර හා තාක්ෂණික කළමනාකරණය', desc: 'ඒකකය 01: ඉංජිනේරු තාක්ෂණවේදය හැඳින්වීම', elapsed: 'දින 22ක්' },
  { id: 2, sub: 'ET', subColor: 'text-neon-violet', unit: 'Unit 1', name: '1.3 දේශීය කර්මාන්ත හා සේවා ක්ෂේත්‍රයේ තාක්ෂණයන්', desc: 'ඒකකය 01: ඉංජිනේරු තාක්ෂණවේදය හැඳින්වීම', elapsed: 'දින 22ක්' },
  { id: 3, sub: 'ICT', subColor: 'text-emerald-400', unit: 'Unit 1', name: '1.3 පරිගණක පද්ධතියක් මූලික තාක්ෂණික පදනම', desc: 'ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණය සංකල්ප', elapsed: 'දින 22ක්' },
  { id: 4, sub: 'ICT', subColor: 'text-emerald-400', unit: 'Unit 1', name: '1.5 තොරතුරු හා සන්නිවේදන තාක්ෂණයේ යෙදවුම්', desc: 'ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණය සංකල්ප', elapsed: 'දින 22ක්' },
  { id: 5, sub: 'ICT', subColor: 'text-emerald-400', unit: 'Unit 1', name: '1.6 තාක්ෂණ තොරතුරු සොයාගැනීම හා භාවිතය', desc: 'ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණය සංකල්ප', elapsed: 'දින 22ක්' },
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

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="text-slate-400 border-b border-white/10 uppercase font-mono text-[10px]">
              <th className="py-2 px-1">Done</th>
              <th className="py-2 px-2">Sub</th>
              <th className="py-2 px-2">Unit</th>
              <th className="py-2 px-2">Unit Name / Sub Unit Name</th>
              <th className="py-2 px-2 text-right">Elapsed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {RADAR_ITEMS.map((item) => (
              <tr key={item.id} className="hover:bg-white/[0.02] transition">
                <td className="py-3 px-1">
                  <input type="checkbox" className="rounded bg-obsidian-900 border-white/20 text-neon-cyan focus:ring-0 cursor-pointer" />
                </td>
                <td className={`py-3 px-2 font-mono font-bold ${item.subColor}`}>{item.sub}</td>
                <td className="py-3 px-2 font-mono text-slate-300">{item.unit}</td>
                <td className="py-3 px-2 text-slate-200">
                  <span className="font-medium text-white block">{item.name}</span>
                  <span className="text-[10px] text-slate-400">{item.desc}</span>
                </td>
                <td className="py-3 px-2 text-right">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-neon-rose/15 text-neon-rose border border-neon-rose/30 whitespace-nowrap">
                    {item.elapsed}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
