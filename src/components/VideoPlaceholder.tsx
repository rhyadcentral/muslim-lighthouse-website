import { Play, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const VideoPlaceholder = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-full max-w-5xl mx-auto aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-premium flex items-center justify-center group cursor-pointer overflow-hidden"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-cyan/20 via-transparent to-dark-teal/20 rounded-2xl opacity-50" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(188, 100%, 35%) 1px, transparent 1px), linear-gradient(90deg, hsl(188, 100%, 35%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-20 h-20 bg-light-cyan/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-dark-teal/10 rounded-full blur-2xl"
      />

      {/* Main content */}
      <div className="relative flex flex-col items-center gap-6 z-10">
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            boxShadow: isHovered
              ? "0 20px 60px rgba(0, 151, 178, 0.4)"
              : "0 10px 40px rgba(0, 151, 178, 0.2)",
          }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-light-cyan to-dark-teal rounded-full flex items-center justify-center shadow-2xl">
            <Play className="w-12 h-12 text-white fill-white ml-2" />
          </div>
          {/* Pulse rings */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute inset-0 border-2 border-light-cyan rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.3,
            }}
            className="absolute inset-0 border-2 border-light-cyan rounded-full"
          />
        </motion.div>

        <div className="text-center space-y-2">
          <motion.p
            animate={{ opacity: isHovered ? 1 : 0.9 }}
            className="text-dark-teal font-montserrat font-bold text-xl"
          >
            Watch Our 20-Minute Message
          </motion.p>
          <motion.p
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            className="text-muted-foreground text-sm"
          >
            Discover how to transform your Islamic education
          </motion.p>
        </div>

        {/* Stats badges */}
        <div className="flex gap-6 mt-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
          >
            <Clock className="w-4 h-4 text-light-cyan" />
            <span className="text-sm font-semibold text-charcoal">20 min</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
          >
            <Users className="w-4 h-4 text-light-cyan" />
            <span className="text-sm font-semibold text-charcoal">500+ students</span>
          </motion.div>
        </div>
      </div>

      {/* Shine effect on hover */}
      <motion.div
        animate={{
          x: isHovered ? "100%" : "-100%",
        }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{ width: "50%" }}
      />
    </motion.div>
  );
};

export default VideoPlaceholder;
