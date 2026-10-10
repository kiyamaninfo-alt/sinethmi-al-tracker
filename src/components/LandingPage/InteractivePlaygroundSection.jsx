import DemoFocusTimer from './DemoFocusTimer';
import DemoWeaknessAnalyzer from './DemoWeaknessAnalyzer';
import DemoRetentionGraph from './DemoRetentionGraph';

export default function InteractivePlaygroundSection() {
  return (
    <section id="playground" className="py-16 sm:py-24 border-t border-white/5 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            Interactive Feature Playground
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-white">
            සිස්ටම් එකේ ප්‍රධාන මෙවලම් දැන්ම අත්හදා බලන්න
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans">
            Cognitive Timer, Subject Diagnostics, සහ Spaced Repetition ආකෘතිය සජීවීව ක්‍රියාත්මක වන අයුරු
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <DemoFocusTimer />
          <DemoWeaknessAnalyzer />
          <DemoRetentionGraph />
        </div>
      </div>
    </section>
  );
}
