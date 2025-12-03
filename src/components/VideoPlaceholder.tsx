import { useEffect, useState } from "react";

const VideoPlaceholder = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [player, setPlayer] = useState<any>(null);

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
        const handleAutoplay = () => {
          // Autoplay succeeded - show overlay
          setShowOverlay(true);
          wistiaPlayer.removeEventListener('play', handleAutoplay);
        };

        wistiaPlayer.addEventListener('play', handleAutoplay);

        // Try to play the video with autoplay
        const playPromise = wistiaPlayer.play();

        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay was blocked - unmute for manual play
            wistiaPlayer.removeEventListener('play', handleAutoplay);
            wistiaPlayer.muted = false;
            setShowOverlay(false);
          });
        }

        // Safety timeout - if no play event after 2 seconds, assume autoplay failed and unmute
        setTimeout(() => {
          wistiaPlayer.removeEventListener('play', handleAutoplay);
          // If overlay isn't showing, autoplay failed - unmute for manual play
          if (!showOverlay) {
            wistiaPlayer.muted = false;
          }
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
  }, [showOverlay]);

  const handleUnmute = () => {
    if (player) {
      player.muted = false;
      player.play();
      setShowOverlay(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      <wistia-player media-id="jgg77ut4ro" aspect="1.7777777777777777" autoplay muted playsinline></wistia-player>

      {showOverlay && (
        <div
          onClick={handleUnmute}
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-10 rounded-lg transition-opacity hover:bg-black/50"
        >
          <div className="bg-white/95 px-8 py-6 rounded-2xl shadow-2xl text-center">
            <div className="text-4xl mb-3">🔊</div>
            <p className="text-2xl font-bold text-charcoal mb-2">Click to Unmute</p>
            <p className="text-sm text-charcoal/70">Tap anywhere to enable sound</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlaceholder;
