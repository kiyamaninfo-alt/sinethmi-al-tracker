import { useState } from 'react';

export default function SubjectScoreTarget({ subjects = [], targets = {}, onChangeTarget }) {
  const [activeSubId, setActiveSubId] = useState(() => subjects[0]?.id || '');
  const currentSubId = subjects.some((s) => s.id === activeSubId) ? activeSubId : subjects[0]?.id || '';
  const currentTarget = targets[currentSubId] ?? 80;

  if (subjects.length === 0) {
    return (
      <div className="space-y-1.5 p-3 rounded-lg border border-dashed border-outline-variant/30 bg-surface-container/20">
        <label className="text-outline uppercase tracking-wider block text-xs">Exam Paper Score Target</label>
        <p className="text-[11px] text-outline font-mono">Select subjects in stream matrix above to set paper score goals.</p>
      </div>
    );
  }

  const handleScoreChange = (score) => {
    const clamped = Math.max(0, Math.min(100, Number(score) || 0));
    onChangeTarget(currentSubId, clamped);
  };

  return (
    <div className="space-y-2">
      <label className="text-outline uppercase tracking-wider block text-xs">Exam Paper Score Target</label>
      <div className="flex gap-2">
        <select
          value={currentSubId}
          onChange={(e) => setActiveSubId(e.target.value)}
          className="flex-1 bg-surface-container-high/80 border border-outline-variant/40 rounded-lg px-2.5 py-1.5 text-xs text-on-surface font-mono focus:border-cyan-400 focus:outline-none cursor-pointer truncate"
        >
          {subjects.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} ({s.code || 'AL'})
            </option>
          ))}
        </select>

        <div className="flex items-center gap-1.5 bg-surface-container-high/80 border border-outline-variant/40 rounded-lg px-2.5 py-1">
          <input
            type="number"
            min="0"
            max="100"
            value={currentTarget}
            onChange={(e) => handleScoreChange(e.target.value)}
            className="w-12 bg-transparent text-center text-xs font-bold font-mono text-cyan-300 focus:outline-none"
          />
          <span className="text-[11px] text-outline font-mono">/ 100</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="range"
          min="40"
          max="100"
          value={currentTarget}
          onChange={(e) => handleScoreChange(e.target.value)}
          className="flex-1 h-1 bg-surface-container-highest rounded appearance-none cursor-pointer accent-cyan-400"
        />
        <span className="text-[11px] font-mono text-cyan-400 font-bold shrink-0">{currentTarget}% Goal</span>
      </div>
    </div>
  );
}
