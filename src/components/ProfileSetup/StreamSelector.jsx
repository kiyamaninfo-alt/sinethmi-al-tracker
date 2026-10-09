import { useState } from 'react';
import { STANDARD_STREAMS } from '../../constants/profileSetup';

export default function StreamSelector({ selectedStream, onSelectStream }) {
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [customValue, setCustomValue] = useState('');

  const handleApplyCustom = (e) => {
    e.preventDefault();
    if (customValue.trim()) {
      onSelectStream(customValue.trim());
      setIsCustomOpen(false);
    }
  };

  return (
    <div className="rounded-xl bg-surface-container-low/80 border border-outline-variant/30 p-5 space-y-4 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[18px]">account_tree</span>
            Select Examination Stream
          </h3>
          <p className="text-xs text-outline">Select standard stream or define an interdisciplinary track</p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded bg-secondary-container/20 text-secondary border border-secondary/30 font-mono">
          Active: {selectedStream}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {STANDARD_STREAMS.map((st) => {
          const isSelected = selectedStream === st.name;
          return (
            <button key={st.id} type="button" onClick={() => onSelectStream(st.name)}
              className={`p-3 rounded-lg border text-left transition-all relative ${
                isSelected
                  ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(208,188,255,0.2)]'
                  : 'border-outline-variant/30 bg-surface-container/40 hover:border-outline-variant/60'
              }`}>
              <div className="text-xs font-bold text-on-surface">{st.name}</div>
              <div className="text-[11px] text-outline font-mono mt-0.5">{st.sinhala}</div>
              <div className="text-[10px] text-secondary mt-1">{st.code}</div>
              {isSelected && <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-pulse" />}
            </button>
          );
        })}
      </div>

      {isCustomOpen ? (
        <form onSubmit={handleApplyCustom} className="flex gap-2 pt-1">
          <input type="text" placeholder="e.g. Arts & Technology Fusion..." value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            className="flex-1 bg-surface-container-high border border-primary/50 rounded-lg px-3 py-1.5 text-xs text-on-surface focus:outline-none" autoFocus />
          <button type="submit" className="px-3 py-1.5 bg-primary text-on-primary text-xs font-bold rounded-lg">Apply</button>
          <button type="button" onClick={() => setIsCustomOpen(false)} className="px-3 py-1.5 text-xs text-outline hover:text-white">Cancel</button>
        </form>
      ) : (
        <button type="button" onClick={() => setIsCustomOpen(true)}
          className="w-full py-2 border border-dashed border-outline-variant/40 hover:border-secondary hover:text-secondary rounded-lg text-xs font-mono text-outline transition-colors flex items-center justify-center gap-1.5">
          <span className="material-symbols-outlined text-[16px]">add</span>
          + Custom Stream Trigger
        </button>
      )}
    </div>
  );
}
