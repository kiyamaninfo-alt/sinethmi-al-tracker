import { useState, useRef } from 'react';
import { playAlarmTone, startAlarmLoop, stopAlarmLoop } from '../constants/soundPlayer';
import { resolveVideoUrl } from '../constants/timerUrlHelper';
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
  const durationMin = Number(alarmSettings.durationMinutes) || 50;
  const breakMin = parseInt(alarmSettings.breakMinutes, 10) || 10;
  const totalRounds = Number(alarmSettings.rounds) || 3;
  const [secondsLeft, setSecondsLeft] = useState(durationMin * 60);
  const preAlarmFired = useRef(false);
  const videoUrl = resolveVideoUrl(alarmSettings);

  useTimerLiveSettingsSync({ isActive, sessionMode, durationMin, breakMin, setSecondsLeft });
  useTimerTabSync({ isActive, isPaused, secondsLeft, sessionMode, currentRound, totalRounds });
  useTimerAmbientSound({ isActive, isPaused, sessionMode, isMuted, alarmSettings });

  const triggerSound = (dur = 0.5) => { if (!isMuted) playAlarmTone(alarmSettings.soundTrack || 'radar_ping', dur); };
  const startAlarm = () => { if (!isMuted) startAlarmLoop(alarmSettings.soundTrack || 'pulse_alarm'); };
  const stopAlarm = () => { stopAlarmLoop(); setModalAlert(null); };

  const startFocusSession = (subId = selectedSubjectId, lesId = selectedLessonId) => {
    if (!subId || !lesId) return;
    setIsActive(true); setIsPaused(false); preAlarmFired.current = false;
    if (alarmSettings.videoEnabled && videoUrl) video.setShowVideo(true);
    triggerSound(0.3);
  };

  const handleReset = () => {
    stopAlarmLoop(); setIsActive(false); setIsPaused(false); setSelectedSubjectId('');
    setSelectedLessonId(''); setSessionMode('study'); setCurrentRound(1);
    setSecondsLeft(durationMin * 60); preAlarmFired.current = false; video.setShowVideo(false);
  };

  const handleResume = () => {
    setIsPaused(false);
    if (alarmSettings.videoEnabled && videoUrl && !video.promptCloseVideo) video.setShowVideo(true); triggerSound(0.2);
  };

  useTimerCountdown({
    isActive, isPaused, sessionMode, setSessionMode, currentRound, totalRounds,
    durationMin, breakMin, setSecondsLeft, preAlarmFired, triggerSound, startAlarm,
    setModalAlert, setIsPaused, setIsActive, setPendingNextRound, setShowVideo: video.setShowVideo, language
  });

  const handleConfirmNextRound = () => {
    stopAlarmLoop(); setCurrentRound(pendingNextRound); setPendingNextRound(null);
    setSessionMode('study'); setSecondsLeft(durationMin * 60); preAlarmFired.current = false;
    setIsPaused(false); if (alarmSettings.videoEnabled && videoUrl) video.setShowVideo(true); triggerSound(0.4);
  };

  return {
    selectedSubjectId, setSelectedSubjectId, selectedLessonId, setSelectedLessonId,
    isActive, isPaused, isMuted, setIsMuted, sessionMode, currentRound, totalRounds,
    secondsLeft, totalSeconds: (sessionMode === 'study' ? durationMin : breakMin) * 60,
    modalAlert, setModalAlert, pendingNextRound, handleConfirmNextRound,
    handleCancelNextRound: () => { stopAlarmLoop(); setPendingNextRound(null); handleReset(); },
    videoUrl, showSubjectModal, setShowSubjectModal, language, videoEnabled: alarmSettings.videoEnabled,
    handleStart: () => (!selectedSubjectId || !selectedLessonId ? setShowSubjectModal(true) : startFocusSession()),
    startFocusSession, handleReset, handlePause: () => setIsPaused(true), handleResume, stopAlarm, ...video
  };
}
