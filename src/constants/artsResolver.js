import { POL_SCI_UNITS } from './politicalScienceUnits.js';
import { LOGIC_UNITS } from './logicUnits.js';
import { GEOGRAPHY_UNITS } from './geographyUnits.js';
import { MEDIA_UNITS } from './mediaStudiesUnits.js';
import { SINHALA_UNITS } from './sinhalaUnits.js';
import { HISTORY_UNITS } from './historyUnits.js';
import { ENGLISH_LIT_UNITS } from './englishLitUnits.js';
import { ART_UNITS } from './artUnits.js';
import { TAMIL_LIT_UNITS } from './tamilLitUnits.js';
import { HOME_ECON_UNITS } from './homeEconUnits.js';
import { DRAMA_UNITS } from './dramaUnits.js';
import { INDIGENOUS_DANCE_UNITS } from './indigenousDanceUnits.js';
import { BHARATHA_UNITS } from './bharathaUnits.js';
import { ORIENTAL_MUSIC_UNITS } from './orientalMusicUnits.js';
import { CARNATIC_MUSIC_UNITS } from './carnaticMusicUnits.js';
import { WESTERN_MUSIC_UNITS } from './westernMusicUnits.js';
import { BUDDHISM_UNITS } from './buddhismUnits.js';
import { BUDDHIST_CULTURE_UNITS } from './buddhistCultureUnits.js';
import { HINDUISM_UNITS } from './hinduismUnits.js';
import { ISLAM_UNITS } from './islamUnits.js';
import { CHRISTIANITY_UNITS } from './christianityUnits.js';
import { COMMON_TEST_UNITS } from './commonTestUnits.js';
import { GENERAL_ENGLISH_UNITS } from './generalEnglishUnits.js';

export function resolveArtsOrCommonUnits(subject) {
  const name = String(subject.name || '').toLowerCase();
  const sinhala = String(subject.sinhala || '');
  const tamil = String(subject.tamil || '');
  const code = String(subject.code || '').toLowerCase();

  if (name.includes('general english') || code.includes('013') || (name.includes('english') && !name.includes('lit'))) return GENERAL_ENGLISH_UNITS;
  if (name.includes('common general') || sinhala.includes('පොදු සාමාන්‍ය') || tamil.includes('பொதுப் பொது') || code.includes('012')) return COMMON_TEST_UNITS;
  if (name.includes('politi') || sinhala.includes('දේශපාලන') || tamil.includes('அரசியல்')) return POL_SCI_UNITS;
  if (name.includes('logic') || sinhala.includes('තර්ක') || tamil.includes('அளவையியல்')) return LOGIC_UNITS;
  if (name.includes('geograph') || sinhala.includes('භූගෝල') || tamil.includes('புவியியல்')) return GEOGRAPHY_UNITS;
  if (name.includes('media') || sinhala.includes('සන්නිවේදන') || tamil.includes('தொடர்பாடல்') || tamil.includes('ஊடக')) return MEDIA_UNITS;
  if (name.includes('sinhala') || sinhala.includes('සිංහල') || tamil.includes('சிங்கள')) return SINHALA_UNITS;
  if (name.includes('tamil') || sinhala.includes('දෙමළ') || tamil.includes('தமிழ்')) return TAMIL_LIT_UNITS;
  if (name.includes('home econ') || sinhala.includes('ගෘහ ආර්ථික') || tamil.includes('மனைப் பொருளியல்')) return HOME_ECON_UNITS;
  if (name.includes('history') || sinhala.includes('ඉතිහාස') || tamil.includes('வரலாறு')) return HISTORY_UNITS;
  if (name.includes('english lit') || name.includes('literature') || sinhala.includes('සාහිත්‍ය') || tamil.includes('இலக்கிய')) return ENGLISH_LIT_UNITS;
  if (name.includes('art') || name.includes('design') || sinhala.includes('චිත්‍ර') || tamil.includes('சித்திர')) return ART_UNITS;
  if (name.includes('drama') || name.includes('theatre') || sinhala.includes('නාට්‍ය') || tamil.includes('நாடக')) return DRAMA_UNITS;
  if (name.includes('bharatha') || sinhala.includes('භාරත') || tamil.includes('பரத')) return BHARATHA_UNITS;
  if (name.includes('dance') || sinhala.includes('නැටුම්') || sinhala.includes('නර්තන') || tamil.includes('நடன')) return INDIGENOUS_DANCE_UNITS;
  if (name.includes('carnatic') || sinhala.includes('කර්නාටක') || tamil.includes('கர்நாடக')) return CARNATIC_MUSIC_UNITS;
  if (name.includes('western music') || sinhala.includes('බටහිර සංගීත') || tamil.includes('மேலைத்தேய')) return WESTERN_MUSIC_UNITS;
  if (name.includes('oriental music') || name.includes('music') || sinhala.includes('සංගීත') || tamil.includes('சங்கீத') || tamil.includes('இசை')) return ORIENTAL_MUSIC_UNITS;
  if (name.includes('buddhist culture') || sinhala.includes('බෞද්ධ සංස්කෘති') || tamil.includes('பௌத்த கலாச்சார')) return BUDDHIST_CULTURE_UNITS;
  if (name.includes('buddh') || sinhala.includes('බුද්ධ ධර්ම') || sinhala.includes('බෞද්ධ') || tamil.includes('பௌத்த')) return BUDDHISM_UNITS;
  if (name.includes('hindu') || sinhala.includes('හින්දු') || tamil.includes('இந்து')) return HINDUISM_UNITS;
  if (name.includes('islam') || sinhala.includes('ඉස්ලාම්') || tamil.includes('இஸ்லாம்')) return ISLAM_UNITS;
  if (name.includes('christ') || sinhala.includes('ක්‍රිස්තියානි') || tamil.includes('கிறிஸ்தவ')) return CHRISTIANITY_UNITS;

  return null;
}
