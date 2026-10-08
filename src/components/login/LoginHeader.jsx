export default function LoginHeader() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Cyber Embellishments */}
      <div className="w-full flex items-center justify-between pb-6">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="text-xs font-semibold text-tertiary uppercase tracking-widest">
            LIVE SECURE FEED
          </span>
        </div>
        <div className="text-xs font-semibold text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-sm text-secondary">encrypted</span>
          <span>GATEWAY 2028-PROT</span>
        </div>
      </div>

      {/* Hexagonal Logo Emblem with Radial Aura */}
      <div className="relative flex items-center justify-center my-2 group">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-container via-secondary-container to-tertiary-container blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 scale-125" />
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center p-1">
          <img
            src="/emblem.svg"
            alt="Sinethmi A-Level Mission Control Logo"
            className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]"
          />
        </div>
      </div>

      {/* Cohort Chip */}
      <div className="mt-4 px-3.5 py-1 rounded-full bg-surface-container-highest text-secondary flex items-center gap-2">
        <span
          className="material-symbols-outlined text-xs text-secondary animate-spin"
          style={{ animationDuration: '9s' }}
        >
          radar
        </span>
        <span className="text-xs font-bold tracking-wider uppercase">
          A/L 2028 TARGET COHORT • ENCRYPTED GATEWAY
        </span>
      </div>

      {/* Title & Academic Motto */}
      <div className="text-center mt-4 mb-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight bg-gradient-to-b from-white via-on-background to-outline-variant bg-clip-text text-transparent">
          Sinethmi Mission Control
        </h1>
        <p className="text-sm text-on-surface-variant mt-2 max-w-md mx-auto leading-relaxed">
          විභාගයෙන් ජය නොවෙලඳදාම ප්‍රතිඵලයක් සිතා තීරණාත්මකව සූදානම් වෙමු.
        </p>
        <span className="inline-block mt-1 text-xs font-semibold text-primary tracking-wide uppercase opacity-80">
          System Authentication &amp; Candidate Portal
        </span>
      </div>
    </div>
  );
}
