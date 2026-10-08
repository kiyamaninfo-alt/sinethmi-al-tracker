export default function LoginFooter() {
  return (
    <div className="w-full mt-6 pt-5 border-t border-surface-variant flex flex-col gap-3">
      {/* Live Stream Telemetry & Quick Indicators */}
      <div className="flex flex-wrap items-center justify-between text-on-surface-variant gap-2 text-xs font-semibold">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span>
            COUNTDOWN: <strong className="text-on-surface">668 DAYS TO EXAM</strong>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-sm text-tertiary">cloud_done</span>
          <span>CLOUD 256-BIT SYNC</span>
        </div>
      </div>

      {/* Syllabus Tracking Stream Modules */}
      <div className="grid grid-cols-3 gap-2 mt-1">
        <div className="px-2.5 py-1.5 rounded-lg bg-surface-container flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
            <span className="text-xs font-bold text-on-surface">ICT</span>
          </div>
          <span className="text-xs font-semibold text-tertiary">ONLINE</span>
        </div>
        <div className="px-2.5 py-1.5 rounded-lg bg-surface-container flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
            <span className="text-xs font-bold text-on-surface">ET</span>
          </div>
          <span className="text-xs font-semibold text-primary">SYNCED</span>
        </div>
        <div className="px-2.5 py-1.5 rounded-lg bg-surface-container flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-xs font-bold text-on-surface">SFT</span>
          </div>
          <span className="text-xs font-semibold text-secondary">ACTIVE</span>
        </div>
      </div>

      {/* Card Sub-Footer & Candidate Profile Badge */}
      <div className="mt-4 text-center flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest/60 border border-outline-variant/30">
          <img
            src="/assets/login/image_0.png"
            alt="Candidate Avatar Preview"
            className="w-4 h-4 rounded-full object-cover"
          />
          <span className="text-[11px] text-on-surface-variant font-medium">Candidate Profile Synced</span>
        </div>
        <p className="text-xs text-outline flex items-center justify-center gap-1.5">
          <span className="material-symbols-outlined text-sm">support_agent</span>
          <span>Candidate Support &amp; Syllabus Admin Access</span>
          <span>•</span>
          <span className="text-secondary font-semibold">v3.4.12</span>
        </p>
      </div>
    </div>
  );
}
