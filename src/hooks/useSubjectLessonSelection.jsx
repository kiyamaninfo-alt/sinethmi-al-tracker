import { useState } from 'react';
import SubjectLessonModal from '../components/CommandCenter/SubjectLessonModal';

export function useSubjectLessonSelection(timer) {
  const [tempSubjectId, setTempSubjectId] = useState(timer.selectedSubjectId || '');
  const [tempLessonId, setTempLessonId] = useState(timer.selectedLessonId || '');

  const openModal = () => {
    setTempSubjectId(timer.selectedSubjectId || '');
    setTempLessonId(timer.selectedLessonId || '');
    timer.setShowSubjectModal(true);
  };

  const handleConfirm = (subId, lesId) => {
    const finalSub = subId || tempSubjectId;
    const finalLes = lesId || tempLessonId;
    if (!finalSub || !finalLes) return;
    timer.setSelectedSubjectId(finalSub);
    timer.setSelectedLessonId(finalLes);
    timer.setShowSubjectModal(false);
    if (!timer.isActive) {
      timer.startFocusSession(finalSub, finalLes);
    }
  };

  const renderModal = (subjects) => (
    <SubjectLessonModal
      isOpen={timer.showSubjectModal}
      subjects={subjects}
      tempSubjectId={tempSubjectId}
      tempLessonId={tempLessonId}
      onSelectSubject={(id) => { setTempSubjectId(id); setTempLessonId(''); }}
      onSelectLesson={setTempLessonId}
      onConfirm={handleConfirm}
      onClose={() => timer.setShowSubjectModal(false)}
    />
  );

  return { openModal, renderModal };
}
