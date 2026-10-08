import SyllabusTrackCard from './SyllabusTrackCard';

const tracks = [
  {
    subject: 'ICT', dotColor: 'bg-emerald-500', border: 'border-emerald-500/20',
    pct: '68%', textColor: 'text-emerald-400', stroke: '#10B981', offset: '64',
    units: 'Units 1–7', unitColor: 'text-emerald-300',
    steps: ['bg-emerald-500 shadow-[0_0_6px_#10B981]', 'bg-emerald-500 shadow-[0_0_6px_#10B981]', 'bg-emerald-500/70', 'bg-slate-800'],
    projected: "Projected: Feb '27", ahead: '+12 Wks Ahead',
  },
  {
    subject: 'ET', dotColor: 'bg-purple-500', border: 'border-purple-500/20',
    pct: '59%', textColor: 'text-purple-400', stroke: '#8B5CF6', offset: '82',
    units: 'Fluid & Circuits', unitColor: 'text-purple-300',
    steps: ['bg-purple-500 shadow-[0_0_6px_#8B5CF6]', 'bg-purple-500 shadow-[0_0_6px_#8B5CF6]', 'bg-purple-500/50', 'bg-slate-800'],
    projected: "Projected: Jul '27", ahead: '+8 Wks Ahead',
  },
  {
    subject: 'SFT', dotColor: 'bg-cyan-400', border: 'border-cyan-500/20',
    pct: '52%', textColor: 'text-cyan-400', stroke: '#06B6D4', offset: '96',
    units: 'Physics & Chem', unitColor: 'text-cyan-300',
    steps: ['bg-cyan-400 shadow-[0_0_6px_#06B6D4]', 'bg-cyan-400 shadow-[0_0_6px_#06B6D4]', 'bg-slate-800', 'bg-slate-800'],
    projected: "Projected: Aug '27", ahead: '+10 Wks Ahead',
  },
];

export default function SyllabusVelocitySection() {
  return (
    <section className="glass-card rounded-2xl p-5 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-500/15 text-cyan-400">
            <span className="material-symbols-outlined text-[18px]">track_changes</span>
          </div>
          <div>
            <h3 className="text-sm md:text-base font-extrabold text-white tracking-tight">
              Visual Syllabus Velocity & Completion Tracks
            </h3>
            <p className="text-[11px] text-slate-400">විෂය නිර්දේශ නිමාවීමේ සංසන්දනාත්මක ප්‍රගති වළලු</p>
          </div>
        </div>
        <div className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Ahead of National Schedule by 14.2 Weeks</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tracks.map((track) => (
          <SyllabusTrackCard key={track.subject} track={track} />
        ))}
      </div>
    </section>
  );
}
