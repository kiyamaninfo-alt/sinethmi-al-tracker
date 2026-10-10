import { useState, useEffect } from 'react';

export default function DemoFocusTimer() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState('25');

  const selectMode = (m) => {
    setMode(m);
    setRunning(false);
    setSeconds(m === '25' ? 25 * 60 : 50 * 60);
  };

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [running]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  return (
    <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-5 sm:p-6 space-y-5 flex flex-col justify-between">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <span className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Interactive Focus Timer
        </span>
        <div className="flex items-center gap-1 text-[10px] font-mono">
          <button
            type="button"
            onClick={() => selectMode('25')}
            className={`px-2 py-0.5 rounded cursor-pointer ${mode === '25' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/5 text-slate-400'}`}
          >
            25m Pomodoro
          </button>
          <button
            type="button"
            onClick={() => selectMode('50')}
            className={`px-2 py-0.5 rounded cursor-pointer ${mode === '50' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/5 text-slate-400'}`}
          >
            50m Deep Work
          </button>
        </div>
      </div>

      <div className="text-center py-4 space-y-2">
        <div className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-white drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
          {timeStr}
        </div>
        <p className="text-[11px] text-slate-400 font-mono">
          {running ? 'Session Active • Brainwave Alpha State' : 'Select mode & hit start to test workflow'}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setRunning(!running)}
          className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-mono font-bold text-xs uppercase shadow-md shadow-cyan-400/20 hover:brightness-110 cursor-pointer"
        >
          {running ? 'Pause Session' : 'Start Focus'}
        </button>
        <button
          type="button"
          onClick={() => { setRunning(false); setSeconds(mode === '25' ? 25 * 60 : 50 * 60); }}
          className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-mono text-xs cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
