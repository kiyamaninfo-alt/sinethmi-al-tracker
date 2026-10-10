import { AVAILABLE_VIDEOS } from '../../constants/alarmSettings';

export default function AlarmVideoSettings({
  videoEnabled,
  videoTrack,
  customVideoUrl,
  randomVideo,
  onChangeVideoEnabled,
  onChangeVideoTrack,
  onChangeCustomVideoUrl,
  onChangeRandomVideo
}) {
  return (
    <div className="p-3.5 rounded-xl border border-outline-variant/30 bg-surface-container/60 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`material-symbols-outlined text-[18px] ${videoEnabled ? 'text-primary' : 'text-outline'}`}>
            {videoEnabled ? 'smart_display' : 'videocam_off'}
          </span>
          <span className="text-xs font-bold text-on-surface">Video Display Settings</span>
        </div>
        <button
          type="button"
          onClick={() => onChangeVideoEnabled(!videoEnabled)}
          className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-all cursor-pointer ${
            videoEnabled ? 'bg-primary/20 text-primary border border-primary/40' : 'bg-slate-800 text-slate-400 border border-slate-700'
          }`}
        >
          {videoEnabled ? 'Video ON' : 'Video OFF'}
        </button>
      </div>

      <div className={`space-y-3 ${!videoEnabled ? 'pointer-events-none opacity-40' : ''}`}>
        <div className="flex items-center justify-between gap-2">
          <label className="text-[10px] text-outline font-mono">Video Selection</label>
          <label className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 cursor-pointer">
            <input
              type="checkbox"
              checked={!!randomVideo}
              onChange={(e) => onChangeRandomVideo(e.target.checked)}
              className="accent-primary cursor-pointer"
            />
            Play Random Video
          </label>
        </div>

        <select
          value={videoTrack || AVAILABLE_VIDEOS[0].id}
          disabled={randomVideo}
          onChange={(e) => onChangeVideoTrack(e.target.value)}
          className="w-full bg-surface-container-high/80 border border-outline-variant/40 rounded-lg px-2.5 py-1.5 text-xs text-on-surface font-mono focus:border-primary focus:outline-none cursor-pointer disabled:opacity-50"
        >
          {AVAILABLE_VIDEOS.map((v) => (
            <option key={v.id} value={v.id}>{v.name}</option>
          ))}
        </select>

        <div className="space-y-1">
          <label className="text-[10px] text-outline font-mono flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px] text-red-400">play_circle</span>
            Custom YouTube Video Link
          </label>
          <input
            type="url"
            value={customVideoUrl || ''}
            disabled={randomVideo}
            onChange={(e) => onChangeCustomVideoUrl(e.target.value)}
            placeholder="e.g. https://www.youtube.com/watch?v=..."
            className="w-full bg-surface-container-high/60 border border-outline-variant/40 rounded-lg px-2.5 py-1.5 text-on-surface font-mono text-xs focus:border-primary focus:outline-none disabled:opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
