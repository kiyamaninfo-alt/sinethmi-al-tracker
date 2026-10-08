const PRIORITIES = [
  { id: 1, subject: 'ET', color: 'neon-violet', title: '#1 අද මුලින්ම කෙරෙන්නෙ සකස්න ඕනෑ', desc: 'ET (12 පන්තිමය) 1.2 ඉංජිනේරු පරිචය ප්‍රශ්න 22', days: 'දවස් 22', daysColor: 'text-neon-rose' },
  { id: 2, subject: 'SFT', color: 'neon-cyan', title: '#2 අද ආරම්භ කරන්නෙ ඕනෑ', desc: 'SFT (4.2 පන්තිමය) ගෘහ සහ කෘෂි මූල්‍ය ද්‍රව්‍ය', days: 'දවස් 20', daysColor: 'text-neon-cyan' },
  { id: 3, subject: 'ALL', color: 'indigo-400', title: '#3 Full Paper එකක් කරන්නෙ ඕනෑ', desc: 'ALL (Full paper පැමිණීමක්) Full Paper 02 Revision', days: 'දවස් 11', daysColor: 'text-indigo-300' },
  { id: 4, subject: 'ALL', color: 'blue-400', title: '#4 Unit Paper එකක් කරන්නෙ ඕනෑ', desc: 'ALL (Unit Paper පැමිණීමක්) පරීක්ෂණ අදියර 03', days: 'දවස් 3', daysColor: 'text-blue-400' },
  { id: 5, subject: 'SFT', color: 'cyan-400', title: '#5 නොකල තෙවරක් කරන්නෙ ඕනෑ', desc: 'SFT (4.2 පන්තිමය) නොකල ආකෘති සම්පූර්ණ කිරීම', days: 'දවස් 24', daysColor: 'text-cyan-400' },
  { id: 6, subject: 'ICT', color: 'emerald-400', title: '#6 අඩු ලකුණු ප්‍රශ්න සකස්න ඕනෑ', desc: 'ICT (2.2 පන්තිමය) අඩු ලකුණු ප්‍රතිසංස්කරණය', days: 'දවස් 22', daysColor: 'text-emerald-400' },
];

export default function TodayPriorities() {
  return (
    <section className="glass-panel rounded-2xl p-5">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-rose opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-rose" />
          </span>
          <h2 className="text-sm sm:text-base font-bold text-white tracking-wide uppercase flex items-center gap-2">
            <span>අද මුලින්ම කල යුතු දේවල් (TODAY'S PRIORITIES)</span>
          </h2>
          <span className="text-[11px] text-slate-400 font-normal hidden sm:inline">• දෛනික ක්‍රියාකාරී සැලැස්ම</span>
        </div>
        <span className="text-[10px] font-mono uppercase bg-neon-violet/10 text-neon-violet border border-neon-violet/30 px-2.5 py-0.5 rounded-full font-bold">
          DAILY ACTION PLAN ACTIVE
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {PRIORITIES.map((item) => (
          <div key={item.id} className="glass-panel-elevated p-3.5 rounded-xl border border-white/5 hover:border-neon-cyan/40 transition group flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-neon-cyan flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition">
              <span className="text-xs font-mono font-bold">#{item.id}</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white group-hover:text-neon-cyan transition">{item.title}</span>
                <span className="text-[9px] bg-white/10 text-slate-200 font-mono px-1.5 py-0.2 rounded font-semibold">{item.subject}</span>
              </div>
              <p className="text-xs text-slate-300 line-clamp-1">{item.desc}</p>
              <span className={`inline-block text-[10px] font-medium ${item.daysColor}`}>{item.days}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
