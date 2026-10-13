import { useState } from 'react';
import { useGlobalFocusTimer } from '../../context/FocusTimerContext';
import { useSubjectLessonSelection } from '../../hooks/useSubjectLessonSelection';
import FocusTimerHeader from './FocusTimerHeader';
import SubjectLessonDisplay from './SubjectLessonDisplay';
import TimerGauge from './TimerGauge';
import TimerControls from './TimerControls';
import VideoFocusPopup from './VideoFocusPopup';
import AlarmAlertModal from './AlarmAlertModal';
import SessionConfirmModal from './SessionConfirmModal';
import VideoClosePromptModal from './VideoClosePromptModal';
import FocusAlarmSettingsModal from './FocusAlarmSettingsModal';

export default function DeepFocusTimer() {
  const { timer, profile } = useGlobalFocusTimer();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const subjects = profile?.subjects || [];
  const { openModal, renderModal } = useSubjectLessonSelection(timer);

  const handleAlarmSettingsChange = (newAlarmSettings) => {
    if (profile?.updateProfile) {
      profile.updateProfile((prev) => ({ ...prev, alarmSettings: newAlarmSettings }));
    }
  };

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
          canStart={true} onStart={openModal} onPause={timer.handlePause}
          onResume={timer.handleResume} onReset={timer.handleReset}
        />
      </div>

      {timer.showVideo && (
        <VideoFocusPopup
          videoUrl={timer.videoUrl} isPaused={timer.isPaused} secondsLeft={timer.secondsLeft}
          sessionMode={timer.sessionMode} language={timer.language}
          onClose={timer.handleRequestCloseVideo}
          onTogglePause={() => (timer.isPaused ? timer.handleResume() : timer.handlePause())}
        />
      )}

      <VideoClosePromptModal
        isOpen={timer.promptCloseVideo} onYes={timer.handleConfirmCloseVideo}
        onNo={timer.handleCancelCloseVideo} language={timer.language}
      />

      <AlarmAlertModal message={timer.modalAlert} onConfirm={timer.stopAlarm} language={timer.language} />

      {timer.pendingNextRound && (
        <SessionConfirmModal round={timer.pendingNextRound} onConfirm={timer.handleConfirmNextRound} onCancel={timer.handleCancelNextRound} language={timer.language} />
      )}
      {renderModal(subjects)}
      <FocusAlarmSettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} settings={profile?.alarmSettings || {}} onChange={handleAlarmSettingsChange} />
    </section>
  );
}
