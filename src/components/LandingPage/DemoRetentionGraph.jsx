export default function DemoRetentionGraph() {
  return (
    <div id="spaced-repetition" className="rounded-3xl bg-slate-900/90 border border-white/10 p-5 sm:p-6 space-y-4 flex flex-col justify-between">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <span className="text-xs font-mono font-bold text-purple-300 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          Ebbinghaus vs. Spaced Repetition
        </span>
        <span className="text-[10px] font-mono text-cyan-300">Retention Model</span>
      </div>

      <div className="relative h-44 bg-slate-950/80 rounded-2xl p-4 border border-white/5 flex items-end justify-between overflow-hidden">
        <div className="absolute top-2 left-4 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
          <span className="w-2.5 h-0.5 bg-emerald-400" /> With StudyFlow Spaced Repetition (85%+)
        </div>
        <div className="absolute top-6 left-4 text-[10px] font-mono text-rose-400 flex items-center gap-1.5">
          <span className="w-2.5 h-0.5 bg-rose-400" /> Normal Forgetting Curve (Decays to 20%)
        </div>

        <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
          <path d="M 0,20 Q 50,85 100,90 Q 200,92 300,95" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 4" />
          <path d="M 0,20 Q 30,50 60,22 Q 90,45 140,25 Q 200,35 300,20" fill="none" stroke="#10b981" strokeWidth="3" />
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono pt-1">
        <div className="p-2 rounded-xl bg-white/5 border border-white/5">
          <span className="text-slate-400 block">Day 1</span>
          <span className="text-white font-bold">100% Memory</span>
        </div>
        <div className="p-2 rounded-xl bg-white/5 border border-white/5">
          <span className="text-slate-400 block">Day 3</span>
          <span className="text-cyan-300 font-bold">Review Cue 1</span>
        </div>
        <div className="p-2 rounded-xl bg-white/5 border border-white/5">
          <span className="text-slate-400 block">Day 7+</span>
          <span className="text-emerald-300 font-bold">Long-term Recall</span>
        </div>
      </div>
    </div>
  );
}
