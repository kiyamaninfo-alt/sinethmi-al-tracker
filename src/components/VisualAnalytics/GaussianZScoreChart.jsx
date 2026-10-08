export default function GaussianZScoreChart() {
  const sigmas = [
    { x: 170, label: '-1σ', color: '#64748b' },
    { x: 240, label: 'μ (62.4)', color: '#94a3b8', isMean: true },
    { x: 310, label: '+1σ', color: '#64748b' },
    { x: 380, label: '+2σ', color: '#64748b' },
  ];

  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-400 text-[20px]">analytics</span>
            <h3 className="text-sm font-extrabold text-white tracking-tight">Gaussian Z-Score Distribution</h3>
          </div>
          <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded">97.6th PERCENTILE</span>
        </div>
        <p className="text-[11px] text-slate-400">ප්‍රාදේශීය ලකුණු සාමාන්‍යය සාපේක්ෂව Z-අගය පිහිටීම (μ: 62.4, σ: 11.2)</p>
      </div>

      <div className="relative w-full h-64">
        <svg className="w-full h-full" fill="none" viewBox="0 0 480 220">
          <defs>
            <linearGradient id="bellGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="topZSlice" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <path d="M 20,195 C 90,195 140,190 190,120 C 215,80 230,35 240,35 C 250,35 265,80 290,120 C 340,190 390,195 460,195 L 460,195 L 20,195 Z" fill="url(#bellGradient)" />
          <path d="M 20,195 C 90,195 140,190 190,120 C 215,80 230,35 240,35 C 250,35 265,80 290,120 C 340,190 390,195 460,195" stroke="#8B5CF6" strokeWidth="2.5" />
          <path d="M 355,168 C 385,188 420,195 460,195 L 355,195 Z" fill="url(#topZSlice)" />

          {sigmas.map((sig) => (
            <g key={sig.label}>
              <line stroke={sig.isMean ? '#64748b' : '#334155'} strokeDasharray={sig.isMean ? '3 3' : undefined} strokeWidth="1" x1={sig.x} x2={sig.x} y1={sig.isMean ? 35 : 140} y2={195} />
              <text fill={sig.color} fontFamily="Inter" fontSize="9" textAnchor="middle" x={sig.x} y="210">{sig.label}</text>
            </g>
          ))}

          <line stroke="#10B981" strokeWidth="2" x1="376" x2="376" y1="55" y2="195" />
          <circle cx="376" cy="180" fill="#10B981" r="5" stroke="#ffffff" strokeWidth="1.5" />
          <circle className="glow-pulse" cx="376" cy="180" fill="#10B981" fillOpacity="0.3" r="10" />

          <g transform="translate(305, 20)">
            <rect fill="#0b1326" height="42" rx="6" stroke="#10B981" strokeWidth="1.2" width="160" />
            <text fill="#10B981" fontSize="9.5" fontWeight="800" x="10" y="16">SINETHMI: 89.5%</text>
            <text fill="#cbd5e1" fontSize="8.5" fontWeight="600" x="10" y="31">Z-Score: +2.418 (Top 2.4%)</text>
          </g>
        </svg>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
        <span className="text-slate-400">Predicted Island Merit Range:</span>
        <span className="text-emerald-400 font-bold font-mono">Island Rank #42 – #78 Tier</span>
      </div>
    </div>
  );
}
