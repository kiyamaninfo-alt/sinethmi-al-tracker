import { useNavigate } from 'react-router-dom';

export default function SyllabusHeader({ searchQuery, onSearchChange, totalUnits, totalSubjects }) {
  const navigate = useNavigate();

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 shadow-glow-card relative overflow-hidden space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/command-center')}
            className="p-2 rounded-xl bg-surface-container hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition cursor-pointer"
            title="Back to Command Center"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              SYLLABUS MANAGER &bull; MISSION CONTROL
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              Curriculum Units &amp; Sub-Units Matrix
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1.5 rounded-xl bg-surface-container border border-white/10 text-cyan-300">
            {totalSubjects} Active Subjects
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-surface-container border border-white/10 text-emerald-300">
            {totalUnits} Standard Units
          </span>
        </div>
      </div>

      <div className="relative">
        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
          search
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search units, sub-units, concepts or unit numbers (e.g. 1.1, Design, Operations)..."
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-container-high/60 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 font-mono transition"
        />
      </div>
    </div>
  );
}
