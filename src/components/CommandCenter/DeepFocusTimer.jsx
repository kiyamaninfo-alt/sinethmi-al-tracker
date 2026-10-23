import { useState } from 'react';
import { useGlobalFocusTimer } from '../../context/FocusTimerContext';
import { useSubjectLessonSelection } from '../../hooks/useSubjectLessonSelection';
import { MOCK_100_SUBJECTS } from '../../constants/streamSubjects';
import FocusTimerHeader from './FocusTimerHeader';
import SubjectLessonDisplay from './SubjectLessonDisplay';
import TimerGauge from './TimerGauge';
import TimerControls from './TimerControls';
import FocusTimerModals from './FocusTimerModals';

export default function DeepFocusTimer() {
  const { timer, profile } = useGlobalFocusTimer();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const subjects = profile?.subjects?.length > 0 ? profile.subjects : MOCK_100_SUBJECTS.slice(0, 3);
  const { openModal, renderModal } = useSubjectLessonSelection(timer);
  const duration = Number(profile?.alarmSettings?.durationMinutes || 50);

  const handleStartProcess = () => {
    if (!timer.selectedSubjectId || !timer.selectedLessonId) {
      return openModal();
    }
    timer.startFocusSession(timer.selectedSubjectId, timer.selectedLessonId);
  };

  const updateAlarm = (updater) => profile?.updateProfile?.((p) => ({
    ...p, alarmSettings: typeof updater === 'function' ? updater(p.alarmSettings || {}) : updater
  }));

  return (
    <section id="deep-focus-timer" className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between scroll-mt-24">
      <FocusTimerHeader
        isMuted={timer.isMuted} onToggleMute={() => timer.setIsMuted(!timer.isMuted)}
        showVideoToggle={Boolean(timer.videoEnabled && timer.videoUrl && timer.isActive)}
        isVideoOpen={timer.showVideo} onToggleVideo={() => timer.setShowVideo(!timer.showVideo)}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />
      <SubjectLessonDisplay
        subjects={subjects} selectedSubjectId={timer.selectedSubjectId}
        selectedLessonId={timer.selectedLessonId} onChangeClick={openModal}
      />
      <div className="my-5 flex flex-col items-center justify-center">
        <TimerGauge
          secondsLeft={timer.secondsLeft} totalSeconds={timer.totalSeconds}
          isActive={timer.isActive} isPaused={timer.isPaused}
          sessionMode={timer.sessionMode} currentRound={timer.currentRound} totalRounds={timer.totalRounds}
        />
        <TimerControls
          isActive={timer.isActive} isPaused={timer.isPaused} sessionMode={timer.sessionMode}
          canStart={true} onStart={handleStartProcess} onPause={timer.handlePause}
          onResume={timer.handleResume} onReset={timer.handleReset}
          duration={duration} onSelectDuration={(m) => updateAlarm((prev) => ({ ...prev, durationMinutes: m }))}
        />
      </div>
      <FocusTimerModals
        timer={timer} profile={profile} subjects={subjects}
        isSettingsOpen={isSettingsOpen} setIsSettingsOpen={setIsSettingsOpen}
        onAlarmSettingsChange={(s) => updateAlarm(s)} renderModal={renderModal}
      />
    </section>
  );
}
