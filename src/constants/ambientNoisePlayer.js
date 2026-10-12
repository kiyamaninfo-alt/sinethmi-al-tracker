export const AMBIENT_NOISE_OPTIONS = [
  { id: 'none', name: 'No Ambient Sound (නිහඬ)', sinhala: 'අක්‍රියයි', icon: 'volume_off' },
  { id: 'brown', name: 'Brown Noise (දුඹුරු ඝෝෂාව)', sinhala: 'දුඹුරු ඝෝෂාව (ගැඹුරු සමාධිය)', icon: 'waves' },
  { id: 'pink', name: 'Pink Noise (රෝස ඝෝෂාව)', sinhala: 'රෝස ඝෝෂාව (මනා අවධානය)', icon: 'graphic_eq' },
  { id: 'white', name: 'White Noise (සුදු ඝෝෂාව)', sinhala: 'සුදු ඝෝෂාව (බාහිර ශබ්ද ආවරණය)', icon: 'air' }
];

let audioCtx = null;
let activeNoiseNode = null;
let activeGainNode = null;

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

function generateNoiseBuffer(ctx, type) {
  const size = ctx.sampleRate * 3;
  const buffer = ctx.createBuffer(1, size, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0, last = 0.0;
  for (let i = 0; i < size; i++) {
    const white = Math.random() * 2 - 1;
    if (type === 'brown') {
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.5;
    } else if (type === 'pink') {
      b0 = 0.99886 * b0 + white * 0.0555179; b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520; b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522; b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    } else {
      data[i] = white * 0.18;
    }
  }
  return buffer;
}

export function startAmbientNoise(type = 'brown', volume = 0.3) {
  stopAmbientNoise();
  if (!type || type === 'none') return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const source = ctx.createBufferSource();
    source.buffer = generateNoiseBuffer(ctx, type);
    source.loop = true;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    source.connect(gain);
    gain.connect(ctx.destination);
    source.start(0);
    activeNoiseNode = source;
    activeGainNode = gain;
  } catch (err) {}
}

export function stopAmbientNoise() {
  if (activeNoiseNode) {
    try {
      if (activeGainNode && audioCtx) activeGainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
      activeNoiseNode.stop();
      activeNoiseNode.disconnect();
    } catch (e) {}
    activeNoiseNode = null;
    activeGainNode = null;
  }
}
