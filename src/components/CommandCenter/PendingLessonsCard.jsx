export default function PendingLessonsCard() {
  return (
    <section className="glass-panel rounded-3xl p-6 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-lg">📋</span>
          <div>
            <h3 className="text-base font-bold text-white">දැනට උපදෙස් නොලැබි හා නොකෙරුනු පාඩම්</h3>
            <p className="text-xs text-slate-400">Print status, Paper Days සහ ආකෘති සූදානම් කිරීම්</p>
          </div>
        </div>
        <span className="text-xs font-mono px-2 py-0.5 rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">Queue Sync</span>
      </div>
      <div className="space-y-3">
        <div className="glass-panel-elevated p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-neon-violet/20 text-neon-violet">ET</span>
              <span className="text-xs font-semibold text-white">Unit 3.1 • මූලික විද්‍යුත් හා පරිපථ තාක්ෂණය</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">දැනට උපදෙස් නොලැබි පාඩම් • Lesson Days: 28</p>
          </div>
          <div className="text-right">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">Print Ready</span>
          </div>
        </div>
        <div className="glass-panel-elevated p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-500/20 text-cyan-300">SFT</span>
              <span className="text-xs font-semibold text-white">Unit 2.3 • ද්‍රව්‍යවල යාන්ත්‍රික සහ තාප ගුණ</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">ආකෘති සදහා තියෙන නමුත් තවමත් නොකෙරුනු • Paper Days: 19</p>
          </div>
          <div className="text-right">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Printed ✓</span>
          </div>
        </div>
        <div className="glass-panel-elevated p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300">ICT</span>
              <span className="text-xs font-semibold text-white">Unit 2.4 • තාර්කික ද්වාර සහ සංඛ්‍යාංක පරිපථ</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">ආකෘති සදහා තියෙන නමුත් තවමත් නොකෙරුනු • Paper Days: 14</p>
          </div>
          <div className="text-right">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30">Scheduled</span>
          </div>
        </div>
      </div>
    </section>
  );
}
