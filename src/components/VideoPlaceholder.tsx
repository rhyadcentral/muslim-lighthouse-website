import { useEffect, useState, useRef } from "react";

const VideoPlaceholder = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [player, setPlayer] = useState<any>(null);
  const autoplayAttemptTime = useRef<number>(0);

  useEffect(() => {
    // Inject Wistia player script
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    document.head.appendChild(playerScript);

    // Inject Wistia embed script
    const embedScript = document.createElement('script');
    embedScript.src = 'https://fast.wistia.com/embed/jgg77ut4ro.js';
    embedScript.async = true;
    embedScript.type = 'module';
    document.head.appendChild(embedScript);

    // Inject styles
    const style = document.createElement('style');
    style.innerHTML = `
      wistia-player[media-id='jgg77ut4ro']:not(:defined) {
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/jgg77ut4ro/swatch');
        display: block;
        filter: blur(5px);
        padding-top:56.25%;
      }
    `;
    document.head.appendChild(style);

    // Wait for Wistia player to be ready
    const checkPlayer = setInterval(() => {
      const wistiaPlayer = document.querySelector('wistia-player[media-id="jgg77ut4ro"]') as any;
      if (wistiaPlayer && wistiaPlayer.muted !== undefined) {
        setPlayer(wistiaPlayer);

        // Listen for play event to confirm autoplay worked
        const handlePlay = () => {
          const timeSinceAttempt = Date.now() - autoplayAttemptTime.current;
          // Only show overlay if play happened within 500ms of autoplay attempt
          // This means it was autoplay, not manual play
          if (timeSinceAttempt < 500) {
            setShowOverlay(true);
          }
          wistiaPlayer.removeEventListener('play', handlePlay);
        };

        wistiaPlayer.addEventListener('play', handlePlay);

        // Record autoplay attempt time and try to play the video
        autoplayAttemptTime.current = Date.now();
        const playPromise = wistiaPlayer.play();

        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay was blocked - unmute for manual play
            wistiaPlayer.removeEventListener('play', handlePlay);
            wistiaPlayer.muted = false;
            setShowOverlay(false);
          });
        }

        // Safety timeout - if no play event after 2 seconds, assume autoplay failed and unmute
        setTimeout(() => {
          wistiaPlayer.removeEventListener('play', handlePlay);
          // If overlay isn't showing, autoplay failed - unmute for manual play
          setShowOverlay((current) => {
            if (!current) {
              wistiaPlayer.muted = false;
            }
            return current;
          });
        }, 2000);

        clearInterval(checkPlayer);
      }
    }, 100);

    return () => {
      // Cleanup scripts and styles on unmount
      clearInterval(checkPlayer);
      if (document.head.contains(playerScript)) {
        document.head.removeChild(playerScript);
      }
      if (document.head.contains(embedScript)) {
        document.head.removeChild(embedScript);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const handleUnmute = () => {
    if (player) {
      // Restart video from beginning
      player.currentTime = 0;
      // Unmute and play
      player.muted = false;
      player.play();
      setShowOverlay(false);
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <wistia-player media-id="jgg77ut4ro" aspect="1.7777777777777777" autoplay muted playsinline></wistia-player>

      {showOverlay && (
        <div
          onClick={handleUnmute}
          className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-[oklch(var(--navy-deep)/0.45)] backdrop-blur-[2px] transition-colors hover:bg-[oklch(var(--navy-deep)/0.55)]"
        >
          <div className="rounded-2xl bg-paper/95 px-8 py-6 text-center shadow-lift">
            <div className="mb-3 text-3xl">🔊</div>
            <p className="mb-1 font-display text-2xl text-ink">Tap to unmute</p>
            <p className="font-sans text-sm text-ink-mute">Tap anywhere to enable sound</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlaceholder;
