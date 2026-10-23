import { useState, useEffect, useCallback } from 'react';
import { useCandidateProfile } from './useCandidateProfile';
import { getUnitsForSubject } from '../constants/syllabusUnits';
import { getSubjectCompletedCount } from '../services/syllabusProgressService';
import {
  calculateWeeksToExam,
  buildSubjectTrack,
  buildVelocitySummary
} from '../utils/velocityCalculator';

const FALLBACK_PALETTE = ['emerald', 'violet', 'cyan', 'amber', 'rose'];

export function useSyllabusVelocity() {
  const profile = useCandidateProfile();
  const subjects = profile.subjects || [];
  const targetYear = profile.targetYear || '2028';

  const compute = useCallback(() => {
    const weeksToExam = calculateWeeksToExam(targetYear, profile.customExamDate);
    const tracks = subjects.map((sub, idx) => {
      const units = getUnitsForSubject(sub);
      const totalLessons = units.reduce((acc, u) => acc + (u.subUnits?.length || 1), 0);
      const completed = getSubjectCompletedCount(sub, totalLessons);
      return buildSubjectTrack(sub, units, completed, FALLBACK_PALETTE[idx % FALLBACK_PALETTE.length]);
    });
    const summary = buildVelocitySummary(tracks, weeksToExam);
    return { tracks, weeksToExam, targetYear, ...summary };
  }, [subjects, targetYear, profile.customExamDate]);

  const [state, setState] = useState(compute);

  useEffect(() => {
    const update = () => setState(compute());
    update();
    window.addEventListener('syllabus_progress_updated', update);
    window.addEventListener('study_activity_updated', update);
    window.addEventListener('candidate_profile_updated', update);
    window.addEventListener('storage', update);
    return () => {
      window.removeEventListener('syllabus_progress_updated', update);
      window.removeEventListener('study_activity_updated', update);
      window.removeEventListener('candidate_profile_updated', update);
      window.removeEventListener('storage', update);
    };
  }, [compute]);

  return state;
}
