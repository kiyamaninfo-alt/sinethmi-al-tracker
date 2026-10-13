const LANGUAGES = [
  { id: 'si', label: 'සිං', title: 'සිංහල (Sinhala)' },
  { id: 'ta', label: 'தமி', title: 'தமிழ் (Tamil)' },
  { id: 'en', label: 'EN', title: 'English' }
];

export default function CompactLanguageToggle({ value = 'si', onChange }) {
  return (
    <div
      role="group"
      aria-label="Language selection"
      className="inline-flex items-center p-0.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-[10px] sm:text-[11px] font-mono shadow-inner backdrop-blur-md"
    >
      {LANGUAGES.map((item, idx) => (
        <span key={item.id} className="inline-flex items-center">
          <button
            type="button"
            title={item.title}
            onClick={() => onChange?.(item.id)}
            className={`px-2 sm:px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
              value === item.id
                ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/40 shadow-[0_0_8px_rgba(6,182,212,0.3)]'
                : 'text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            {item.label}
          </button>
          {idx < LANGUAGES.length - 1 && (
            <span className="text-white/15 px-0.5 select-none" aria-hidden="true">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
