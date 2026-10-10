import { useEffect, useRef } from 'react';
import { getTimerMessages } from '../../constants/timerMessages';

export default function AlarmAlertModal({ message, onConfirm, language = 'si' }) {
  const msgs = getTimerMessages(language);
  const onConfirmRef = useRef(onConfirm);

  useEffect(() => {
    onConfirmRef.current = onConfirm;
  }, [onConfirm]);

  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onConfirmRef.current?.();
    }, 10000);
    return () => clearTimeout(timer);
  }, [message]);

  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0b1020] border border-cyan-400/50 rounded-2xl max-w-sm w-full p-5 text-center space-y-4 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center border bg-rose-500/20 border-rose-400/50 text-rose-300 animate-pulse">
          <span className="material-symbols-outlined text-[28px]">alarm</span>
        </div>

        <div>
          <h4 className="text-base font-bold text-white font-sans">
            {msgs.sessionCompleted}
          </h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed font-medium">
            {message}
          </p>
          <span className="text-[10px] text-amber-300 font-mono mt-1 block">Auto-dismisses in 10s</span>
        </div>

        <button
          type="button"
          onClick={onConfirm}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/20 hover:brightness-110 active:scale-95 transition cursor-pointer font-sans"
        >
          {msgs.stopAlarmBtn}
        </button>
      </div>
    </div>
  );
}
