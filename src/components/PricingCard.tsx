import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  tagline: string;
  price: number;
  period?: string;
  features: string[];
  bottomNote: string;
  isRecommended?: boolean;
  delay?: number;
}

const PricingCard = ({
  name,
  tagline,
  price,
  period = "/month",
  features,
  bottomNote,
  isRecommended = false,
  delay = 0,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
      className={cn(
        "bg-white rounded-3xl p-8 md:p-10 shadow-card-lg hover:shadow-card-hover transition-all duration-200",
        isRecommended && "ring-2 ring-light-cyan ring-offset-4"
      )}
    >
      {/* Recommended badge */}
      {isRecommended && (
        <div className="mb-6">
          <div className="bg-light-cyan text-white px-3 py-1 rounded-full text-xs font-bold font-montserrat inline-block">
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Plan name - Using size + weight for hierarchy */}
      <h3 className="text-2xl font-bold font-montserrat text-charcoal mb-2">
        {name}
      </h3>

      {/* Tagline - Using color for hierarchy, not just size */}
      <p className="text-base text-muted-foreground mb-8">{tagline}</p>

      {/* Price - Emphasized with size AND weight */}
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-extrabold font-montserrat text-charcoal">
            ${price}
          </span>
          <span className="text-lg text-muted-foreground font-medium">{period}</span>
        </div>
      </div>

      {/* Features - Better spacing, no animations on scroll (too much) */}
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="text-sm leading-relaxed text-charcoal">
            {feature}
          </div>
        ))}
      </div>

      {/* Bottom note - Subtle background without border */}
      <div className="bg-muted p-4 rounded-2xl mb-8">
        <p className="text-sm leading-relaxed text-muted-foreground">{bottomNote}</p>
      </div>

      {/* CTA Button - Simplified, clear hierarchy */}
      <Button
        className={cn(
          "w-full font-montserrat font-bold text-base px-6 py-6 rounded-full transition-all duration-200 shadow-card hover:shadow-card-hover hover:-translate-y-1 active:translate-y-0",
          isRecommended
            ? "bg-light-cyan text-white hover:bg-dark-teal"
            : "bg-white text-dark-teal ring-2 ring-dark-teal hover:bg-dark-teal hover:text-white"
        )}
      >
        {isRecommended ? "Start Free Trial" : "Get Started"}
      </Button>

      {/* Free trial note - Using muted color for hierarchy */}
      {isRecommended && (
        <p className="text-center text-xs text-muted-foreground mt-4">
          3-day free trial • No credit card required
        </p>
      )}
    </motion.div>
  );
};

export default PricingCard;
