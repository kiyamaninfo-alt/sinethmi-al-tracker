import AlarmSoundSettings from './AlarmSoundSettings';
import AlarmVideoSettings from './AlarmVideoSettings';
import AmbientNoiseSettings from './AmbientNoiseSettings';

export default function AlarmMediaSettingsGrid({ current, update }) {
  const isAudioLockedByVideo = Boolean(current.videoEnabled);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <AmbientNoiseSettings
        ambientNoiseEnabled={current.ambientNoiseEnabled !== false}
        ambientNoiseTrack={current.ambientNoiseTrack || 'brown'}
        onChangeAmbientNoiseEnabled={(en) => update('ambientNoiseEnabled', en)}
        onChangeAmbientNoiseTrack={(tr) => update('ambientNoiseTrack', tr)}
      />

      <AlarmSoundSettings
        soundEnabled={current.soundEnabled}
        soundTrack={current.soundTrack}
        randomSound={current.randomSound}
        isAudioLockedByVideo={isAudioLockedByVideo}
        onChangeSoundEnabled={(en) => update('soundEnabled', en)}
        onChangeSoundTrack={(tr) => update('soundTrack', tr)}
        onChangeRandomSound={(rnd) => update('randomSound', rnd)}
      />

      <div className="md:col-span-2">
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
    </div>
  );
}
