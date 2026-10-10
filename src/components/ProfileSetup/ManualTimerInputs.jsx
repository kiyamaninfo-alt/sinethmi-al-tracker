export default function ManualTimerInputs({
  val,
  setVal,
  intervalVal,
  setIntervalVal,
  roundVal,
  setRoundVal,
  isCustom,
  onApplyManual
}) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <div className="flex items-center gap-1">
        <input
          type="number"
          min="1"
          max="180"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-14 bg-surface-container-high/80 border border-outline-variant/50 rounded-lg px-2 py-1.5 text-white font-mono text-xs font-bold focus:border-cyan-400 focus:outline-none"
        />
        <span className="text-[10px] text-slate-300 font-mono">min</span>
      </div>

      <div className="flex items-center gap-1">
        <input
          type="number"
          min="1"
          max="60"
          value={intervalVal}
          onChange={(e) => setIntervalVal(e.target.value)}
          className="w-14 bg-surface-container-high/80 border border-outline-variant/50 rounded-lg px-2 py-1.5 text-emerald-300 font-mono text-xs font-bold focus:border-emerald-400 focus:outline-none"
        />
        <span className="text-[10px] text-slate-300 font-mono">interval</span>
      </div>

      <div className="flex items-center gap-1">
        <input
          type="number"
          min="1"
          max="10"
          value={roundVal}
          onChange={(e) => setRoundVal(e.target.value)}
          className="w-12 bg-surface-container-high/80 border border-outline-variant/50 rounded-lg px-2 py-1.5 text-amber-300 font-mono text-xs font-bold focus:border-cyan-400 focus:outline-none"
        />
        <span className="text-[10px] text-slate-300 font-mono">rounds</span>
      </div>

      <button
        type="button"
        onClick={() => onApplyManual(parseInt(val, 10) || 50, parseInt(intervalVal, 10) || 10, parseInt(roundVal, 10) || 1)}
        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
          isCustom
            ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/25 ring-2 ring-cyan-400/50 hover:brightness-110'
            : 'bg-surface-container-high text-cyan-300 border border-cyan-400/40 hover:bg-cyan-500/20'
        }`}
      >
        {isCustom ? 'SET (ACTIVE)' : 'SET'}
      </button>
    </div>
  );
}
