import { AVAILABLE_VIDEOS } from '../constants/alarmSettings';

export function resolveVideoUrl(alarmSettings = {}) {
  let videoUrl = alarmSettings.customVideoUrl || '';
  if (!videoUrl && alarmSettings.videoTrack) {
    const matched = AVAILABLE_VIDEOS.find((v) => v.id === alarmSettings.videoTrack);
    videoUrl = matched ? matched.url : '';
  }
  return videoUrl;
}
