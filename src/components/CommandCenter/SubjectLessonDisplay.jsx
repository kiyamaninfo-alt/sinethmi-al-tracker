import { COLOR_SWATCHES } from '../../constants/profileSetup';
import { getUnitsForSubject } from '../../constants/syllabusUnits';

export function getLessonTitle(subject, lessonId) {
  if (!subject || !lessonId) return '';
  const units = getUnitsForSubject(subject);
  for (const u of units) {
    for (const su of u.subUnits) {
      if (`${u.num}-${su.num}` === lessonId || su.num === lessonId) {
        return `Unit ${u.num} - ${su.num}: ${su.title}`;
      }
    }
  }
  return lessonId;
}

export default function SubjectLessonDisplay({
  subjects,
  selectedSubjectId,
  selectedLessonId,
  onChangeClick
}) {
  const currentSubject = subjects.find((s) => s.id === selectedSubjectId);
  const swatch = currentSubject ? (COLOR_SWATCHES.find((sw) => sw.id === currentSubject.color) || COLOR_SWATCHES[0]) : null;
  const lessonTitle = getLessonTitle(currentSubject, selectedLessonId);

  return (
    <div className={`mt-3 p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
      swatch ? `${swatch.bg} ${swatch.border}` : 'bg-surface-container/40 border-white/5'
    }`}>
      <div className="flex items-center gap-2.5 min-w-0">
        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${swatch ? swatch.dot : 'bg-slate-500'}`} />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono uppercase text-slate-300">ක්‍රියාකාරී ඉලක්කය:</span>
            <span className={`text-xs font-bold ${swatch ? swatch.text : 'text-slate-200'}`}>
              {currentSubject ? `${currentSubject.code || currentSubject.name} (${currentSubject.sinhala})` : 'නොතේරූ විෂය (No subject)'}
            </span>
          </div>
          <p className="text-[11px] text-slate-300 truncate max-w-sm sm:max-w-md font-medium mt-0.5">
            {lessonTitle || 'පාඩම තෝරා නොමැත (No lesson selected)'}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onChangeClick}
        className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition flex items-center gap-1 shrink-0 cursor-pointer"
      >
        <span className="material-symbols-outlined text-[14px]">tune</span>
        <span>Change</span>
      </button>
    </div>
  );
}
