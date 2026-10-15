import { useState } from 'react';
import { useUnitSearchFilter } from '../../hooks/useUnitSearchFilter';

export default function UnitSearchPicker({ units = [], selectedUnitNum, onSelectUnit }) {
  const [query, setQuery] = useState('');
  const filtered = useUnitSearchFilter(units, query);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[14px] text-amber-400">search</span>
          <span>Search &amp; Pick Unit (පාඩම) *</span>
        </label>
        {selectedUnitNum && (
          <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
            Selected: Unit {selectedUnitNum}
          </span>
        )}
      </div>

      <div className="relative">
        <span className="absolute left-3 top-2.5 text-slate-500 material-symbols-outlined text-[16px]">
          filter_alt
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by Unit number (e.g. 1) or keyword..."
          className="w-full bg-[#080d1a] border border-white/15 focus:border-amber-400/80 rounded-xl pl-8.5 pr-8 py-2 text-xs text-white placeholder-slate-500 font-medium outline-none transition"
        />
        {query && (
          <button type="button" onClick={() => setQuery('')} className="absolute right-2.5 top-2 text-slate-400 hover:text-white cursor-pointer">
            <span className="material-symbols-outlined text-[14px]">cancel</span>
          </button>
        )}
      </div>

      <div className="max-h-36 overflow-y-auto space-y-1.5 custom-scrollbar pr-1">
        {filtered.length === 0 ? (
          <p className="text-[11px] text-slate-500 py-2 text-center">No matching units found</p>
        ) : (
          filtered.map((u) => {
            const isSelected = String(selectedUnitNum) === String(u.num);
            return (
              <button
                key={u.num}
                type="button"
                onClick={() => onSelectUnit(String(u.num))}
                className={`w-full p-2 rounded-xl text-left border flex items-center justify-between transition cursor-pointer ${
                  isSelected
                    ? 'border-amber-400 bg-amber-500/15 text-white ring-1 ring-amber-400/40'
                    : 'border-white/5 bg-white/[0.02] text-slate-300 hover:bg-white/[0.05] hover:border-white/15'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold shrink-0">
                    U-{u.num}
                  </span>
                  <span className="text-xs font-medium truncate">{u.title}</span>
                </div>
                <span className={`material-symbols-outlined text-[16px] shrink-0 ${isSelected ? 'text-amber-400' : 'text-slate-600'}`}>
                  {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                </span>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
