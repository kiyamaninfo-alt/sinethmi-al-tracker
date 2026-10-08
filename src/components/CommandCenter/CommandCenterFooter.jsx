export default function CommandCenterFooter() {
  return (
    <footer className="glass-panel rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 border border-white/5">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-neon-emerald" />
        <span>Sinethmi Study Tracker • Cloud Engine Operational</span>
      </div>
      <div className="flex items-center gap-4 font-mono text-[11px]">
        <span>Storage: 42.1MB / 512MB</span>
        <span>Last Sync: Just Now</span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-neon-cyan hover:underline cursor-pointer"
        >
          Top ↑
        </button>
      </div>
    </footer>
  );
}
