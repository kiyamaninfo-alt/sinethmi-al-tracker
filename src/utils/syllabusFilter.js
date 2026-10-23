export function detectLanguage(query) {
  if (/[\u0D80-\u0DFF]/.test(query)) return 'si';
  if (/[\u0B80-\u0BFF]/.test(query)) return 'ta';
  return 'en';
}

export function getUnitNumberQuery(query) {
  const match = query.trim().match(/^(?:unit\s*)?(\d+(?:\.\d+)*)\.?$/i);
  return match ? match[1] : null;
}

export function matchesUnitHierarchy(unitNumStr, targetUnitStr) {
  const escaped = String(targetUnitStr).replace(/\./g, '\\.');
  return new RegExp(`^${escaped}(\\..*)?$`).test(String(unitNumStr));
}

export function extractLangText(str, lang) {
  if (!str) return '';
  if (lang === 'si') return (str.match(/[\u0D80-\u0DFF]+/g) || []).join(' ');
  if (lang === 'ta') return (str.match(/[\u0B80-\u0BFF]+/g) || []).join(' ');
  return str.replace(/[\u0D80-\u0DFF\u0B80-\u0BFF]+/g, '').replace(/[()]/g, ' ').replace(/\s+/g, ' ').trim();
}

export function getUnitTitleByLang(unit, lang) {
  if (lang === 'si') return unit.sinhala_title || unit.sinhala || extractLangText(unit.title, 'si') || unit.title;
  if (lang === 'ta') return unit.tamil_title || unit.tamil || extractLangText(unit.title, 'ta') || unit.title;
  return extractLangText(unit.title, 'en') || unit.english || unit.title;
}

export function getSubUnitTitleByLang(subUnit, lang) {
  if (lang === 'si') return subUnit.sinhala_title || subUnit.sinhala || extractLangText(subUnit.title, 'si') || subUnit.title;
  if (lang === 'ta') return subUnit.tamil_title || subUnit.tamil || extractLangText(subUnit.title, 'ta') || subUnit.title;
  return extractLangText(subUnit.title, 'en') || subUnit.english || subUnit.title;
}

function matchQuery(field, query, lang) {
  if (!field) return false;
  const q = query.toLowerCase();
  if (String(field).toLowerCase().includes(q)) return true;
  return extractLangText(field, lang).toLowerCase().includes(q);
}

export function filterUnit(unit, query, subject) {
  const unitNum = getUnitNumberQuery(query);
  if (unitNum) {
    const unitMatches = matchesUnitHierarchy(unit.num, unitNum);
    const subMatches = (unit.subUnits || []).filter((s) => matchesUnitHierarchy(s.num, unitNum));
    if (unitMatches && subMatches.length === 0) return { ...unit, subUnits: unit.subUnits };
    if (subMatches.length > 0) return { ...unit, subUnits: subMatches };
    return null;
  }

  const lang = detectLanguage(query);
  const uFields = [
    unit.title, unit.rawTitle, unit.sinhala, unit.sinhala_title, unit.tamil, unit.tamil_title,
    unit.english, subject?.name, subject?.code, subject?.sinhala, subject?.tamil
  ];
  const unitMatches = uFields.some((f) => matchQuery(f, query, lang));

  const subMatches = (unit.subUnits || []).filter((su) => {
    const sFields = [su.title, su.rawTitle, su.sinhala, su.sinhala_title, su.tamil, su.tamil_title, su.english];
    return sFields.some((f) => matchQuery(f, query, lang));
  });

  if (unitMatches && subMatches.length === 0) return { ...unit, subUnits: unit.subUnits };
  if (subMatches.length > 0) return { ...unit, subUnits: subMatches };
  return null;
}
