import { useState, useMemo } from 'react';
import { useSyllabusData } from './useSyllabusData';
import { getUnitsForSubject } from '../constants/syllabusUnits';
import { filterUnit } from '../utils/syllabusFilter';

export function useSyllabusSearch(initialSubjects = []) {
  const { subjects, syllabusMap, isLoading, isDbConnected } = useSyllabusData(initialSubjects);
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const currentSubject = useMemo(() => {
    return subjects.find((s) => s.id === selectedSubjectId || s.slug === selectedSubjectId || s.code === selectedSubjectId) || null;
  }, [subjects, selectedSubjectId]);

  const getUnits = (sub) => {
    const key = sub.id || sub.slug || sub.code;
    return syllabusMap[key] || getUnitsForSubject(sub);
  };

  const filteredUnits = useMemo(() => {
    const q = searchQuery.trim();
    if (!selectedSubjectId && !q) return [];

    if (currentSubject) {
      const units = getUnits(currentSubject);
      if (!q) return units.map((u) => ({ ...u, subject: currentSubject }));
      return units.map((u) => filterUnit(u, q, currentSubject)).filter(Boolean).map((u) => ({ ...u, subject: currentSubject }));
    }

    return subjects.flatMap((sub) => {
      const units = getUnits(sub);
      return units.map((u) => filterUnit(u, q, sub)).filter(Boolean).map((u) => ({
        ...u, subject: sub, subjectId: sub.id, subjectName: sub.name, subjectCode: sub.code
      }));
    });
  }, [subjects, selectedSubjectId, currentSubject, searchQuery, syllabusMap]);

  const totalSubUnitsCount = useMemo(() => {
    return filteredUnits.reduce((acc, u) => acc + (u.subUnits?.length || 0), 0);
  }, [filteredUnits]);

  return {
    subjects, selectedSubjectId, setSelectedSubjectId,
    searchQuery, setSearchQuery, currentSubject,
    filteredUnits, totalUnitsCount: filteredUnits.length,
    totalSubUnitsCount, isLoading, isDbConnected
  };
}
