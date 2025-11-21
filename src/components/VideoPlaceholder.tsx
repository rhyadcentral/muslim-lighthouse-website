import { Play, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const VideoPlaceholder = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="relative w-full max-w-5xl mx-auto aspect-video bg-gray-50 rounded-3xl shadow-lg flex items-center justify-center group cursor-pointer border-2 border-gray-200 hover:border-light-cyan hover:shadow-2xl transition-all duration-300"
    >
      {/* Main content */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          {/* Pulse rings */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute inset-0 bg-light-cyan rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.7, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.3,
            }}
            className="absolute inset-0 bg-light-cyan rounded-full"
          />

          {/* Play button */}
          <div className="relative w-20 h-20 bg-light-cyan rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-125 transition-all duration-300">
            <Play className="w-10 h-10 text-white fill-white ml-1" />
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-dark-teal font-montserrat font-bold text-lg">
            Watch Our 20-Minute Message
          </p>
          <p className="text-muted-foreground text-sm">
            Discover how to transform your Islamic education
          </p>
        </div>

        {/* Stats badges */}
        <div className="flex gap-6">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200 hover:border-light-cyan hover:shadow-lg transition-all duration-200"
          >
            <Clock className="w-4 h-4 text-light-cyan" />
            <span className="text-sm font-semibold text-charcoal">20 min</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200 hover:border-light-cyan hover:shadow-lg transition-all duration-200"
          >
            <Users className="w-4 h-4 text-light-cyan" />
            <span className="text-sm font-semibold text-charcoal">500+ students</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoPlaceholder;
