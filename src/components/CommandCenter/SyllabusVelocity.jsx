const SUBJECT_TRACKS = [
  { name: 'ICT (තොරතුරු තාක්ෂණය)', units: 'Unit 12 / 78', pct: 16, stroke: '#10B981', offset: 211, colorClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30', borderClass: 'border-neon-emerald/25 hover:border-neon-emerald/50', remain: '66', vel: '2.1/wk', target: '2027 මැයි/ජූලි නිමාව' },
  { name: 'ET (ඉංජිනේරු තාක්ෂණය)', units: 'Unit 10 / 75', pct: 13, stroke: '#8B5CF6', offset: 218.5, colorClass: 'text-neon-violet bg-neon-violet/15 border-neon-violet/30', borderClass: 'border-neon-violet/25 hover:border-neon-violet/50', remain: '65', vel: '2.3/wk', target: '2027 සැප්තැම්බර් නිමාව' },
  { name: 'SFT (තාක්ෂණවේදය සඳහා විද්‍යාව)', units: 'Unit 10 / 58', pct: 17, stroke: '#06B6D4', offset: 208.5, colorClass: 'text-neon-cyan bg-neon-cyan/15 border-neon-cyan/30', borderClass: 'border-neon-cyan/25 hover:border-neon-cyan/50', remain: '48', vel: '3.3/wk', target: '2027 ඔක්තෝබර් නිමාව' },
];

export default function SyllabusVelocity() {
  return (
    <section className="glass-panel rounded-3xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/5">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span>🚀 Syllabus Velocity &amp; Projected Finish Radar</span>
          </h3>
          <p className="text-xs text-slate-400">
            ඉදිරි මුළු පාඩම්: <strong className="text-slate-200">176</strong> • අවශ්‍ය වේගය: <strong className="text-neon-cyan">1.9 /wk</strong> • වත්මන් වේගය: <strong className="text-neon-emerald">7.7 /wk</strong>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-neon-violet px-3 py-1 rounded-full bg-neon-violet/10 border border-neon-violet/30">
            96 Weeks to A/L 2028
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {SUBJECT_TRACKS.map((sub) => (
          <div key={sub.name} className={`glass-panel-elevated p-5 rounded-2xl border ${sub.borderClass} transition relative overflow-hidden group`}>
            <div className="flex items-center justify-between mb-4">
              <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${sub.colorClass}`}>{sub.name}</span>
              <span className="text-xs font-mono text-slate-400">{sub.units}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="relative w-24 h-24 shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                  <circle cx="50" cy="50" fill="none" r="40" stroke={sub.stroke} strokeDasharray="251.2" strokeDashoffset={sub.offset} strokeLinecap="round" strokeWidth="8" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-black font-mono text-white">{sub.pct}%</span>
                  <span className="text-[9px] text-slate-400 uppercase">Done</span>
                </div>
              </div>
              <div className="space-y-1.5 text-right w-full">
                <div className="text-xs text-slate-300">ඉතිරි: <strong className="text-white">{sub.remain}</strong></div>
                <div className="text-[11px] font-mono text-slate-300">වේගය: {sub.vel}</div>
                <div className={`inline-flex items-center gap-1 text-[10px] font-semibold border px-2 py-0.5 rounded-full mt-1 ${sub.colorClass}`}>
                  <span>🎯</span> {sub.target}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
