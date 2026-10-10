import { DEFAULT_Z_CRITERIA } from '../../constants/zScoreCriteria';

export default function ZScoreParametersInput({ criteria = {}, onChangeCriteria }) {
  const currentMean = criteria.subjectMean ?? DEFAULT_Z_CRITERIA.subjectMean;
  const currentSd = criteria.standardDeviation ?? DEFAULT_Z_CRITERIA.standardDeviation;

  const handleReset = () => {
    onChangeCriteria(DEFAULT_Z_CRITERIA);
  };

  return (
    <div className="pt-2 border-t border-outline-variant/20 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium text-on-surface flex items-center gap-1">
          <span className="material-symbols-outlined text-[13px] text-cyan-400">functions</span>
          Statistical Parameters
        </span>
        <button
          type="button"
          onClick={handleReset}
          className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/40 hover:decoration-cyan-300 cursor-pointer"
        >
          Set to Default
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <label className="text-[10px] text-outline font-mono block">
            Subject Mean (μ)
          </label>
          <input
            type="number"
            step="0.1"
            value={currentMean}
            onChange={(e) => onChangeCriteria({ ...criteria, subjectMean: e.target.value })}
            placeholder="52.5"
            className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-2.5 py-1 text-on-surface font-mono text-xs focus:border-primary focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[10px] text-outline font-mono block">
            Standard Deviation (σ)
          </label>
          <input
            type="number"
            step="0.1"
            value={currentSd}
            onChange={(e) => onChangeCriteria({ ...criteria, standardDeviation: e.target.value })}
            placeholder="14.2"
            className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-2.5 py-1 text-on-surface font-mono text-xs focus:border-primary focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
