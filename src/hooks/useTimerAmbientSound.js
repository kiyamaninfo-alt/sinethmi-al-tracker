import { useEffect } from 'react';
import { startAmbientNoise, stopAmbientNoise } from '../constants/ambientNoisePlayer';

export function useTimerAmbientSound({
  isActive,
  isPaused,
  sessionMode,
  isMuted,
  alarmSettings = {}
}) {
  const ambientEnabled = alarmSettings.ambientNoiseEnabled !== false;
  const track = alarmSettings.ambientNoiseTrack || 'brown';
  const videoActive = Boolean(alarmSettings.videoEnabled);

  useEffect(() => {
    // Only play ambient noise during active, non-paused study sessions when not muted and video is not playing
    const shouldPlay = isActive && !isPaused && sessionMode === 'study' && !isMuted && !videoActive && ambientEnabled;
    if (shouldPlay) {
      startAmbientNoise(track, 0.28);
    } else {
      stopAmbientNoise();
    }

    return () => {
      stopAmbientNoise();
    };
  }, [isActive, isPaused, sessionMode, isMuted, videoActive, ambientEnabled, track]);
}
