import { resolveScienceOrCommerceUnits } from './scienceResolver.js';
import { resolveArtsOrCommonUnits } from './artsResolver.js';
import { generateSubjectUnits } from './curriculumGenerator.js';

export function getUnitsForSubject(subject) {
  if (!subject) return [];
  
  const scienceMatch = resolveScienceOrCommerceUnits(subject);
  if (scienceMatch) return scienceMatch;

  const artsMatch = resolveArtsOrCommonUnits(subject);
  if (artsMatch) return artsMatch;

  return generateSubjectUnits(subject);
}
