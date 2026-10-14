import { useState, useEffect, useCallback } from 'react';
import {
  getStoredSyllabusState,
  saveStoredSyllabusState,
  getDefaultSubUnitData,
  calculateUnitProgress,
  isUnitFullyComplete
} from '../services/syllabusService';
import { playClickSound } from '../constants/clickSound';

export function useSyllabusState() {
  const [state, setState] = useState(() => getStoredSyllabusState());

  useEffect(() => {
    const onCustom = (e) => { if (e.detail) setState(e.detail); };
    window.addEventListener('syllabus_tracker_updated', onCustom);
    return () => window.removeEventListener('syllabus_tracker_updated', onCustom);
  }, []);

  const updateSubUnit = useCallback((key, updater) => {
    setState((prev) => {
      const current = prev[key] || getDefaultSubUnitData();
      const updated = updater(current);
      const next = { ...prev, [key]: updated };
      saveStoredSyllabusState(next);
      return next;
    });
  }, []);

  const toggleGodaDamuda = useCallback((key) => {
    updateSubUnit(key, (curr) => {
      const next = !curr.godaDamuda;
      playClickSound(next ? 'toggle_on' : 'toggle_off');
      return { ...curr, godaDamuda: next };
    });
  }, [updateSubUnit]);

  const toggleWadeIwarai = useCallback((key) => {
    updateSubUnit(key, (curr) => {
      const next = !curr.wadeIwarai;
      playClickSound(next ? 'toggle_on' : 'toggle_off');
      return { ...curr, wadeIwarai: next };
    });
  }, [updateSubUnit]);

  const restartSpacedRepetition = useCallback((key) => {
    playClickSound('key');
    updateSubUnit(key, (curr) => ({
      ...curr,
      repetitionCycle: (curr.repetitionCycle || 1) + 1,
      repetitionDate: new Date().toISOString().slice(0, 10)
    }));
  }, [updateSubUnit]);

  const getSubUnit = useCallback((key) => state[key] || getDefaultSubUnitData(), [state]);

  const getUnitProgress = useCallback((sub, u) => calculateUnitProgress(state, sub, u), [state]);
  const checkUnitComplete = useCallback((sub, u) => isUnitFullyComplete(state, sub, u), [state]);

  return {
    toggleGodaDamuda,
    toggleWadeIwarai,
    restartSpacedRepetition,
    getSubUnit,
    calculateUnitProgress: getUnitProgress,
    isUnitFullyComplete: checkUnitComplete
  };
}
