import VideoFocusPopup from './VideoFocusPopup';
import AlarmAlertModal from './AlarmAlertModal';
import SessionConfirmModal from './SessionConfirmModal';
import VideoClosePromptModal from './VideoClosePromptModal';
import FocusAlarmSettingsModal from './FocusAlarmSettingsModal';

export default function FocusTimerModals({
  timer,
  profile,
  subjects,
  isSettingsOpen,
  setIsSettingsOpen,
  onAlarmSettingsChange,
  renderModal
}) {
  return (
    <>
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

      <AlarmAlertModal message={timer.modalAlert} onConfirm={timer.stopAlarm} onRestart={timer.handleRestart} language={timer.language} />

      {timer.pendingNextRound && (
        <SessionConfirmModal round={timer.pendingNextRound} onConfirm={timer.handleConfirmNextRound} onCancel={timer.handleCancelNextRound} language={timer.language} />
      )}
      {renderModal(subjects)}
      <FocusAlarmSettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} settings={profile?.alarmSettings || {}} onChange={onAlarmSettingsChange} />
    </>
  );
}
