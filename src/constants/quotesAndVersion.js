export const MOTIVATIONAL_QUOTES = [
  "නිරන්තර කැපවීම සහ විනය ජයග්‍රහණයේ රහසයි. සෑම තත්පරයක්ම ඔබේ අනාගතයට ආයෝජනය කරන්න.",
  "අරමුණ පැහැදිලි නම්, ගමන අභියෝගාත්මක වුවද ජයග්‍රහණය ස්ථිරය. නොසැලී ඉදිරියට යන්න.",
  "දිනපතා කුඩා ජයග්‍රහණ අවසානයේ මහා විශිෂ්ට ප්‍රතිඵලයක් ගොඩනගයි. ඔබගේ ඉලක්කය අත්නොහරින්න.",
  "දැනුම යනු බලයයි; එය විනය සමඟ එක් වූ විට කිසිවෙකුට ඔබව පරාජය කළ නොහැක.",
  "සාර්ථකත්වය වාසනාව මත නොව, දිනපතා දරන අඛණ්ඩ උත්සාහය හා සැලසුම්ගත අධ්‍යයනය මත තීරණය වේ."
];

export function getRandomQuote() {
  const index = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
  return MOTIVATIONAL_QUOTES[index];
}

export function getAppVersion() {
  const base = 3.3;
  const count = typeof __COMMIT_COUNT__ !== 'undefined' ? __COMMIT_COUNT__ : 5;
  const ver = (base + count * 0.1).toFixed(1);
  return `PRO v${ver}`;
}
