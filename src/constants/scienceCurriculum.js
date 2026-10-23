import { PHYSICS_UNITS } from './physicsUnits.js';
import { CHEMISTRY_UNITS } from './chemistryUnits.js';

export { PHYSICS_UNITS, CHEMISTRY_UNITS };

export const MATHS_UNITS = [
  { num: 1, title: 'Real Numbers, Polynomials & Functions', sinhala: 'තාත්වික සංඛ්‍යා, බහුපද හා ශ්‍රිත',
    subUnits: [
      { num: '1.1', title: 'Quadratic Equations & Roots (වර්ගජ සමීකරණ හා මූල)', hours: 4 },
      { num: '1.2', title: 'Polynomials & Remainder Theorem (බහුපද ශ්‍රිත හා ශේෂ ප්‍රමේයය)', hours: 4 },
      { num: '1.3', title: 'Rational Functions & Partial Fractions (භාගික භාග)', hours: 4 }
    ] },
  { num: 2, title: 'Trigonometry & Complex Numbers', sinhala: 'ත්‍රිකෝණමිතිය හා සංකීර්ණ සංඛ්‍යා',
    subUnits: [
      { num: '2.1', title: 'Trigonometric Identities & Equations (ත්‍රිකෝණමිතික සර්වසාම්‍ය)', hours: 5 },
      { num: '2.2', title: 'Complex Numbers & Argand Diagrams (සංකීර්ණ සංඛ්‍යා)', hours: 5 },
      { num: '2.3', title: 'De Moivre Theorem & Roots of Unity (ඩි මෝවාර් ප්‍රමේයය)', hours: 4 }
    ] },
  { num: 3, title: 'Calculus, Limits & Vectors', sinhala: 'කලනය, සීමා හා දෛශික',
    subUnits: [
      { num: '3.1', title: 'Differential Calculus & Applications (අවකලනය හා යෙදවුම්)', hours: 6 },
      { num: '3.2', title: 'Integral Calculus & Area Computation (අනුකලනය හා වර්ගඵල)', hours: 6 },
      { num: '3.3', title: 'Vectors, Coplanar Forces & Statics (දෛශික හා ස්ථිතිකය)', hours: 5 }
    ] }
];
