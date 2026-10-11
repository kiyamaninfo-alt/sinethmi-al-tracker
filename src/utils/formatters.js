export function capitalizeWords(str) {
  if (typeof str !== 'string' || !str) return str || '';
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
