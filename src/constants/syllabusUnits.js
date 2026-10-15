import { ET_UNITS } from './etUnits.js';
import { SFT_UNITS } from './sftUnits.js';
import { ICT_UNITS } from './ictUnits.js';
import { MATHS_UNITS, PHYSICS_UNITS, CHEMISTRY_UNITS } from './scienceCurriculum.js';
import { BIOLOGY_UNITS, COMMERCE_UNITS } from './commerceArtsCurriculum.js';
import { generateSubjectUnits } from './curriculumGenerator.js';

export function getUnitsForSubject(subject) {
  if (!subject) return [];
  const name = String(subject.name || '').toLowerCase();
  const sinhala = String(subject.sinhala || '');
  const code = String(subject.code || '').toLowerCase();
  const id = String(subject.id || subject.slug || '').toLowerCase();

  if (name.includes('math') || sinhala.includes('ගණිත')) return MATHS_UNITS;
  if (name.includes('physic') || sinhala.includes('භෞතික')) return PHYSICS_UNITS;
  if (name.includes('chem') || sinhala.includes('රසායන')) return CHEMISTRY_UNITS;
  if (name.includes('biolog') || sinhala.includes('ජීව විද්‍යා')) return BIOLOGY_UNITS;
  if (name.includes('engineering') || code.includes('007') || id.includes('007')) return ET_UNITS;
  if (name.includes('science for tech') || code.includes('008') || id.includes('008')) return SFT_UNITS;
  if (name.includes('information') || name.includes('ict') || code.includes('005')) return ICT_UNITS;
  if (name.includes('account') || name.includes('econom') || name.includes('business')) return COMMERCE_UNITS;

  return generateSubjectUnits(subject);
}
