import { useMemo } from 'react';

export function matchUnitStrict(unit, q) {
  const trimmed = q.trim();
  if (!trimmed) return true;

  if (/^\d+(?:\.\d+)*$/.test(trimmed)) {
    const escaped = trimmed.replace(/\./g, '\\.');
    const regex = new RegExp(`^${escaped}(\\..*)?$`);
    if (regex.test(String(unit.num))) return true;
    return (unit.subUnits || []).some((su) => regex.test(String(su.num)));
  }

  const lower = trimmed.toLowerCase();
  const title = (unit.title || '').toLowerCase();
  const sinhala = (unit.sinhala || '').toLowerCase();
  if (title.includes(lower) || sinhala.includes(lower)) return true;

  return (unit.subUnits || []).some((su) => {
    return (su.title || '').toLowerCase().includes(lower) ||
      (su.sinhala || '').toLowerCase().includes(lower);
  });
}

export function useUnitSearchFilter(units = [], query = '') {
  return useMemo(() => {
    if (!query.trim()) return units;
    return units.filter((u) => matchUnitStrict(u, query));
  }, [units, query]);
}
