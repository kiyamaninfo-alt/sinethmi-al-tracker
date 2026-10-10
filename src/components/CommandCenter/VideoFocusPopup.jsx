import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { extractYouTubeEmbedUrl } from '../../constants/videoUtils';
import { useDraggablePopup } from '../../hooks/useDraggablePopup';
import VideoTimerOverlay from './VideoTimerOverlay';

export default function VideoFocusPopup({ videoUrl, isPaused, secondsLeft, sessionMode, language, onClose, onTogglePause }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const containerRef = useRef(null);
  const { pos, onMouseDown } = useDraggablePopup();

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const handleMinimize = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
    setIsMinimized((prev) => !prev);
  };

  const embedUrl = extractYouTubeEmbedUrl(videoUrl);
  const dragStyle = pos.x !== null ? { left: `${pos.x}px`, top: `${pos.y}px`, right: 'auto', bottom: 'auto' } : {};

  return createPortal(
    <div
      ref={containerRef}
      style={dragStyle}
      className={`fixed ${pos.x === null ? 'bottom-6 right-6' : ''} z-50 rounded-2xl bg-slate-950/95 border border-cyan-400/40 shadow-2xl backdrop-blur-xl flex flex-col transition-[height,width] ${
        isMinimized ? 'w-64 min-w-[250px]' : 'w-80 sm:w-96 resize overflow-auto min-w-[280px] max-w-[90vw] min-h-[200px] max-h-[80vh]'
      }`}
    >
      <div onMouseDown={onMouseDown} className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-surface-container/70 select-none cursor-move">
        <span className="text-[11px] font-mono text-cyan-300 font-bold flex items-center gap-1.5 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Focus Backdrop
        </span>
        <div className="flex items-center gap-1">
          <button type="button" onClick={onTogglePause} className="p-1 rounded text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer" title={isPaused ? 'Resume' : 'Pause'}>
            <span className="material-symbols-outlined text-[16px]">{isPaused ? 'play_arrow' : 'pause'}</span>
          </button>
          <button type="button" onClick={handleMinimize} className="p-1 rounded text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer" title={isMinimized ? 'Expand' : 'Minimize'}>
            <span className="material-symbols-outlined text-[16px]">{isMinimized ? 'expand_less' : 'minimize'}</span>
          </button>
          <button type="button" onClick={toggleFullscreen} className="p-1 rounded text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer" title="Fullscreen">
            <span className="material-symbols-outlined text-[16px]">{isFullscreen ? 'fullscreen_exit' : 'fullscreen'}</span>
          </button>
          <button type="button" onClick={onClose} className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 cursor-pointer" title="Close and pause">
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="flex-1 relative bg-black aspect-video overflow-hidden">
          <VideoTimerOverlay secondsLeft={secondsLeft} sessionMode={sessionMode} isPaused={isPaused} language={language} />
          {isPaused ? (
            <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center gap-2 z-10 text-center p-4">
              <span className="material-symbols-outlined text-amber-400 text-3xl">pause_circle</span>
              <span className="text-xs text-slate-200 font-mono">Video Paused</span>
              <button type="button" onClick={onTogglePause} className="mt-1 px-3 py-1 rounded-lg bg-cyan-500 text-black text-xs font-bold cursor-pointer">
                Resume
              </button>
            </div>
          ) : (
            <iframe src={embedUrl} title="Focus Video" className="w-full h-full border-0 pointer-events-auto" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          )}
        </div>
      )}
    </div>,
    document.body
  );
}
