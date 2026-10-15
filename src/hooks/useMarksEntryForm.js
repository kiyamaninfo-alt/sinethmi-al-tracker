import { useState, useEffect, useMemo } from 'react';
import { getCompletedPaperCount } from '../services/marksService';

export function useMarksEntryForm(subjects = []) {
  const [paperScope, setPaperScope] = useState('unit_paper');
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [selectedUnitNum, setSelectedUnitNum] = useState('');
  const [selectedSubUnitNum, setSelectedSubUnitNum] = useState('');
  const [isTaught, setIsTaught] = useState(false);
  const [isStudied, setIsStudied] = useState(false);
  const [dateTime, setDateTime] = useState(() => new Date().toISOString().slice(0, 16));
  const [isManualDate, setIsManualDate] = useState(false);
  const [marks, setMarks] = useState('');
  const [completedCount, setCompletedCount] = useState(0);

  const activeSubjectId = selectedSubjectId || subjects[0]?.id || '';

  useEffect(() => {
    let active = true;
    const unitCode = paperScope === 'sub_unit_paper' ? selectedSubUnitNum : selectedUnitNum;
    getCompletedPaperCount(activeSubjectId, unitCode).then((cnt) => {
      if (active) setCompletedCount(cnt);
    });
    return () => { active = false; };
  }, [activeSubjectId, selectedUnitNum, selectedSubUnitNum, paperScope]);

  const handleMarksChange = (val) => {
    if (val === '') return setMarks('');
    const num = Math.min(100, Math.max(0, parseInt(val, 10)));
    if (!isNaN(num)) setMarks(String(num));
  };

  const isValid = useMemo(() => {
    const num = Number(marks);
    const marksValid = marks !== '' && !isNaN(num) && num >= 0 && num <= 100;
    if (!activeSubjectId || !marksValid) return false;
    if (paperScope === 'full_syllabus') return true;
    if (paperScope === 'unit_paper') return Boolean(selectedUnitNum);
    if (paperScope === 'sub_unit_paper') return Boolean(selectedUnitNum && selectedSubUnitNum);
    return false;
  }, [activeSubjectId, marks, paperScope, selectedUnitNum, selectedSubUnitNum]);

  const resetForm = () => {
    setPaperScope('unit_paper');
    setSelectedUnitNum('');
    setSelectedSubUnitNum('');
    setIsTaught(false);
    setIsStudied(false);
    setMarks('');
    setIsManualDate(false);
    setDateTime(new Date().toISOString().slice(0, 16));
  };

  return {
    paperScope, setPaperScope,
    selectedSubjectId: activeSubjectId, setSelectedSubjectId,
    selectedUnitNum, setSelectedUnitNum,
    selectedSubUnitNum, setSelectedSubUnitNum,
    isTaught, setIsTaught,
    isStudied, setIsStudied,
    dateTime, setDateTime,
    isManualDate, setIsManualDate,
    marks, handleMarksChange,
    completedCount, isValid, resetForm
  };
}
