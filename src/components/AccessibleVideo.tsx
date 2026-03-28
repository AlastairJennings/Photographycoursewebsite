import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings } from 'lucide-react';

/**
 * Accessible Video Component
 * 
 * Features:
 * - Caption/subtitle support
 * - Keyboard accessible controls
 * - ARIA labels
 * - Non-blocking page load
 * - Lazy loading
 * - Poster image
 * - Transcript support
 * 
 * Accessibility:
 * - Full keyboard navigation
 * - Screen reader friendly
 * - Caption support required for content videos
 * - Transcript available
 */

interface Caption {
  src: string; // VTT file path
  label: string; // Language label (e.g., "English")
  srclang: string; // Language code (e.g., "en")
  default?: boolean;
}

interface AccessibleVideoProps {
  // Required
  src: string; // Video source URL
  
  // Accessibility (highly recommended)
  captions?: Caption[]; // Subtitles/captions
  transcript?: string; // Text transcript
  title: string; // Video title for accessibility
  
  // Optional
  poster?: string; // Poster image
  width?: number;
  height?: number;
  className?: string;
  autoPlay?: boolean; // Generally avoid for accessibility
  muted?: boolean;
  loop?: boolean;
  controls?: boolean; // Use custom controls if false
  preload?: 'none' | 'metadata' | 'auto';
  
  // Callbacks
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}

export function AccessibleVideo({
  src,
  captions = [],
  transcript,
  title,
  poster,
  width,
  height,
  className = '',
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  preload = 'metadata',
  onPlay,
  onPause,
  onEnded,
}: AccessibleVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [showTranscript, setShowTranscript] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Keyboard controls
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case ' ':
        case 'k':
          e.preventDefault();
          togglePlay();
          break;
        case 'm':
          e.preventDefault();
          toggleMute();
          break;
        case 'f':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          video.currentTime = Math.max(0, video.currentTime - 5);
          break;
        case 'ArrowRight':
          e.preventDefault();
          video.currentTime = Math.min(video.duration, video.currentTime + 5);
          break;
      }
    };

    video.addEventListener('keydown', handleKeyPress);
    return () => video.removeEventListener('keydown', handleKeyPress);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      onPlay?.();
    } else {
      video.pause();
      setIsPlaying(false);
      onPause?.();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`video-container ${className}`}>
      {/* Video Element */}
      <div className="relative bg-black rounded-lg overflow-hidden group">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          width={width}
          height={height}
          controls={controls}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload={preload}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => {
            setIsPlaying(false);
            onEnded?.();
          }}
          className="w-full"
          aria-label={title}
        >
          {/* Captions/Subtitles */}
          {captions.map((caption) => (
            <track
              key={caption.srclang}
              kind="captions"
              src={caption.src}
              srcLang={caption.srclang}
              label={caption.label}
              default={caption.default}
            />
          ))}
          
          {/* Fallback for browsers that don't support video */}
          <p>
            Your browser doesn't support HTML5 video. 
            <a href={src} className="text-violet-600 hover:underline ml-1">
              Download the video
            </a>
            {transcript && (
              <span>
                {' '}or <button onClick={() => setShowTranscript(true)} className="text-violet-600 hover:underline">read the transcript</button>
              </span>
            )}
          </p>
        </video>

        {/* Custom Controls (if controls=false) */}
        {!controls && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-4">
              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="text-white hover:text-violet-400 transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>

              {/* Progress Bar */}
              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={(e) => {
                    const video = videoRef.current;
                    if (video) {
                      video.currentTime = parseFloat(e.target.value);
                    }
                  }}
                  className="w-full"
                  aria-label="Video progress"
                />
              </div>

              {/* Time */}
              <span className="text-white text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              {/* Mute */}
              <button
                onClick={toggleMute}
                className="text-white hover:text-violet-400 transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-violet-400 transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize className="w-5 h-5" />
              </button>

              {/* Captions Toggle (if available) */}
              {captions.length > 0 && (
                <button
                  className="text-white hover:text-violet-400 transition-colors"
                  aria-label="Captions"
                >
                  <Settings className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Video Information */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        
        {/* Transcript Toggle */}
        {transcript && (
          <div className="mt-4">
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="text-violet-600 hover:text-violet-700 text-sm font-medium flex items-center gap-2"
            >
              {showTranscript ? 'Hide' : 'Show'} Transcript
            </button>
            
            {showTranscript && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Video Transcript</h4>
                <div className="text-sm text-gray-700 whitespace-pre-wrap">
                  {transcript}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Keyboard Shortcuts Help */}
        <details className="mt-4 text-sm text-gray-600">
          <summary className="cursor-pointer hover:text-gray-900 font-medium">
            Keyboard Shortcuts
          </summary>
          <ul className="mt-2 space-y-1 ml-4">
            <li><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> or <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">K</kbd> - Play/Pause</li>
            <li><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">M</kbd> - Mute/Unmute</li>
            <li><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">F</kbd> - Fullscreen</li>
            <li><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">←</kbd> - Rewind 5s</li>
            <li><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">→</kbd> - Forward 5s</li>
          </ul>
        </details>
      </div>
    </div>
  );
}

/**
 * Video SEO Best Practices:
 * 
 * 1. Always provide captions/subtitles
 *    - Required for accessibility
 *    - Helps SEO (search engines can index caption text)
 *    - Benefits users in sound-off environments
 * 
 * 2. Provide a transcript
 *    - Makes content searchable
 *    - Accessible to screen readers
 *    - Indexable by search engines
 * 
 * 3. Use descriptive titles
 *    - Include target keywords naturally
 *    - Be clear about video content
 * 
 * 4. Add poster images
 *    - Improves perceived performance
 *    - Gives visual preview
 *    - Use descriptive alt text on poster
 * 
 * 5. Don't autoplay with sound
 *    - Poor user experience
 *    - Accessibility issue
 *    - Many browsers block it anyway
 * 
 * 6. Lazy load videos
 *    - Use preload="none" or "metadata"
 *    - Load when user scrolls near video
 *    - Improves page performance
 * 
 * 7. Provide download option
 *    - Accessibility requirement
 *    - Useful for users with slow connections
 */
