import { useSyllabusVelocity } from '../../hooks/useSyllabusVelocity';
import SyllabusVelocityCard from './SyllabusVelocityCard';

export default function SyllabusVelocity() {
  const {
    tracks, totalRemaining, requiredVelocity, currentVelocity, weeksToExam, targetYear
  } = useSyllabusVelocity();

  return (
    <section className="glass-panel rounded-3xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/5">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span>🚀 Syllabus Velocity &amp; Projected Finish Radar</span>
          </h3>
          <p className="text-xs text-slate-400">
            ඉදිරි මුළු පාඩම්: <strong className="text-slate-200">{totalRemaining}</strong> • අවශ්‍ය වේගය: <strong className="text-neon-cyan">{requiredVelocity} /wk</strong> • වත්මන් වේගය: <strong className="text-neon-emerald">{currentVelocity} /wk</strong>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-neon-violet px-3 py-1 rounded-full bg-neon-violet/10 border border-neon-violet/30">
            {weeksToExam} Weeks to A/L {targetYear}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {tracks.map((sub) => (
          <SyllabusVelocityCard key={sub.id || sub.name} track={sub} />
        ))}
      </div>
    </section>
  );
}
