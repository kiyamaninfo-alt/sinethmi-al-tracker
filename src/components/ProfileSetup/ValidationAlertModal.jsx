export default function ValidationAlertModal({ errors, onClose, onFocusFirstError }) {
  if (!errors || Object.keys(errors).length === 0) return null;

  const errorList = Object.entries(errors);

  const handleFix = () => {
    if (onFocusFirstError) onFocusFirstError();
    onClose();
  };

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="w-full max-w-lg rounded-2xl bg-[#090d19] border-2 border-rose-500/80 p-6 shadow-[0_0_50px_rgba(244,63,94,0.35)] space-y-4">
        <div className="flex items-start gap-3 border-b border-rose-500/20 pb-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0 text-rose-400">
            <span className="material-symbols-outlined text-[24px]">error</span>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              අනිවාර්ය තොරතුරු සම්පූර්ණ කරන්න
            </h3>
            <p className="text-xs text-rose-300 font-mono">
              Please complete all mandatory parameters to activate Mission Control.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="space-y-2">
          {errorList.map(([key, msg]) => (
            <div
              key={key}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-200 text-xs leading-relaxed"
            >
              <span className="material-symbols-outlined text-rose-400 text-[18px] shrink-0 mt-0.5">
                priority_high
              </span>
              <span>{msg}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handleFix}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white text-xs font-bold font-mono tracking-wide shadow-lg shadow-rose-950/50 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
          >
            <span>තොරතුරු නිවැරදි කරන්න (Fix Now)</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
