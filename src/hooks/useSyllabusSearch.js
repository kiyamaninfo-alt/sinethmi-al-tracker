import { useState, useMemo, useCallback } from 'react';
import { useSyllabusData } from './useSyllabusData';
import { useAppLanguage } from './useAppLanguage';
import { getUnitsForSubject } from '../constants/syllabusUnits';
import { filterUnit } from '../utils/syllabusFilter';

export function useSyllabusSearch(initialSubjects = []) {
  const [appLang, setAppLang] = useAppLanguage();
  const [language, setLanguageState] = useState(appLang || 'si');
  const { subjects, syllabusMap, isLoading, isDbConnected } = useSyllabusData(initialSubjects, language);
  const [selectedSubjectId, setSelectedSubjectIdState] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedUnits, setExpandedUnits] = useState({});

  const setSelectedSubjectId = (id) => {
    setSelectedSubjectIdState(id);
    setExpandedUnits({});
  };

  const toggleUnitExpansion = (unitKey) => {
    setExpandedUnits((prev) => ({ ...prev, [unitKey]: !prev[unitKey] }));
  };

  const setLanguage = (newLang) => {
    setLanguageState(newLang);
    setAppLang(newLang);
  };

  const currentSubject = useMemo(() => {
    return subjects.find((s) => s.id === selectedSubjectId || s.slug === selectedSubjectId || s.code === selectedSubjectId) || null;
  }, [subjects, selectedSubjectId]);

  const getUnits = useCallback((sub) => {
    const key = sub.id || sub.slug || sub.code;
    return syllabusMap[key] || getUnitsForSubject(sub);
  }, [syllabusMap]);

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
  }, [subjects, selectedSubjectId, currentSubject, searchQuery, getUnits]);

  const totalSubUnitsCount = useMemo(() => {
    return filteredUnits.reduce((acc, u) => acc + (u.subUnits?.length || 0), 0);
  }, [filteredUnits]);

  return {
    subjects, selectedSubjectId, setSelectedSubjectId,
    searchQuery, setSearchQuery, currentSubject,
    filteredUnits, totalUnitsCount: filteredUnits.length,
    totalSubUnitsCount, isLoading, isDbConnected,
    language, setLanguage, expandedUnits, toggleUnitExpansion
  };
}
