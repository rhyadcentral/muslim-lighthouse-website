import { useEffect } from "react";

const VideoPlaceholder = () => {
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

    return () => {
      // Cleanup scripts and styles on unmount
      document.head.removeChild(playerScript);
      document.head.removeChild(embedScript);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <wistia-player media-id="jgg77ut4ro" aspect="1.7777777777777777" autoplay></wistia-player>
    </div>
  );
};

export default VideoPlaceholder;
