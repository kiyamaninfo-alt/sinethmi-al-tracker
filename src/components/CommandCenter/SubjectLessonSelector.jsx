import { COLOR_SWATCHES } from '../../constants/profileSetup';
import { getUnitsForSubject } from '../../constants/syllabusUnits';

export default function SubjectLessonSelector({
  subjects,
  selectedSubjectId,
  selectedLessonId,
  onSelectSubject,
  onSelectLesson,
  disabled
}) {
  const currentSubject = subjects.find((s) => s.id === selectedSubjectId);
  const swatch = currentSubject ? (COLOR_SWATCHES.find((sw) => sw.id === currentSubject.color) || COLOR_SWATCHES[0]) : null;
  const units = currentSubject ? getUnitsForSubject(currentSubject) : [];

  return (
    <div className={`mt-3 p-3 rounded-2xl border transition-all ${
      swatch ? `${swatch.bg} ${swatch.border}` : 'bg-surface-container/40 border-white/5'
    } ${disabled ? 'opacity-80' : ''}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div className="space-y-1">
          <label className="text-[10px] font-mono uppercase text-slate-300 block">Select Subject</label>
          <select
            value={selectedSubjectId || ''}
            disabled={disabled}
            onChange={(e) => onSelectSubject(e.target.value)}
            className="w-full bg-[#070b18] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white font-medium focus:border-cyan-400 focus:outline-none cursor-pointer disabled:opacity-60"
          >
            <option value="">-- Select Subject --</option>
            {subjects.map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.code || sub.name} - {sub.name} ({sub.sinhala})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-mono uppercase text-slate-300 block">Select Lesson</label>
          <select
            value={selectedLessonId || ''}
            disabled={disabled || !selectedSubjectId}
            onChange={(e) => onSelectLesson(e.target.value)}
            className="w-full bg-[#070b18] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white font-medium focus:border-cyan-400 focus:outline-none cursor-pointer disabled:opacity-50"
          >
            <option value="">-- Select Lesson --</option>
            {units.map((u) => (
              <optgroup key={u.num} label={`Unit ${u.num}: ${u.title}`}>
                {u.subUnits.map((su) => (
                  <option key={su.num} value={`${u.num}-${su.num}`}>
                    {su.num}: {su.title}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
