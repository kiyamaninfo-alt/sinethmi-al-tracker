import YearSelectorBar from './YearSelectorBar';
import SubjectScoreTarget from './SubjectScoreTarget';
import RankZScoreCalibration from './RankZScoreCalibration';

function calculateExamCountdown(targetYear, customExamDate) {
  const now = new Date();
  if (customExamDate) {
    const custom = new Date(customExamDate);
    if (!isNaN(custom.getTime())) {
      return Math.max(0, Math.ceil((custom.getTime() - now.getTime()) / 86400000));
    }
  }
  const currentYear = now.getFullYear();
  let targetY = parseInt(targetYear, 10);
  if (!targetY || isNaN(targetY) || targetY < currentYear) {
    const thisYearAug = new Date(currentYear, 7, 1);
    targetY = now > thisYearAug ? currentYear + 1 : currentYear;
  }
  const examDate = new Date(targetY, 7, 1);
  return Math.max(0, Math.ceil((examDate.getTime() - now.getTime()) / 86400000));
}

export default function TargetHorizonForm({ profile, onChange, error }) {
  const daysRemaining = calculateExamCountdown(profile.targetYear, profile.customExamDate);

  const handleScoreTargetChange = (subId, score) => {
    const updated = { ...(profile.subjectScoreTargets || {}), [subId]: score };
    onChange('subjectScoreTargets', updated);
  };

  return (
    <div className="rounded-xl bg-surface-container-low/80 border border-outline-variant/30 p-5 space-y-4 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[18px]">radar</span>
            Target Horizon &amp; Calibration
          </h3>
          <p className="text-xs text-outline">Target Exam Year, Island Rank, Z-Score &amp; Paper Score Targets</p>
        </div>
        <div className="text-xs font-mono text-cyan-300 font-bold px-3 py-1 rounded-lg bg-cyan-500/15 border border-cyan-400/40 shadow-sm flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{daysRemaining} Days to Exam Countdown</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="space-y-4">
          <YearSelectorBar
            selectedYear={profile.targetYear}
            onSelectYear={(y) => onChange('targetYear', y)}
            customExamDate={profile.customExamDate}
            onSelectCustomDate={(d) => onChange('customExamDate', d)}
            error={error}
          />
          <SubjectScoreTarget subjects={profile.subjects || []} targets={profile.subjectScoreTargets || {}} onChangeTarget={handleScoreTargetChange} />
        </div>

        <div className="space-y-4">
          <RankZScoreCalibration
            targetRank={profile.targetRank}
            targetZScore={profile.targetZScore}
            zScoreCriteria={profile.zScoreCriteria}
            onChangeRank={(r) => onChange('targetRank', r)}
            onChangeZScore={(z) => onChange('targetZScore', z)}
            onChangeCriteria={(crit) => onChange('zScoreCriteria', crit)}
          />
        </div>
      </div>
    </div>
  );
}
