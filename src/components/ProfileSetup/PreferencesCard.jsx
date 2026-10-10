import { DEFAULT_PREFERENCES } from '../../constants/appearanceSettings';
import FontAndLanguageSelectors from './FontAndLanguageSelectors';
import ThemeSelector from './ThemeSelector';

export default function PreferencesCard({ preferences = {}, onChange }) {
  const current = { ...DEFAULT_PREFERENCES, ...preferences };

  const update = (key, val) => {
    onChange({ ...current, [key]: val });
  };

  return (
    <div className="rounded-xl bg-surface-container-low/80 border border-outline-variant/30 p-5 space-y-4 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/20 pb-3">
        <div>
          <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[18px]">display_settings</span>
            Appearance, Typography &amp; Language
          </h3>
          <p className="text-xs text-outline">Configure HUD font scaling, visual themes, and telemetry language</p>
        </div>
        <div className="text-[11px] font-mono text-outline flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 uppercase text-cyan-300">
            {current.language}
          </span>
          <span className="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 uppercase text-primary">
            {current.fontSize}
          </span>
        </div>
      </div>

      <FontAndLanguageSelectors
        fontSize={current.fontSize}
        language={current.language}
        onChangeFontSize={(s) => update('fontSize', s)}
        onChangeLanguage={(l) => update('language', l)}
      />

      <ThemeSelector
        theme={current.theme}
        onChangeTheme={(t) => update('theme', t)}
      />
    </div>
  );
}
