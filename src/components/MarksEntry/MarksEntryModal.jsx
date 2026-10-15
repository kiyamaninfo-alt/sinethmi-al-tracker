import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useMarksEntryForm } from '../../hooks/useMarksEntryForm';
import { useSyllabusData } from '../../hooks/useSyllabusData';
import { getUnitsForSubject } from '../../constants/syllabusUnits';
import { submitPaperMarks } from '../../services/marksService';
import PaperScopeSelector from './PaperScopeSelector';
import SubjectPicker from './SubjectPicker';
import UnitSearchPicker from './UnitSearchPicker';
import SubUnitPicker from './SubUnitPicker';
import LessonCompletionToggles from './LessonCompletionToggles';
import DateTimeMarksFields from './DateTimeMarksFields';
import MarksProgressPrompt from './MarksProgressPrompt';

export default function MarksEntryModal({ isOpen, onClose, subjects = [] }) {
  const { subjects: dbSubs, syllabusMap } = useSyllabusData(subjects);
  const activeSubs = dbSubs?.length ? dbSubs : subjects;
  const form = useMarksEntryForm(activeSubs);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;
  const currentSub = activeSubs.find((s) => s.id === form.selectedSubjectId);
  const units = currentSub ? (syllabusMap[currentSub.id] || getUnitsForSubject(currentSub)) : [];
  const showToggles = (form.paperScope === 'unit_paper' && form.selectedUnitNum) ||
    (form.paperScope === 'sub_unit_paper' && form.selectedSubUnitNum);

  const handleSubmit = async () => {
    if (!form.isValid || isSubmitting) return;
    setIsSubmitting(true);
    await submitPaperMarks({
      subjectId: form.selectedSubjectId,
      paperType: form.paperScope,
      unitCode: form.paperScope === 'sub_unit_paper' ? form.selectedSubUnitNum : form.selectedUnitNum,
      marks: form.marks,
      evaluatedDate: form.dateTime,
      isTaught: form.isTaught,
      isStudied: form.isStudied
    });
    setIsSubmitting(false);
    form.resetForm();
    onClose();
  };

  return createPortal(
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-[#0b1020] border border-cyan-500/30 rounded-3xl max-w-xl w-full p-4 sm:p-6 space-y-4 shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-white font-sans">Marks Entry &amp; Paper Evaluation</h3>
          </div>
          <button type="button" onClick={() => { form.resetForm(); onClose(); }} className="text-slate-400 hover:text-white p-1 cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <PaperScopeSelector paperScope={form.paperScope} onSelectScope={form.setPaperScope} />
        <SubjectPicker subjects={activeSubs} selectedSubjectId={form.selectedSubjectId} onSelectSubject={form.setSelectedSubjectId} />

        {form.paperScope === 'unit_paper' && (
          <UnitSearchPicker units={units} selectedUnitNum={form.selectedUnitNum} onSelectUnit={form.setSelectedUnitNum} />
        )}
        {form.paperScope === 'sub_unit_paper' && (
          <SubUnitPicker units={units} selectedUnitNum={form.selectedUnitNum} onSelectUnit={form.setSelectedUnitNum} selectedSubUnitNum={form.selectedSubUnitNum} onSelectSubUnit={form.setSelectedSubUnitNum} />
        )}
        {showToggles && (
          <LessonCompletionToggles isTaught={form.isTaught} onToggleTaught={form.setIsTaught} isStudied={form.isStudied} onToggleStudied={form.setIsStudied} />
        )}

        <DateTimeMarksFields dateTime={form.dateTime} onDateTimeChange={form.setDateTime} isManualDate={form.isManualDate} onToggleManualDate={form.setIsManualDate} marks={form.marks} onMarksChange={form.handleMarksChange} />
        <MarksProgressPrompt paperScope={form.paperScope} completedCount={form.completedCount} isValid={form.isValid} isSubmitting={isSubmitting} onCancel={() => { form.resetForm(); onClose(); }} onSubmit={handleSubmit} />
      </div>
    </div>,
    document.body
  );
}
