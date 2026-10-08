import SplineChartCanvas from './SplineChartCanvas';

export default function FocusTrajectorySpline() {
  const legendItems = [
    { label: 'ICT (Mean 2.8h)', color: 'text-emerald-400', dot: 'bg-emerald-500 shadow-[0_0_8px_#10B981]' },
    { label: 'ET (Mean 3.2h)', color: 'text-purple-400', dot: 'bg-purple-500 shadow-[0_0_8px_#8B5CF6]' },
    { label: 'SFT (Mean 2.5h)', color: 'text-cyan-400', dot: 'bg-cyan-400 shadow-[0_0_8px_#06B6D4]' },
  ];

  return (
    <section className="glass-card rounded-2xl p-5 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-500/15 text-purple-400">
            <span className="material-symbols-outlined text-[20px]">show_chart</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-extrabold text-white tracking-tight">
                Multi-Subject Time Investment & Daily Focus Spline
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                30-DAY KINETIC MATRIX
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">දෛනික අධ්‍යයන පැය සහ විෂය ප්‍රවණතා විශ්ලේෂණය</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 bg-[#0d1527] px-3 py-1.5 rounded-xl border border-white/5 text-xs font-medium">
          {legendItems.map((leg) => (
            <div key={leg.label} className={`flex items-center gap-1.5 ${leg.color}`}>
              <span className={`w-3 h-1.5 rounded-full ${leg.dot}`} />
              <span>{leg.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-1.5 text-rose-400 border-l border-white/10 pl-2">
            <span className="w-3 h-0.5 border-t border-dashed border-rose-400" />
            <span>Target (6.0h)</span>
          </div>
        </div>
      </div>

      <SplineChartCanvas />
    </section>
  );
}
