import SyllabusSubUnitItem from './SyllabusSubUnitItem';

export default function SyllabusUnitCard({ unit }) {
  const subCount = unit.subUnits?.length || 0;
  const subjectBadge = unit.subjectCode || unit.subject?.code || unit.subjectName || unit.subject?.name;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#070c18]/80 p-3.5 sm:p-4 space-y-3 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2.5 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-2">
          {subjectBadge && (
            <span className="px-2 py-0.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-[10px] font-bold">
              {subjectBadge}
            </span>
          )}
          <span className="px-2 py-0.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-[11px] font-bold">
            UNIT {unit.num}
          </span>
          <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
            {unit.title}
          </h4>
        </div>
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {unit.sinhala && (
            <span className="text-[11px] text-slate-400 font-medium font-sans">
              {unit.sinhala}
            </span>
          )}
          {unit.tamil && (
            <span className="text-[11px] text-slate-400 font-medium font-sans">
              {unit.tamil}
            </span>
          )}
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-container border border-white/10 text-slate-300">
            {subCount} {subCount === 1 ? 'sub-unit' : 'sub-units'}
          </span>
        </div>
      </div>

      <div className="space-y-1.5">
        {(unit.subUnits || []).map((su) => (
          <SyllabusSubUnitItem key={su.num} subUnit={su} subjectBadge={subjectBadge} />
        ))}
      </div>
    </div>
  );
}
