export default function AlarmAlertModal({ message, isPreAlarm, onConfirm }) {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0b1020] border border-cyan-400/50 rounded-2xl max-w-sm w-full p-5 text-center space-y-4 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div className={`w-12 h-12 rounded-2xl mx-auto flex items-center justify-center border ${
          isPreAlarm
            ? 'bg-amber-500/20 border-amber-400/50 text-amber-300 animate-bounce'
            : 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 animate-pulse'
        }`}>
          <span className="material-symbols-outlined text-[28px]">
            {isPreAlarm ? 'timer_10' : 'alarm_on'}
          </span>
        </div>

        <div>
          <h4 className="text-base font-bold text-white">
            {isPreAlarm ? '10 Seconds Remaining!' : 'Session Interval Alert'}
          </h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed font-medium">
            {message}
          </p>
        </div>

        <button
          type="button"
          onClick={onConfirm}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-mono font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-95 transition cursor-pointer"
        >
          OK (Stop Alarm)
        </button>
      </div>
    </div>
  );
}
