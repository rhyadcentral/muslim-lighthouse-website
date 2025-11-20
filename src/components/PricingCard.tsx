import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: number;
  period?: string;
  features: string[];
  isRecommended?: boolean;
  delay?: number;
}

const PricingCard = ({
  name,
  price,
  period = "/month",
  features,
  isRecommended = false,
  delay = 0,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "bg-white rounded-xl p-8 md:p-10 shadow-lg border-2 transition-shadow duration-200 hover:shadow-xl",
        isRecommended ? "border-light-cyan" : "border-gray-200"
      )}
    >
      {/* Recommended badge */}
      {isRecommended && (
        <div className="mb-4">
          <div className="bg-light-cyan text-white px-4 py-1.5 rounded-full text-xs font-bold font-montserrat inline-block">
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Plan name */}
      <h3 className="text-xl md:text-2xl font-bold font-montserrat text-charcoal mb-4">
        {name}
      </h3>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-end gap-1">
          <span className="text-2xl font-bold text-charcoal">$</span>
          <span className="text-5xl md:text-6xl font-bold font-montserrat text-charcoal">
            {price}
          </span>
          <span className="text-xl text-charcoal/60 mb-1">{period}</span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 shrink-0 mt-0.5 text-light-cyan" />
            <span className="text-charcoal text-sm leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Button
        className={cn(
          "w-full font-montserrat font-semibold text-base px-6 py-6 rounded-lg transition-colors duration-200",
          isRecommended
            ? "bg-light-cyan text-white hover:bg-dark-teal"
            : "bg-white text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-white"
        )}
      >
        {isRecommended ? "Start Free Trial" : "Get Started"}
      </Button>

      {/* Free trial note for recommended plan */}
      {isRecommended && (
        <p className="text-center text-xs text-muted-foreground mt-4">
          3-day free trial • No credit card required
        </p>
      )}
    </motion.div>
  );
};

export default PricingCard;
