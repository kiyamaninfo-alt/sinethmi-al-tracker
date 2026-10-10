import { DEFAULT_ALARM_SETTINGS } from '../../constants/alarmSettings';
import StudyTechniqueSelector from './StudyTechniqueSelector';
import AlarmDurationAndColor from './AlarmDurationAndColor';
import AlarmMediaSettingsGrid from './AlarmMediaSettingsGrid';

export default function AlarmSettingsCard({ settings = {}, onChange }) {
  const current = { ...DEFAULT_ALARM_SETTINGS, ...settings };

  const update = (key, val) => {
    onChange({ ...current, [key]: val });
  };

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
    <div className="rounded-xl bg-surface-container-low/80 border border-outline-variant/30 p-5 space-y-4 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/20 pb-3">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-400 text-[18px]">timer</span>
            Focus Alarm &amp; Session Telemetry
          </h3>
          <p className="text-xs text-slate-300">Select Pomodoro/Flow protocol or set manual duration, interval &amp; rounds</p>
        </div>
        <div className="text-xs font-mono px-3 py-1 rounded-lg bg-surface-container-high/80 border border-outline-variant/40 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300 font-bold">
            {current.durationMinutes}m &bull; {current.breakMinutes || '10m'} break &bull; {current.rounds || 3}x
          </span>
        </div>
      </div>

      <StudyTechniqueSelector
        selectedTechnique={current.selectedTechnique}
        onSelectTechnique={handleSelectTechnique}
      />

      <AlarmDurationAndColor
        duration={current.durationMinutes}
        interval={parseInt(current.breakMinutes, 10) || 10}
        rounds={current.rounds}
        color={current.timerColor}
        isCustom={current.selectedTechnique === 'manual'}
        onApplyManual={handleApplyManual}
        onChangeColor={(col) => update('timerColor', col)}
      />

      <AlarmMediaSettingsGrid current={current} update={update} />
    </div>
  );
}
