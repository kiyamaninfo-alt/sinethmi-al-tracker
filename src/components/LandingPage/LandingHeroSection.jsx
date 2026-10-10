import { useNavigate } from 'react-router-dom';
import { LANDING_COPY } from '../../constants/landingCopy';
import HeroFloatingCard from './HeroFloatingCard';

export default function LandingHeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 to-violet-500/30 blur-lg opacity-60" />
              <img src="/emblem.svg" alt="Emblem" className="relative w-11 h-11 object-contain drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
            </div>
            <div>
              <span className="block text-[11px] uppercase font-mono tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-300 to-violet-400 font-bold">
                ✦ Sinethmi ✦
              </span>
              <span className="text-lg font-black text-white tracking-tight font-sans">
                A-Level Mission Control
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{LANDING_COPY.heroBadge}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-snug sm:leading-tight font-sans tracking-tight">
            {LANDING_COPY.heroHeadline}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {LANDING_COPY.heroSubheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition cursor-pointer"
            >
              {LANDING_COPY.heroPrimaryCta}
            </button>
            <a
              href="#playground"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-surface-container/80 hover:bg-white/10 border border-white/10 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-cyan-400">play_circle</span>
              {LANDING_COPY.heroSecondaryCta}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <HeroFloatingCard />
        </div>
      </div>
    </section>
  );
}
