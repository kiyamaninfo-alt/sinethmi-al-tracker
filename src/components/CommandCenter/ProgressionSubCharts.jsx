export default function ProgressionSubCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="glass-panel-elevated p-4 rounded-2xl border border-white/5 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon-cyan" /> Full Paper Score Progression (All %)
          </span>
          <span className="font-mono text-[10px] text-slate-400">Zoom: 80% - 100%</span>
        </div>
        <div className="h-28 w-full">
          <svg className="w-full h-full" viewBox="0 0 400 100">
            <line stroke="rgba(255,255,255,0.06)" strokeWidth="1" x1="0" x2="400" y1="20" y2="20" />
            <line stroke="rgba(255,255,255,0.06)" strokeWidth="1" x1="0" x2="400" y1="60" y2="60" />
            <line opacity="0.8" stroke="#F43F5E" strokeDasharray="4,4" strokeWidth="1" x1="0" x2="400" y1="75" y2="75" />
            <path d="M 20,40 Q 150,15 280,25 T 380,20" fill="none" stroke="#8B5CF6" strokeLinecap="round" strokeWidth="2.5" />
            <circle cx="20" cy="40" fill="#8B5CF6" r="4" />
            <circle cx="150" cy="22" fill="#06B6D4" r="4" />
            <circle cx="280" cy="25" fill="#10B981" r="4" />
            <circle cx="380" cy="20" fill="#10B981" r="5" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="flex justify-between text-[9px] font-mono text-slate-400">
          <span>FP 01 (94%)</span>
          <span>FP 02 (96%)</span>
          <span className="text-neon-emerald font-semibold">Moving Avg: 96.0%</span>
        </div>
      </div>

      <div className="glass-panel-elevated p-4 rounded-2xl border border-white/5 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon-amber" /> Full Unit Paper Score Progression (All)
          </span>
          <span className="font-mono text-[10px] text-slate-400">5-Paper Moving Trend</span>
        </div>
        <div className="h-28 w-full">
          <svg className="w-full h-full" viewBox="0 0 400 100">
            <line stroke="rgba(255,255,255,0.06)" strokeWidth="1" x1="0" x2="400" y1="20" y2="20" />
            <line stroke="rgba(255,255,255,0.06)" strokeWidth="1" x1="0" x2="400" y1="60" y2="60" />
            <line opacity="0.8" stroke="#F43F5E" strokeDasharray="4,4" strokeWidth="1" x1="0" x2="400" y1="75" y2="75" />
            <path d="M 20,50 Q 140,25 260,35 T 380,25" fill="none" stroke="#10B981" strokeLinecap="round" strokeWidth="2.5" />
            <circle cx="20" cy="50" fill="#10B981" r="4" />
            <circle cx="140" cy="30" fill="#10B981" r="4" />
            <circle cx="260" cy="35" fill="#8B5CF6" r="4" />
            <circle cx="380" cy="25" fill="#06B6D4" r="5" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="flex justify-between text-[9px] font-mono text-slate-400">
          <span>U-Paper 01 (90%)</span>
          <span>U-Paper 02 (94%)</span>
          <span className="text-neon-cyan font-semibold">Retained: 95.0%</span>
        </div>
      </div>
    </div>
  );
}
