export default function SyllabusSubUnitItem({ subUnit, subjectBadge }) {
  return (
    <div className="flex items-start sm:items-center justify-between gap-3 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/20 transition group">
      <div className="flex items-start sm:items-center gap-2.5 min-w-0">
        <span className="px-2 py-0.5 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] font-bold shrink-0">
          {subUnit.num}
        </span>
        <span className="text-xs text-slate-200 group-hover:text-white font-medium leading-relaxed">
          {subUnit.title}
        </span>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {subjectBadge && (
          <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400/90 border border-cyan-500/20 font-mono text-[9px] font-semibold">
            {subjectBadge}
          </span>
        )}
        {subUnit.hours && (
          <span className="px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 font-mono text-[10px] whitespace-nowrap">
            {subUnit.hours} hrs
          </span>
        )}
      </div>
    </div>
  );
}
