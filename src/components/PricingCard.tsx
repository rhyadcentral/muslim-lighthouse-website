import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -12,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "relative bg-white rounded-2xl p-8 md:p-10 shadow-premium hover:shadow-premium-lg transition-all duration-300 group overflow-hidden",
        isRecommended && "border-4 border-light-cyan/40 md:scale-105"
      )}
    >
      {/* Recommended badge */}
      {isRecommended && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="bg-gradient-to-r from-light-cyan to-dark-teal text-white px-6 py-2 rounded-full shadow-lg font-montserrat font-bold text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            MOST POPULAR
          </div>
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Plan name */}
        <div className="text-center space-y-2">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + 0.1 }}
            className={cn(
              "text-2xl md:text-3xl font-bold font-montserrat",
              isRecommended ? "text-gradient" : "text-dark-teal"
            )}
          >
            {name}
          </motion.h3>
        </div>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="text-center py-4"
        >
          <div className="flex items-end justify-center gap-1">
            <span className="text-3xl md:text-4xl font-bold text-charcoal">$</span>
            <span className={cn(
              "text-6xl md:text-7xl font-bold font-montserrat",
              isRecommended ? "text-gradient" : "text-charcoal"
            )}>
              {price}
            </span>
            <span className="text-2xl md:text-3xl text-charcoal/60 mb-2">{period}</span>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className="space-y-4 py-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + 0.4 + index * 0.05 }}
              className="flex items-start gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Check
                  className={cn(
                    "w-6 h-6 shrink-0 mt-0.5",
                    isRecommended ? "text-light-cyan" : "text-dark-teal/60"
                  )}
                />
              </motion.div>
              <span className="text-charcoal leading-relaxed">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
          className="pt-4"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              className={cn(
                "relative w-full font-montserrat font-bold text-base md:text-lg px-8 py-6 rounded-xl shadow-lg transition-all duration-300",
                isRecommended
                  ? "bg-gradient-to-r from-light-cyan to-dark-teal text-white hover:shadow-premium"
                  : "bg-dark-teal/10 text-dark-teal hover:bg-dark-teal/20 border-2 border-dark-teal/20"
              )}
            >
              {isRecommended ? "Start Free Trial" : "Get Started"}
            </Button>
          </motion.div>
        </motion.div>

        {/* Free trial note for recommended plan */}
        {isRecommended && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.6 }}
            className="text-center text-sm text-muted-foreground"
          >
            3-day free trial • No credit card required
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default PricingCard;
