import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  className?: string;
  fullWidth?: boolean;
}

const CTAButton = ({ className, fullWidth = false }: CTAButtonProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <Button
        className={cn(
          "bg-light-cyan text-white font-montserrat font-semibold text-lg px-10 py-6 rounded-lg shadow-[0_4px_12px_rgba(0,151,178,0.3)] transition-smooth hover:bg-dark-teal hover-lift",
          fullWidth && "w-full md:w-auto"
        )}
      >
        Start Your 3-Day Free Trial
      </Button>
      <p className="text-sm text-muted-foreground">
        No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default CTAButton;
