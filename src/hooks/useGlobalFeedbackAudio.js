import { useEffect } from 'react';
import { playClickSound, getAudioCtx } from '../constants/clickSound';

export function useGlobalFeedbackAudio(notificationSettings) {
  useEffect(() => {
    const isKeySoundActive = notificationSettings?.masterEnabled !== false &&
      notificationSettings?.keySoundEnabled !== false;

    if (!isKeySoundActive) return;

    const handleKeyDown = (e) => {
      // Don't trigger on meta / control / shift / alt alone
      if (['Control', 'Shift', 'Alt', 'Meta', 'CapsLock', 'Tab'].includes(e.key)) return;
      playClickSound('key');
    };

    const handlePointerDown = () => {
      // Unlock AudioContext on initial user gesture if suspended
      getAudioCtx();
    };

    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('pointerdown', handlePointerDown, { once: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [notificationSettings?.masterEnabled, notificationSettings?.keySoundEnabled]);
}
