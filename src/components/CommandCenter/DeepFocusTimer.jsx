import { useState } from 'react';
import TimerGauge from './TimerGauge';

export default function DeepFocusTimer() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between">
      <div className="flex items-center justify-between pb-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse" />
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">Deep Focus Session Timer</h3>
            <p className="text-xs text-slate-400">අඛණ්ඩව අධ්‍යයන කාල සටහන සහ අවධානය රඳවාගැනීම</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Awake
          </span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hidden sm:flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" /> Online Synced
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-xl px-4 py-2">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400">ක්‍රියාකාරී විෂය:</span>
          <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">ICT</span>
          <span className="text-white font-medium">Unit සාරාංශගත කල (Click Start)</span>
        </div>
        <button type="button" className="text-xs font-semibold text-neon-violet hover:text-white flex items-center gap-1 transition cursor-pointer">
          Change
        </button>
      </div>

      <div className="my-6 flex flex-col items-center justify-center">
        <TimerGauge isActive={isActive} />

        <div className="flex items-center gap-3.5 mt-4">
          <button type="button" onClick={() => setIsActive(!isActive)} className="px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-neon-violet to-neon-cyan text-white shadow-glow-cyan hover:opacity-95 hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer">
            {isActive ? 'Pause Focus' : 'Start Focus'}
          </button>
          <button type="button" onClick={() => setIsActive(false)} className="px-4 py-2.5 rounded-xl font-bold text-xs glass-pill text-slate-300 border-white/10 hover:border-white/25 hover:text-white active:scale-95 transition flex items-center gap-1.5 cursor-pointer">
            Reset
          </button>
        </div>
      </div>

      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span>🔊 Sound: <strong className="text-slate-200">Binaural 432Hz</strong></span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Auto-Break: <strong className="text-slate-200">10m</strong></span>
        </div>
        <button type="button" className="text-neon-cyan hover:underline font-semibold cursor-pointer">Analytics ↗</button>
      </div>
    </section>
  );
}
