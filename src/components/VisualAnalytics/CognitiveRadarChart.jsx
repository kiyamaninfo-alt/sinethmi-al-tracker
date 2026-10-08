export default function CognitiveRadarChart() {
  const axes = [
    { text: 'Theory (සිද්ධාන්ත)', anchor: 'middle', x: 180, y: 24 },
    { text: 'Unit Papers', anchor: 'start', x: 312, y: 106 },
    { text: 'Speed Trial', anchor: 'start', x: 312, y: 250 },
    { text: 'MCQ Precision (96%)', anchor: 'middle', x: 180, y: 335 },
    { text: 'Essay Structure', anchor: 'end', x: 48, y: 250 },
    { text: 'Practical Labs', anchor: 'end', x: 48, y: 106 },
  ];

  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-purple-400 text-[20px]">radar</span>
            <h3 className="text-sm font-extrabold text-white tracking-tight">Cognitive Mastery Radar</h3>
          </div>
          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">6 PILLARS</span>
        </div>
        <p className="text-[11px] text-slate-400">විෂය ධාරිතා රේඩාර් ප්‍රස්තාරය (Accuracy, Speed & Theory Depth)</p>
      </div>

      <div className="relative w-full h-64 flex items-center justify-center my-1">
        <svg className="w-full h-full max-w-sm" viewBox="0 0 360 360">
          <defs>
            <filter height="140%" id="radarOverlayGlow" width="140%" x="-20%" y="-20%">
              <feGaussianBlur result="blur" stdDeviation="2.5" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <polygon fill="none" points="180,35 300,105 300,245 180,315 60,245 60,105" stroke="#25324d" strokeDasharray="2 2" strokeWidth="1" />
          <polygon fill="none" points="180,75 260,122 260,218 180,265 100,218 100,122" stroke="#25324d" strokeDasharray="2 2" strokeWidth="1" />
          <polygon fill="none" points="180,115 220,138 220,188 180,212 140,188 140,138" stroke="#25324d" strokeDasharray="2 2" strokeWidth="1" />
          <line stroke="#25324d" strokeWidth="1" x1="180" x2="180" y1="180" y2="35" /><line stroke="#25324d" strokeWidth="1" x1="180" x2="300" y1="180" y2="105" />
          <line stroke="#25324d" strokeWidth="1" x1="180" x2="300" y1="180" y2="245" /><line stroke="#25324d" strokeWidth="1" x1="180" x2="180" y1="180" y2="315" />
          <line stroke="#25324d" strokeWidth="1" x1="180" x2="60" y1="180" y2="245" /><line stroke="#25324d" strokeWidth="1" x1="180" x2="60" y1="180" y2="105" />
          {axes.map((ax) => (
            <text key={ax.text} fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor={ax.anchor} x={ax.x} y={ax.y}>{ax.text}</text>
          ))}
          <polygon fill="#10B981" fillOpacity="0.25" filter="url(#radarOverlayGlow)" points="180,60 285,120 250,220 180,305 108,225 95,130" stroke="#10B981" strokeWidth="2" />
          <polygon fill="#8B5CF6" fillOpacity="0.22" filter="url(#radarOverlayGlow)" points="180,50 290,115 280,230 180,285 105,235 80,120" stroke="#8B5CF6" strokeWidth="2" />
          <polygon fill="#06B6D4" fillOpacity="0.20" filter="url(#radarOverlayGlow)" points="180,70 255,130 240,215 180,290 120,215 110,140" stroke="#06B6D4" strokeWidth="2" />
        </svg>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
        <div className="flex items-center gap-3 font-mono">
          <span className="flex items-center gap-1 text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-500" /> ICT 91%</span>
          <span className="flex items-center gap-1 text-purple-400"><span className="w-2 h-2 rounded-full bg-purple-500" /> ET 88%</span>
          <span className="flex items-center gap-1 text-cyan-400"><span className="w-2 h-2 rounded-full bg-cyan-400" /> SFT 84%</span>
        </div>
        <span className="text-amber-400 font-bold text-[11px]">Peak: MCQ Precision 96%</span>
      </div>
    </div>
  );
}
