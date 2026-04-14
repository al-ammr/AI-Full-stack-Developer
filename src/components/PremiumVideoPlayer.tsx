import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, SkipBack, SkipForward, Maximize, X, Volume2, VolumeX, ListVideo, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { PHASES } from '../constants';
import { getVideoId } from '../lib/youtube';

interface VideoItem {
  uid: string;
  id: string;
  title: string;
  url: string;
  phaseId: string;
  phaseTitle: string;
  type: 'resource' | 'project';
}

interface PremiumVideoPlayerProps {
  isOpen: boolean;
  initialVideoUrl: string | null;
  onClose: () => void;
}

// Global type for YT
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function PremiumVideoPlayer({ isOpen, initialVideoUrl, onClose }: PremiumVideoPlayerProps) {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [currentVideo, setCurrentVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const shouldPlayOnReady = useRef(false);

  useEffect(() => {
    // Extract all videos from PHASES
    const allVideos: VideoItem[] = [];
    PHASES.forEach(phase => {
      phase.resources.forEach((res, idx) => {
        const ytId = getVideoId(res.url);
        if (res.type === 'yt' && ytId) {
          allVideos.push({
            uid: `res-${phase.id}-${idx}-${ytId}`,
            id: ytId,
            title: res.title,
            url: res.url,
            phaseId: phase.id,
            phaseTitle: phase.title,
            type: 'resource'
          });
        }
      });
      if (phase.followAlongProjects) {
        phase.followAlongProjects.forEach((proj, idx) => {
          const ytId = getVideoId(proj.url);
          if (ytId) {
            allVideos.push({
              uid: `proj-${phase.id}-${idx}-${ytId}`,
              id: ytId,
              title: proj.title,
              url: proj.url,
              phaseId: phase.id,
              phaseTitle: phase.title,
              type: 'project'
            });
          }
        });
      }
    });
    setVideos(allVideos);

    if (initialVideoUrl) {
      const initialId = getVideoId(initialVideoUrl);
      const found = allVideos.find(v => v.url === initialVideoUrl);
      if (found) {
        setCurrentVideo(found);
        setExpandedPhases({ [found.phaseId]: true });
      } else if (initialId) {
        setCurrentVideo({
          uid: `custom-${initialId}`,
          id: initialId,
          title: 'Video',
          url: initialVideoUrl,
          phaseId: 'custom',
          phaseTitle: 'Custom',
          type: 'resource'
        });
      }
    } else if (allVideos.length > 0) {
      setCurrentVideo(allVideos[0]);
      setExpandedPhases({ [allVideos[0].phaseId]: true });
    }
  }, [initialVideoUrl]);

  useEffect(() => {
    if (!isOpen) {
      if (playerRef.current) {
        if (typeof playerRef.current.destroy === 'function') {
          try {
            playerRef.current.destroy();
          } catch (e) {
            console.error(e);
          }
        }
        playerRef.current = null;
      }
      return;
    }

    // Load YouTube API
    if (!window.YT || !window.YT.Player) {
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }

      // If onYouTubeIframeAPIReady is already assigned, we might overwrite it,
      // but usually it's fine for a single player instance.
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prev) prev();
        initPlayer();
      };
    } else if (!playerRef.current) {
      initPlayer();
    } else if (currentVideo) {
      setShowThumbnail(true);
      initPlayer();
    }

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [isOpen, currentVideo]);

  const initPlayer = () => {
    if (!currentVideo) return;
    if (!window.YT || !window.YT.Player) return;
    
    if (playerRef.current && playerRef.current.cueVideoById) {
      if (currentVideo.id.length > 11 && typeof playerRef.current.cuePlaylist === 'function') {
        playerRef.current.cuePlaylist({list: currentVideo.id});
      } else {
        playerRef.current.cueVideoById(currentVideo.id);
      }
      return;
    }

    if (playerRef.current && typeof playerRef.current.destroy === 'function') {
      try {
        playerRef.current.destroy();
      } catch (e) {
        console.error(e);
      }
    }

    // Ensure the yt-player div exists before initializing
    let playerDiv = document.getElementById('yt-player');
    if (!playerDiv) {
      playerDiv = document.createElement('div');
      playerDiv.id = 'yt-player';
      playerDiv.className = 'w-full h-full';
      const wrapper = document.getElementById('yt-player-wrapper');
      if (wrapper) {
        wrapper.appendChild(playerDiv);
      }
    }

    const playerOptions: any = {
      playerVars: {
        autoplay: 0,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        disablekb: 1,
        fs: 0,
        enablejsapi: 1,
        origin: window.location.origin
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    };

    if (currentVideo.id.length > 11) {
      playerOptions.playerVars.listType = 'playlist';
      playerOptions.playerVars.list = currentVideo.id;
    } else {
      playerOptions.videoId = currentVideo.id;
    }

    playerRef.current = new window.YT.Player('yt-player', playerOptions);
  };

  const onPlayerReady = (event: any) => {
    setDuration(event.target.getDuration());
    if (!showThumbnail || shouldPlayOnReady.current) {
      event.target.playVideo();
      shouldPlayOnReady.current = false;
    }
  };

  const onPlayerStateChange = (event: any) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
      setDuration(playerRef.current.getDuration());
      startProgressInterval();
    } else {
      setIsPlaying(false);
      stopProgressInterval();
    }
  };

  const startProgressInterval = () => {
    if (progressInterval.current) clearInterval(progressInterval.current);
    progressInterval.current = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        const time = playerRef.current.getCurrentTime();
        setCurrentTime(time);
        const dur = playerRef.current.getDuration();
        if (dur > 0) {
          setProgress((time / dur) * 100);
        }
      }
    }, 1000);
  };

  const stopProgressInterval = () => {
    if (progressInterval.current) clearInterval(progressInterval.current);
  };

  const handlePlayPause = () => {
    if (!playerRef.current || !playerRef.current.playVideo) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const handleSeek = (seconds: number) => {
    if (!playerRef.current || !playerRef.current.seekTo) return;
    const newTime = currentTime + seconds;
    playerRef.current.seekTo(newTime, true);
    setCurrentTime(newTime);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!playerRef.current || !playerRef.current.seekTo) return;
    const newProgress = parseFloat(e.target.value);
    const newTime = (newProgress / 100) * duration;
    playerRef.current.seekTo(newTime, true);
    setProgress(newProgress);
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleThumbnailClick = () => {
    setShowThumbnail(false);
    if (playerRef.current && currentVideo) {
      try {
        if (currentVideo.id.length > 11 && typeof playerRef.current.loadPlaylist === 'function') {
          playerRef.current.loadPlaylist({list: currentVideo.id});
        } else if (typeof playerRef.current.loadVideoById === 'function') {
          playerRef.current.loadVideoById(currentVideo.id);
        }
      } catch (e) {
        console.error("Error playing video:", e);
      }
    } else {
      shouldPlayOnReady.current = true;
    }
  };

  const selectVideo = (video: VideoItem) => {
    if (currentVideo?.uid === video.uid) return;
    setCurrentVideo(video);
    setShowThumbnail(true);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    
    // Track last played video
    localStorage.setItem('lastPlayedVideo', JSON.stringify({
      id: video.id,
      title: video.title,
      url: video.url
    }));
    
    // Dispatch custom event to notify App.tsx
    window.dispatchEvent(new Event('lastPlayedVideoUpdated'));
  };

  const togglePhase = (phaseId: string) => {
    setExpandedPhases(prev => ({ ...prev, [phaseId]: !prev[phaseId] }));
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!isOpen) return null;

  // Group videos by phase
  const groupedVideos: Record<string, { title: string, items: VideoItem[] }> = {};
  videos.forEach(v => {
    if (!groupedVideos[v.phaseId]) {
      groupedVideos[v.phaseId] = { title: v.phaseTitle, items: [] };
    }
    groupedVideos[v.phaseId].items.push(v);
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-[#0B0B0F] flex flex-col md:flex-row overflow-hidden font-sans text-white"
      >
        {/* Sidebar */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: isSidebarOpen ? (window.innerWidth < 768 ? '100%' : '320px') : 0, opacity: isSidebarOpen ? 1 : 0 }}
          className={cn(
            "h-full bg-[#111118] border-r border-white/10 flex flex-col shrink-0 overflow-hidden",
            !isSidebarOpen && "hidden md:flex"
          )}
        >
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#111118] z-10">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <ListVideo className="w-5 h-5 text-[#7C3AED]" />
              Course Content
            </h2>
            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2 hover:bg-white/10 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
            {Object.entries(groupedVideos).map(([phaseId, group]) => (
              <div key={phaseId} className="mb-2">
                <button
                  onClick={() => togglePhase(phaseId)}
                  className="w-full flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors text-left"
                >
                  <span className="font-semibold text-sm text-[#A1A1AA] truncate pr-2">{group.title}</span>
                  {expandedPhases[phaseId] ? <ChevronDown className="w-4 h-4 shrink-0 text-[#A1A1AA]" /> : <ChevronRight className="w-4 h-4 shrink-0 text-[#A1A1AA]" />}
                </button>
                <AnimatePresence>
                  {expandedPhases[phaseId] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-2 pr-1 py-1 space-y-1">
                        {group.items.map(video => (
                          <button
                            key={video.uid}
                            onClick={() => selectVideo(video)}
                            className={cn(
                              "w-full text-left p-3 rounded-lg text-sm transition-all flex items-start gap-3 group",
                              currentVideo?.uid === video.uid 
                                ? "bg-[#7C3AED]/20 text-white border border-[#7C3AED]/30" 
                                : "text-[#A1A1AA] hover:bg-white/5 hover:text-white"
                            )}
                          >
                            <div className={cn(
                              "mt-0.5 shrink-0 w-2 h-2 rounded-full",
                              currentVideo?.uid === video.uid ? "bg-[#A78BFA] shadow-[0_0_10px_#A78BFA]" : "bg-white/20 group-hover:bg-white/50"
                            )} />
                            <span className="line-clamp-2 leading-snug">{video.title}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Player Area */}
        <div className="flex-1 flex flex-col h-full relative bg-[#0B0B0F]">
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-4">
              {!isSidebarOpen && (
                <button 
                  onClick={() => setIsSidebarOpen(true)}
                  className="p-2 bg-black/50 hover:bg-[#7C3AED] rounded-xl backdrop-blur-md text-white btn-glow"
                >
                  <ListVideo className="w-5 h-5" />
                </button>
              )}
              <h1 className="text-lg md:text-xl font-bold text-white drop-shadow-md truncate max-w-[60vw]">
                {currentVideo?.title}
              </h1>
            </div>
            <button 
              onClick={onClose}
              className="p-2 bg-black/50 hover:bg-red-500/80 rounded-xl backdrop-blur-md text-white btn-glow"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Container */}
          <div 
            ref={containerRef}
            className="flex-1 flex items-center justify-center p-0 md:p-6 lg:p-12 relative group"
          >
            <div className="w-full h-full max-h-[80vh] relative rounded-none md:rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-black">
              
              {/* YouTube Player Wrapper */}
              <div id="yt-player-wrapper" className={cn("w-full h-full absolute inset-0", showThumbnail ? "opacity-0 pointer-events-none" : "opacity-100")}>
                <div id="yt-player" className="w-full h-full" />
              </div>

              {/* Thumbnail Overlay */}
              {showThumbnail && currentVideo && (
                <div 
                  className="absolute inset-0 cursor-pointer group/thumb"
                  onClick={handleThumbnailClick}
                >
                  <img 
                    src={currentVideo.id.length > 11 
                      ? "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" 
                      : `https://img.youtube.com/vi/${currentVideo.id}/maxresdefault.jpg`}
                    onError={(e) => {
                      if (!(currentVideo.id.length > 11)) {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${currentVideo.id}/hqdefault.jpg`;
                      }
                    }}
                    alt={currentVideo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#7C3AED]/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.5)] group-hover/thumb:scale-110 group-hover/thumb:bg-[#7C3AED] transition-all">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              )}

              {/* Custom Controls Overlay */}
              <div className={cn(
                "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-20 pb-4 px-6 transition-opacity duration-300",
                isPlaying && !showThumbnail ? "opacity-0 group-hover:opacity-100" : "opacity-100",
                showThumbnail && "hidden"
              )}>
                {/* Progress Bar */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-medium text-white/80 w-10 text-right">{formatTime(currentTime)}</span>
                  <div className="flex-1 relative group/progress h-1.5 flex items-center cursor-pointer">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={progress}
                      onChange={handleProgressChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#A78BFA] transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div 
                      className="absolute h-3 w-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] -ml-1.5 scale-0 group-hover/progress:scale-100 transition-transform pointer-events-none"
                      style={{ left: `${progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-white/80 w-10">{formatTime(duration)}</span>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button onClick={() => handleSeek(-10)} className="text-white/80 hover:text-white hover:scale-110 transition-all">
                      <SkipBack className="w-6 h-6" />
                    </button>
                    
                    <button 
                      onClick={handlePlayPause}
                      className="w-12 h-12 bg-[#7C3AED] hover:bg-[#A78BFA] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-105 text-white btn-glow"
                    >
                      {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                    </button>
                    
                    <button onClick={() => handleSeek(10)} className="text-white/80 hover:text-white hover:scale-110 transition-all">
                      <SkipForward className="w-6 h-6" />
                    </button>

                    <div className="w-px h-6 bg-white/20 mx-2" />

                    <button onClick={toggleMute} className="text-white/80 hover:text-white hover:scale-110 transition-all">
                      {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <button onClick={toggleFullscreen} className="text-white/80 hover:text-white hover:scale-110 transition-all">
                      <Maximize className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
