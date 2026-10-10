import { getTimerMessages } from '../../constants/timerMessages';

export default function VideoClosePromptModal({ isOpen, onYes, onNo, language = 'si' }) {
  if (!isOpen) return null;
  const msgs = getTimerMessages(language);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0b1020] border border-cyan-400/40 rounded-2xl max-w-sm w-full p-5 text-center space-y-4 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center bg-cyan-500/20 border border-cyan-400 text-cyan-300">
          <span className="material-symbols-outlined text-[28px]">videocam_off</span>
        </div>

        <div>
          <h4 className="text-base font-bold text-white font-sans">
            {language === 'si' ? 'වීඩියෝව වැසීම' : 'Close Video'}
          </h4>
          <p className="text-xs text-slate-200 mt-2 font-medium leading-relaxed font-sans">
            {msgs.continueWithoutVideoPrompt}
          </p>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={onNo}
            className="flex-1 py-2.5 rounded-xl bg-surface-container border border-white/10 text-slate-300 text-xs font-bold hover:bg-white/10 cursor-pointer font-sans"
          >
            {msgs.noBtn}
          </button>
          <button
            type="button"
            onClick={onYes}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 text-xs font-bold shadow-md shadow-cyan-400/20 hover:brightness-110 cursor-pointer font-sans"
          >
            {msgs.yesBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
