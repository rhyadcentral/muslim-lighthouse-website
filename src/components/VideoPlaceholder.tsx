import { Play, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const VideoPlaceholder = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="relative w-full max-w-5xl mx-auto aspect-video bg-muted rounded-3xl shadow-card-lg hover:shadow-card-hover flex items-center justify-center group cursor-pointer transition-all duration-300 overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-light-cyan/5 via-transparent to-dark-teal/5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />

      {/* Main content */}
      <div className="flex flex-col items-center gap-8 relative z-10">
        {/* Play button with pulse */}
        <div className="relative">
          {/* Pulsing rings */}
          <motion.div
            className="absolute inset-0 w-24 h-24 bg-light-cyan rounded-full opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-0 w-24 h-24 bg-light-cyan rounded-full opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          <motion.div
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-24 h-24 bg-light-cyan rounded-full flex items-center justify-center shadow-card-lg group-hover:bg-dark-teal transition-colors duration-300"
          >
            <Play className="w-12 h-12 text-white fill-white ml-1" />
          </motion.div>
        </div>

        {/* Text content */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-dark-teal font-montserrat font-bold text-xl group-hover:text-light-cyan transition-colors duration-300">
            Watch Our 20-Minute Message
          </p>
          <p className="text-muted-foreground text-base">
            Discover how to transform your Islamic education
          </p>
        </motion.div>

        {/* Stats badges */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-card hover:shadow-card-hover transition-shadow duration-200"
          >
            <Clock className="w-4 h-4 text-light-cyan" />
            <span className="text-sm font-semibold text-charcoal">20 min</span>
          </motion.div>
          <motion.div
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-card hover:shadow-card-hover transition-shadow duration-200"
          >
            <Users className="w-4 h-4 text-light-cyan" />
            <span className="text-sm font-semibold text-charcoal">500+ students</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoPlaceholder;
