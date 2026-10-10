import { STUDY_TECHNIQUES } from '../../constants/studyTechniques';

export default function StudyTechniqueSelector({ selectedTechnique, onSelectTechnique }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-mono font-semibold text-cyan-300 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px] text-cyan-400">psychology</span>
          ක්‍රමය &amp; පාඩම් ප්‍රොටෝකෝලය (Study Techniques)
        </label>
        <span className="text-[11px] text-slate-300 font-mono">Select preset or set manual</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {STUDY_TECHNIQUES.map((tech) => {
          const isSelected = selectedTechnique === tech.id;
          return (
            <div
              key={tech.id}
              onClick={() => onSelectTechnique(tech)}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                isSelected
                  ? 'bg-cyan-500/20 border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg shadow-cyan-500/10'
                  : 'bg-surface-container/70 border-outline-variant/40 hover:border-cyan-400/50 hover:bg-surface-container'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-extrabold ${isSelected ? 'text-cyan-200' : 'text-white'}`}>
                  {tech.name}
                </span>
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-cyan-400 text-slate-950 font-black' : 'bg-black/40 text-cyan-300 border border-cyan-500/30'
                }`}>
                  {tech.tag}
                </span>
              </div>

              <div className="text-xs font-mono flex flex-wrap items-center gap-x-2 gap-y-0.5 text-slate-100">
                <span>පාඩම්: <strong className="text-cyan-300 font-bold">{tech.studyTime}</strong></span>
                <span className="text-slate-400">&bull;</span>
                <span>විවේකය: <strong className="text-emerald-300 font-bold">{tech.breakTime}</strong></span>
              </div>

              <div className="text-[11px] font-mono text-amber-300 flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">repeat</span>
                <span>{tech.roundsText}</span>
              </div>

              <div className="text-xs text-slate-100 font-sans font-medium leading-snug">
                {tech.purpose}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
