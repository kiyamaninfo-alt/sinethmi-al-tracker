export default function SubjectLoadDonut() {
  const subjects = [
    { name: 'ET (71.0 hrs)', pct: '38.5%', color: 'text-purple-300', dot: 'bg-purple-500' },
    { name: 'ICT (62.4 hrs)', pct: '33.9%', color: 'text-emerald-300', dot: 'bg-emerald-500' },
    { name: 'SFT (50.8 hrs)', pct: '27.6%', color: 'text-cyan-300', dot: 'bg-cyan-400' },
  ];

  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-purple-400 text-[20px]">pie_chart</span>
            <h3 className="text-sm font-extrabold text-white tracking-tight">Subject Load Balance</h3>
          </div>
          <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded">184.2 HOURS</span>
        </div>
        <p className="text-[11px] text-slate-400">විෂය කාල වෙන්කිරීම් ප්‍රතිශතය</p>
      </div>

      <div className="relative w-48 h-48 mx-auto flex items-center justify-center my-2">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle className="chart-glow text-purple-500" cx="50" cy="50" fill="none" r="40" stroke="#8B5CF6" strokeDasharray="96.7 154.6" strokeDashoffset="0" strokeWidth="12" />
          <circle className="chart-glow text-emerald-500" cx="50" cy="50" fill="none" r="40" stroke="#10B981" strokeDasharray="85.2 166.1" strokeDashoffset="-96.7" strokeWidth="12" />
          <circle className="chart-glow text-cyan-400" cx="50" cy="50" fill="none" r="40" stroke="#06B6D4" strokeDasharray="69.4 181.9" strokeDashoffset="-181.9" strokeWidth="12" />
        </svg>
        <div className="absolute text-center">
          <span className="text-xl font-black text-white">3A</span>
          <div className="text-[9px] text-purple-300 uppercase font-bold tracking-wider">Synergy</div>
        </div>
      </div>

      <div className="space-y-1.5 pt-2 border-t border-white/5 font-mono text-xs">
        {subjects.map((sub) => (
          <div key={sub.name} className={`flex items-center justify-between ${sub.color}`}>
            <span className="flex items-center gap-1.5"><span className={`w-2.5 h-2.5 rounded-full ${sub.dot}`} /> {sub.name}</span>
            <span className="font-bold">{sub.pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
