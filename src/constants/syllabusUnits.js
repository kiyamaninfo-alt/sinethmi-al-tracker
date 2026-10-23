import { ET_UNITS } from './etUnits.js';
import { SFT_UNITS } from './sftUnits.js';
import { ICT_UNITS } from './ictUnits.js';
import { AGRI_UNITS } from './agricultureUnits.js';
import { MATHS_UNITS, HIGHER_MATHS_UNITS, PHYSICS_UNITS, CHEMISTRY_UNITS } from './scienceCurriculum.js';
import {
  BIOLOGY_UNITS,
  POL_SCI_UNITS,
  LOGIC_UNITS,
  GEOGRAPHY_UNITS,
  MEDIA_UNITS,
  SINHALA_UNITS,
  BUDDHIST_CULTURE_UNITS,
  ACCOUNTING_UNITS,
  BUSINESS_STUDIES_UNITS,
  ECONOMICS_UNITS,
  STATISTICS_UNITS,
  BST_UNITS,
  HISTORY_UNITS,
  ENGLISH_LIT_UNITS,
  ART_UNITS
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
  if (name.includes('account') || sinhala.includes('ගිණුම්') || tamil.includes('கணக்கியல்')) return ACCOUNTING_UNITS;
  if (name.includes('business') || sinhala.includes('ව්‍යාපාර') || tamil.includes('வணிக')) return BUSINESS_STUDIES_UNITS;
  if (name.includes('econom') || sinhala.includes('ආර්ථික') || tamil.includes('பொருளியல்')) return ECONOMICS_UNITS;
  if (name.includes('statist') || sinhala.includes('සංඛ්‍යාන') || tamil.includes('புள்ளிவிவர')) return STATISTICS_UNITS;
  if (name.includes('biosystem') || name.includes('bio process') || name.includes('food') || sinhala.includes('ජෛව පද්ධති') || sinhala.includes('ආහාර තාක්ෂණ') || tamil.includes('உயிர்முறை') || tamil.includes('உணவு தொழில்நுட்ப')) return BST_UNITS;
  if (name.includes('politi') || sinhala.includes('දේශපාලන') || tamil.includes('அரசியல்') || code.includes('012')) return POL_SCI_UNITS;
  if (name.includes('logic') || sinhala.includes('තර්ක') || tamil.includes('அளவையியல்') || code.includes('013')) return LOGIC_UNITS;
  if (name.includes('geograph') || sinhala.includes('භූගෝල') || tamil.includes('புவியியல்') || code.includes('014')) return GEOGRAPHY_UNITS;
  if (name.includes('media') || sinhala.includes('සන්නිවේදන') || tamil.includes('தொடர்பாடல்') || tamil.includes('ஊடக') || code.includes('019')) return MEDIA_UNITS;
  if (name.includes('sinhala') || sinhala.includes('සිංහල') || tamil.includes('சிங்கள') || code.includes('015')) return SINHALA_UNITS;
  if (name.includes('buddhist') || sinhala.includes('බෞද්ධ') || tamil.includes('பௌத்த') || code.includes('017')) return BUDDHIST_CULTURE_UNITS;
  if (name.includes('history') || sinhala.includes('ඉතිහාස') || tamil.includes('வரலாறு')) return HISTORY_UNITS;
  if (name.includes('english') || name.includes('literature') || sinhala.includes('සාහිත්‍ය') || tamil.includes('இலக்கிய')) return ENGLISH_LIT_UNITS;
  if (name.includes('art') || name.includes('design') || sinhala.includes('චිත්‍ර') || tamil.includes('சித்திர')) return ART_UNITS;
  if (name.includes('engineering') || code.includes('007') || id.includes('007')) return ET_UNITS;
  if (name.includes('science for tech') || code.includes('008') || id.includes('008')) return SFT_UNITS;
  if (name.includes('information') || name.includes('ict') || code.includes('005')) return ICT_UNITS;

  return generateSubjectUnits(subject);
}
