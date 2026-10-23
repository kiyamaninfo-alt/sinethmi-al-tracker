let audioCtx = null;
let activeLoopNode = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioCtx = new AudioCtx();
  }
  if (audioCtx?.state === 'suspended') audioCtx.resume().catch(() => {});
  return audioCtx;
}

function playSoftChime(ctx) {
  if (!ctx) return;
  const now = ctx.currentTime;
  [587.33, 880, 1174.66].forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const start = now + idx * 0.12;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, start);
    gain.gain.setValueAtTime(0.001, start);
    gain.gain.linearRampToValueAtTime(0.2 / (idx + 1), start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 1.8);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + 1.85);
  });
}

export function playAlarmTone(type = 'radar_ping', duration = 0.5) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (type === 'cyber_chime' || type === 'zen_bell') return playSoftChime(ctx);
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;
    osc.type = type === 'lofi_synth' ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(type === 'lofi_synth' ? 440 : 659.25, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + duration);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration);
  } catch {
    return;
  }
}

export function startAlarmLoop() {
  stopAlarmLoop();
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    playSoftChime(ctx);
    const intervalId = setInterval(() => { const c = getAudioContext(); if (c) playSoftChime(c); }, 2800);
    const timeoutId = setTimeout(() => stopAlarmLoop(), 60000);
    activeLoopNode = { intervalId, timeoutId };
  } catch {
    return;
  }
}

export function stopAlarmLoop() {
  if (activeLoopNode) {
    if (activeLoopNode.intervalId) clearInterval(activeLoopNode.intervalId);
    if (activeLoopNode.timeoutId) clearTimeout(activeLoopNode.timeoutId);
    activeLoopNode = null;
  }
}
