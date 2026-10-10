import { useState } from 'react';
import ExamDatePicker from './ExamDatePicker';

export default function YearSelectorBar({ selectedYear, onSelectYear, customExamDate, onSelectCustomDate }) {
  const currentYear = new Date().getFullYear();
  const [offset, setOffset] = useState(() => {
    const sel = parseInt(selectedYear, 10);
    return sel && sel >= currentYear ? Math.max(0, sel - currentYear - 1) : 0;
  });

  const visibleYears = Array.from({ length: 3 }, (_, i) => String(currentYear + offset + i));

  return (
    <div className="space-y-2">
      <label className="text-outline uppercase tracking-wider block text-xs">Target Exam Year</label>
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          disabled={offset <= 0}
          onClick={() => setOffset((prev) => Math.max(0, prev - 1))}
          className="p-1.5 rounded-lg border border-outline-variant/30 bg-surface-container hover:bg-cyan-500/20 text-cyan-300 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
          title="Previous years"
        >
          <span className="material-symbols-outlined text-[16px]">chevron_left</span>
        </button>

        <div className="flex-1 grid grid-cols-3 gap-1.5">
          {visibleYears.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => onSelectYear(y)}
              className={`py-1.5 rounded-lg border text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedYear === y
                  ? 'border-primary bg-primary/25 text-primary shadow-sm shadow-primary/20 ring-1 ring-primary'
                  : 'border-outline-variant/30 bg-surface-container hover:border-cyan-400 hover:text-white'
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        <button
          type="button"
          disabled={offset >= 10}
          onClick={() => setOffset((prev) => prev + 1)}
          className="p-1.5 rounded-lg border border-outline-variant/30 bg-surface-container hover:bg-cyan-500/20 text-cyan-300 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
          title="Next years"
        >
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        </button>
      </div>

      <input
        type="number"
        min={currentYear}
        max={currentYear + 15}
        value={selectedYear || ''}
        onChange={(e) => onSelectYear(e.target.value)}
        placeholder={`e.g. ${currentYear + 2}`}
        className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-3 py-1.5 text-on-surface font-mono text-xs focus:border-primary focus:outline-none"
      />

      <ExamDatePicker customExamDate={customExamDate} onSelectCustomDate={onSelectCustomDate} />
    </div>
  );
}
