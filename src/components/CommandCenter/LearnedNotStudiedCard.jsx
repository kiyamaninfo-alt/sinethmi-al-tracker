export default function LearnedNotStudiedCard() {
  return (
    <section className="glass-panel rounded-3xl p-6 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-lg">📖</span>
          <div>
            <h3 className="text-base font-bold text-white">Learned but not studied</h3>
            <p className="text-xs text-slate-400">පන්තියේ ආවරණය කළ නමුත් තනිව අධ්‍යයනය නොකළ ඒකක</p>
          </div>
        </div>
        <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">Self-Study Pending</span>
      </div>

      <div className="space-y-3">
        <div className="glass-panel-elevated p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-3 hover:border-white/10 transition">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-500/20 text-cyan-300">SFT</span>
              <span className="text-xs font-semibold text-white">Unit 3.2 • තාප ගති විද්‍යාව සහ යෙදවුම්</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">පන්තියේ සාකච්ඡා කළා • Study Time: 0h • Priority: High</p>
          </div>
          <div className="text-right">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/15 text-rose-300 border border-rose-500/30">Needs Study</span>
          </div>
        </div>

        <div className="glass-panel-elevated p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-3 hover:border-white/10 transition">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-neon-violet/20 text-neon-violet">ET</span>
              <span className="text-xs font-semibold text-white">Unit 2.2 • ද්‍රව්‍ය විද්‍යාව සහ ඉංජිනේරු භාවිත</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">පන්තියේ සාකච්ඡා කළා • Study Time: 0h • Priority: Medium</p>
          </div>
          <div className="text-right">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">Pending Review</span>
          </div>
        </div>

        <div className="glass-panel-elevated p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-3 hover:border-white/10 transition">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300">ICT</span>
              <span className="text-xs font-semibold text-white">Unit 4.1 • දත්ත සමුදාය කළමනාකරණය (DBMS)</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">පන්තියේ සාකච්ඡා කළා • Study Time: 0h • Priority: Medium</p>
          </div>
          <div className="text-right">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30">Queued</span>
          </div>
        </div>
      </div>
    </section>
  );
}
