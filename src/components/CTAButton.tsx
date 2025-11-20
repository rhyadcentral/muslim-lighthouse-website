import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

interface CTAButtonProps {
  className?: string;
  fullWidth?: boolean;
  showSubtext?: boolean;
}

const CTAButton = ({ className, fullWidth = false, showSubtext = true }: CTAButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={cn("relative", fullWidth && "w-full md:w-auto")}
      >
        {/* Glow effect */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.6 : 0.3,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-r from-light-cyan to-dark-teal rounded-xl blur-xl"
        />

        {/* Button */}
        <Button
          className={cn(
            "relative bg-gradient-to-r from-light-cyan to-dark-teal text-white font-montserrat font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-xl shadow-premium transition-all duration-300 group overflow-hidden",
            fullWidth && "w-full"
          )}
        >
          {/* Animated gradient overlay */}
          <motion.div
            animate={{
              x: isHovered ? "100%" : "-100%",
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ width: "50%" }}
          />

          {/* Sparkle effect */}
          <motion.div
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-2 right-2"
          >
            <Sparkles className="w-4 h-4 text-white/40" />
          </motion.div>

          {/* Button content */}
          <span className="relative flex items-center gap-3 justify-center">
            Start Your 3-Day Free Trial
            <motion.div
              animate={{
                x: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </span>
        </Button>
      </motion.div>

      {showSubtext && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-muted-foreground"
        >
          No credit card required • Cancel anytime
        </motion.p>
      )}
    </div>
  );
};

export default CTAButton;
