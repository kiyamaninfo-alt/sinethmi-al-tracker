import SubjectProgressCard from './SubjectProgressCard';

const subjects = [
  {
    tag: 'ICT', sub: 'තොරතුරු තාක්ෂණය', name: 'තොරතුරු හා සන්නිවේදන තාක්ෂණය',
    pct: '23%', time: '2.3 Hrs', sessions: 3, units: '3 / 13 Units',
    benchmark: '2.3h logged of 10.0h benchmark', border: 'border-emerald-500/30',
    tagBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40', text: 'text-emerald-400', bar: 'bg-emerald-500', width: '23%',
  },
  {
    tag: '⚙️ ET', sub: 'ඉංජිනේරු තාක්ෂණය', name: 'ඉංජිනේරු තාක්ෂණවේදය',
    pct: '14%', time: '3.4 Hrs', sessions: 6, units: '2 / 14 Units',
    benchmark: '3.4h logged of 24.0h benchmark', border: 'border-purple-500/30',
    tagBg: 'bg-purple-500/20 text-purple-400 border-purple-500/40', text: 'text-purple-400', bar: 'bg-purple-500', width: '14%',
  },
  {
    tag: '🔬 SFT', sub: 'තාක්ෂණ විද්‍යාව', name: 'තාක්ෂණවේදය සඳහා විද්‍යාව',
    pct: '9%', time: '6.0 Hrs', sessions: 8, units: '2 / 23 Units',
    benchmark: '6.0h logged of 66.0h benchmark', border: 'border-cyan-500/30',
    tagBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40', text: 'text-cyan-400', bar: 'bg-cyan-400', width: '9%',
  },
];

export default function SubjectWiseProgress() {
  return (
    <section className="glass-card rounded-2xl p-5 border border-obsidian-border space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-obsidian-border">
        <div className="flex items-center gap-3">
          <span className="text-lg">🎯</span>
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">
              විෂය අනුව අධ්‍යයන ප්‍රගතිය <span className="text-slate-400 font-normal text-sm font-sans">(Subject-wise Study Progress & Goal Distribution)</span>
            </h2>
            <p className="text-xs text-slate-400">විෂය තුල්‍යතාවය (Overall Subject Study Balance) | Target: ICT 33% | ET 33% | SFT 34%</p>
          </div>
        </div>
        <div className="text-xs font-semibold text-slate-300 bg-obsidian-surface px-3 py-1.5 rounded-lg border border-obsidian-border">
          සම්පූර්ණ කරන ලද්ද: <span className="text-cyan-400 font-bold">11.6 Hrs</span>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Actual Distribution</span>
          <div className="flex items-center gap-3 text-[11px] font-semibold">
            <span className="text-emerald-400">● ICT 19%</span>
            <span className="text-purple-400">● ET 29%</span>
            <span className="text-cyan-400">● SFT 52%</span>
          </div>
        </div>
        <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex p-0.5 gap-0.5">
          <div className="h-full bg-emerald-500 rounded-l-full shadow-[0_0_8px_rgba(16,185,129,0.5)] w-[19.3%]" />
          <div className="h-full bg-purple-600 shadow-[0_0_8px_rgba(139,92,246,0.5)] w-[29.3%]" />
          <div className="h-full bg-cyan-400 rounded-r-full shadow-[0_0_8px_rgba(6,182,212,0.5)] w-[51.4%]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        {subjects.map((s) => (
          <SubjectProgressCard key={s.tag} s={s} />
        ))}
      </div>
    </section>
  );
}
