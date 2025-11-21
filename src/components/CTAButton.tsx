import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  className?: string;
  fullWidth?: boolean;
  showSubtext?: boolean;
}

const CTAButton = ({ className, fullWidth = false, showSubtext = true }: CTAButtonProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <Button
        className={cn(
          "relative bg-light-cyan text-white font-montserrat font-bold text-base md:text-lg px-8 md:px-12 py-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:bg-dark-teal active:translate-y-0 active:shadow-lg transition-all duration-300 group overflow-hidden",
          fullWidth && "w-full"
        )}
      >
        {/* Shine effect on hover */}
        <span className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-2xl" />

        <span className="relative flex items-center gap-3 justify-center">
          Start Your 3-Day Free Trial
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </span>
      </Button>

      {showSubtext && (
        <p className="text-sm text-muted-foreground">
          No credit card required • Cancel anytime
        </p>
      )}
    </div>
  );
};

export default CTAButton;
