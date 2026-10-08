import { useState } from 'react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Auth Method 1: Google Quick Sign-In */}
      <button
        type="button"
        className="w-full h-12 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface flex items-center justify-center gap-3 transition-all duration-200 group active:scale-[0.99] shadow-sm cursor-pointer mb-5"
      >
        <svg className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
          <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" fill="#4285F4" />
          <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.15C3.25 21.31 7.31 24 12 24z" fill="#34A853" />
          <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.27C.46 8.2.01 10.04.01 12s.45 3.8 1.26 5.42l4.01-3.15z" fill="#FBBC05" />
          <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.69 1.27 6.58l4.01 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335" />
        </svg>
        <span className="text-sm font-semibold tracking-wide text-on-surface">
          Google ගිණුමෙන් ඇතුල් වන්න <span className="text-on-surface-variant font-normal text-xs sm:inline hidden">(Continue with Google)</span>
        </span>
      </button>

      {/* Visual Modern Divider */}
      <div className="w-full flex items-center justify-center gap-3 my-2">
        <span className="h-[1px] flex-1 bg-surface-variant" />
        <span className="text-xs text-outline uppercase tracking-wider px-2 font-medium">හෝ ඊමේල් මඟින් (OR VIA CANDIDATE ID)</span>
        <span className="h-[1px] flex-1 bg-surface-variant" />
      </div>

      {/* Auth Form */}
      <form className="w-full mt-4 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-on-surface flex items-center justify-between" htmlFor="candidate-id">
            <span>අයදුම්කරුගේ ඊමේල් ලිපිනය / ID</span>
            <span className="text-[11px] text-secondary font-medium">Verified Terminal</span>
          </label>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3.5 text-outline text-lg pointer-events-none">alternate_email</span>
            <input id="candidate-id" type="text" placeholder="candidate@missioncontrol.edu / A/L ID" className="w-full h-11 pl-11 pr-4 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline/60 text-sm focus:outline-none focus:bg-surface-container-high transition-colors" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-on-surface flex items-center justify-between" htmlFor="candidate-passkey">
            <span>ආරක්ෂක මුරපදය (Access Key)</span>
            <span className="text-[11px] text-primary font-medium">Biometric Sync Ready</span>
          </label>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3.5 text-outline text-lg pointer-events-none">vpn_key</span>
            <input id="candidate-passkey" type={showPassword ? 'text' : 'password'} placeholder="••••••••••••" className="w-full h-11 pl-11 pr-11 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline/60 text-sm focus:outline-none focus:bg-surface-container-high transition-colors tracking-widest" />
            <button type="button" aria-label="Toggle password view" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 text-outline hover:text-on-surface transition-colors p-1 flex items-center justify-center cursor-pointer">
              <span className="material-symbols-outlined text-lg">{showPassword ? 'visibility' : 'visibility_off'}</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-1 text-xs">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded bg-surface-container-highest accent-primary-container cursor-pointer" />
            <span className="text-on-surface-variant">පර්යන්තය මතක තබා ගන්න</span>
          </label>
          <a href="#" className="font-semibold text-primary hover:text-primary-fixed transition-colors">මුරපදය අමතකද?</a>
        </div>

        <button type="submit" className="w-full h-12 mt-2 rounded-lg bg-gradient-to-r from-primary-container via-inverse-primary to-secondary-container text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary-container/25 hover:shadow-primary-container/40 hover:brightness-110 active:scale-[0.99] transition-all duration-200 cursor-pointer">
          <span>Enter Mission Control</span>
          <span className="opacity-90 font-normal text-xs">(පද්ධතියට පිවිසෙන්න)</span>
          <span className="material-symbols-outlined text-lg ml-0.5">rocket_launch</span>
        </button>
      </form>
    </div>
  );
}
