import { useNavigate, useLocation } from 'react-router-dom';
import { useGlobalFocusTimer } from '../../context/FocusTimerContext';

export default function GlobalTimerFloatingWidget() {
  const navigate = useNavigate();
  const location = useLocation();
  const { timer } = useGlobalFocusTimer();

  if (!timer.isActive) return null;

  const isAtTimerAnchor = location.pathname === '/command-center' &&
    typeof window !== 'undefined' &&
    window.location.hash === '#deep-focus-timer';

  const mins = Math.floor(timer.secondsLeft / 60);
  const secs = timer.secondsLeft % 60;
  const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  const isStudy = timer.sessionMode === 'study';

  const handleReturnToTimer = () => {
    navigate('/command-center#deep-focus-timer');
    setTimeout(() => {
      document.querySelector('#deep-focus-timer')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <aside
      aria-label="Active Focus Session Telemetry"
      onClick={handleReturnToTimer}
      className="fixed bottom-5 right-5 z-50 group flex items-center gap-3 p-3 pl-4 rounded-2xl bg-[#090d1a]/95 border border-cyan-400/50 shadow-[0_10px_35px_rgba(6,182,212,0.35)] backdrop-blur-xl cursor-pointer hover:border-cyan-300 hover:scale-105 active:scale-95 transition-all animate-bounce-subtle"
    >
      <div className="relative flex items-center justify-center">
        <span className={`w-3.5 h-3.5 rounded-full ${isStudy ? 'bg-cyan-400' : 'bg-emerald-400'} animate-ping opacity-75`} />
        <span className={`absolute w-2.5 h-2.5 rounded-full ${isStudy ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-base font-black font-mono tracking-wider text-white">
            {timeStr}
          </span>
          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold uppercase ${
            isStudy ? 'bg-cyan-500/20 text-cyan-300' : 'bg-emerald-500/20 text-emerald-300'
          }`}>
            {timer.sessionMode}
          </span>
        </div>
        <div className="text-[10px] text-slate-300 font-mono flex items-center gap-1.5">
          <span>R{timer.currentRound}/{timer.totalRounds}</span>
          <span>&bull;</span>
          <span className="text-cyan-300 group-hover:underline flex items-center gap-0.5">
            Return to timer
            <span className="material-symbols-outlined text-[12px]">open_in_new</span>
          </span>
        </div>
      </div>
    </aside>
  );
}
