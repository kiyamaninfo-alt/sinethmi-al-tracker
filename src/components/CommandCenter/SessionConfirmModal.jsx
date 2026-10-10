export default function SessionConfirmModal({ round, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0b1020] border border-cyan-400/40 rounded-2xl max-w-sm w-full p-5 text-center space-y-4 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center bg-cyan-500/20 border border-cyan-400 text-cyan-300">
          <span className="material-symbols-outlined text-[28px]">sports_score</span>
        </div>

        <div>
          <h4 className="text-base font-bold text-white">Next Round Telemetry</h4>
          <p className="text-xs text-slate-300 mt-1 font-medium">
            Are you ready for round {round}?
          </p>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">
            Break finished. New focus session is queued.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-2 rounded-xl bg-surface-container border border-white/10 text-slate-300 text-xs font-mono font-bold hover:bg-white/10 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-2 rounded-xl bg-cyan-400 text-slate-950 text-xs font-mono font-bold shadow-md shadow-cyan-400/20 hover:brightness-110 cursor-pointer"
          >
            Start Round {round}
          </button>
        </div>
      </div>
    </div>
  );
}
