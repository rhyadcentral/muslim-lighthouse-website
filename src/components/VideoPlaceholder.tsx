import { Play } from "lucide-react";

const VideoPlaceholder = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-[0_4px_16px_rgba(0,151,178,0.15)] flex items-center justify-center group cursor-pointer transition-smooth hover:shadow-[0_8px_24px_rgba(0,151,178,0.25)]">
      <div className="absolute inset-0 bg-gradient-to-br from-light-cyan/10 to-dark-teal/10 rounded-lg" />
      <div className="relative flex flex-col items-center gap-4">
        <div className="w-20 h-20 bg-light-cyan rounded-full flex items-center justify-center shadow-lg transition-smooth group-hover:bg-dark-teal group-hover:scale-110">
          <Play className="w-10 h-10 text-white fill-white ml-1" />
        </div>
        <p className="text-charcoal font-montserrat font-semibold text-lg">
          Video Player
        </p>
        <p className="text-muted-foreground text-sm">
          Watch this 20-minute message
        </p>
      </div>
    </div>
  );
};

export default VideoPlaceholder;
