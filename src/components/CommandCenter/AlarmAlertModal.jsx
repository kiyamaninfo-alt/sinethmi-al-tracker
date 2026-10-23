import { useEffect, useState, useRef } from 'react';
import { getTimerMessages } from '../../constants/timerMessages';

function AlarmAlertModalContent({ message, onConfirm, onRestart, language = 'si' }) {
  const msgs = getTimerMessages(language);
  const onConfirmRef = useRef(onConfirm);
  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => { onConfirmRef.current = onConfirm; }, [onConfirm]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(interval);
          onConfirmRef.current?.();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0b1020] border border-cyan-400/50 rounded-2xl max-w-sm w-full p-5 text-center space-y-4 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center border bg-cyan-500/20 border-cyan-400/50 text-cyan-300 animate-pulse">
          <span className="material-symbols-outlined text-[28px]">notifications_active</span>
        </div>
        <div>
          <h4 className="text-base font-bold text-white font-sans">{msgs.sessionCompleted}</h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed font-medium">{message}</p>
          <span className="text-[10px] text-amber-300 font-mono mt-1.5 block">
            Auto-stops in {secondsLeft}s
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          {onRestart && (
            <button
              type="button"
              onClick={onRestart}
              className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-neon-violet to-neon-cyan text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-95 transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[15px]">restart_alt</span>
              <span>{msgs.restartSessionBtn || 'Restart'}</span>
            </button>
          )}
          <button
            type="button"
            onClick={onConfirm}
            className={`py-2.5 px-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-slate-200 font-bold text-xs uppercase tracking-wider active:scale-95 transition cursor-pointer flex items-center justify-center gap-1.5 ${!onRestart ? 'col-span-2' : ''}`}
          >
            <span className="material-symbols-outlined text-[15px]">close</span>
            <span>{msgs.stopAlarmBtn || 'Dismiss'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AlarmAlertModal(props) {
  if (!props.message) return null;
  return <AlarmAlertModalContent key={props.message} {...props} />;
}
