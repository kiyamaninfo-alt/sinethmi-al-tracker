import { useState, useMemo } from 'react';
import { getUnitsForSubject } from '../constants/syllabusUnits';
import { filterUnit } from '../utils/syllabusFilter';

export function useSyllabusSearch(subjects = []) {
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const currentSubject = useMemo(() => {
    return subjects.find((s) => s.id === selectedSubjectId) || null;
  }, [subjects, selectedSubjectId]);

  const filteredUnits = useMemo(() => {
    const q = searchQuery.trim();

    // 1. Initial View: no subject selected and query empty
    if (!selectedSubjectId && !q) return [];

    // 3. Scoped Search: subject is selected
    if (currentSubject) {
      const units = getUnitsForSubject(currentSubject);
      if (!q) return units.map((u) => ({ ...u, subject: currentSubject }));
      return units
        .map((u) => filterUnit(u, q, currentSubject))
        .filter(Boolean)
        .map((u) => ({ ...u, subject: currentSubject }));
    }

    // 2. Global Search: no subject selected, query present
    return subjects.flatMap((sub) => {
      const units = getUnitsForSubject(sub);
      return units
        .map((u) => filterUnit(u, q, sub))
        .filter(Boolean)
        .map((u) => ({
          ...u,
          subject: sub,
          subjectId: sub.id,
          subjectName: sub.name,
          subjectCode: sub.code
        }));
    });
  }, [subjects, selectedSubjectId, currentSubject, searchQuery]);

  const totalSubUnitsCount = useMemo(() => {
    return filteredUnits.reduce((acc, u) => acc + (u.subUnits?.length || 0), 0);
  }, [filteredUnits]);

  return {
    selectedSubjectId,
    setSelectedSubjectId,
    searchQuery,
    setSearchQuery,
    currentSubject,
    filteredUnits,
    totalUnitsCount: filteredUnits.length,
    totalSubUnitsCount
  };
}
