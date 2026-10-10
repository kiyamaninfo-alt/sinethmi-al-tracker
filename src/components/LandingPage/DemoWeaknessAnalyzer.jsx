export default function DemoWeaknessAnalyzer() {
  const subjects = [
    { name: 'Engineering Technology (ET)', code: 'ET-065', score: '78%', status: 'Strong Mastery', color: 'bg-emerald-400', bar: 'w-[78%]' },
    { name: 'Science for Technology (SFT)', code: 'SFT-066', score: '62%', status: 'Moderate (Needs Revision)', color: 'bg-amber-400', bar: 'w-[62%]' },
    { name: 'Information & Comm. Tech (ICT)', code: 'ICT-020', score: '88%', status: 'High Retention', color: 'bg-cyan-400', bar: 'w-[88%]' }
  ];

  return (
    <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-5 sm:p-6 space-y-4 flex flex-col justify-between">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <span className="text-xs font-mono font-bold text-emerald-300 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Subject Gap Diagnostics
        </span>
        <span className="text-[10px] font-mono text-slate-400">Live Paper Analysis</span>
      </div>

      <div className="space-y-3.5">
        {subjects.map((sub) => (
          <div key={sub.code} className="space-y-1.5 bg-black/30 p-3 rounded-2xl border border-white/5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white truncate max-w-[200px]">{sub.name}</span>
              <span className="font-mono font-black text-white">{sub.score}</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${sub.color} ${sub.bar}`} />
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>{sub.code}</span>
              <span className="text-slate-300">{sub.status}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-400 font-mono text-center pt-1">
        ✓ දුර්වල පාඩම් සබ්-ටොපික් මට්ටමින් වෙන්කර ස්වයංක්‍රීයව හඳුනාගැනීම.
      </p>
    </div>
  );
}
