import { useNavigate } from 'react-router-dom';

export default function LandingFooterCta() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-white/10 bg-slate-950 relative overflow-hidden pt-16 pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900/90 to-emerald-950/40 border border-cyan-400/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-xl sm:text-3xl font-black text-white max-w-2xl mx-auto leading-snug">
            ඔයාට තියෙන්නේ පාඩම් කරන්න විතරයි. අනිත් හැමදේම අපි පෙළගස්වලා දෙන්නම්. අදම එකතු වෙලා A/L ජයගමු!
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl mx-auto">
            විද්‍යාත්මක කාලසටහන්, Spaced Repetition, සහ ප්‍රගති විශ්ලේෂණය එකම තැනකින් ලබාගන්න.
          </p>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition cursor-pointer"
          >
            පටන් ගන්න මෙතන ක්ලික් කරන්න
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2.5">
            <img src="/emblem.svg" alt="Emblem" className="w-5 h-5 object-contain" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-300 to-violet-400 font-bold">✦ Sinethmi ✦</span>
            <span className="text-white font-sans font-bold">A-Level Mission Control</span>
          </div>
          <div>© {new Date().getFullYear()} KrishSoft Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
