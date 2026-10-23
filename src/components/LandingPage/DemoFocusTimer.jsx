import { useState, useEffect } from 'react';

export default function DemoFocusTimer() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState('25');

  const selectMode = (m) => {
    setMode(m); setRunning(false);
    setSeconds((m === '1' ? 1 : m === '25' ? 25 : 50) * 60);
  };

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [running]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  const total = (mode === '1' ? 1 : mode === '25' ? 25 : 50) * 60;
  const pct = Math.max(0, Math.min(100, (seconds / total) * 100));
  const circ = 2 * Math.PI * 48;
  const strokeDashoffset = circ * (1 - pct / 100);

  return (
    <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-5 space-y-3 flex flex-col justify-between">
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <span className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Interactive Focus Timer
        </span>
        <div className="flex items-center gap-1 text-[10px] font-mono">
          {['1', '25', '50'].map((m) => (
            <button key={m} type="button" onClick={() => selectMode(m)} className={`px-2 py-0.5 rounded cursor-pointer ${mode === m ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/5 text-slate-400'}`}>
              {m === '1' ? '1m' : `${m}m`}
            </button>
          ))}
        </div>
      </div>

      <div className="relative py-2 flex items-center justify-center">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" style={{ width: '100%', height: '100%' }} viewBox="0 0 110 110">
            <circle cx="55" cy="55" r="48" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
            <circle
              cx="55" cy="55" r="48" fill="none" stroke="#06B6D4" strokeLinecap="round" strokeWidth="8"
              strokeDasharray={`${circ.toFixed(2)} ${circ.toFixed(2)}`} strokeDashoffset={strokeDashoffset.toFixed(2)}
              style={{ strokeDashoffset: `${strokeDashoffset.toFixed(2)}`, transition: running ? 'stroke-dashoffset 1s linear' : 'stroke-dashoffset 0.3s ease-out' }}
              className={running ? 'drop-shadow-[0_0_8px_rgba(6,182,212,0.7)]' : ''}
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-xl sm:text-2xl font-black font-mono tracking-tight text-white drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]">{timeStr}</span>
            <span className="text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-widest">{running ? 'FOCUSING' : 'READY'}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button type="button" onClick={() => setRunning(!running)} className="flex-1 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-mono font-bold text-xs uppercase shadow-md shadow-cyan-400/20 hover:brightness-110 cursor-pointer">
          {running ? 'Pause Session' : 'Start Focus'}
        </button>
        <button type="button" onClick={() => { setRunning(false); selectMode(mode); }} className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-mono text-xs cursor-pointer">
          Reset
        </button>
      </div>
    </div>
  );
}
