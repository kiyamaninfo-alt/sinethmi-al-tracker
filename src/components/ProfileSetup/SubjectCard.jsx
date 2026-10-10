import { COLOR_SWATCHES } from '../../constants/profileSetup';

export default function SubjectCard({ subject, onUpdateColor, onUpdateHours, onRemove }) {
  const swatch = COLOR_SWATCHES.find((s) => s.id === subject.color) || COLOR_SWATCHES[0];

  return (
    <div className={`rounded-xl bg-gradient-to-b ${swatch.bg} to-surface-container-low/90 border ${swatch.border} ${swatch.glow} p-4 space-y-3 relative overflow-hidden backdrop-blur-md transition-all duration-200`}>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full ${swatch.bg} ${swatch.text} border ${swatch.border} font-bold inline-block`}>
            {subject.code || 'AL-SUB'} • 4.0 Credits
          </span>
          <h4 className="text-sm font-bold text-white mt-1.5 truncate">{subject.name}</h4>
          {subject.sinhala && <p className="text-[12px] font-medium text-slate-200 mt-0.5 truncate">{subject.sinhala}</p>}
        </div>
        <button
          type="button"
          onClick={() => onRemove(subject.id)}
          className="text-outline hover:text-red-400 p-1 text-xs cursor-pointer"
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
              className={`w-5 h-5 rounded-full ${c.dot} transition-transform cursor-pointer ${
                subject.color === c.id ? 'ring-2 ring-white scale-125 shadow-md' : 'opacity-60 hover:opacity-100'
              }`}
              title={c.name}
            />
          ))}
        </div>
      </div>

      <div className="space-y-1.5 pt-2 border-t border-outline-variant/20">
        <div className="flex justify-between text-xs font-mono">
          <span className="text-outline">Weekly Allocation</span>
          <span className={`font-bold ${swatch.text}`}>{subject.hours ?? 8}h / wk</span>
        </div>
        <input
          type="range"
          min="2"
          max="20"
          value={subject.hours ?? 8}
          onChange={(e) => onUpdateHours(subject.id, Number(e.target.value))}
          className="w-full h-1 bg-surface-container-highest rounded appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
}
