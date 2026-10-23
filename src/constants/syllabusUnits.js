import { ET_UNITS } from './etUnits.js';
import { SFT_UNITS } from './sftUnits.js';
import { ICT_UNITS } from './ictUnits.js';
import { AGRI_UNITS } from './agricultureUnits.js';
import { MATHS_UNITS, HIGHER_MATHS_UNITS, PHYSICS_UNITS, CHEMISTRY_UNITS } from './scienceCurriculum.js';
import {
  BIOLOGY_UNITS,
  COMMERCE_UNITS,
  POL_SCI_UNITS,
  LOGIC_UNITS,
  GEOGRAPHY_UNITS,
  MEDIA_UNITS,
  SINHALA_UNITS,
  BUDDHIST_CULTURE_UNITS
} from './commerceArtsCurriculum.js';
import { generateSubjectUnits } from './curriculumGenerator.js';

export function getUnitsForSubject(subject) {
  if (!subject) return [];
  const name = String(subject.name || '').toLowerCase();
  const sinhala = String(subject.sinhala || '');
  const tamil = String(subject.tamil || '');
  const code = String(subject.code || '').toLowerCase();
  const id = String(subject.id || subject.slug || '').toLowerCase();

  if (name.includes('higher math') || sinhala.includes('උසස් ගණිත') || tamil.includes('உயர் கணித') || code.includes('021') || id.includes('021')) return HIGHER_MATHS_UNITS;
  if (name.includes('math') || sinhala.includes('ගණිත') || tamil.includes('கணித') || code.includes('004') || id.includes('004')) return MATHS_UNITS;
  if (name.includes('physic') || sinhala.includes('භෞතික') || tamil.includes('பௌதிக')) return PHYSICS_UNITS;
  if (name.includes('chem') || sinhala.includes('රසායන') || tamil.includes('இரசாயන') || tamil.includes('வேதியியல்')) return CHEMISTRY_UNITS;
  if (name.includes('biolog') || sinhala.includes('ජීව විද්‍යා') || tamil.includes('உயிரியல்')) return BIOLOGY_UNITS;
  if (name.includes('agri') || sinhala.includes('කෘෂි') || tamil.includes('விவசாய')) return AGRI_UNITS;
  if (name.includes('politi') || sinhala.includes('දේශපාලන') || tamil.includes('அரசியல்') || code.includes('012')) return POL_SCI_UNITS;
  if (name.includes('logic') || sinhala.includes('තර්ක') || tamil.includes('அளவையியல்') || code.includes('013')) return LOGIC_UNITS;
  if (name.includes('geograph') || sinhala.includes('භූගෝල') || tamil.includes('புவியியல்') || code.includes('014')) return GEOGRAPHY_UNITS;
  if (name.includes('media') || sinhala.includes('සන්නිවේදන') || tamil.includes('தொடர்பாடல்') || tamil.includes('ஊடக') || code.includes('019')) return MEDIA_UNITS;
  if (name.includes('sinhala') || sinhala.includes('සිංහල') || tamil.includes('சிங்கள') || code.includes('015')) return SINHALA_UNITS;
  if (name.includes('buddhist') || sinhala.includes('බෞද්ධ') || tamil.includes('பௌத்த') || code.includes('017')) return BUDDHIST_CULTURE_UNITS;
  if (name.includes('engineering') || code.includes('007') || id.includes('007')) return ET_UNITS;
  if (name.includes('science for tech') || code.includes('008') || id.includes('008')) return SFT_UNITS;
  if (name.includes('information') || name.includes('ict') || code.includes('005')) return ICT_UNITS;
  if (name.includes('account') || name.includes('econom') || name.includes('business')) return COMMERCE_UNITS;

  return generateSubjectUnits(subject);
}
