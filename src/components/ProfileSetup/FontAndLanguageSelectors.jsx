import { FONT_SIZE_OPTIONS, LANGUAGE_OPTIONS } from '../../constants/appearanceSettings';

export default function FontAndLanguageSelectors({ fontSize, language, onChangeFontSize, onChangeLanguage }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-1.5">
        <label className="text-[11px] font-mono text-outline block">Interface Font Size</label>
        <div className="grid grid-cols-3 gap-1.5">
          {FONT_SIZE_OPTIONS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => onChangeFontSize(f.id)}
              className={`py-1.5 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                fontSize === f.id
                  ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300 font-bold shadow-sm ring-1 ring-cyan-400/50'
                  : 'border-outline-variant/30 bg-surface-container/60 hover:border-outline-variant/60 text-slate-300'
              }`}
            >
              <div className="text-xs font-mono">{f.label}</div>
              <div className="text-[10px] text-outline font-mono">{f.scale}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-mono text-outline block">Medium of Instruction (අධ්‍යාපනය ලබන මාධ්‍යය)</label>
        <div className="grid grid-cols-3 gap-1.5">
          {LANGUAGE_OPTIONS.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => onChangeLanguage(l.id)}
              className={`py-1.5 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                language === l.id
                  ? 'border-primary bg-primary/20 text-primary font-bold shadow-sm ring-1 ring-primary/50'
                  : 'border-outline-variant/30 bg-surface-container/60 hover:border-outline-variant/60 text-slate-300'
              }`}
            >
              <div className="text-xs font-bold">{l.native}</div>
              <div className="text-[10px] text-outline font-mono">{l.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
