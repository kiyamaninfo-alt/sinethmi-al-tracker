import { useEffect, useRef } from 'react';
import { playClickSound, getAudioCtx } from '../constants/clickSound';

const INTERACTIVES = 'button, a, input, select, textarea, label, [role="button"], [data-interactive="true"]';

export function useGlobalFeedbackAudio(notificationSettings) {
  const lastAudioRef = useRef(0);
  const lastHapticRef = useRef(0);

  useEffect(() => {
    const isMaster = notificationSettings?.masterEnabled !== false;
    const isKey = isMaster && notificationSettings?.keySoundEnabled !== false;
    const isClick = isMaster && notificationSettings?.clickSoundEnabled !== false;
    const isVibrate = isMaster && notificationSettings?.vibrateEnabled !== false;

    if (!isMaster) return;

    const handleKeyDown = (e) => {
      if (!isKey) return;
      if (['Control', 'Shift', 'Alt', 'Meta', 'CapsLock', 'Tab'].includes(e.key)) return;
      playClickSound('key');
    };

    const handleInteractiveClick = (e) => {
      const target = e.target;
      if (!target?.closest) return;
      const el = target.closest(INTERACTIVES);
      if (!el) return;

      const now = Date.now();
      if (isClick && now - lastAudioRef.current > 70) {
        lastAudioRef.current = now;
        playClickSound('subtle');
      }
      if (isVibrate && now - lastHapticRef.current > 70) {
        lastHapticRef.current = now;
        if ('vibrate' in navigator) {
          try { navigator.vibrate(25); } catch (_) {}
        }
      }
    };

    const unlockAudio = () => getAudioCtx();

    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('click', handleInteractiveClick, true);
    window.addEventListener('pointerdown', unlockAudio, { once: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('click', handleInteractiveClick, true);
      window.removeEventListener('pointerdown', unlockAudio);
    };
  }, [
    notificationSettings?.masterEnabled,
    notificationSettings?.keySoundEnabled,
    notificationSettings?.clickSoundEnabled,
    notificationSettings?.vibrateEnabled
  ]);
}
