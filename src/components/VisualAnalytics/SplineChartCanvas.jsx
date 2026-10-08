export default function SplineChartCanvas() {
  return (
    <div className="relative w-full h-72 sm:h-84">
      <svg className="w-full h-full overflow-visible" fill="none" viewBox="0 0 1000 320">
        <defs>
          <linearGradient id="ictAreaGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="etAreaGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="sftAreaGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
          </linearGradient>
          <filter height="140%" id="splineGlow" width="140%" x="-20%" y="-20%">
            <feGaussianBlur result="blur" stdDeviation="3" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g stroke="#1e293b" strokeDasharray="3 3" strokeOpacity="0.7">
          {[30, 85, 140, 195, 250].map((y) => (
            <line key={y} x1="50" x2="980" y1={y} y2={y} />
          ))}
        </g>

        <line stroke="#F43F5E" strokeDasharray="6 4" strokeOpacity="0.65" strokeWidth="1.5" x1="50" x2="980" y1="112" y2="112" />
        <text fill="#F43F5E" fontFamily="Inter" fontSize="10" fontWeight="700" textAnchor="end" x="975" y="106">6.0h DAILY TARGET</text>

        <g fill="#64748b" fontFamily="Inter" fontSize="10" fontWeight="600" textAnchor="end">
          {['10.0h', '8.0h', '6.0h', '4.0h', '2.0h', '0.0h'].map((val, i) => (
            <text key={val} x="42" y={34 + i * 55}>{val}</text>
          ))}
        </g>

        <g fill="#64748b" fontFamily="Inter" fontSize="10" fontWeight="600" textAnchor="middle">
          {[{ x: 70, d: '01' }, { x: 210, d: '07' }, { x: 360, d: '14' }, { x: 510, d: '21' }, { x: 680, d: '25' }, { x: 830, d: '28' }, { x: 960, d: '30' }].map((item) => (
            <text key={item.d} x={item.x} y="304">Day {item.d}</text>
          ))}
        </g>

        <path d="M 70,230 C 130,240 190,210 250,195 C 320,180 380,225 440,190 C 510,150 580,200 650,165 C 720,130 800,180 870,145 C 920,120 950,140 970,135 L 970,285 L 70,285 Z" fill="url(#sftAreaGrad)" />
        <path d="M 70,230 C 130,240 190,210 250,195 C 320,180 380,225 440,190 C 510,150 580,200 650,165 C 720,130 800,180 870,145 C 920,120 950,140 970,135" fill="none" filter="url(#splineGlow)" stroke="#06B6D4" strokeWidth="2.5" />

        <path d="M 70,250 C 140,210 210,240 280,180 C 350,120 420,190 490,140 C 560,90 630,160 700,110 C 770,60 840,120 900,95 C 940,80 960,105 970,85 L 970,285 L 70,285 Z" fill="url(#ictAreaGrad)" />
        <path d="M 70,250 C 140,210 210,240 280,180 C 350,120 420,190 490,140 C 560,90 630,160 700,110 C 770,60 840,120 900,95 C 940,80 960,105 970,85" fill="none" filter="url(#splineGlow)" stroke="#10B981" strokeWidth="2.8" />

        <path d="M 70,200 C 140,160 210,190 280,140 C 350,90 420,155 490,115 C 560,70 630,130 700,80 C 770,40 840,90 890,65 C 930,45 955,60 970,45 L 970,285 L 70,285 Z" fill="url(#etAreaGrad)" />
        <path d="M 70,200 C 140,160 210,190 280,140 C 350,90 420,155 490,115 C 560,70 630,130 700,80 C 770,40 840,90 890,65 C 930,45 955,60 970,45" fill="none" filter="url(#splineGlow)" stroke="#8B5CF6" strokeWidth="3" />

        <line stroke="#8B5CF6" strokeDasharray="2 2" strokeOpacity="0.5" strokeWidth="1.5" x1="770" x2="770" y1="35" y2="285" />
        <circle cx="770" cy="40" fill="#8B5CF6" r="5" stroke="#ffffff" strokeWidth="2" />
        <circle className="glow-pulse" cx="770" cy="40" fill="#8B5CF6" fillOpacity="0.3" r="11" />

        <g transform="translate(680, 16)">
          <rect fill="#0b1326" fillOpacity="0.95" height="62" rx="8" stroke="#8B5CF6" strokeWidth="1" width="180" />
          <text fill="#dae2fd" fontSize="10" fontWeight="800" x="12" y="16">DAY 25 • PEAK FOCUS</text>
          <text fill="#8B5CF6" fontSize="9.5" fontWeight="700" x="12" y="32">ET: 3h 40m</text>
          <text fill="#10B981" fontSize="9.5" fontWeight="700" x="75" y="32">ICT: 3h 10m</text>
          <text fill="#06B6D4" fontSize="9.5" fontWeight="700" x="135" y="32">SFT: 2h 25m</text>
          <text fill="#F59E0B" fontSize="10" fontWeight="800" x="12" y="48">Total Output: 9.25 hrs (154%)</text>
        </g>
      </svg>
    </div>
  );
}
