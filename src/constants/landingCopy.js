export const LANDING_COPY = {
  si: {
    heroBadge: 'විද්‍යාත්මක ක්‍රමවේදයකින් A/L ඉහළම ප්‍රතිඵලයකට',
    heroHeadline: 'හුඟක් පාඩම් කරලත් බලාපොරොත්තු වෙන ලකුණු නැද්ද? ප්‍රශ්නේ තියෙන්නේ ඔබේ මහන්සියේ නෙවෙයි, පාඩම් කරන සිස්ටම් එකේ!',
    heroSubheadline: 'ඊළඟට කරන්න ඕන මොකක්ද, කොයි වෙලාවටද කියලා අපි සැලසුම් කරන්නම්. ඔයා පාඩම් කරන්න විතරක් අවධානය දෙන්න. එකතු වෙලා A/L ගොඩ දාමු!',
    heroPrimaryCta: 'අදම සිස්ටම් එකට එකතු වෙන්න',
    heroSecondaryCta: 'වැඩ කරන හැටි බලන්න (Live Demo)',
    comparisonTitle: 'සාම්ප්‍රදායික ක්‍රමය vs. Smart System ක්‍රමය',
    comparisonSubtitle: 'විභාගයෙන් ඉහළම Z-Score එකක් කරා යන වෙනස තේරුම් ගන්න'
  },
  en: {
    heroBadge: 'Scientifically Engineered for Peak A/L Performance',
    heroHeadline: 'Studying long hours but still missing your target marks? The bottleneck isn’t your effort—it’s your study system!',
    heroSubheadline: 'We optimize what and when you should revise next with spaced repetition algorithms. You simply focus on deep study. Let’s conquer A/L together!',
    heroPrimaryCta: 'Join the System Today',
    heroSecondaryCta: 'Watch How It Works (Live Demo)',
    comparisonTitle: 'Conventional Routine vs. Smart System Approach',
    comparisonSubtitle: 'Understand the competitive edge driving peak Z-Score percentiles'
  },
  ta: {
    heroBadge: 'விஞ்ஞான முறைமை மூலம் A/L உயர் பெறுபேறுகளுக்கு',
    heroHeadline: 'அதிக நேரம் படித்தும் எதிர்பார்த்த புள்ளிகள் கிடைக்கவில்லையா? பிரச்சினை உங்கள் உழைப்பில் அல்ல, படிக்கும் அமைப்பில் உள்ளது!',
    heroSubheadline: 'அடுத்து எப்போது என்ன படிக்க வேண்டும் என்பதை நாம் திட்டமிடுகிறோம். நீங்கள் படிப்பில் மட்டும் கவனம் செலுத்துங்கள். ஒன்றாக A/L இல் வெற்றி பெறுவோம்!',
    heroPrimaryCta: 'இன்றே அமைப்பில் இணையுங்கள்',
    heroSecondaryCta: 'செயற்படும் விதம் (நேரடி டெமோ)',
    comparisonTitle: 'பாரம்பரிய முறை vs. Smart System முறை',
    comparisonSubtitle: 'உயர்ந்த Z-Score ஐ நோக்கி கொண்டு செல்லும் வித்தியாசத்தை உணருங்கள்'
  }
};

export function getLandingCopy(lang = 'si') {
  return LANDING_COPY[lang] || LANDING_COPY.si;
}
