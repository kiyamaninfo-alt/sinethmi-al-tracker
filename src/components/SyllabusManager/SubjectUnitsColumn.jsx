import { COLOR_SWATCHES } from '../../constants/profileSetup';
import { getUnitsForSubject } from '../../constants/syllabusUnits';
import UnitCard from './UnitCard';

export default function SubjectUnitsColumn({ subject, searchQuery, syllabusHooks }) {
  const swatch = COLOR_SWATCHES.find((s) => s.id === subject.color) || COLOR_SWATCHES[0];
  const units = getUnitsForSubject(subject);

  const q = searchQuery.trim().toLowerCase();
  const filteredUnits = units.filter((u) => {
    if (!q) return true;
    const matchUnit = u.title.toLowerCase().includes(q) || String(u.num).includes(q) || u.sinhala.toLowerCase().includes(q);
    const matchSub = u.subUnits.some((su) => su.title.toLowerCase().includes(q) || String(su.num).includes(q));
    return matchUnit || matchSub;
  });

  return (
    <div className={`rounded-3xl border p-4 sm:p-5 flex flex-col space-y-4 backdrop-blur-xl ${swatch.bg} ${swatch.border} shadow-lg`}>
      <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${swatch.dot}`} />
            <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase">{subject.code || 'AL'}</span>
          </div>
          <h3 className="text-base font-bold text-white">{subject.name}</h3>
          <p className="text-xs text-slate-300 font-medium">{subject.sinhala}</p>
        </div>
        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${swatch.border} ${swatch.text}`}>
          {filteredUnits.length} Units
        </span>
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto max-h-[700px] pr-1">
        {filteredUnits.length > 0 ? (
          filteredUnits.map((u) => (
            <UnitCard
              key={u.num}
              unit={u}
              subject={subject}
              swatch={swatch}
              isMatch={Boolean(q)}
              syllabusHooks={syllabusHooks}
            />
          ))
        ) : (
          <div className="p-6 text-center text-xs text-slate-400 font-mono">
            No units match "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
}
