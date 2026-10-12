import { useState, useEffect } from 'react';
import { AMBIENT_NOISE_OPTIONS, startAmbientNoise, stopAmbientNoise } from '../../constants/ambientNoisePlayer';

export default function AmbientNoiseSettings({
  ambientNoiseEnabled = true,
  ambientNoiseTrack = 'brown',
  onChangeAmbientNoiseEnabled,
  onChangeAmbientNoiseTrack
}) {
  const [isPlayingTest, setIsPlayingTest] = useState(false);
  const currentTrack = ambientNoiseTrack || 'brown';

  useEffect(() => {
    return () => stopAmbientNoise();
  }, []);

  const handleToggleTest = () => {
    if (isPlayingTest) { stopAmbientNoise(); setIsPlayingTest(false); }
    else { startAmbientNoise(currentTrack, 0.25); setIsPlayingTest(true); }
  };

  const handleSelectTrack = (trackId) => {
    onChangeAmbientNoiseTrack(trackId);
    if (isPlayingTest) startAmbientNoise(trackId, 0.25);
  };

  return (
    <div className="p-3.5 rounded-xl border bg-surface-container/60 border-outline-variant/30">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`material-symbols-outlined text-[18px] ${ambientNoiseEnabled ? 'text-amber-400' : 'text-outline'}`}>waves</span>
          <div>
            <span className="text-xs font-bold text-on-surface">Study Noise &amp; Focus Ambience</span>
            <p className="text-[10px] text-slate-300">Brown &amp; Pink Noise for Deep Concentration</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {ambientNoiseEnabled && (
            <button type="button" onClick={handleToggleTest}
              className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1 ${
                isPlayingTest ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-amber-500/15 text-amber-300 border border-amber-400/30'
              }`}>
              <span className="material-symbols-outlined text-[13px]">{isPlayingTest ? 'stop' : 'play_arrow'}</span>
              <span>{isPlayingTest ? 'Stop' : 'Test Noise'}</span>
            </button>
          )}
          <button type="button" onClick={() => { if (isPlayingTest) { stopAmbientNoise(); setIsPlayingTest(false); } onChangeAmbientNoiseEnabled(!ambientNoiseEnabled); }}
            className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-all cursor-pointer ${
              ambientNoiseEnabled ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40' : 'bg-slate-800 text-slate-400 border border-slate-700'
            }`}>
            {ambientNoiseEnabled ? 'Active' : 'Disabled'}
          </button>
        </div>
      </div>

      <div className={`space-y-1.5 ${!ambientNoiseEnabled ? 'pointer-events-none opacity-40' : ''}`}>
        <label className="text-[10px] text-outline font-mono block">Noise Frequency Spectrum</label>
        <select value={currentTrack} onChange={(e) => handleSelectTrack(e.target.value)}
          className="w-full bg-surface-container-high/80 border border-outline-variant/40 rounded-lg px-2.5 py-1.5 text-xs text-on-surface font-mono focus:border-amber-400 focus:outline-none cursor-pointer">
          {AMBIENT_NOISE_OPTIONS.map((opt) => (<option key={opt.id} value={opt.id}>{opt.name}</option>))}
        </select>
      </div>
    </div>
  );
}
