import SyllabusUnitCard from './SyllabusUnitCard';

export default function SyllabusResultsList({
  units = [], searchQuery = '', currentSubject, selectedSubjectId,
  expandedUnits = {}, onToggleUnit
}) {
  const isSearching = Boolean(searchQuery.trim());

  if (units.length === 0) {
    if (!selectedSubjectId && !isSearching) {
      return (
        <div className="py-12 px-4 text-center rounded-2xl border border-dashed border-white/10 bg-white/[0.01]">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-3">
            <span className="material-symbols-outlined text-[24px]">manage_search</span>
          </div>
          <p className="text-sm font-semibold text-slate-200">No Subject Selected</p>
          <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            Choose a subject from the dropdown above to view its syllabus, or type a search query to search across all subjects.
          </p>
        </div>
      );
    }

    return (
      <div className="py-12 px-4 text-center rounded-2xl border border-dashed border-white/10 bg-white/[0.01]">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-3">
          <span className="material-symbols-outlined text-[24px]">search_off</span>
        </div>
        <p className="text-sm font-semibold text-slate-200">No matching units or sub-units</p>
        <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
          No items found matching "{searchQuery}" {currentSubject ? `in ${currentSubject.name}` : 'across all subjects'}.
          Try typing a unit number like <span className="text-cyan-300 font-mono">1</span> or a keyword like <span className="text-cyan-300 font-mono">system</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 pr-1 flex-1 overflow-y-auto custom-scrollbar">
      {units.map((unit) => {
        const unitKey = `${unit.subjectId || unit.subjectCode || currentSubject?.id || ''}-${unit.num}`;
        const isExpanded = isSearching || Boolean(expandedUnits[unitKey]);
        return (
          <SyllabusUnitCard
            key={unitKey}
            unit={unit}
            isExpanded={isExpanded}
            onToggle={() => onToggleUnit?.(unitKey)}
            isSearching={isSearching}
          />
        );
      })}
    </div>
  );
}
