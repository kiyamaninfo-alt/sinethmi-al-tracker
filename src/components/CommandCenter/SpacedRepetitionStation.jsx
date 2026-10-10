const REPETITION_ITEMS = [
  { id: 1, sub: 'SFT', subColor: 'text-cyan-300 bg-neon-cyan/20', border: 'hover:border-neon-cyan/40', unit: 'Unit 4.2 • ගංගා ජල, මතු සහ භූගත ජල මූලාශ්‍ර', desc: 'ජීව තාක්ෂණික මූලධර්ම සහ යෙදවුම්', tag: 'දින 28ක් - දිගුකාලීන මතකය (දිනක)', tagClass: 'bg-neon-cyan/15 text-neon-cyan border-neon-cyan/30' },
  { id: 2, sub: 'SFT', subColor: 'text-cyan-300 bg-neon-cyan/20', border: 'hover:border-neon-cyan/40', unit: 'Unit 4.5 • ජල ජීවීන්ගේ සාධනීය භාවිත', desc: 'මත්ස්‍ය වගාව හා ජල තාක්ෂණය', tag: 'දින 26ක් - දිගුකාලීන මතකය (දිනක)', tagClass: 'bg-neon-cyan/15 text-neon-cyan border-neon-cyan/30' },
  { id: 3, sub: 'SFT', subColor: 'text-cyan-300 bg-neon-cyan/20', border: 'hover:border-neon-cyan/40', unit: 'Unit 1.1 • ස්වභාවික පැවැත්මවල පරිසර විද්‍යාව සහ වන සම්පත් පද්ධති', desc: 'පරිසර පද්ධති හා ජෛව ක්‍රියාවලි', tag: 'දින 17ක් - දිගුකාලීන මතකය (දිනක)', tagClass: 'bg-neon-cyan/15 text-neon-cyan border-neon-cyan/30' },
  { id: 4, sub: 'ICT', subColor: 'text-emerald-300 bg-emerald-500/20', border: 'hover:border-neon-emerald/40', unit: 'Unit 1.5 • තොරතුරු හා සන්නිවේදන තාක්ෂණයේ යෙදවුම්', desc: 'ක්ලවුඩ් පරිගණක හා AI සංකල්ප', tag: 'දින 17ක් - දිගුකාලීන මතකය (දිනක)', tagClass: 'bg-neon-emerald/15 text-neon-emerald border-neon-emerald/30' },
  { id: 5, sub: 'ET', subColor: 'text-violet-300 bg-neon-violet/20', border: 'hover:border-neon-violet/40', unit: 'Unit 4.1 • ඉවුම්පිහුම් කටයුතු සඳහා ද්‍රව්‍ය පරිවර්තනය සහ ගුණ', desc: 'තාප හා ද්‍රව්‍ය ඉංජිනේරු මූලධර්ම', tag: 'දින 16ක් - දිගුකාලීන මතකය (දිනක)', tagClass: 'bg-neon-violet/15 text-neon-violet border-neon-violet/30' },
];

export default function SpacedRepetitionStation() {
  return (
    <section className="glass-panel rounded-3xl p-6 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-lg">🧠</span>
          <div>
            <h3 className="text-base font-bold text-white">Space Repetition - Long Term Retention Cycle</h3>
            <p className="text-xs text-slate-400">ප්රමුඛතා ලයිස්තුව අනුව පෙල ගස්වා ඇත</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40">Cycle 1 (28)</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded glass-pill text-slate-400">Cycle 2</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 text-[11px] pb-1">
        <button type="button" className="px-2.5 py-1 rounded-lg bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30">Filter: සාරාංශ</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">දිනය 3</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">දිනය 7</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">දිනය 14</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">දිනය 21</button>
        <button type="button" className="px-2 py-1 rounded-lg glass-pill text-slate-400 hover:text-white">දිනය 40+</button>
      </div>

      <div className="space-y-2.5">
        {REPETITION_ITEMS.map((item) => (
          <div key={item.id} className={`glass-panel-elevated p-3 rounded-xl flex items-center justify-between gap-3 ${item.border} transition`}>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="rounded bg-obsidian-900 border-white/20 text-neon-cyan focus:ring-0 cursor-pointer" />
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${item.subColor}`}>{item.sub}</span>
              <div>
                <span className="text-xs font-semibold text-white block">{item.unit}</span>
                <span className="text-[10px] text-slate-400">{item.desc}</span>
              </div>
            </div>
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border whitespace-nowrap ${item.tagClass}`}>
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
