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
  href?: string;
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
  href = "https://www.muslimlighthouse.app/checkout/premium-membership",
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
      className={cn(
        "relative bg-white rounded-3xl p-8 md:p-10 shadow-card-lg hover:shadow-card-hover transition-all duration-200 overflow-hidden",
        isRecommended && "ring-2 ring-light-cyan ring-offset-4"
      )}
    >
      {/* Animated gradient overlay for recommended card */}
      {isRecommended && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-light-cyan/5 via-transparent to-dark-teal/5 opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
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
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          asChild
          className={cn(
            "w-full font-montserrat font-bold text-base px-6 py-6 rounded-full transition-all duration-300 shadow-card hover:shadow-card-hover group/btn relative overflow-hidden",
            isRecommended
              ? "bg-light-cyan text-white hover:bg-dark-teal before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700"
              : "bg-white text-dark-teal ring-2 ring-dark-teal hover:bg-dark-teal hover:text-white"
          )}
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            <span className="relative z-10">
              {isRecommended ? "Get Started Now" : "Get Started"}
            </span>
          </a>
        </Button>
      </motion.div>

      {/* Social proof note - Using muted color for hierarchy */}
      {isRecommended && (
        <p className="text-center text-xs text-muted-foreground mt-4">
          200+ active students • Cancel anytime
        </p>
      )}
    </motion.div>
  );
};

export default PricingCard;
