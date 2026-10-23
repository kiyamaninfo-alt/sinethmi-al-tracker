import { useState, useRef } from 'react';
import { playAlarmTone, startAlarmLoop, stopAlarmLoop } from '../constants/soundPlayer';
import { resolveVideoUrl } from '../constants/timerUrlHelper';
import { recordStudySession } from '../services/studyActivityService';
import { useTimerCountdown } from './useTimerCountdown';
import { useVideoPopupState } from './useVideoPopupState';
import { useTimerLiveSettingsSync } from './useTimerLiveSettingsSync';
import { useTimerTabSync } from './useTimerTabSync';
import { useTimerAmbientSound } from './useTimerAmbientSound';

export function useFocusTimerLogic(alarmSettings = {}, preferences = {}) {
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [selectedLessonId, setSelectedLessonId] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(!alarmSettings.soundEnabled);
  const [sessionMode, setSessionMode] = useState('study');
  const [currentRound, setCurrentRound] = useState(1);
  const [modalAlert, setModalAlert] = useState(null);
  const [pendingNextRound, setPendingNextRound] = useState(null);
  const [showSubjectModal, setShowSubjectModal] = useState(false);
  const video = useVideoPopupState(isActive);
  const language = preferences.language || 'si';
  const durationMin = Number(alarmSettings.durationMinutes || alarmSettings.duration) || 50;
  const breakMin = parseInt(alarmSettings.breakMinutes || alarmSettings.interval, 10) || 10;
  const totalRounds = Number(alarmSettings.rounds) || 3;
  const [secondsLeft, setSecondsLeft] = useState(durationMin * 60);
  const preAlarmFired = useRef(false);
  const alarmTimeoutRef = useRef(null);
  const videoUrl = resolveVideoUrl(alarmSettings);

  useTimerLiveSettingsSync({ isActive, sessionMode, durationMin, breakMin, setSecondsLeft });
  useTimerTabSync({ isActive, isPaused, secondsLeft, sessionMode, currentRound, totalRounds });
  useTimerAmbientSound({ isActive, isPaused, sessionMode, isMuted, alarmSettings });

  const triggerSound = (dur = 0.5) => { if (!isMuted) playAlarmTone(alarmSettings.soundTrack || 'radar_ping', dur); };
  const stopAlarm = () => { if (alarmTimeoutRef.current) clearTimeout(alarmTimeoutRef.current); stopAlarmLoop(); setModalAlert(null); };
  const startAlarm = () => {
    if (alarmTimeoutRef.current) clearTimeout(alarmTimeoutRef.current);
    if (!isMuted) startAlarmLoop(alarmSettings.soundTrack || 'cyber_chime');
    alarmTimeoutRef.current = setTimeout(() => stopAlarm(), 60000);
  };
  const startFocusSession = (subId = selectedSubjectId, lesId = selectedLessonId) => {
    if (!subId || !lesId) { setShowSubjectModal(true); return; }
    setSelectedSubjectId(subId); setSelectedLessonId(lesId);
    setIsActive(true); setIsPaused(false); preAlarmFired.current = false;
    if (alarmSettings.videoEnabled && videoUrl) video.setShowVideo(true); triggerSound(0.3);
  };
  const resetState = (active = false) => {
    stopAlarm(); setIsActive(active); setIsPaused(false); setSessionMode('study');
    setCurrentRound(1); setSecondsLeft(durationMin * 60); preAlarmFired.current = false;
    if (!active) { setSelectedSubjectId(''); setSelectedLessonId(''); video.setShowVideo(false); }
    else if (alarmSettings.videoEnabled && videoUrl) video.setShowVideo(true);
  };

  useTimerCountdown({
    isActive, isPaused, sessionMode, setSessionMode, currentRound, totalRounds,
    durationMin, breakMin, setSecondsLeft, preAlarmFired, triggerSound, startAlarm,
    setModalAlert, setIsPaused, setIsActive, setPendingNextRound, setShowVideo: video.setShowVideo, language,
    onStudyCompleted: () => recordStudySession({ subjectId: selectedSubjectId, lessonId: selectedLessonId, durationMinutes: durationMin, roundNumber: currentRound })
  });

  return {
    selectedSubjectId, setSelectedSubjectId, selectedLessonId, setSelectedLessonId,
    isActive, isPaused, isMuted, setIsMuted, sessionMode, currentRound, totalRounds,
    secondsLeft, totalSeconds: (sessionMode === 'study' ? durationMin : breakMin) * 60,
    modalAlert, setModalAlert, pendingNextRound, videoUrl, showSubjectModal, setShowSubjectModal,
    language, videoEnabled: alarmSettings.videoEnabled, startFocusSession, stopAlarm, ...video,
    handleStart: () => (!selectedSubjectId || !selectedLessonId ? setShowSubjectModal(true) : startFocusSession()),
    handleReset: () => resetState(false), handleRestart: () => { resetState(true); triggerSound(0.3); },
    handlePause: () => setIsPaused(true), handleResume: () => { setIsPaused(false); triggerSound(0.2); },
    handleConfirmNextRound: () => {
      stopAlarm(); setCurrentRound(pendingNextRound); setPendingNextRound(null); setSessionMode('study');
      setSecondsLeft(durationMin * 60); preAlarmFired.current = false; setIsPaused(false); triggerSound(0.4);
    }, handleCancelNextRound: () => { stopAlarm(); setPendingNextRound(null); resetState(false); }
  };
}
