export default function SubUnitPicker({ units = [], selectedUnitNum, onSelectUnit, selectedSubUnitNum, onSelectSubUnit }) {
  const currentUnit = units.find((u) => String(u.num) === String(selectedUnitNum));
  const subUnits = currentUnit?.subUnits || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="space-y-1.5">
        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[14px] text-cyan-400">folder</span>
          <span>1. Parent Unit *</span>
        </label>
        <div className="relative">
          <select
            value={selectedUnitNum || ''}
            onChange={(e) => {
              onSelectUnit(e.target.value);
              onSelectSubUnit('');
            }}
            className="w-full bg-[#080d1a] border border-white/15 focus:border-cyan-400 rounded-xl px-3 py-2 text-xs text-white appearance-none outline-none cursor-pointer pr-8 shadow-inner"
          >
            <option value="" disabled className="bg-[#0b1020] text-slate-500">-- Choose Parent Unit --</option>
            {units.map((u) => (
              <option key={u.num} value={String(u.num)} className="bg-[#0b1020] text-white">
                Unit {u.num}: {u.title}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
            <span className="material-symbols-outlined text-[16px]">expand_more</span>
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[14px] text-emerald-400">segment</span>
          <span>2. Specific Sub-unit *</span>
        </label>
        <div className="relative">
          <select
            value={selectedSubUnitNum || ''}
            disabled={!selectedUnitNum || subUnits.length === 0}
            onChange={(e) => onSelectSubUnit(e.target.value)}
            className="w-full bg-[#080d1a] border border-white/15 focus:border-emerald-400 rounded-xl px-3 py-2 text-xs text-white appearance-none outline-none cursor-pointer pr-8 shadow-inner disabled:opacity-40"
          >
            <option value="" disabled className="bg-[#0b1020] text-slate-500">
              {selectedUnitNum ? '-- Choose Sub-unit --' : '-- Select Parent Unit First --'}
            </option>
            {subUnits.map((su) => (
              <option key={su.num} value={String(su.num)} className="bg-[#0b1020] text-white">
                {su.num}: {su.title}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
            <span className="material-symbols-outlined text-[16px]">expand_more</span>
          </div>
        </div>
      </div>
    </div>
  );
}
