export const COMPARISON_DATA = {
  si: {
    traditional: {
      title: 'සාම්ප්‍රදායික පාඩම් රටාව',
      tag: 'අක්‍රමවත් උත්සාහය',
      points: [
        'අරමුණක් හෝ විද්‍යාත්මක සැලසුමක් නැතිව කාලය නාස්ති වීම',
        'අමාරු, දුර්වල පාඩම් මඟහැර පහසු පාඩම් පමණක් නැවත නැවත කිරීම',
        'විභාග ශාලාවට යනතුරු තමන්ට අමතක වූ කොටස් හඳුනා නොගැනීම',
        'විවේකයක් නොමැතිව අධික වෙහෙසක් දැරීමෙන් මානසික විඩාව ඇතිවීම'
      ]
    },
    smart: {
      title: 'Smart System ක්‍රමය (StudyFlow AI)',
      tag: 'විද්‍යාත්මක ප්‍රවේශය',
      points: [
        'Spaced Repetition මඟින් දීර්ඝකාලීන මතකය තහවුරු කිරීම',
        'දුර්වල යුනිට් සහ සබ්-ටොපික්ස් නිරවද්‍ය Analytics මඟින් පෙන්වා දීම',
        'පාඩම් කළ යුතු නිවැරදි දිනය සහ වේලාව ස්වයංක්‍රීයව පෙළගැස්වීම',
        'නියමිත කාල සීමා සහිත Focus Timer සහ විවේක කාල සටහන්'
      ]
    }
  },
  en: {
    traditional: {
      title: 'Conventional Study Pattern',
      tag: 'Unstructured Effort',
      points: [
        'Hours lost without deliberate pacing or scientific scheduling',
        'Re-reading comfortable topics while neglecting critical weak spots',
        'Unaware of knowledge retention decay until sitting the actual exam',
        'Burnout caused by marathon cramming without structured recovery'
      ]
    },
    smart: {
      title: 'Smart System Approach (StudyFlow AI)',
      tag: 'Evidence-Based Framework',
      points: [
        'Consolidate long-term cognitive memory via active Spaced Repetition',
        'Isolate lagging syllabus units with precise telemetry analytics',
        'Automated algorithmic scheduling for maximum retention intervals',
        'Cadenced Focus Timers paired with optimal restorative rest windows'
      ]
    }
  },
  ta: {
    traditional: {
      title: 'பாரம்பரிய படிப்பு முறை',
      tag: 'திட்டமிடப்படாத முயற்சி',
      points: [
        'திட்டமிடல் இன்றி நேரத்தை வீணடித்தல்',
        'கடினமான பாடங்களைத் தவிர்த்து இலகுவானவற்றையே மீண்டும் படித்தல்',
        'பரீட்சை மண்டபம் செல்லும் வரை மறந்த பகுதிகளை அறியாமை',
        'முறையான இடைவெளியின்றி மனச்சோர்வு அடைதல்'
      ]
    },
    smart: {
      title: 'Smart System முறை (StudyFlow AI)',
      tag: 'விஞ்ஞான அணுகுமுறை',
      points: [
        'Spaced Repetition மூலம் நீண்டகால நினைவாற்றலை உறுதிப்படுத்தல்',
        'பலவீனமான பகுதிகளை Analytics மூலம் கண்டறிதல்',
        'படிக்க வேண்டிய சரியான நேரத்தை தானாக ஒழுங்கமைத்தல்',
        'Focus Timer மற்றும் முறையான ஓய்வு நேரங்கள்'
      ]
    }
  }
};

export function getComparisonData(lang = 'si') {
  return COMPARISON_DATA[lang] || COMPARISON_DATA.si;
}
