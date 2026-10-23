import { useNavigate } from 'react-router-dom';
import ScoreKpis from './ScoreKpis';
import ScoreChart from './ScoreChart';
import ScoreTables from './ScoreTables';
import ProgressionSubCharts from './ProgressionSubCharts';

export default function ScoreAnalytics() {
  const navigate = useNavigate();

  return (
    <section className="glass-panel rounded-3xl p-6 space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-white tracking-wide">
              📈 Full Subject Paper Score Progression
            </h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30">
              Analytics Engine v2
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            ප්‍රතිඵල ඉහළ නැංවීමේ ප්‍රස්ථාරික විශ්ලේෂණය සහ ලකුණු ප්‍රවණතාව
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex p-1 rounded-xl glass-pill">
            <button type="button" className="px-3 py-1 rounded-lg text-xs font-semibold bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40 cursor-pointer">
              All Papers
            </button>
            <button type="button" className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition cursor-pointer">
              ICT
            </button>
            <button type="button" className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition cursor-pointer">
              ET
            </button>
            <button type="button" className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition cursor-pointer">
              SFT
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> ICT</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-neon-violet" /> ET</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-neon-cyan" /> SFT</span>
            <span className="flex items-center gap-1.5 text-rose-400 font-mono"><span className="w-3 border-b-2 border-dashed border-rose-400" /> 75% Target</span>
          </div>
        </div>
      </div>

      <ScoreKpis />
      <ScoreChart />
      <ScoreTables />
      <ProgressionSubCharts />

      <button
        type="button"
        onClick={() => navigate('/visual-analytics')}
        className="w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-neon-cyan/20 via-neon-violet/20 to-neon-emerald/20 hover:from-neon-cyan/30 hover:via-neon-violet/30 hover:to-neon-emerald/30 text-white border border-neon-cyan/40 hover:border-neon-cyan transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-neon-cyan/10 group"
      >
        <span className="material-symbols-outlined text-[18px] text-neon-cyan group-hover:rotate-12 transition-transform">monitoring</span>
        <span>Open Deep Visual Analytics, Radars &amp; Spaced Repetition →</span>
      </button>
    </section>
  );
}
