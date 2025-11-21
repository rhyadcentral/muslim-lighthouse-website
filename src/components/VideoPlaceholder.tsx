import { Play, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const VideoPlaceholder = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="relative w-full max-w-5xl mx-auto aspect-video bg-muted rounded-3xl shadow-card-lg hover:shadow-card-hover flex items-center justify-center group cursor-pointer transition-all duration-200"
    >
      {/* Main content */}
      <div className="flex flex-col items-center gap-8">
        {/* Play button - Simplified, clear focus */}
        <div className="relative w-24 h-24 bg-light-cyan rounded-full flex items-center justify-center shadow-card-lg group-hover:scale-110 transition-transform duration-200">
          <Play className="w-12 h-12 text-white fill-white ml-1" />
        </div>

        {/* Text content - Using hierarchy with size and weight */}
        <div className="text-center space-y-2">
          <p className="text-dark-teal font-montserrat font-bold text-xl">
            Watch Our 20-Minute Message
          </p>
          <p className="text-muted-foreground text-base">
            Discover how to transform your Islamic education
          </p>
        </div>

        {/* Stats badges - Simpler design */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-card">
            <Clock className="w-4 h-4 text-light-cyan" />
            <span className="text-sm font-semibold text-charcoal">20 min</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-card">
            <Users className="w-4 h-4 text-light-cyan" />
            <span className="text-sm font-semibold text-charcoal">500+ students</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoPlaceholder;
