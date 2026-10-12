let audioCtx = null;
let activeLoopNode = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function playAlarmTone(type = 'radar_ping', duration = 0.5) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;
    if (type === 'cyber_chime') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1760, now + duration);
    } else if (type === 'zen_bell') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, now);
    } else if (type === 'lofi_synth') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(330, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + duration);
    } else if (type === 'pulse_alarm') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(880, now + duration / 2);
    } else {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + duration);
    }
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration);
  } catch (err) {}
}

export function startAlarmLoop(type = 'pulse_alarm') {
  stopAlarmLoop();
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type === 'zen_bell' ? 'sine' : type === 'lofi_synth' ? 'triangle' : type === 'cyber_chime' ? 'triangle' : 'sawtooth';
    osc.frequency.setValueAtTime(type === 'lofi_synth' ? 330 : 660, ctx.currentTime);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    activeLoopNode = { osc, gain, ctx };
  } catch (e) {}
}

export function stopAlarmLoop() {
  if (activeLoopNode) {
    try {
      activeLoopNode.gain.gain.setValueAtTime(0.001, activeLoopNode.ctx.currentTime);
      activeLoopNode.osc.stop();
    } catch (e) {}
    activeLoopNode = null;
  }
}
