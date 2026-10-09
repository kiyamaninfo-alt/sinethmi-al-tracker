export default function TargetHorizonForm({ profile, onChange }) {
  const currentYear = new Date().getFullYear();
  const yearNum = parseInt(profile.targetYear, 10) || currentYear;
  const daysRemaining = Math.max(0, (yearNum - currentYear) * 365 + 180);
  const presets = ['2026', '2027', '2028'];
  const rankMilestones = [
    { label: 'Top 10 Island Rank', minZ: '2.600' },
    { label: 'Top 50 Island Rank', minZ: '2.400' },
    { label: 'Top 100 Island Rank', minZ: '2.250' }
  ];

  return (
    <div className="rounded-xl bg-surface-container-low/80 border border-outline-variant/30 p-5 space-y-4 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[18px]">radar</span>
            Target Horizon & Calibration
          </h3>
          <p className="text-xs text-outline">Open exam year horizon, Island Rank & target Z-Score metrics</p>
        </div>
        <div className="text-xs font-mono text-secondary px-2.5 py-1 rounded bg-secondary/10 border border-secondary/30">
          {daysRemaining} Days to Exam Countdown
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="space-y-2">
          <label className="text-outline uppercase tracking-wider block">Target Exam Year (Open / Unrestricted)</label>
          <div className="flex gap-2">
            {presets.map((y) => (
              <button key={y} type="button" onClick={() => onChange('targetYear', y)}
                className={`flex-1 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                  profile.targetYear === y ? 'border-primary bg-primary/20 text-primary font-bold' : 'border-outline-variant/30 bg-surface-container'
                }`}>
                {y}
              </button>
            ))}
          </div>
          <input type="number" min="2025" max="2040" value={profile.targetYear} onChange={(e) => onChange('targetYear', e.target.value)}
            placeholder="Enter custom year..." className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-3 py-2 text-on-surface font-mono focus:border-primary focus:outline-none" />
        </div>

        <div className="space-y-2">
          <label className="text-outline uppercase tracking-wider block">Target Z-Score & Merit Goal</label>
          <input type="text" value={profile.targetZScore} onChange={(e) => onChange('targetZScore', e.target.value)}
            placeholder="e.g. 2.450" className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-3 py-2 text-primary font-mono text-sm font-bold focus:border-primary focus:outline-none" />
          <div className="space-y-1">
            {rankMilestones.map((m) => (
              <button key={m.label} type="button" onClick={() => { onChange('targetRank', m.label); onChange('targetZScore', m.minZ); }}
                className={`w-full px-2.5 py-1.5 rounded border text-left flex justify-between items-center transition-all ${
                  profile.targetRank === m.label ? 'border-primary bg-primary-container/20 text-primary font-bold' : 'border-outline-variant/20 bg-surface-container/30 text-outline'
                }`}>
                <span>{m.label}</span>
                <span className="font-mono text-[11px]">&gt; {m.minZ}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
