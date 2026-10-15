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

function extractLangText(str, lang) {
  if (!str) return '';
  if (lang === 'si') return (str.match(/[\u0D80-\u0DFF]+/g) || []).join(' ');
  if (lang === 'ta') return (str.match(/[\u0B80-\u0BFF]+/g) || []).join(' ');
  return str.replace(/[\u0D80-\u0DFF\u0B80-\u0BFF]+/g, '').replace(/[()]/g, ' ').replace(/\s+/g, ' ').trim();
}

function matchLang(field, query, lang) {
  if (!field) return false;
  return extractLangText(field, lang).toLowerCase().includes(query.toLowerCase());
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
  const uFields = lang === 'si' ? [unit.sinhala, unit.title, subject?.sinhala]
    : lang === 'ta' ? [unit.tamil, unit.title, subject?.tamil]
    : [unit.title, unit.english, subject?.name, subject?.code];
  const unitMatches = uFields.some((f) => matchLang(f, query, lang));

  const subMatches = (unit.subUnits || []).filter((su) => {
    const sFields = lang === 'si' ? [su.sinhala, su.title]
      : lang === 'ta' ? [su.tamil, su.title]
      : [su.title, su.english];
    return sFields.some((f) => matchLang(f, query, lang));
  });

  if (unitMatches && subMatches.length === 0) return { ...unit, subUnits: unit.subUnits };
  if (subMatches.length > 0) return { ...unit, subUnits: subMatches };
  return null;
}
