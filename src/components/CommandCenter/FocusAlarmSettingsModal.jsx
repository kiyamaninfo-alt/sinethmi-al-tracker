import { DEFAULT_ALARM_SETTINGS } from '../../constants/alarmSettings';
import StudyTechniqueSelector from '../ProfileSetup/StudyTechniqueSelector';
import AlarmDurationAndColor from '../ProfileSetup/AlarmDurationAndColor';
import AlarmMediaSettingsGrid from '../ProfileSetup/AlarmMediaSettingsGrid';

export default function FocusAlarmSettingsModal({ isOpen, onClose, settings = {}, onChange }) {
  if (!isOpen) return null;
  const current = { ...DEFAULT_ALARM_SETTINGS, ...settings };
  const update = (key, val) => onChange({ ...current, [key]: val });

  const handleSelectTechnique = (tech) => {
    const brkNum = tech.breakMinutes || parseInt(tech.breakTime, 10) || 10;
    onChange({
      ...current,
      selectedTechnique: tech.id,
      durationMinutes: tech.minutes,
      breakMinutes: `${brkNum}m`,
      rounds: tech.rounds
    });
  };

  const handleApplyManual = (dur, interval, rnd) => {
    onChange({
      ...current,
      selectedTechnique: 'manual',
      durationMinutes: dur,
      breakMinutes: `${interval}m`,
      rounds: rnd
    });
  };

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#070e1c] border border-cyan-500/40 shadow-2xl p-4 sm:p-6 space-y-4 overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-cyan-400 text-[24px]">timer</span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">Focus Alarm &amp; Session Telemetry</h3>
              <p className="text-xs text-slate-300">Configure Pomodoro/Flow protocol, duration, ambient audio &amp; alarm</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex text-xs font-mono px-3 py-1 rounded-lg bg-surface-container-high/80 border border-outline-variant/40 items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 font-bold">{current.durationMinutes}m &bull; {current.breakMinutes || '10m'} &bull; {current.rounds || 3}x</span>
            </div>
            <button type="button" onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer" title="Close">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-1">
          <StudyTechniqueSelector selectedTechnique={current.selectedTechnique} onSelectTechnique={handleSelectTechnique} />
          <AlarmDurationAndColor
            duration={current.durationMinutes} interval={parseInt(current.breakMinutes, 10) || 10}
            rounds={current.rounds} color={current.timerColor} isCustom={current.selectedTechnique === 'manual'}
            onApplyManual={handleApplyManual} onChangeColor={(col) => update('timerColor', col)}
          />
          <AlarmMediaSettingsGrid current={current} update={update} />
        </div>

        <div className="pt-3 border-t border-cyan-500/20 flex items-center justify-end">
          <button type="button" onClick={onClose} className="px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-cyan-500 text-slate-950 text-xs font-bold shadow-md hover:brightness-110 active:scale-95 cursor-pointer">
            Done &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
