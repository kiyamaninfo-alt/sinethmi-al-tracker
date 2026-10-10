import { THEME_OPTIONS } from '../../constants/appearanceSettings';

export default function ThemeSelector({ theme, onChangeTheme }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-mono text-outline block">Visual Environment Theme</label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {THEME_OPTIONS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => onChangeTheme(t.id)}
            className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-center transition-all cursor-pointer ${
              theme === t.id
                ? `${t.border} bg-surface-container-high ring-1 ring-cyan-400/50 shadow-md`
                : 'border-outline-variant/30 bg-surface-container/50 hover:border-outline-variant/70'
            }`}
          >
            <span className={`material-symbols-outlined text-[20px] ${theme === t.id ? 'text-cyan-400' : 'text-outline'}`}>
              {t.icon}
            </span>
            <span className="text-xs font-medium text-on-surface">{t.name}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${t.badge}`}>
              {theme === t.id ? 'Active' : 'Select'}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
