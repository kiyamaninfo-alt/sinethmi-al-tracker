import { useState, useEffect } from 'react';
import TimerColorPicker from './TimerColorPicker';
import ManualTimerInputs from './ManualTimerInputs';

export default function AlarmDurationAndColor({
  duration,
  interval,
  rounds,
  color,
  isCustom,
  onApplyManual,
  onChangeColor
}) {
  const [val, setVal] = useState(duration || 50);
  const [intervalVal, setIntervalVal] = useState(interval || 10);
  const [roundVal, setRoundVal] = useState(rounds || 3);

  useEffect(() => {
    setVal(duration || 50);
    setIntervalVal(interval || 10);
    setRoundVal(rounds || 3);
  }, [duration, interval, rounds]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-outline-variant/30">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-semibold text-slate-200 block">
            Manual Session, Interval &amp; Rounds
          </label>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-all ${
            isCustom ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 font-bold' : 'bg-surface-container text-slate-400 border-outline-variant/30'
          }`}>
            {isCustom ? 'Active Manual' : 'Preset Mode'}
          </span>
        </div>

        <ManualTimerInputs
          val={val}
          setVal={setVal}
          intervalVal={intervalVal}
          setIntervalVal={setIntervalVal}
          roundVal={roundVal}
          setRoundVal={setRoundVal}
          isCustom={isCustom}
          onApplyManual={onApplyManual}
        />
      </div>

      <TimerColorPicker color={color} onChangeColor={onChangeColor} />
    </div>
  );
}
