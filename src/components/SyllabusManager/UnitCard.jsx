export default function UnitCard({ unit, swatch, isMatch }) {
  return (
    <div className={`p-4 rounded-2xl border transition-all ${
      isMatch
        ? `${swatch.bg} ${swatch.border} ring-1 ring-cyan-400/30`
        : 'bg-surface-container/50 border-white/5 hover:border-white/15'
    }`}>
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded-lg text-xs font-mono font-bold border ${swatch.bg} ${swatch.border} ${swatch.text}`}>
            UNIT {unit.num}
          </span>
          <h4 className="text-sm font-bold text-white truncate">{unit.title}</h4>
        </div>
        <span className="text-[10px] text-slate-400 font-mono shrink-0">
          {unit.subUnits.length} Sub-units
        </span>
      </div>

      <p className="text-[11px] text-slate-300 font-medium mb-3">{unit.sinhala}</p>

      <div className="space-y-1.5 pl-2 border-l-2 border-white/10">
        {unit.subUnits.map((su) => (
          <div
            key={su.num}
            className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high transition"
          >
            <div className="flex items-center gap-2 truncate">
              <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-black/30 ${swatch.text}`}>
                {su.num}
              </span>
              <span className="text-slate-200 truncate">{su.title}</span>
            </div>
            <span className="text-[10px] font-mono text-outline shrink-0 ml-2">
              {su.hours}h Target
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
