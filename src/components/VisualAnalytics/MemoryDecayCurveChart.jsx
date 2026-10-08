export default function MemoryDecayCurveChart() {
  const yAxis = [
    { label: '100%', y: 38 },
    { label: '60%', y: 93 },
    { label: '30%', y: 148 },
  ];

  const xAxis = [
    { label: 'Day 0', x: 45 },
    { label: 'Day 3 (R1)', x: 130 },
    { label: 'Day 10 (R2)', x: 255 },
    { label: 'Day 30 (Locked)', x: 440 },
  ];

  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-400 text-[20px]">history_toggle_off</span>
            <h3 className="text-sm font-extrabold text-white tracking-tight">Memory Decay & Review Boost Trajectory</h3>
          </div>
          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">94.8% RETAINED</span>
        </div>
        <p className="text-[11px] text-slate-400">Ebbinghaus න්‍යායික ක්ෂයවීම සහ පරතරිත පුනරීක්ෂණ ඉහළයාම්</p>
      </div>

      <div className="relative w-full h-64">
        <svg className="w-full h-full" fill="none" viewBox="0 0 480 200">
          {[35, 90, 145].map((y) => (
            <line key={y} stroke="#25324d" strokeDasharray="2 2" strokeWidth="1" x1="35" x2="460" y1={y} y2={y} />
          ))}

          {yAxis.map((item) => (
            <text key={item.label} fill="#64748b" fontSize="9" fontWeight="600" textAnchor="end" x="26" y={item.y}>{item.label}</text>
          ))}

          <path d="M 45,35 C 85,115 150,165 460,178" fill="none" stroke="#F43F5E" strokeDasharray="4 4" strokeWidth="1.8" />
          <text fill="#F43F5E" fontSize="8.5" fontWeight="700" x="330" y="172">Without Review (Decays to 18%)</text>

          <path d="M 45,35 C 80,75 120,105 130,110" fill="none" stroke="#10B981" strokeWidth="2.5" />
          <line stroke="#34D399" strokeLinecap="round" strokeWidth="2.2" x1="130" x2="130" y1="110" y2="40" />
          <circle cx="130" cy="40" fill="#10B981" r="3.5" />

          <path d="M 130,40 C 180,60 230,75 255,80" fill="none" stroke="#10B981" strokeWidth="2.5" />
          <line stroke="#34D399" strokeLinecap="round" strokeWidth="2.2" x1="255" x2="255" y1="80" y2="38" />
          <circle cx="255" cy="38" fill="#10B981" r="3.5" />

          <path d="M 255,38 C 320,44 390,48 450,50" fill="none" stroke="#10B981" strokeWidth="3" />
          <circle cx="450" cy="50" fill="#10B981" r="4" stroke="#ffffff" strokeWidth="1.5" />

          {xAxis.map((item) => (
            <text key={item.label} fill="#64748b" fontSize="9" textAnchor="middle" x={item.x} y="194">{item.label}</text>
          ))}
        </svg>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
        <span className="text-slate-400">Consolidated Memory Vault:</span>
        <span className="text-emerald-400 font-bold font-mono">14 Topics Permanently Retained</span>
      </div>
    </div>
  );
}
