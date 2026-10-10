import { useCandidateProfile } from '../../hooks/useCandidateProfile';
import { useFocusTimerLogic } from '../../hooks/useFocusTimerLogic';
import { useSubjectLessonSelection } from '../../hooks/useSubjectLessonSelection';
import FocusTimerHeader from './FocusTimerHeader';
import SubjectLessonDisplay from './SubjectLessonDisplay';
import TimerGauge from './TimerGauge';
import TimerControls from './TimerControls';
import VideoFocusPopup from './VideoFocusPopup';
import AlarmAlertModal from './AlarmAlertModal';
import SessionConfirmModal from './SessionConfirmModal';

export default function DeepFocusTimer() {
  const profile = useCandidateProfile();
  const timer = useFocusTimerLogic(profile?.alarmSettings || {});
  const subjects = profile?.subjects || [];
  const { openModal, renderModal } = useSubjectLessonSelection(timer);

  return (
    <section id="deep-focus-timer" className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between scroll-mt-24">
      <FocusTimerHeader isMuted={timer.isMuted} onToggleMute={() => timer.setIsMuted(!timer.isMuted)} />

      <SubjectLessonDisplay
        subjects={subjects}
        selectedSubjectId={timer.selectedSubjectId}
        selectedLessonId={timer.selectedLessonId}
        onChangeClick={openModal}
      />

      <div className="my-5 flex flex-col items-center justify-center">
        <TimerGauge
          secondsLeft={timer.secondsLeft}
          totalSeconds={timer.totalSeconds}
          isActive={timer.isActive}
          isPaused={timer.isPaused}
          sessionMode={timer.sessionMode}
          currentRound={timer.currentRound}
          totalRounds={timer.totalRounds}
        />

        <TimerControls
          isActive={timer.isActive}
          isPaused={timer.isPaused}
          sessionMode={timer.sessionMode}
          canStart={true}
          onStart={openModal}
          onPause={timer.handlePause}
          onResume={timer.handleResume}
          onReset={timer.handleReset}
        />
      </div>

      {timer.showVideo && (
        <VideoFocusPopup
          videoUrl={timer.videoUrl}
          isPaused={timer.isPaused}
          secondsLeft={timer.secondsLeft}
          sessionMode={timer.sessionMode}
          onClose={() => { timer.setShowVideo(false); timer.handlePause(); }}
          onTogglePause={() => (timer.isPaused ? timer.handleResume() : timer.handlePause())}
        />
      )}

      <AlarmAlertModal
        message={timer.modalAlert}
        isPreAlarm={timer.isPreAlarm}
        onConfirm={() => timer.setModalAlert(null)}
      />

      {timer.pendingNextRound && (
        <SessionConfirmModal round={timer.pendingNextRound} onConfirm={timer.handleConfirmNextRound} onCancel={timer.handleCancelNextRound} />
      )}

      {renderModal(subjects)}
    </section>
  );
}
