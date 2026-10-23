import { ET_UNITS } from './etUnits.js';
import { SFT_UNITS } from './sftUnits.js';
import { ICT_UNITS } from './ictUnits.js';
import { AGRI_UNITS } from './agricultureUnits.js';
import { BIOLOGY_UNITS } from './biologyUnits.js';
import { MATHS_UNITS, HIGHER_MATHS_UNITS, PHYSICS_UNITS, CHEMISTRY_UNITS } from './scienceCurriculum.js';
import { ACCOUNTING_UNITS } from './accountingUnits.js';
import { BUSINESS_STUDIES_UNITS } from './businessStudiesUnits.js';
import { ECONOMICS_UNITS } from './economicsUnits.js';
import { STATISTICS_UNITS } from './statisticsUnits.js';
import { BST_UNITS } from './bstUnits.js';

export function resolveScienceOrCommerceUnits(subject) {
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
  if (name.includes('econom') || sinhala.includes('ආර්ථික') || tamil.includes('பொருளியල්')) return ECONOMICS_UNITS;
  if (name.includes('statist') || sinhala.includes('සංඛ්‍යාන') || tamil.includes('புள்ளிவிவர')) return STATISTICS_UNITS;
  if (name.includes('biosystem') || name.includes('bio process') || name.includes('food') || sinhala.includes('ජෛව පද්ධති') || sinhala.includes('ආහාර තාක්ෂණ') || tamil.includes('உயிர்முறை') || tamil.includes('உணவு தொழில்நுட்ப')) return BST_UNITS;
  if (name.includes('engineering') || code.includes('007') || id.includes('007')) return ET_UNITS;
  if (name.includes('science for tech') || code.includes('008') || id.includes('008')) return SFT_UNITS;
  if (name.includes('information') || name.includes('ict') || code.includes('005')) return ICT_UNITS;

  return null;
}
