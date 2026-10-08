export default function MCQMasteryBars() {
  const bars = [
    {
      subject: 'ICT', dotColor: 'bg-emerald-500 shadow-[0_0_8px_#10B981]',
      meta: '62.4 hrs • +28.5% Score Gain', mcq: 'MCQ: 48/50 (96%)', roi: '0.46 pts/hr ROI',
      mcqColor: 'text-emerald-400', roiBg: 'bg-emerald-500/10',
      gradient: 'from-emerald-500 to-teal-300 shadow-[0_0_10px_#10B981]', width: '96%',
    },
    {
      subject: 'ET', dotColor: 'bg-purple-500 shadow-[0_0_8px_#8B5CF6]',
      meta: '71.0 hrs • +22.8% Score Gain', mcq: 'MCQ: 45/50 (90%)', roi: '0.32 pts/hr ROI',
      mcqColor: 'text-purple-400', roiBg: 'bg-purple-500/10',
      gradient: 'from-purple-500 to-indigo-400 shadow-[0_0_10px_#8B5CF6]', width: '90%',
    },
    {
      subject: 'SFT', dotColor: 'bg-cyan-400 shadow-[0_0_8px_#06B6D4]',
      meta: '50.8 hrs • +19.2% Score Gain', mcq: 'MCQ: 43/50 (86%)', roi: '0.38 pts/hr ROI',
      mcqColor: 'text-cyan-400', roiBg: 'bg-cyan-500/10',
      gradient: 'from-cyan-400 to-sky-300 shadow-[0_0_10px_#06B6D4]', width: '86%',
    },
  ];

  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden lg:col-span-2">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-400 text-[20px]">bar_chart</span>
            <h3 className="text-sm font-extrabold text-white tracking-tight">Unit Mastery & MCQ Precision Benchmarks</h3>
          </div>
          <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded">HIGH-YIELD ROI</span>
        </div>
        <p className="text-[11px] text-slate-400">ලකුණු වර්ධනය සහ ප්‍රශ්නෝත්තර නිරවද්‍යතා දෘශ්‍ය ප්‍රස්ථාරය</p>
      </div>

      <div className="space-y-4 my-2">
        {bars.map((bar) => (
          <div key={bar.subject} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${bar.dotColor}`} />
                <span className="font-bold text-white">{bar.subject}</span>
                <span className="text-[11px] text-slate-400 font-mono">{bar.meta}</span>
              </div>
              <div className="flex items-center gap-3 font-mono font-bold">
                <span className={bar.mcqColor}>{bar.mcq}</span>
                <span className={`text-slate-300 ${bar.roiBg} px-2 py-0.5 rounded text-[10px]`}>{bar.roi}</span>
              </div>
            </div>
            <div className="w-full bg-[#121d33] h-3.5 rounded-full overflow-hidden p-0.5 border border-white/5">
              <div className={`bg-gradient-to-r ${bar.gradient} h-full rounded-full`} style={{ width: bar.width }} />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="material-symbols-outlined text-amber-400 text-[18px]">bolt</span>
          <span>Kinetic Target: Rebalance <strong>+4.5 weekly hours</strong> to SFT Organic Chem for 3A lock.</span>
        </div>
        <button type="button" className="text-cyan-300 hover:text-cyan-200 font-mono font-bold text-[11px] flex items-center gap-1 transition">
          <span>Detailed Matrix</span>
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
