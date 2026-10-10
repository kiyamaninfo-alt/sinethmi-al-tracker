import { useNavigate } from 'react-router-dom';

export default function LandingNavbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/40 to-violet-500/40 blur-md opacity-60 group-hover:opacity-100 transition" />
            <img src="/emblem.svg" alt="Emblem" className="relative w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
          </div>
          <div>
            <span className="block text-[10px] uppercase font-mono tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-300 to-violet-400 font-bold">
              ✦ Sinethmi ✦
            </span>
            <span className="text-sm sm:text-base font-black tracking-tight text-white flex items-center gap-1.5 font-sans leading-none">
              A-Level Mission Control
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300 font-sans">
          <a href="#problem-solution" className="hover:text-cyan-300 transition cursor-pointer">ගැටලුව &amp; විසඳුම</a>
          <a href="#workflow" className="hover:text-cyan-300 transition cursor-pointer">ක්‍රියාකාරිත්වය</a>
          <a href="#playground" className="hover:text-cyan-300 transition cursor-pointer">Interactive Demo</a>
          <a href="#spaced-repetition" className="hover:text-cyan-300 transition cursor-pointer">Spaced Repetition</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-xs font-mono font-bold text-slate-300 hover:text-white px-3 py-2 cursor-pointer hidden sm:block"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-bold text-xs font-sans shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-95 transition cursor-pointer"
          >
            පටන් ගන්න
          </button>
        </div>
      </div>
    </header>
  );
}
