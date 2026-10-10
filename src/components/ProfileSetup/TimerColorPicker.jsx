import { TIMER_COLORS } from '../../constants/alarmSettings';

export default function TimerColorPicker({ color, onChangeColor }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-mono font-semibold text-slate-200 block">Timer Accent Colour</label>
      <div className="flex items-center gap-2">
        {TIMER_COLORS.map((tc) => (
          <button
            key={tc.id}
            type="button"
            onClick={() => onChangeColor(tc.id)}
            title={tc.name}
            className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all cursor-pointer ${tc.bgClass} ${
              color === tc.id ? `${tc.borderClass} ring-2 ring-cyan-400/50 scale-105` : 'border-outline-variant/30 hover:scale-105'
            }`}
          >
            <span className={`w-2.5 h-2.5 rounded-full ${tc.colorClass.replace('text-', 'bg-')}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
