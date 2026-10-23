-- Migration 005: Mathematics Stream Canonical Syllabus & Trilingual Units (Combined Maths & Higher Maths)

-- 1. Alter schema if needed (idempotent)
ALTER TABLE public.subjects ADD COLUMN IF NOT EXISTS tamil TEXT;
ALTER TABLE public.syllabus_units ADD COLUMN IF NOT EXISTS tamil_title TEXT;
ALTER TABLE public.syllabus_subunits 
  ADD COLUMN IF NOT EXISTS sinhala_title TEXT,
  ADD COLUMN IF NOT EXISTS tamil_title TEXT;
ALTER TABLE public.canonical_syllabus
  ADD COLUMN IF NOT EXISTS unit_name_en TEXT,
  ADD COLUMN IF NOT EXISTS unit_name_si TEXT,
  ADD COLUMN IF NOT EXISTS unit_name_ta TEXT,
  ADD COLUMN IF NOT EXISTS sub_lesson_title_en TEXT,
  ADD COLUMN IF NOT EXISTS sub_lesson_title_si TEXT,
  ADD COLUMN IF NOT EXISTS sub_lesson_title_ta TEXT;

-- 2. Insert or update canonical syllabus for Combined Maths and Higher Maths
INSERT INTO public.canonical_syllabus (
  subject, unit_number, unit_name, unit_name_en, unit_name_si, unit_name_ta,
  sub_lesson_code, sub_lesson_title, sub_lesson_title_en, sub_lesson_title_si, sub_lesson_title_ta
) VALUES
('COMB_MATH', 1, 'Unit 1: Real Number System & Functions', 'Real Number System & Functions', 'ඒකකය 01: තාත්වික සංඛ්‍යා පද්ධතිය සහ ශ්‍රිත', 'அலகு 01: மெய் எண் தொகுதியும் சார்புகளும்', '1.1', 'Real numbers, properties and absolute values', 'Real numbers, properties and absolute values', 'තාත්වික සංඛ්‍යා, ගුණ සහ මාපාංකය', 'மெய் எண்கள், இயல்புகள் மற்றும் மட்டுப் பெறுமானங்கள்'),
('COMB_MATH', 1, 'Unit 1: Real Number System & Functions', 'Real Number System & Functions', 'ඒකකය 01: තාත්වික සංඛ්‍යා පද්ධතිය සහ ශ්‍රිත', 'அலகு 01: மெய் எண் தொகுதியும் சார்புகளும்', '1.2', 'Functions, domain, range and composite functions', 'Functions, domain, range and composite functions', 'ශ්‍රිත, ප්‍රදේශය, පරාසය සහ සංයුක්ත ශ්‍රිත', 'சார்புகள், வீச்சம் மற்றும் சார்புகளின் சேர்வை'),
('COMB_MATH', 2, 'Unit 2: Polynomials & Rational Functions', 'Polynomials & Rational Functions', 'ඒකකය 02: බහුපද ශ්‍රිත සහ ආංශික භාග', 'அலகு 02: பல்லுறுப்புச் சார்புகளும் பகுதிப் பின்னங்களும்', '2.1', 'Polynomial division, Remainder Theorem and Factor Theorem', 'Polynomial division, Remainder Theorem and Factor Theorem', 'බහුපද බෙදීම, ශේෂ ප්‍රමේයය සහ සාධක ප්‍රමේයය', 'பல்லுறுப்பு வகுத்தல், மீதித் தேற்றம் மற்றும் காரணித் தேற்றம்'),
('COMB_MATH', 2, 'Unit 2: Polynomials & Rational Functions', 'Polynomials & Rational Functions', 'ඒකකය 02: බහුපද ශ්‍රිත සහ ආංශික භාග', 'அலகு 02: பல்லுறுப்புச் சார்புகளும் பகுதிப் பின்னங்களும்', '2.2', 'Rational functions and resolution into partial fractions', 'Rational functions and resolution into partial fractions', 'ආංශික භාගවලට වෙන් කිරීම', 'விகிதமுறு சார்புகள் மற்றும் பகுதிப் பின்னங்களாகப் பிரித்தல்'),
('COMB_MATH', 3, 'Unit 3: Quadratic Equations & Expressions', 'Quadratic Equations & Expressions', 'ඒකකය 03: වර්ගජ සමීකරණ සහ ප්‍රකාශන', 'அலகு 03: இருபடிச் சமன்பாடுகளும் கோவைகளும்', '3.1', 'Roots and discriminant of quadratic equations', 'Roots and discriminant of quadratic equations', 'වර්ගජ සමීකරණවල මූල සහ විවේචකය', 'இருபடிச் சமன்பாட்டின் மூலங்களும் விவரிக்காட்டியும்'),
('COMB_MATH', 3, 'Unit 3: Quadratic Equations & Expressions', 'Quadratic Equations & Expressions', 'ඒකකය 03: වර්ගජ සමීකරණ සහ ප්‍රකාශන', 'அலகு 03: இருபடிச் சமன்பாடுகளும் கோவைகளும்', '3.2', 'Symmetric functions of roots and sign of quadratic expressions', 'Symmetric functions of roots and sign of quadratic expressions', 'මූලවල සමමිතික ශ්‍රිත සහ වර්ගජ ප්‍රකාශනවල ලකුණ', 'மூலங்களின் சமச்சீர் சார்புகள் மற்றும் குறிகள்'),
('COMB_MATH', 4, 'Unit 4: Inequalities & Modulus Functions', 'Inequalities & Modulus Functions', 'ඒකකය 04: අසමානතා සහ මාපාංක ශ්‍රිත', 'அலகு 04: சமனிலிகளும் மட்டுச் சார்புகளும்', '4.1', 'Linear, rational and quadratic inequalities', 'Linear, rational and quadratic inequalities', 'රේඛීය, භාගික සහ වර්ගජ අසමානතා', 'நேரியல், விகிதமுறு மற்றும் இருபடி சமனிலிகள்'),
('COMB_MATH', 4, 'Unit 4: Inequalities & Modulus Functions', 'Inequalities & Modulus Functions', 'ඒකකය 04: අසමානතා සහ මාපාංක ශ්‍රිත', 'அலகு 04: சமனிலிகளும் மட்டுச் சார்புகளும்', '4.2', 'Modulus inequalities and graphical solutions', 'Modulus inequalities and graphical solutions', 'මාපාංක අසමානතා සහ ප්‍රස්තාරික විසඳුම්', 'மட்டுச் சமனிலிகள் மற்றும் வரைபுத் தீர்வுகள்'),
('COMB_MATH', 5, 'Unit 5: Mathematical Induction & Binomial Theorem', 'Mathematical Induction & Binomial Theorem', 'ඒකකය 05: ගණිත අභ්‍යුහනය සහ ද්විපද ප්‍රමේයය', 'அலகு 05: கணிதத் தொகுத்தறிதலும் ஈருறுப்புத் தேற்றமும்', '5.1', 'Principle of Mathematical Induction', 'Principle of Mathematical Induction', 'ගණිත අභ්‍යුහන මූලධර්මය', 'கணிதத் தொகுத்தறிதல் கொள்கை'),
('COMB_MATH', 5, 'Unit 5: Mathematical Induction & Binomial Theorem', 'Mathematical Induction & Binomial Theorem', 'ඒකකය 05: ගණිත අභ්‍යුහනය සහ ද්විපද ප්‍රමේයය', 'அலகு 05: கணிதத் தொகுத்தறிதலும் ஈருறுப்புத் தேற்றமும்', '5.2', 'Binomial Theorem for positive integers and rational indices', 'Binomial Theorem for positive integers and rational indices', 'ධන නිඛිලමය සහ භාගික දර්ශක සඳහා ද්විපද ප්‍රමේයය', 'நேர் நிறைவெண் மற்றும் விகிதமுறு சுட்டிகளுக்கான ஈருறுப்புத் தேற்றம்'),
('COMB_MATH', 6, 'Unit 6: Sequences and Series', 'Sequences and Series', 'ඒකකය 06: අනුක්‍රම සහ ශ්‍රේණි', 'அலகு 06: தொடரிகளும் தொடர்களும்', '6.1', 'Arithmetic and Geometric progressions', 'Arithmetic and Geometric progressions', 'සමාන්තර සහ ගුණෝත්තර ශ්‍රේණි', 'கூட்டல் மற்றும் பெருக்குத் தொடர்கள்'),
('COMB_MATH', 6, 'Unit 6: Sequences and Series', 'Sequences and Series', 'ඒකකය 06: අනුක්‍රම සහ ශ්‍රේණි', 'அலகு 06: தொடரிகளும் தொடர்களும்', '6.2', 'Method of differences and infinite convergent series', 'Method of differences and infinite convergent series', 'අන්තර ක්‍රමය සහ අනන්ත අභිසාරී ශ්‍රේණි', 'வித்தியாச முறை மற்றும் முடிவிலி ஒருங்கு தொடர்கள்'),
('COMB_MATH', 7, 'Unit 7: Permutations and Combinations', 'Permutations and Combinations', 'ඒකකය 07: සංකරණ සහ සංයෝජන', 'அலகு 07: வரிசைமாற்றங்களும் தெரிவுகளும்', '7.1', 'Fundamental principle of counting and permutations', 'Fundamental principle of counting and permutations', 'මූලික ගණන් කිරීමේ මූලධර්මය සහ සංකරණ', 'எண்ணுகையின் அடிப்படைக் கொள்கை மற்றும் வரிசைமாற்றங்கள்'),
('COMB_MATH', 7, 'Unit 7: Permutations and Combinations', 'Permutations and Combinations', 'ඒකකය 07: සංකරණ සහ සංයෝජන', 'அலகு 07: வரிசைமாற்றங்களும் தெரிவுகளும்', '7.2', 'Combinations and restricted selections', 'Combinations and restricted selections', 'සංයෝජන සහ සීමා සහිත වරණයන්', 'தெரிவுகளும் மட்டுப்படுத்தல்களுடன் கூடிய தெரிவுகளும்'),
('COMB_MATH', 8, 'Unit 8: Matrices and Systems of Linear Equations', 'Matrices and Systems of Linear Equations', 'ඒකකය 08: න්‍යාස සහ ඒකජ සමීකරණ පද්ධති', 'அலகு 08: தாயங்களும் நேரியல் சமன்பாட்டுத் தொகுதிகளும்', '8.1', 'Matrix operations, determinants and inverse matrices', 'Matrix operations, determinants and inverse matrices', 'න්‍යාස කර්ම, නිශ්චායක සහ ප්‍රතිලෝම න්‍යාස', 'தாயச் செய்கைகள், துணிகோவைகள் மற்றும் நேர்மாறு தாயங்கள்'),
('COMB_MATH', 8, 'Unit 8: Matrices and Systems of Linear Equations', 'Matrices and Systems of Linear Equations', 'ඒකකය 08: න්‍යාස සහ ඒකජ සමීකරණ පද්ධති', 'அலகு 08: தாயங்களும் நேரியல் சமன்பாட்டுத் தொகுதிகளும்', '8.2', 'Solving linear equations using matrix algebra', 'Solving linear equations using matrix algebra', 'න්‍යාස මගින් ඒකජ සමීකරණ පද්ධති විසඳීම', 'தாய முறைகளைப் பயன்படுத்தி நேரியல் சமன்பாடுகளைத் தீர்த்தல்'),
('COMB_MATH', 9, 'Unit 9: Complex Numbers', 'Complex Numbers', 'ඒකකය 09: සංකීර්ණ සංඛ්‍යා', 'அலகு 09: சிக்கலெண்கள்', '9.1', 'Complex algebra, modulus, conjugate and argument', 'Complex algebra, modulus, conjugate and argument', 'සංකීර්ණ සංඛ්‍යා වීජ ගණිතය, මාපාංකය සහ විස්තාරය', 'சிக்கலெண் அட்சரகணிதம், மட்டு, இணை மற்றும் வீச்சம்'),
('COMB_MATH', 9, 'Unit 9: Complex Numbers', 'Complex Numbers', 'ඒකකය 09: සංකීර්ණ සංඛ්‍යා', 'அலகு 09: சிக்கலெண்கள்', '9.2', 'Argand diagrams, geometric loci and De Moivre''s Theorem', 'Argand diagrams, geometric loci and De Moivre''s Theorem', 'ආගන්ඩ් සටහන, ජ්‍යාමිතික පථ සහ ඩි මෝවාර් ප්‍රමේයය', 'ஆர்கண்ட் வரிப்படம், ஒழுக்கு மற்றும் டி மோய்வரின் தேற்றம்'),
('COMB_MATH', 10, 'Unit 10: Trigonometric Functions & Identities', 'Trigonometric Functions & Identities', 'ඒකකය 10: ත්‍රිකෝණමිතික ශ්‍රිත සහ සර්වසාම්‍ය', 'அலகு 10: திரிகோணகணிதச் சார்புகளும் முற்றொருமைகளும்', '10.1', 'Compound, multiple angles and product-to-sum identities', 'Compound, multiple angles and product-to-sum identities', 'සංයුක්ත, ගුණිත කෝණ සූත්‍ර සහ ගුණිත-ඓක්‍ය සර්වසාම්‍ය', 'கூட்டு, மடங்குக் கோணச் சூத்திரங்கள் மற்றும் காரணிச் சூத்திரங்கள்'),
('COMB_MATH', 10, 'Unit 10: Trigonometric Functions & Identities', 'Trigonometric Functions & Identities', 'ඒකකය 10: ත්‍රිකෝණමිතික ශ්‍රිත සහ සර්වසාම්‍ය', 'அலகு 10: திரிகோணகணிதச் சார்புகளும் முற்றொருமைகளும்', '10.2', 'General solutions of trigonometric equations and inverse functions', 'General solutions of trigonometric equations and inverse functions', 'ත්‍රිකෝණමිතික සමීකරණවල පොදු විසඳුම් සහ ප්‍රතිලෝම ශ්‍රිත', 'திரிகோணகணிதச் சமன்பாடுகளின் பொதுத் தீர்வுகள் மற்றும் நேர்மாறுச் சார்புகள்'),
('COMB_MATH', 11, 'Unit 11: Limits and Continuity', 'Limits and Continuity', 'ඒකකය 11: සීමා සහ අඛණ්ඩතාව', 'அலகு 11: எல்லைகளும் தொடர்ச்சியும்', '11.1', 'Algebraic limits, limits at infinity and squeeze theorem', 'Algebraic limits, limits at infinity and squeeze theorem', 'වීජීය සීමා, අනන්තයේදී සීමාව සහ සැන්ඩ්විච් ප්‍රමේයය', 'அட்சரகணித எல்லைகள், முடிவிலியில் எல்லை மற்றும் நெருக்குகைத் தேற்றம்'),
('COMB_MATH', 11, 'Unit 11: Limits and Continuity', 'Limits and Continuity', 'ඒකකය 11: සීමා සහ අඛණ්ඩතාව', 'அலகு 11: எல்லைகளும் தொடர்ச்சியும்', '11.2', 'Trigonometric limits and continuity of functions', 'Trigonometric limits and continuity of functions', 'ත්‍රිකෝණමිතික සීමා සහ ශ්‍රිතවල අඛණ්ඩතාව', 'திரிகோணகணித எல்லைகளும் சார்புகளின் தொடர்ச்சியும்'),
('COMB_MATH', 12, 'Unit 12: Differentiation and Applications', 'Differentiation and Applications', 'ඒකකය 12: අවකලනය සහ යෙදවුම්', 'அலகு 12: வகையீடும் அதன் பயன்பாடுகளும்', '12.1', 'First principles, product, quotient and chain rules', 'First principles, product, quotient and chain rules', 'ප්‍රථම මූලධර්මය, ගුණිත, භාග සහ දාම නීති', 'முதற் கொள்கை, பெருக்கல், வகுத்தல் மற்றும் சங்கிலி விதிகள்'),
('COMB_MATH', 12, 'Unit 12: Differentiation and Applications', 'Differentiation and Applications', 'ඒකකය 12: අවකලනය සහ යෙදවුම්', 'அலகு 12: வகையீடும் அதன் பயன்பாடுகளும்', '12.2', 'Tangents, normals, rates of change and curve sketching', 'Tangents, normals, rates of change and curve sketching', 'ස්පර්ශක, අභිලම්භ, විචලන සීඝ්‍රතා සහ ප්‍රස්තාර ඇඳීම', 'தொடலிகள், செவ்வன்கள், மாறல் வீதங்கள் மற்றும் வளைவரை வரைதல்'),
('COMB_MATH', 13, 'Unit 13: Integration and Applications', 'Integration and Applications', 'ඒකකය 13: අනුකලනය සහ යෙදවුම්', 'அலகு 13: தொகையீடும் அதன் பயன்பாடுகளும்', '13.1', 'Standard integrals, substitution and integration by parts', 'Standard integrals, substitution and integration by parts', 'සම්මත අනුකල, ආදේශ ක්‍රමය සහ කොටස් වශයෙන් අනුකලනය', 'திட்ட தொகையீடுகள், பிரதியீட்டு முறை மற்றும் பகுதிப் பகுதியான தொகையீடு'),
('COMB_MATH', 13, 'Unit 13: Integration and Applications', 'Integration and Applications', 'ඒකකය 13: අනුකලනය සහ යෙදවුම්', 'அலகு 13: தொகையீடும் அதன் பயன்பாடுகளும்', '13.2', 'Definite integrals, area under curves and solids of revolution', 'Definite integrals, area under curves and solids of revolution', 'නියත අනුකල, ක්ෂේත්‍රඵල සෙවීම සහ පරිභ්‍රමණ ඝන වස්තුවල පරිමාව', 'குறித்த தொகையீடுகள், வளைவரையின் கீழான பரப்பளவு மற்றும் சுழற்சித் திண்மக் கனவளவு'),
('COMB_MATH', 14, 'Unit 14: Analytical Geometry: The Straight Line', 'Analytical Geometry: The Straight Line', 'ඒකකය 14: විශ්ලේෂී ජ්‍යාමිතිය: සරල රේඛාව', 'அலகு 14: பகுமுறை வடிவகணிதம்: நேர்கோடு', '14.1', 'Forms of line equations and angle between two lines', 'Forms of line equations and angle between two lines', 'සරල රේඛා සමීකරණ ආකාර සහ රේඛා දෙකක් අතර කෝණය', 'நேர்கோட்டுச் சமன்பாட்டு வடிவங்கள் மற்றும் இரு கோடுகளுக்கு இடைப்பட்ட கோணம்'),
('COMB_MATH', 14, 'Unit 14: Analytical Geometry: The Straight Line', 'Analytical Geometry: The Straight Line', 'ඒකකය 14: විශ්ලේෂී ජ්‍යාමිතිය: සරල රේඛාව', 'அலகு 14: பகுமுறை வடிவகணிதம்: நேர்கோடு', '14.2', 'Perpendicular distance, angle bisectors and concurrency', 'Perpendicular distance, angle bisectors and concurrency', 'ලම්බ දුර, කෝණ සමච්ඡේදක සහ සමගාමී රේඛා', 'செங்குத்துத் தூரம், கோண இருகூறாக்கிகள் மற்றும் ஒருபுள்ளிச் சந்திப்பு'),
('COMB_MATH', 15, 'Unit 15: Analytical Geometry: The Circle', 'Analytical Geometry: The Circle', 'ඒකකය 15: විශ්ලේෂී ජ්‍යාමිතිය: වෘත්තය', 'அலகு 15: பகுமுறை வடிவகணிதம்: வட்டம்', '15.1', 'Standard equation, center, radius and parametric form', 'Standard equation, center, radius and parametric form', 'වෘත්තයේ සම්මත සමීකරණය, කේන්ද්‍රය, අරය සහ පරාමිතික ආකාරය', 'வட்டத்தின் திட்டச் சமன்பாடு, மையம், ஆரை மற்றும் பரமான வடிவங்கள்'),
('COMB_MATH', 15, 'Unit 15: Analytical Geometry: The Circle', 'Analytical Geometry: The Circle', 'ඒකකය 15: විශ්ලේෂී ජ්‍යාමිතිය: වෘත්තය', 'அலகு 15: பகுமுறை வடிவகணிதம்: வட்டம்', '15.2', 'Tangents, normals, length of tangents and orthogonal circles', 'Tangents, normals, length of tangents and orthogonal circles', 'ස්පර්ශක, අභිලම්භ, ස්පර්ශකවල දිග සහ ලම්බක වෘත්ත', 'தொடலிகள், செவ்வன்கள், தொடலியின் நீளம் மற்றும் செங்குத்து வட்டங்கள்'),
('COMB_MATH', 16, 'Unit 16: Vectors and Vector Algebra', 'Vectors and Vector Algebra', 'ඒකකය 16: දෛශික සහ දෛශික වීජ ගණිතය', 'அலகு 16: காவிகளும் காவி அட்சரகணிதமும்', '16.1', 'Vector operations, scalar product and unit vectors', 'Vector operations, scalar product and unit vectors', 'දෛශික කර්ම, අදිශ ගුණිතය සහ ඒකක දෛශික', 'காவிச் செய்கைகள், திசையிலிப் பெருக்கம் மற்றும் அலகு காவிகள்'),
('COMB_MATH', 16, 'Unit 16: Vectors and Vector Algebra', 'Vectors and Vector Algebra', 'ඒකකය 16: දෛශික සහ දෛශික වීජ ගණිතය', 'அலகு 16: காவிகளும் காவி அட்சரகணிதமும்', '16.2', 'Position vectors and geometrical theorems using vectors', 'Position vectors and geometrical theorems using vectors', 'පිහිටුම් දෛශික සහ දෛශික මගින් ජ්‍යාමිතික ප්‍රමේයයන්', 'அமைவுக் காவிகள் மற்றும் காவிகள் மூலமான வடிவகணிதத் தேற்றங்கள்'),
('COMB_MATH', 17, 'Unit 17: Coplanar Forces Acting on a Particle', 'Coplanar Forces Acting on a Particle', 'ඒකකය 17: අංශුවක් මත ක්‍රියා කරන ඒකතල බල', 'அலகு 17: துணிக்கையொன்றில் தொழிற்படும் ஒருதள விசைகள்', '17.1', 'Resultant of forces, Triangle and Polygon of forces', 'Resultant of forces, Triangle and Polygon of forces', 'බලවල සම්ප්‍රයුක්තය, බල ත්‍රිකෝණය සහ බල බහුඅස්‍රය', 'விசைகளின் விளையுள், விசை முக்கோணம் மற்றும் விசைப் பல்கோணி'),
('COMB_MATH', 17, 'Unit 17: Coplanar Forces Acting on a Particle', 'Coplanar Forces Acting on a Particle', 'ඒකකය 17: අංශුවක් මත ක්‍රියා කරන ඒකතල බල', 'அலகு 17: துணிக்கையொன்றில் தொழிற்படும் ஒருதள விசைகள்', '17.2', 'Resolution of forces, particle equilibrium and Lami''s Theorem', 'Resolution of forces, particle equilibrium and Lami''s Theorem', 'බල සංරචක සෙවීම, අංශුවක සමතුලිතතාව සහ ලැමීගේ ප්‍රමේයය', 'விசைகளின் பிரிப்பு, துணிக்கையின் சமநிலை மற்றும் லாமியின் தேற்றம்'),
('COMB_MATH', 18, 'Unit 18: Equilibrium of Rigid Bodies & Moments', 'Equilibrium of Rigid Bodies & Moments', 'ඒකකය 18: දෘඪ වස්තුවල සමතුලිතතාව සහ ඝූර්ණ', 'அலகு 18: திண்மப்பொருள்களின் சமநிலையும் திருப்புத்திறன்களும்', '18.1', 'Moment of a force, couples and Varignon''s Theorem', 'Moment of a force, couples and Varignon''s Theorem', 'බලයක ඝූර්ණය, යුග්ම සහ වැරිග්නන්ගේ ප්‍රමේයය', 'விசையொன்றின் திருப்புத்திறன், சோடிகள் மற்றும் வரிக்னனின் தேற்றம்'),
('COMB_MATH', 18, 'Unit 18: Equilibrium of Rigid Bodies & Moments', 'Equilibrium of Rigid Bodies & Moments', 'ඒකකය 18: දෘඪ වස්තුවල සමතුලිතතාව සහ ඝූර්ණ', 'அலகு 18: திண்மப்பொருள்களின் சமநிலையும் திருப்புத்திறன்களும்', '18.2', 'Equilibrium conditions for rigid bodies under coplanar forces', 'Equilibrium conditions for rigid bodies under coplanar forces', 'ඒකතල බල පද්ධතියක් යටතේ දෘඪ වස්තුවක සමතුලිතතා කොන්දේසි', 'ஒருதள விசைகளின் கீழ் திண்மப்பொருளின் சமநிலைக்கான நிபந்தனைகள்'),
('COMB_MATH', 19, 'Unit 19: Friction', 'Friction', 'ඒකකය 19: ඝර්ෂණය', 'அலகு 19: உராய்வு', '19.1', 'Laws of friction, coefficient and angle of friction', 'Laws of friction, coefficient and angle of friction', 'ඝර්ෂණ නියම, ඝර්ෂණ සංගුණකය සහ ඝර්ෂණ කෝණය', 'உராய்வு விதிகள், உராய்வுக் குணகம் மற்றும் உராய்வுக் கோணம்'),
('COMB_MATH', 19, 'Unit 19: Friction', 'Friction', 'ඒකකය 19: ඝර්ෂණය', 'அலகு 19: உராய்வு', '19.2', 'Equilibrium on rough horizontal and inclined planes', 'Equilibrium on rough horizontal and inclined planes', 'රළු තිරස් සහ ආනත තල මත වස්තුවල සමතුලිතතාව', 'உராய்வுள்ள கிடை மற்றும் சாய் தளங்களில் பொருள்களின் சமநிலை'),
('COMB_MATH', 20, 'Unit 20: Centre of Gravity', 'Centre of Gravity', 'ඒකකය 20: ගුරුත්ව කේන්ද්‍රය', 'அலகு 20: ஈர்ப்பு மையம்', '20.1', 'Centre of gravity of wires, rods and uniform plane laminae', 'Centre of gravity of wires, rods and uniform plane laminae', 'කම්බි, දඬු සහ ඒකාකාර තලිකාවල ගුරුත්ව කේන්ද්‍රය', 'கம்பிகள், தடிகள் மற்றும் சீரான தகடுகளின் ஈர்ப்பு மையம்'),
('COMB_MATH', 20, 'Unit 20: Centre of Gravity', 'Centre of Gravity', 'ඒකකය 20: ගුරුත්ව කේන්ද්‍රය', 'அலகு 20: ஈர்ப்பு மையம்', '20.2', 'Centre of gravity of composite bodies and suspended objects', 'Centre of gravity of composite bodies and suspended objects', 'සංයුක්ත වස්තුවල ගුරුත්ව කේන්ද්‍රය සහ නිදහසේ එල්ලා ඇති වස්තු', 'கூட்டமைக்கப்பட்ட பொருள்கள் மற்றும் தொங்கவிடப்பட்ட பொருள்களின் ஈர்ப்பு மையம்'),
('COMB_MATH', 21, 'Unit 21: Frameworks / Jointed Rods', 'Frameworks / Jointed Rods', 'ඒකකය 21: සන්ධිගත සැකිලි රාමු', 'அலகு 21: மூட்டுச் சட்டகங்கள்', '21.1', 'Light pin-jointed frameworks, tension and thrust', 'Light pin-jointed frameworks, tension and thrust', 'සැහැල්ලු සන්ධිගත සැකිලි රාමු, ආතතිය සහ තෙරපුම', 'இலேசான மூட்டுச் சட்டகங்கள், இழுவை மற்றும் தள்ளுகை'),
('COMB_MATH', 21, 'Unit 21: Frameworks / Jointed Rods', 'Frameworks / Jointed Rods', 'ඒකකය 21: සන්ධිගත සැකිලි රාමු', 'அலகு 21: மூட்டுச் சட்டகங்கள்', '21.2', 'Method of joints and Bow''s notation', 'Method of joints and Bow''s notation', 'සන්ධි ක්‍රමය සහ බෝ සංකේතනය', 'மூட்டு முறை மற்றும் போவின் குறியீட்டு முறை'),
('COMB_MATH', 22, 'Unit 22: Rectilinear Motion & Graphs', 'Rectilinear Motion & Graphs', 'ඒකකය 22: සරල රේඛීය චලිතය සහ ප්‍රස්තාර', 'அலகு 22: நேர்கோட்டு இயக்கமும் வரைபுகளும்', '22.1', 'Uniform and variable accelerated rectilinear motion', 'Uniform and variable accelerated rectilinear motion', 'ඒකාකාර සහ විචල්‍ය ත්වරණය යටතේ සරල රේඛීය චලිතය', 'சீரான மற்றும் மாறும் ஆர்முடுகலின் கீழான நேர்கோட்டு இயக்கம்'),
('COMB_MATH', 22, 'Unit 22: Rectilinear Motion & Graphs', 'Rectilinear Motion & Graphs', 'ඒකකය 22: සරල රේඛීය චලිතය සහ ප්‍රස්තාර', 'அலகு 22: நேர்கோட்டு இயக்கமும் வரைபுகளும்', '22.2', 'Velocity-time graphs and vertical motion under gravity', 'Velocity-time graphs and vertical motion under gravity', 'ප්‍රවේග-කාල ප්‍රස්තාර සහ ගුරුත්වය යටතේ සිරස් චලිතය', 'திசைவேக-நேர வரைபுகள் மற்றும் ஈர்ப்பின் கீழான நிலைக்குத்து இயக்கம்'),
('COMB_MATH', 23, 'Unit 23: Relative Velocity', 'Relative Velocity', 'ඒකකය 23: සාපේක්ෂ ප්‍රවේගය', 'அலகு 23: சார்புத் திசைவேகம்', '23.1', 'Concept of relative velocity and vector triangles', 'Concept of relative velocity and vector triangles', 'සාපේක්ෂ ප්‍රවේග සංකල්පය සහ දෛශික ත්‍රිකෝණ', 'சார்புத் திசைவேகக் கருத்து மற்றும் காவி முக்கோணங்கள்'),
('COMB_MATH', 23, 'Unit 23: Relative Velocity', 'Relative Velocity', 'ඒකකය 23: සාපේක්ෂ ප්‍රවේගය', 'அலகு 23: சார்புத் திசைவேகம்', '23.2', 'Shortest distance, interception and river-crossing problems', 'Shortest distance, interception and river-crossing problems', 'කෙටිම දුර, අවහිරතා සහ ගංගා තරණය ගැටලු', 'குறைந்த தூரம், இடைமறித்தல் மற்றும் ஆற்றுப்பாய்ச்சல் பிரச்சினைகள்'),
('COMB_MATH', 24, 'Unit 24: Projectiles', 'Projectiles', 'ඒකකය 24: ප්‍රක්ෂිප්ත', 'அலகு 24: எறியங்கள்', '24.1', 'Trajectory, maximum height, flight time and horizontal range', 'Trajectory, maximum height, flight time and horizontal range', 'පථය, උපරිම උස, පියාසර කාලය සහ තිරස් පරාසය', 'எறியப்பாதை, அதிஉயர் உயரம், பறப்பு நேரம் மற்றும் கிடை வீச்சு'),
('COMB_MATH', 24, 'Unit 24: Projectiles', 'Projectiles', 'ඒකකය 24: ප්‍රක්ෂිප්ත', 'அலகு 24: எறியங்கள்', '24.2', 'Equation of path and projection on an inclined plane', 'Equation of path and projection on an inclined plane', 'පථ සමීකරණය සහ ආනත තල මත ප්‍රක්ෂිප්තය', 'பாதைச் சமன்பாடு மற்றும் சாய் தளத்தில் எறியப்படுதல்'),
('COMB_MATH', 25, 'Unit 25: Newton''s Laws and Connected Particles', 'Newton''s Laws and Connected Particles', 'ඒකකය 25: නිව්ටන් නියම සහ සම්බන්ධිත අංශු', 'அலகு 25: நியூட்டனின் விதிகளும் இணைக்கப்பட்ட துணிக்கைகளும்', '25.1', 'Newton''s laws of motion and dynamic equations', 'Newton''s laws of motion and dynamic equations', 'නිව්ටන්ගේ චලිත නියම සහ ගතික සමීකරණ', 'நியூட்டனின் இயக்க விதிகளும் இயக்கவியல் சமன்பாடுகளும்'),
('COMB_MATH', 25, 'Unit 25: Newton''s Laws and Connected Particles', 'Newton''s Laws and Connected Particles', 'ඒකකය 25: නිව්ටන් නියම සහ සම්බන්ධිත අංශු', 'அலகு 25: நியூட்டனின் விதிகளும் இணைக்கப்பட்ட துணிக்கைகளும்', '25.2', 'Motion of connected particles with strings and pulleys', 'Motion of connected particles with strings and pulleys', 'තන්තු සහ කප්පි සහිත සම්බන්ධිත අංශු චලිතය', 'இழைகள் மற்றும் கப்பிகளைக் கொண்ட இணைக்கப்பட்ட துணிக்கை இயக்கம்'),
('COMB_MATH', 26, 'Unit 26: Work, Energy and Power', 'Work, Energy and Power', 'ඒකකය 26: කාර්යය, ශක්තිය සහ ජවය', 'அலகு 26: வேலை, சக்தியும் வலுவும்', '26.1', 'Work done, kinetic energy and gravitational potential energy', 'Work done, kinetic energy and gravitational potential energy', 'කළ කාර්යය, චාලක ශක්තිය සහ ගුරුත්වාකර්ෂණ විභව ශක්තිය', 'செய்த வேலை, இயக்க சக்தி மற்றும் ஈர்ப்பு அழுத்த சக்தி'),
('COMB_MATH', 26, 'Unit 26: Work, Energy and Power', 'Work, Energy and Power', 'ඒකකය 26: කාර්යය, ශක්තිය සහ ජවය', 'அலகு 26: வேலை, சக்தியும் வலுவும்', '26.2', 'Conservation of energy, work-energy theorem and power', 'Conservation of energy, work-energy theorem and power', 'ශක්ති සංස්ථිතිය, කාර්ය-ශක්ති ප්‍රමේයය සහ ජවය', 'சக்திக் காப்பு, வேலை-சக்தித் தேற்றம் மற்றும் வலு'),
('COMB_MATH', 27, 'Unit 27: Impulse, Momentum and Direct Collisions', 'Impulse, Momentum and Direct Collisions', 'ඒකකය 27: ආවේගය, ගම්‍යතාව සහ සෘජු ගැටුම්', 'அலகு 27: கணத்தாக்கு, உந்தமும் நேர் மோதல்களும்', '27.1', 'Linear impulse and principle of conservation of momentum', 'Linear impulse and principle of conservation of momentum', 'රේඛීය ආවේගය සහ ගම්‍යතා සංස්ථිති මූලධර්මය', 'நேர்கோட்டு உந்தம் மற்றும் உந்தக் காப்புக் கொள்கை'),
('COMB_MATH', 27, 'Unit 27: Impulse, Momentum and Direct Collisions', 'Impulse, Momentum and Direct Collisions', 'ඒකකය 27: ආවේගය, ගම්‍යතාව සහ සෘජු ගැටුම්', 'அலகு 27: கணத்தாக்கு, உந்தமும் நேர் மோதல்களும்', '27.2', 'Newton''s experimental law of restitution and collisions', 'Newton''s experimental law of restitution and collisions', 'නිව්ටන්ගේ ප්‍රත්‍යාස්ථතා නියමය සහ සෘජු ගැටුම්', 'நியூட்டனின் மீளமைப்புக் குணக விதி மற்றும் நேர் மோதல்கள்'),
('COMB_MATH', 28, 'Unit 28: Probability & Statistics', 'Probability & Statistics', 'ඒකකය 28: සම්භාවිතාව සහ සංඛ්‍යානය', 'அலகு 28: நிகழ்தகவும் புள்ளிவிவரவியலும்', '28.1', 'Sample space, addition and multiplication laws of probability', 'Sample space, addition and multiplication laws of probability', 'නියැදි අවකාශය, සම්භාවිතාවේ එකතු සහ ගුණ කිරීමේ නීති', 'கூறுவெளி, நிகழ்தகவின் கூட்டல் மற்றும் பெருக்கல் விதிகள்'),
('COMB_MATH', 28, 'Unit 28: Probability & Statistics', 'Probability & Statistics', 'ඒකකය 28: සම්භාවිතාව සහ සංඛ්‍යානය', 'அலகு 28: நிகழ்தகவும் புள்ளிவிவரவியலும்', '28.2', 'Conditional probability, independence and discrete distributions', 'Conditional probability, independence and discrete distributions', 'සප්‍රතිබන්ධ සම්භාවිතාව, ස්වායත්ත සිදුවීම් සහ විවික්ත ව්‍යාප්ති', 'நிபந்தனை நிகழ்தகவு, சார்பற்ற நிகழ்வுகள் மற்றும் தனித்த பரவல்கள்'),
('HIGH_MATH', 1, 'Unit 1: Set Theory, Logic & Boolean Algebra', 'Set Theory, Logic & Boolean Algebra', 'ඒකකය 01: කුලක න්‍යාය, තර්කනය සහ බූලීය වීජ ගණිතය', 'அலகு 01: தொடைக்கோட்பாடு, அளவையியல் மற்றும் பூலியன் அட்சரகணிதம்', '1.1', 'Sets, relations, equivalence relations and truth tables', 'Sets, relations, equivalence relations and truth tables', 'කුලක, සම්බන්ධතා, තුල්‍යතා සම්බන්ධතා සහ සත්‍යතා වගු', 'தொடைகள், தொடர்புகள், சமான தொடர்புகள் மற்றும் மெய்மை அட்டவணைகள்'),
('HIGH_MATH', 1, 'Unit 1: Set Theory, Logic & Boolean Algebra', 'Set Theory, Logic & Boolean Algebra', 'ඒකකය 01: කුලක න්‍යාය, තර්කනය සහ බූලීය වීජ ගණිතය', 'அலகு 01: தொடைக்கோட்பாடு, அளவையியல் மற்றும் பூலியன் அட்சரகணிதம்', '1.2', 'Boolean algebra, logic gates and circuit simplification', 'Boolean algebra, logic gates and circuit simplification', 'බූලීය වීජ ගණිතය, තර්ක ද්වාර සහ පරිපථ සරල කිරීම', 'பூலியன் அட்சரகணிதம், தருக்க வாயில்கள் மற்றும் சுற்றுச் சுருக்கல்'),
('HIGH_MATH', 2, 'Unit 2: Group Theory & Abstract Algebra', 'Group Theory & Abstract Algebra', 'ඒකකය 02: කාණ්ඩ න්‍යාය සහ වියුක්ත වීජ ගණිතය', 'அலகு 02: குலக்கோட்பாடும் அருவ அட்சரகணிதமும்', '2.1', 'Binary operations, groups, subgroups and cyclic groups', 'Binary operations, groups, subgroups and cyclic groups', 'ද්විමය කර්ම, කාණ්ඩ, උපකාණ්ඩ සහ චක්‍රීය කාණ්ඩ', 'ஈருறுப்புச் செய்கைகள், குலங்கள், உபகுலங்கள் மற்றும் வட்டக் குலங்கள்'),
('HIGH_MATH', 2, 'Unit 2: Group Theory & Abstract Algebra', 'Group Theory & Abstract Algebra', 'ඒකකය 02: කාණ්ඩ න්‍යාය සහ වියුක්ත වීජ ගණිතය', 'அலகு 02: குலக்கோட்பாடும் அருவ அட்சரகணிதமும்', '2.2', 'Cosets, Lagrange''s Theorem and group homomorphisms', 'Cosets, Lagrange''s Theorem and group homomorphisms', 'සහකුලක, ලග්‍රාන්ජ් ප්‍රමේයය සහ කාණ්ඩ සමරූපතා', 'இணைக்கணங்கள், லக்ராஞ்சின் தேற்றம் மற்றும் குல ஓரின அமைப்புகள்'),
('HIGH_MATH', 3, 'Unit 3: Vector Spaces & Linear Transformations', 'Vector Spaces & Linear Transformations', 'ඒකකය 03: දෛශික අවකාශ සහ රේඛීය පරිණාමන', 'அலகு 03: காவி வெளிகளும் நேரியல் உருமாற்றங்களும்', '3.1', 'Vector spaces, subspaces, linear independence and basis', 'Vector spaces, subspaces, linear independence and basis', 'දෛශික අවකාශ, උපඅවකාශ, රේඛීය ස්වායත්තතාව සහ පාදම', 'காவி வெளிகள், உபவெளிகள், நேரியல் சார்பின்மை மற்றும் அடிப்படை'),
('HIGH_MATH', 3, 'Unit 3: Vector Spaces & Linear Transformations', 'Vector Spaces & Linear Transformations', 'ඒකකය 03: දෛශික අවකාශ සහ රේඛීය පරිණාමන', 'அலகு 03: காவி வெளிகளும் நேரியல் உருமாற்றங்களும்', '3.2', 'Linear transformations, rank-nullity theorem and eigenvalues', 'Linear transformations, rank-nullity theorem and eigenvalues', 'රේඛීය පරිණාමන, පරාස-ශුන්‍යතා ප්‍රමේයය සහ අයිගන් අගයන්', 'நேரியல் உருமாற்றங்கள், தரம்-வெறுமைத் தேற்றம் மற்றும் தனித்துவ பெறுமானங்கள்'),
('HIGH_MATH', 4, 'Unit 4: Hyperbolic Functions', 'Hyperbolic Functions', 'ඒකකය 04: හයිපර්බෝලීය ශ්‍රිත', 'அலகு 04: அதிபரவளையச் சார்புகள்', '4.1', 'Definitions, identities and graphs of hyperbolic functions', 'Definitions, identities and graphs of hyperbolic functions', 'හයිපර්බෝලීය ශ්‍රිතවල අර්ථ දැක්වීම්, සර්වසාම්‍ය සහ ප්‍රස්තාර', 'அதிபரவளையச் சார்புகளின் வரைவிலக்கணங்கள், முற்றொருமைகள் மற்றும் வரைபுகள்'),
('HIGH_MATH', 4, 'Unit 4: Hyperbolic Functions', 'Hyperbolic Functions', 'ඒකකය 04: හයිපර්බෝලීය ශ්‍රිත', 'அலகு 04: அதிபரவளையச் சார்புகள்', '4.2', 'Inverse hyperbolic functions and logarithmic forms', 'Inverse hyperbolic functions and logarithmic forms', 'ප්‍රතිලෝම හයිපර්බෝලීය ශ්‍රිත සහ ලඝුගණක ආකාර', 'நேர்மாறு அதிபரவளையச் சார்புகள் மற்றும் மடக்கை வடிவங்கள்'),
('HIGH_MATH', 5, 'Unit 5: Differential Equations', 'Differential Equations', 'ඒකකය 05: අවකල සමීකරණ', 'அலகு 05: வகையீட்டுச் சமன்பாடுகள்', '5.1', 'First order separable, homogeneous and linear differential equations', 'First order separable, homogeneous and linear differential equations', 'පළමු පෙළ වියෝජ්‍ය, සමඝාත සහ රේඛීය අවකල සමීකරණ', 'முதலாம் வரிசை பிரிபடத்தக்க, சமபடித்தான மற்றும் நேரியல் வகையீட்டுச் சமன்பாடுகள்'),
('HIGH_MATH', 5, 'Unit 5: Differential Equations', 'Differential Equations', 'ඒකකය 05: අවකල සමීකරණ', 'அலகு 05: வகையீட்டுச் சமன்பாடுகள்', '5.2', 'Second order linear differential equations with constant coefficients', 'Second order linear differential equations with constant coefficients', 'නියත සංගුණක සහිත දෙවන පෙළ රේඛීය අවකල සමීකරණ', 'மாறாக் குணகங்களைக் கொண்ட இரண்டாம் வரிசை நேரியல் வகையீட்டுச் சமன்பாடுகள்'),
('HIGH_MATH', 6, 'Unit 6: Multivariable Calculus', 'Multivariable Calculus', 'ඒකකය 06: බහුවිචල්‍ය කලනය', 'அலகு 06: பலமாறி நுண்கணிதம்', '6.1', 'Functions of two variables and partial differentiation', 'Functions of two variables and partial differentiation', 'විචල්‍ය දෙකෙහි ශ්‍රිත සහ ආංශික අවකලනය', 'இரு மாறிகளின் சார்புகள் மற்றும் பகுதி வகையீடு'),
('HIGH_MATH', 6, 'Unit 6: Multivariable Calculus', 'Multivariable Calculus', 'ඒකකය 06: බහුවිචල්‍ය කලනය', 'அலகு 06: பலமாறி நுண்கணிதம்', '6.2', 'Total differential, chain rule and double integrals', 'Total differential, chain rule and double integrals', 'සම්පූර්ණ අවකලය, දාම නීතිය සහ ද්විත්ව අනුකල', 'மொத்த வகையீடு, சங்கிலி விதி மற்றும் இரட்டைத் தொகையீடுகள்'),
('HIGH_MATH', 7, 'Unit 7: Circular Motion & Simple Harmonic Motion', 'Circular Motion & Simple Harmonic Motion', 'ඒකකය 07: වෘත්ත චලිතය සහ සරල අනුවර්තී චලිතය', 'அலகு 07: வட்ட இயக்கமும் எளிய சீரிசை இயக்கமும்', '7.1', 'Horizontal and vertical circular motion', 'Horizontal and vertical circular motion', 'තිරස් සහ සිරස් වෘත්ත චලිතය', 'கிடை மற்றும் நிலைக்குத்து வட்ட இயக்கம்'),
('HIGH_MATH', 7, 'Unit 7: Circular Motion & Simple Harmonic Motion', 'Circular Motion & Simple Harmonic Motion', 'ඒකකය 07: වෘත්ත චලිතය සහ සරල අනුවර්තී චලිතය', 'அலகு 07: வட்ட இயக்கமும் எளிய சீரிசை இயக்கமும்', '7.2', 'Simple harmonic motion, springs and simple pendulums', 'Simple harmonic motion, springs and simple pendulums', 'සරල අනුවර්තී චලිතය, දුනු සහ සරල අවලම්බ', 'எளிய சீரிசை இயக்கம், சுருளி வில்கள் மற்றும் எளிய ஊசல்கள்'),
('HIGH_MATH', 8, 'Unit 8: Rotation of Rigid Bodies & Moment of Inertia', 'Rotation of Rigid Bodies & Moment of Inertia', 'ඒකකය 08: දෘඪ වස්තුවල භ්‍රමණය සහ අවස්ථිති ඝූර්ණය', 'அலகு 08: திண்மப்பொருள்களின் சுழற்சியும் சடத்துவத் திருப்புத்திறனும்', '8.1', 'Calculation of moment of inertia of standard bodies', 'Calculation of moment of inertia of standard bodies', 'සම්මත වස්තුවල අවස්ථිති ඝූර්ණය ගණනය කිරීම', 'திட்டப் பொருள்களின் சடத்துவத் திருப்புத்திறனைக் கணித்தல்'),
('HIGH_MATH', 8, 'Unit 8: Rotation of Rigid Bodies & Moment of Inertia', 'Rotation of Rigid Bodies & Moment of Inertia', 'ඒකකය 08: දෘඪ වස්තුවල භ්‍රමණය සහ අවස්ථිති ඝූර්ණය', 'அலகு 08: திண்மப்பொருள்களின் சுழற்சியும் சடத்துவத் திருப்புத்திறனும்', '8.2', 'Angular momentum, rotational kinetic energy and dynamic equations', 'Angular momentum, rotational kinetic energy and dynamic equations', 'කෝණික ගම්‍යතාව, භ්‍රමණ චාලක ශක්තිය සහ භ්‍රමණ ගතික සමීකරණ', 'கோண உந்தம், சுழற்சி இயக்க சக்தி மற்றும் இயக்கவியல் சமன்பாடுகள்'),
('HIGH_MATH', 9, 'Unit 9: Hydrostatics & Fluid Thrust', 'Hydrostatics & Fluid Thrust', 'ඒකකය 09: ජලස්ථිතිකය සහ ද්‍රව තෙරපුම', 'அலகு 09: பாய்மநிலையியலும் பாய்ம உதைப்பும்', '9.1', 'Fluid pressure at a depth and thrust on plane surfaces', 'Fluid pressure at a depth and thrust on plane surfaces', 'ගැඹුරත් සමග ද්‍රව පීඩනය සහ තල පෘෂ්ඨ මත තෙරපුම', 'ஆழத்துடன் பாய்ம அமுக்கம் மற்றும் தள மேற்பரப்புகளில் உதைப்பு'),
('HIGH_MATH', 9, 'Unit 9: Hydrostatics & Fluid Thrust', 'Hydrostatics & Fluid Thrust', 'ඒකකය 09: ජලස්ථිතිකය සහ ද්‍රව තෙරපුම', 'அலகு 09: பாய்மநிலையியலும் பாய்ம உதைப்பும்', '9.2', 'Archimedes'' principle, buoyancy and center of pressure', 'Archimedes'' principle, buoyancy and center of pressure', 'ආකිමිඩීස් මූලධර්මය, උඩුකුරු තෙරපුම සහ පීඩන කේන්ද්‍රය', 'ஆக்கிமிடிசின் கொள்கை, மிதத்தல் மற்றும் அமுக்க மையம்'),
('HIGH_MATH', 10, 'Unit 10: Continuous Probability & Joint Distributions', 'Continuous Probability & Joint Distributions', 'ඒකකය 10: සන්තතික සම්භාවිතාව සහ සංයුක්ත ව්‍යාප්ති', 'அலகு 10: தொடர் நிகழ்தகவும் கூட்டுப் பரவல்களும்', '10.1', 'Continuous random variables, probability density and normal distribution', 'Continuous random variables, probability density and normal distribution', 'සන්තතික සසම්භාවී විචල්‍ය, සම්භාවිතා ඝනත්ව ශ්‍රිතය සහ ප්‍රමත ව්‍යාප්තිය', 'தொடர் எழுமாற்று மாறிகள், நிகழ்தகவு அடர்த்திச் சார்பு மற்றும் இயல்நிலைப் பரவல்'),
('HIGH_MATH', 10, 'Unit 10: Continuous Probability & Joint Distributions', 'Continuous Probability & Joint Distributions', 'ඒකකය 10: සන්තතික සම්භාවිතාව සහ සංයුක්ත ව්‍යාප්ති', 'அலகு 10: தொடர் நிகழ்தகவும் கூட்டுப் பரவல்களும்', '10.2', 'Joint distributions, covariance and correlation', 'Joint distributions, covariance and correlation', 'සංයුක්ත ව්‍යාප්ති, සහවිචල්‍යතාව සහ සහසම්බන්ධය', 'கூட்டுப் பரவல்கள், இணைமாறுபாட்டளவு மற்றும் ஒட்டுறவு')
ON CONFLICT (subject, sub_lesson_code) DO UPDATE SET
  unit_number = EXCLUDED.unit_number,
  unit_name = EXCLUDED.unit_name,
  unit_name_en = EXCLUDED.unit_name_en,
  unit_name_si = EXCLUDED.unit_name_si,
  unit_name_ta = EXCLUDED.unit_name_ta,
  sub_lesson_title = EXCLUDED.sub_lesson_title,
  sub_lesson_title_en = EXCLUDED.sub_lesson_title_en,
  sub_lesson_title_si = EXCLUDED.sub_lesson_title_si,
  sub_lesson_title_ta = EXCLUDED.sub_lesson_title_ta;

-- 3. Comprehensive helper function to seed user syllabus from canonical data with trilingual support
CREATE OR REPLACE FUNCTION public.seed_user_syllabus_from_canonical(p_user_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_sub RECORD;
  v_unit RECORD;
  v_unit_id UUID;
  v_canon_sub TEXT;
BEGIN
  FOR v_sub IN SELECT id, slug, code, name FROM public.subjects WHERE user_id = p_user_id LOOP
    -- Determine canonical subject key
    v_canon_sub := NULL;
    IF UPPER(v_sub.code) IN ('COMB_MATH', 'MATH', '12', 'AL-004', 'SUBJ-004') 
       OR v_sub.slug ILIKE '%comb%math%' 
       OR (v_sub.slug ILIKE '%math%' AND v_sub.slug NOT ILIKE '%high%') 
       OR v_sub.name ILIKE '%combined mathematics%' 
       OR (v_sub.name ILIKE '%mathematics%' AND v_sub.name NOT ILIKE '%higher%') THEN
      v_canon_sub := 'COMB_MATH';
    ELSIF UPPER(v_sub.code) IN ('HIGH_MATH', '13', 'AL-021', 'SUBJ-021') 
       OR v_sub.slug ILIKE '%high%math%' 
       OR v_sub.name ILIKE '%higher mathematics%' THEN
      v_canon_sub := 'HIGH_MATH';
    ELSIF UPPER(v_sub.code) IN ('BIO', '09', 'AL-001', 'SUBJ-001') OR v_sub.slug ILIKE '%bio%' OR v_sub.name ILIKE '%biology%' THEN
      v_canon_sub := 'BIO';
    ELSIF UPPER(v_sub.code) IN ('CHEM', '10', 'AL-002', 'SUBJ-002') OR v_sub.slug ILIKE '%chem%' OR v_sub.name ILIKE '%chemistry%' THEN
      v_canon_sub := 'CHEM';
    ELSIF UPPER(v_sub.code) IN ('PHYS', '01', 'AL-003', 'SUBJ-003') OR v_sub.slug ILIKE '%phys%' OR v_sub.name ILIKE '%physics%' THEN
      v_canon_sub := 'PHYS';
    ELSIF UPPER(v_sub.code) IN ('AGRI', '08', 'AL-006', 'SUBJ-006') OR v_sub.slug ILIKE '%agri%' OR v_sub.name ILIKE '%agri%' THEN
      v_canon_sub := 'AGRI';
    ELSIF UPPER(v_sub.code) IN ('ET', 'AL-007', 'SUBJ-007') OR v_sub.slug ILIKE '%et%' OR v_sub.name ILIKE '%engineering tech%' THEN
      v_canon_sub := 'ET';
    ELSIF UPPER(v_sub.code) IN ('SFT', 'AL-008', 'SUBJ-008') OR v_sub.slug ILIKE '%sft%' OR v_sub.name ILIKE '%science for tech%' THEN
      v_canon_sub := 'SFT';
    ELSIF UPPER(v_sub.code) IN ('ICT', '005', 'AL-005', 'SUBJ-005') OR v_sub.slug ILIKE '%ict%' OR v_sub.name ILIKE '%information%' THEN
      v_canon_sub := 'ICT';
    ELSE
      -- Fallback to exact match with code or slug
      SELECT subject INTO v_canon_sub FROM public.canonical_syllabus 
      WHERE UPPER(subject) = UPPER(v_sub.code) OR UPPER(subject) = UPPER(v_sub.slug) 
      LIMIT 1;
    END IF;

    IF v_canon_sub IS NOT NULL THEN
      -- Delete existing units and subunits for this subject
      DELETE FROM public.syllabus_units WHERE subject_id = v_sub.id;

      -- Insert units from canonical_syllabus
      FOR v_unit IN 
        SELECT DISTINCT unit_number, 
               COALESCE(unit_name_en, regexp_replace(unit_name, '^ඒකකය\s*\d+\s*:\s*', '')) AS u_title,
               COALESCE(unit_name_si, unit_name) AS u_si,
               unit_name_ta AS u_ta
        FROM public.canonical_syllabus 
        WHERE subject = v_canon_sub
        ORDER BY unit_number
      LOOP
        INSERT INTO public.syllabus_units (subject_id, unit_number, title, sinhala_title, tamil_title)
        VALUES (v_sub.id, v_unit.unit_number, v_unit.u_title, v_unit.u_si, v_unit.u_ta)
        RETURNING id INTO v_unit_id;

        -- Insert subunits with trilingual titles
        INSERT INTO public.syllabus_subunits (unit_id, sub_number, title, sinhala_title, tamil_title, target_hours)
        SELECT 
          v_unit_id, 
          sub_lesson_code, 
          COALESCE(sub_lesson_title_en, sub_lesson_title),
          COALESCE(sub_lesson_title_si, sub_lesson_title),
          sub_lesson_title_ta,
          4
        FROM public.canonical_syllabus
        WHERE subject = v_canon_sub AND unit_number = v_unit.unit_number
        ORDER BY sub_lesson_code;
      END LOOP;
    END IF;
  END LOOP;
END;
$$;

-- 4. Seed any existing users automatically
DO $$
DECLARE
  u RECORD;
BEGIN
  FOR u IN SELECT id FROM public.profiles LOOP
    PERFORM public.seed_user_syllabus_from_canonical(u.id);
  END LOOP;
END;
$$;
