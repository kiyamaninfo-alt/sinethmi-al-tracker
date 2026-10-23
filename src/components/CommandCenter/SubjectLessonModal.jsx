import { getUnitsForSubject } from '../../constants/syllabusUnits';

export default function SubjectLessonModal({
  isOpen, subjects, tempSubjectId, tempLessonId,
  onSelectSubject, onSelectLesson, onConfirm, onClose
}) {
  if (!isOpen) return null;
  const currentSubject = subjects.find((s) => s.id === tempSubjectId);
  const units = currentSubject ? getUnitsForSubject(currentSubject) : [];

  const handleProceed = () => {
    if (!tempSubjectId) return;
    const finalLesson = tempLessonId || (units[0]?.subUnits[0] ? `${units[0].num}-${units[0].subUnits[0].num}` : '');
    if (!finalLesson) return;
    onConfirm(tempSubjectId, finalLesson);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0b1020] border border-cyan-400/40 rounded-3xl max-w-md w-full p-5 sm:p-6 space-y-4 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h4 className="text-sm font-bold text-white">Select Subject &amp; Lesson</h4>
          </div>
          <button type="button" onClick={onClose} className="p-1 rounded text-slate-400 hover:text-white cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase text-slate-300 block">Select Subject</label>
            <select
              value={tempSubjectId || ''}
              onChange={(e) => onSelectSubject(e.target.value)}
              className="w-full bg-[#070b18] border border-white/15 rounded-xl px-3 py-2 text-xs text-white font-medium focus:border-cyan-400 focus:outline-none cursor-pointer"
            >
              <option value="">-- Select Subject --</option>
              {subjects.map((sub) => (
                <option key={sub.id} value={sub.id}>{sub.code || sub.name} - {sub.name} ({sub.sinhala})</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase text-slate-300 block">Select Lesson</label>
            <select
              value={tempLessonId || ''}
              disabled={!tempSubjectId}
              onChange={(e) => onSelectLesson(e.target.value)}
              className="w-full bg-[#070b18] border border-white/15 rounded-xl px-3 py-2 text-xs text-white font-medium focus:border-cyan-400 focus:outline-none cursor-pointer disabled:opacity-40"
            >
              <option value="">-- Select Lesson (Default: First Lesson) --</option>
              {units.map((u) => (
                <optgroup key={u.num} label={`Unit ${u.num}: ${u.title}`}>
                  {u.subUnits.map((su) => (
                    <option key={su.num} value={`${u.num}-${su.num}`}>{su.num}: {su.title}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl bg-surface-container border border-white/10 text-slate-300 text-xs font-mono font-bold hover:bg-white/10 cursor-pointer">
            Cancel
          </button>
          <button type="button" disabled={!tempSubjectId} onClick={handleProceed} className="flex-1 py-2.5 rounded-xl bg-cyan-400 disabled:opacity-40 text-slate-950 text-xs font-mono font-bold shadow-md shadow-cyan-400/20 hover:brightness-110 cursor-pointer">
            Confirm &amp; Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
