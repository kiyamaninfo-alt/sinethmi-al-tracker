import { useNavigate } from 'react-router-dom';

export default function ActivityHeatmap() {
  const navigate = useNavigate();
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <section className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white">Study Activity &amp; Hub</h3>
          <p className="text-xs text-slate-400">අඛණ්ඩ අධ්‍යයන දැක්ම සහ ප්‍රගති වාර්තාව</p>
        </div>
        <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Active</span>
      </div>

      <div className="grid grid-cols-2 gap-3.5">
        <div className="glass-panel-elevated p-4 rounded-2xl border border-neon-amber/25 shadow-glow-amber/20 relative overflow-hidden">
          <div className="absolute -right-2 -bottom-2 text-5xl opacity-20 select-none">🔥</div>
          <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-1">
            <span>🔥</span> Streak Count
          </div>
          <div className="text-3xl font-black font-mono text-white tracking-tight">1 <span className="text-lg font-sans font-medium text-slate-300">Days</span></div>
          <p className="text-[10px] text-slate-400 mt-1">දෛනික අඛණ්ඩ ඉලක්කය</p>
        </div>

        <div className="glass-panel-elevated p-4 rounded-2xl border border-neon-cyan/25 shadow-glow-cyan/20 relative overflow-hidden">
          <div className="absolute -right-2 -bottom-2 text-5xl opacity-20 select-none">⏳</div>
          <div className="flex items-center gap-1.5 text-xs text-neon-cyan font-semibold mb-1">
            <span>⏱️</span> Today Focused
          </div>
          <div className="text-3xl font-black font-mono text-white tracking-tight">325 <span className="text-lg font-sans font-medium text-slate-300">m</span></div>
          <p className="text-[10px] text-emerald-400 mt-1">▲ 18% vs ඊයේ දිනට සාපේක්ෂව</p>
        </div>
      </div>

      <div className="glass-panel-elevated p-4 rounded-2xl space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-200">Deep Heatmap &amp; Activity Insights</span>
          <span className="text-[10px] font-mono text-slate-400">14-Day Velocity</span>
        </div>

        <div className="grid grid-cols-7 gap-1.5 pt-1">
          {days.map((d, i) => (
            <div key={`d1-${i}`} className="h-6 rounded bg-neon-cyan/40 border border-neon-cyan/40 flex items-center justify-center text-[9px] text-slate-200 font-bold">
              {d}
            </div>
          ))}
          <div className="h-6 rounded bg-neon-cyan/30 border border-white/5" />
          <div className="h-6 rounded bg-neon-cyan/60 border border-white/5" />
          <div className="h-6 rounded bg-neon-cyan/40 border border-white/5" />
          <div className="h-6 rounded bg-emerald-500/80 border border-emerald-400 shadow-glow-emerald/30" />
          <div className="h-6 rounded bg-neon-cyan/70 border border-white/5" />
          <div className="h-6 rounded bg-neon-violet/80 border border-neon-violet" />
          <div className="h-6 rounded bg-gradient-to-tr from-neon-cyan to-neon-violet animate-pulse border border-white" />
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
          <span>අවම (Less)</span>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-sm bg-neon-cyan/30" />
            <span className="w-2.5 h-2.5 rounded-sm bg-neon-cyan/70" />
            <span className="w-2.5 h-2.5 rounded-sm bg-neon-cyan" />
            <span className="w-2.5 h-2.5 rounded-sm bg-neon-violet" />
          </div>
          <span>උපරිම (Intense)</span>
        </div>
      </div>

      <button type="button" onClick={() => navigate('/study-analytics')} className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm bg-neon-violet/20 hover:bg-neon-violet/30 text-neon-violet border border-neon-violet/40 hover:border-neon-violet transition flex items-center justify-center gap-2 cursor-pointer">
        <span>📊</span> View Full Analytics &amp; Spaced Heatmap Matrix
      </button>
    </section>
  );
}
