export default function ScoreKpis() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="glass-panel-elevated p-3.5 rounded-xl border border-white/5">
        <span className="text-[11px] text-slate-400 block">5-Paper Moving Average</span>
        <span className="text-2xl font-black font-mono text-neon-cyan">88.4%</span>
        <span className="text-[10px] text-emerald-400 block mt-0.5">▲ +4.2% Growth</span>
      </div>

      <div className="glass-panel-elevated p-3.5 rounded-xl border border-white/5">
        <span className="text-[11px] text-slate-400 block">Full Paper Median</span>
        <span className="text-2xl font-black font-mono text-neon-violet">96.0%</span>
        <span className="text-[10px] text-slate-400 block mt-0.5">2 Papers Evaluated</span>
      </div>

      <div className="glass-panel-elevated p-3.5 rounded-xl border border-white/5">
        <span className="text-[11px] text-slate-400 block">Unit Papers Completed</span>
        <span className="text-2xl font-black font-mono text-neon-emerald">34</span>
        <span className="text-[10px] text-neon-cyan block mt-0.5">ICT: 20 | ET: 10 | SFT: 4</span>
      </div>

      <div className="glass-panel-elevated p-3.5 rounded-xl border border-white/5">
        <span className="text-[11px] text-slate-400 block">A-Grade Retention</span>
        <span className="text-2xl font-black font-mono text-neon-amber">94.6%</span>
        <span className="text-[10px] text-amber-400 block mt-0.5">Strict Exam Standard</span>
      </div>
    </div>
  );
}
