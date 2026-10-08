export default function ScoreChart() {
  return (
    <div className="glass-panel-elevated p-4 sm:p-5 rounded-2xl relative overflow-hidden">
      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
        <span className="font-semibold text-slate-200">1. Unit Paper Score Progression (All 34 Papers)</span>
        <span className="font-mono text-[11px]">Zoom: 70% - 100% | 5-Paper Moving Trend (Active)</span>
      </div>

      <div className="w-full h-56 sm:h-72">
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 900 240">
          <defs>
            <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#070B14" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="900" y1="20" y2="20" />
          <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="900" y1="65" y2="65" />
          <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="900" y1="120" y2="120" />
          <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="900" y1="180" y2="180" />
          
          <line opacity="0.8" stroke="#F43F5E" strokeDasharray="6,6" strokeWidth="1.5" x1="0" x2="900" y1="135" y2="135" />
          <text fill="#F43F5E" fontFamily="monospace" fontSize="10" fontWeight="bold" x="820" y="130">75% Target</text>
          
          <path d="M 30,70 L 100,68 L 180,62 L 260,65 L 340,58 L 420,60 L 500,55 L 580,50 L 660,65 L 740,110 L 820,100 L 880,60 L 880,220 L 30,220 Z" fill="url(#chartGradient)" />
          <path d="M 30,70 L 100,68 L 180,62 L 260,65 L 340,58 L 420,60 L 500,55 L 580,50 L 660,65 L 740,110 L 820,100 L 880,60" fill="none" stroke="#06B6D4" strokeLinecap="round" strokeWidth="3" />
          
          <g className="cursor-pointer">
            <circle cx="30" cy="70" fill="#10B981" r="4.5" stroke="#070B14" strokeWidth="2" />
            <circle cx="100" cy="68" fill="#10B981" r="4.5" stroke="#070B14" strokeWidth="2" />
            <circle cx="180" cy="62" fill="#8B5CF6" r="4.5" stroke="#070B14" strokeWidth="2" />
            <circle cx="260" cy="65" fill="#06B6D4" r="4.5" stroke="#070B14" strokeWidth="2" />
            <circle cx="340" cy="58" fill="#10B981" r="4.5" stroke="#070B14" strokeWidth="2" />
            <circle cx="420" cy="60" fill="#8B5CF6" r="4.5" stroke="#070B14" strokeWidth="2" />
            <circle cx="500" cy="55" fill="#8B5CF6" r="5" stroke="#070B14" strokeWidth="2" />
            <circle cx="580" cy="50" fill="#10B981" r="5" stroke="#070B14" strokeWidth="2" />
            <circle cx="660" cy="65" fill="#06B6D4" r="4.5" stroke="#070B14" strokeWidth="2" />
            <circle cx="740" cy="110" fill="#8B5CF6" r="4.5" stroke="#070B14" strokeWidth="2" />
            <circle cx="820" cy="100" fill="#06B6D4" r="4.5" stroke="#070B14" strokeWidth="2" />
            <circle cx="880" cy="60" fill="#10B981" r="6" stroke="#FFFFFF" strokeWidth="2" />
          </g>

          <g transform="translate(540, 10)">
            <rect fill="#111827" height="34" rx="6" stroke="rgba(255,255,255,0.15)" width="90" />
            <text fill="#94A3B8" fontSize="9" x="10" y="16">P18 (09-22)</text>
            <text fill="#10B981" fontFamily="monospace" fontSize="11" fontWeight="bold" x="10" y="28">96.0% (A)</text>
          </g>
        </svg>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-2 pt-2 border-t border-white/5">
        <span>P1 (09-10)</span>
        <span>P5 (09-12)</span>
        <span>P10 (09-16)</span>
        <span>P15 (09-19)</span>
        <span>P20 (09-23)</span>
        <span>P25 (09-27)</span>
        <span className="text-neon-cyan font-bold">P34 Final</span>
      </div>
    </div>
  );
}
