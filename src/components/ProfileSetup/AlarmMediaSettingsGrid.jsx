import AlarmSoundSettings from './AlarmSoundSettings';
import AlarmVideoSettings from './AlarmVideoSettings';

export default function AlarmMediaSettingsGrid({ current, update }) {
  const isAudioLockedByVideo = Boolean(current.videoEnabled);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <AlarmSoundSettings
        soundEnabled={current.soundEnabled}
        soundTrack={current.soundTrack}
        randomSound={current.randomSound}
        isAudioLockedByVideo={isAudioLockedByVideo}
        onChangeSoundEnabled={(en) => update('soundEnabled', en)}
        onChangeSoundTrack={(tr) => update('soundTrack', tr)}
        onChangeRandomSound={(rnd) => update('randomSound', rnd)}
      />

      <AlarmVideoSettings
        videoEnabled={current.videoEnabled}
        videoTrack={current.videoTrack}
        customVideoUrl={current.customVideoUrl}
        randomVideo={current.randomVideo}
        onChangeVideoEnabled={(en) => update('videoEnabled', en)}
        onChangeVideoTrack={(tr) => update('videoTrack', tr)}
        onChangeCustomVideoUrl={(url) => update('customVideoUrl', url)}
        onChangeRandomVideo={(rnd) => update('randomVideo', rnd)}
      />
    </div>
  );
}
