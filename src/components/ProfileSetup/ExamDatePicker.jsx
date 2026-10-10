import { useState } from 'react';

export default function ExamDatePicker({ customExamDate, onSelectCustomDate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-0.5 space-y-1.5">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/40 hover:decoration-cyan-300 flex items-center gap-1 cursor-pointer transition-colors"
      >
        <span className="material-symbols-outlined text-[13px]">event</span>
        {customExamDate ? `Custom Exam Date: ${customExamDate}` : 'Set custom exam date (Default: Aug 1)'}
      </button>

      {isOpen && (
        <div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-high/60 border border-cyan-500/30">
          <input
            type="date"
            value={customExamDate || ''}
            onChange={(e) => onSelectCustomDate(e.target.value)}
            className="flex-1 bg-surface-container border border-outline-variant/40 rounded px-2 py-1 text-on-surface font-mono text-xs focus:border-cyan-400 focus:outline-none [color-scheme:dark]"
          />
          {customExamDate && (
            <button
              type="button"
              onClick={() => onSelectCustomDate('')}
              className="text-[10px] font-mono px-2 py-1 rounded bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 cursor-pointer"
              title="Reset to August 1st"
            >
              Reset
            </button>
          )}
        </div>
      )}
    </div>
  );
}
