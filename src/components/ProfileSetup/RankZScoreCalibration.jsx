import { RANK_TARGET_OPTIONS } from '../../constants/profileSetup';
import ZScoreParametersInput from './ZScoreParametersInput';

export default function RankZScoreCalibration({
  targetRank,
  targetZScore,
  zScoreCriteria,
  onChangeRank,
  onChangeZScore,
  onChangeCriteria
}) {
  const handleSelectRank = (label) => {
    onChangeRank(label);
    const found = RANK_TARGET_OPTIONS.find((r) => r.label === label);
    if (found) onChangeZScore(found.minZ);
  };

  return (
    <div className="space-y-2">
      <label className="text-outline uppercase tracking-wider block text-xs">Target Merit &amp; Z-Score Criteria</label>
      <div className="space-y-2">
        <select
          value={targetRank || RANK_TARGET_OPTIONS[2].label}
          onChange={(e) => handleSelectRank(e.target.value)}
          className="w-full bg-surface-container-high/80 border border-outline-variant/40 rounded-lg px-2.5 py-1.5 text-xs text-primary font-bold focus:border-primary focus:outline-none cursor-pointer"
        >
          {RANK_TARGET_OPTIONS.map((r) => (
            <option key={r.label} value={r.label}>
              {r.label} (Threshold &gt; {r.minZ})
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <div className="flex-1">
            <span className="text-[10px] text-outline font-mono block">Edit Z-Score Criteria</span>
            <input
              type="text"
              value={targetZScore || ''}
              onChange={(e) => onChangeZScore(e.target.value)}
              placeholder="e.g. 2.450"
              className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-3 py-1.5 text-primary font-mono text-sm font-bold focus:border-primary focus:outline-none"
            />
          </div>
          <div className="text-right shrink-0 pt-3">
            <span className="text-[10px] font-mono text-cyan-400 block font-bold">Standardized Gaussian</span>
            <span className="text-[11px] font-mono text-slate-300">&gt; {targetZScore || '2.400'} Cutoff</span>
          </div>
        </div>

        <ZScoreParametersInput criteria={zScoreCriteria} onChangeCriteria={onChangeCriteria} />
      </div>
    </div>
  );
}
