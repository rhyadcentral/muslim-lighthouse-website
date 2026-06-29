import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CTAButtonProps {
  className?: string;
  fullWidth?: boolean;
  showSubtext?: boolean;
  label?: string;
  href?: string;
}

const CTAButton = ({
  className,
  fullWidth = false,
  showSubtext = true,
  label = "Start learning now",
  href = "https://www.muslimlighthouse.app/checkout/quarterly-vs-annual-3-months-free",
}: CTAButtonProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-3", fullWidth && "w-full", className)}>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0, scale: 0.99 }}
        className={cn(
          "btn-primary no-rule group px-9 py-4 text-[1.02rem] sm:text-[1.08rem]",
          fullWidth && "w-full"
        )}
      >
        {/* sheen sweep */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-paper/20 blur-md transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
        </span>
        <span className="relative z-10 flex items-center gap-2.5">
          {label}
          <ArrowRight className="h-[1.1em] w-[1.1em] transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </motion.a>

      {showSubtext && (
        <p className="font-sans text-sm text-ink-mute">
          <span className="font-semibold text-ink-soft">Students worldwide</span> · Cancel anytime
        </p>
      )}
    </div>
  );
};

export default CTAButton;
