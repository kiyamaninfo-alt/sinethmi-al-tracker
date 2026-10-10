import { useState } from 'react';

export function useVideoPopupState(isActive) {
  const [showVideo, setShowVideo] = useState(false);
  const [promptCloseVideo, setPromptCloseVideo] = useState(false);

  const handleRequestCloseVideo = () => {
    if (isActive) {
      setPromptCloseVideo(true);
    } else {
      setShowVideo(false);
    }
  };

  const handleConfirmCloseVideo = () => {
    setPromptCloseVideo(false);
    setShowVideo(false);
  };

  const handleCancelCloseVideo = () => {
    setPromptCloseVideo(false);
    setShowVideo(true);
  };

  return {
    showVideo,
    setShowVideo,
    promptCloseVideo,
    handleRequestCloseVideo,
    handleConfirmCloseVideo,
    handleCancelCloseVideo
  };
}
