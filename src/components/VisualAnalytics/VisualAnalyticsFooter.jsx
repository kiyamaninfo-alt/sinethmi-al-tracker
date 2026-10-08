export default function VisualAnalyticsFooter() {
  return (
    <footer className="mt-8 border-t border-white/10 bg-[#040814] py-5 px-4 text-center text-xs text-slate-500">
      <div className="max-w-[1780px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          <span className="text-slate-400 font-medium">Sinethmi A-Level Mission Control Telemetry Lab</span>
        </div>
        <div className="text-[11px] text-slate-500 font-mono">
          Obsidian Kinetic System v4.9 • Chart-First Telemetry Engine • 2028 Pipeline
        </div>
      </div>
    </footer>
  );
}
