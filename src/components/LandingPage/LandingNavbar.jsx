import { useNavigate } from 'react-router-dom';

export default function LandingNavbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <span className="material-symbols-outlined text-cyan-400 text-[22px]">all_inclusive</span>
            </div>
          </div>
          <div>
            <span className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5 font-mono">
              StudyFlow <span className="text-cyan-400">AI</span>
            </span>
            <p className="text-[10px] text-slate-300 font-mono tracking-wider uppercase">A/L Smart Tracker</p>
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
            නොමිලේ පටන් ගන්න
          </button>
        </div>
      </div>
    </header>
  );
}
