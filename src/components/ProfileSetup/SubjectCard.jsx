import { COLOR_SWATCHES } from '../../constants/profileSetup';

export default function SubjectCard({ subject, onUpdateColor, onUpdateHours, onRemove }) {
  const swatch = COLOR_SWATCHES.find((s) => s.id === subject.color) || COLOR_SWATCHES[0];

  return (
    <div className={`rounded-xl bg-surface-container-low/70 border ${swatch.border} p-4 space-y-3 relative overflow-hidden backdrop-blur-md`}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${swatch.bg} ${swatch.text} border ${swatch.border}`}>
            {subject.code || 'AL-SUB'} • 4.0 Credits
          </span>
          <h4 className="text-sm font-bold text-on-surface mt-1.5">{subject.name}</h4>
          {subject.sinhala && <p className="text-[11px] text-outline font-mono">{subject.sinhala}</p>}
        </div>
        <button
          type="button"
          onClick={() => onRemove(subject.id)}
          className="text-outline hover:text-red-400 p-1 text-xs"
          title="Remove Subject"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>

      <div className="space-y-1">
        <label className="text-[10px] text-outline uppercase font-mono block">Color Telemetry</label>
        <div className="flex items-center gap-1.5">
          {COLOR_SWATCHES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => onUpdateColor(subject.id, c.id)}
              className={`w-5 h-5 rounded-full ${c.dot} transition-transform ${
                subject.color === c.id ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
              }`}
              title={c.name}
            />
          ))}
        </div>
      </div>

      <div className="space-y-1.5 pt-2 border-t border-outline-variant/20">
        <div className="flex justify-between text-xs font-mono">
          <span className="text-outline">Weekly Allocation</span>
          <span className={`font-bold ${swatch.text}`}>{subject.hours || 12}h / wk</span>
        </div>
        <input
          type="range"
          min="6"
          max="24"
          value={subject.hours || 12}
          onChange={(e) => onUpdateHours(subject.id, Number(e.target.value))}
          className="w-full h-1 bg-surface-container-highest rounded appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
}
