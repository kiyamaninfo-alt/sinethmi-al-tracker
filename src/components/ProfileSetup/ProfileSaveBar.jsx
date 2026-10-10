export default function ProfileSaveBar({ onSave }) {
  return (
    <div className="rounded-xl bg-surface-container-low/90 backdrop-blur-xl border border-primary/30 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse" />
        <div>
          <p className="text-xs font-bold text-on-surface">Candidate Telemetry Initialized</p>
          <p className="text-[11px] text-outline font-mono">Parameters ready for Mission Control deployment</p>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <button
          type="button"
          onClick={onSave}
          className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-inverse-primary text-on-primary text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
        >
          <span>Save Candidate Profile &amp; Enter Mission Control -&gt;</span>
          <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
        </button>
      </div>
    </div>
  );
}
