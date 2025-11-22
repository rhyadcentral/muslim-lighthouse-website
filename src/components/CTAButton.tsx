import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CTAButtonProps {
  className?: string;
  fullWidth?: boolean;
  showSubtext?: boolean;
}

const CTAButton = ({ className, fullWidth = false, showSubtext = true }: CTAButtonProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(fullWidth && "w-full")}
      >
        <Button
          className={cn(
            "relative overflow-hidden bg-light-cyan text-white font-montserrat font-bold text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-full shadow-card-lg hover:shadow-card-hover hover:bg-dark-teal active:scale-95 transition-all duration-300 group",
            fullWidth && "w-full",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700"
          )}
        >
          <span className="flex items-center gap-2 sm:gap-3 justify-center relative z-10">
            Start Your 3-Day Free Trial
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.div>
          </span>
        </Button>
      </motion.div>

      {showSubtext && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
