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
          "bg-light-cyan text-white font-montserrat font-bold text-lg px-10 py-7 rounded-full shadow-card-lg hover:shadow-card-hover hover:-translate-y-1 hover:bg-dark-teal active:translate-y-0 transition-all duration-200 group",
          fullWidth && "w-full"
        )}
      >
        <span className="flex items-center gap-3 justify-center">
          Start Your 3-Day Free Trial
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
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
