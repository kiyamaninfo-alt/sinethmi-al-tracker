import { useState } from 'react';

export default function DataBackupAndReset({ profile, onReset }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmInput, setConfirmInput] = useState('');

  const handleBackup = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(profile, null, 2));
    const dl = document.createElement('a');
    dl.setAttribute('href', dataStr);
    dl.setAttribute('download', `sinethmi_telemetry_backup_${new Date().toISOString().slice(0, 10)}.json`);
    dl.click();
  };

  const handleExecuteReset = () => {
    if (confirmInput.trim().toUpperCase() === 'RESET') {
      localStorage.clear();
      onReset();
      setShowConfirm(false);
      setConfirmInput('');
    }
  };

  return (
    <div className="pt-2 border-t border-outline-variant/20 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono text-outline">Candidate Data Safety</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleBackup}
            className="text-[11px] font-mono text-cyan-300 hover:text-cyan-200 underline decoration-cyan-400/40 flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[13px]">download</span>
            Backup JSON
          </button>
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="text-[11px] font-mono text-rose-400 hover:text-rose-300 underline decoration-rose-400/40 flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[13px]">restart_alt</span>
            Reset Data
          </button>
        </div>
      </div>

      {showConfirm && (
        <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 space-y-2 text-xs">
          <p className="text-[11px] text-rose-300 font-mono">
            Type <span className="font-bold underline">RESET</span> to confirm wiping local telemetry and offline profile.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={confirmInput}
              onChange={(e) => setConfirmInput(e.target.value)}
              placeholder="RESET"
              className="bg-surface-container border border-rose-400/50 rounded px-2.5 py-1 text-xs font-mono text-rose-300 focus:outline-none"
            />
            <button
              type="button"
              disabled={confirmInput.trim().toUpperCase() !== 'RESET'}
              onClick={handleExecuteReset}
              className="px-3 py-1 rounded bg-rose-500 text-white font-mono text-xs font-bold disabled:opacity-40 cursor-pointer"
            >
              Confirm Wipe
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
