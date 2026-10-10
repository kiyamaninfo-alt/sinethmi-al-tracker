import { useState, useRef } from 'react';
import { playAlarmTone, startAlarmLoop, stopAlarmLoop } from '../constants/soundPlayer';
import { resolveVideoUrl } from '../constants/timerUrlHelper';
import { useTimerCountdown } from './useTimerCountdown';

export function useFocusTimerLogic(alarmSettings = {}, preferences = {}) {
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [selectedLessonId, setSelectedLessonId] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(!alarmSettings.soundEnabled);
  const [sessionMode, setSessionMode] = useState('study');
  const [currentRound, setCurrentRound] = useState(1);
  const [modalAlert, setModalAlert] = useState(null);
  const [isPreAlarm, setIsPreAlarm] = useState(false);
  const [pendingNextRound, setPendingNextRound] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [showSubjectModal, setShowSubjectModal] = useState(false);

  const language = preferences.language || 'si';
  const durationMin = Number(alarmSettings.durationMinutes) || 50;
  const breakMin = parseInt(alarmSettings.breakMinutes, 10) || 10;
  const totalRounds = Number(alarmSettings.rounds) || 3;
  const [secondsLeft, setSecondsLeft] = useState(durationMin * 60);
  const preAlarmFired = useRef(false);
  const videoUrl = resolveVideoUrl(alarmSettings);

  const triggerSound = (dur = 0.5) => {
    if (!isMuted) playAlarmTone(alarmSettings.soundTrack || 'radar_ping', dur);
  };
  const startAlarm = () => { if (!isMuted) startAlarmLoop(alarmSettings.soundTrack || 'pulse_alarm'); };
  const stopAlarm = () => { stopAlarmLoop(); setModalAlert(null); };

  const startFocusSession = (subId = selectedSubjectId, lesId = selectedLessonId) => {
    if (!subId || !lesId) return;
    setIsActive(true); setIsPaused(false); preAlarmFired.current = false;
    if (alarmSettings.videoEnabled && videoUrl) setShowVideo(true);
    triggerSound(0.3);
  };

  const handleReset = () => {
    stopAlarmLoop(); setIsActive(false); setIsPaused(false); setSelectedSubjectId('');
    setSelectedLessonId(''); setSessionMode('study'); setCurrentRound(1);
    setSecondsLeft(durationMin * 60); preAlarmFired.current = false; setShowVideo(false);
  };

  const handleResume = () => {
    setIsPaused(false);
    if (alarmSettings.videoEnabled && videoUrl) setShowVideo(true);
    triggerSound(0.2);
  };

  useTimerCountdown({
    isActive, isPaused, sessionMode, setSessionMode, currentRound, totalRounds,
    durationMin, breakMin, setSecondsLeft, preAlarmFired, triggerSound, startAlarm,
    setIsPreAlarm, setModalAlert, setIsPaused, setIsActive, setPendingNextRound, language
  });

  const handleConfirmNextRound = () => {
    setCurrentRound(pendingNextRound); setPendingNextRound(null); setSessionMode('study');
    setSecondsLeft(durationMin * 60); preAlarmFired.current = false; setIsPaused(false);
    if (alarmSettings.videoEnabled && videoUrl) setShowVideo(true);
    triggerSound(0.4);
  };

  return {
    selectedSubjectId, setSelectedSubjectId, selectedLessonId, setSelectedLessonId,
    isActive, isPaused, isMuted, setIsMuted, sessionMode, currentRound, totalRounds,
    secondsLeft, totalSeconds: (sessionMode === 'study' ? durationMin : breakMin) * 60,
    modalAlert, setModalAlert, isPreAlarm, pendingNextRound, handleConfirmNextRound,
    handleCancelNextRound: () => { setPendingNextRound(null); handleReset(); },
    showVideo, setShowVideo, videoUrl, showSubjectModal, setShowSubjectModal, language,
    handleStart: () => (!selectedSubjectId || !selectedLessonId ? setShowSubjectModal(true) : startFocusSession()),
    startFocusSession, handleReset, handlePause: () => setIsPaused(true), handleResume, stopAlarm
  };
}
