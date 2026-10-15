import { useState, useEffect } from 'react';
import { fetchDBSubjects, fetchAllSyllabus } from '../services/syllabusService';

export function useSyllabusData(initialSubjects = []) {
  const [subjects, setSubjects] = useState(initialSubjects);
  const [syllabusMap, setSyllabusMap] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDbConnected, setIsDbConnected] = useState(false);

  useEffect(() => {
    let active = true;
    async function loadData() {
      setIsLoading(true);
      let currentSubs = initialSubjects?.length ? initialSubjects : [];

      const { data: dbSubs, error } = await fetchDBSubjects();
      if (active && !error && dbSubs?.length) {
        currentSubs = dbSubs;
        setSubjects(dbSubs);
        setIsDbConnected(true);
      } else if (currentSubs.length) {
        setSubjects(currentSubs);
      }

      if (currentSubs.length) {
        const map = await fetchAllSyllabus(currentSubs);
        if (active) {
          setSyllabusMap(map);
          if (!error && dbSubs?.length) setIsDbConnected(true);
        }
      }
      if (active) setIsLoading(false);
    }

    loadData();
    return () => { active = false; };
  }, [initialSubjects]);

  return { subjects, syllabusMap, isLoading, isDbConnected };
}
