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

      {/* Gradient background overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          isRecommended
            ? "from-light-cyan/5 via-dark-teal/5 to-deep-navy/5"
            : "from-light-gray/50 to-white"
        )}
      />

      {/* Animated gradient border effect */}
      {isRecommended && (
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-light-cyan via-dark-teal to-light-cyan opacity-20 blur-xl"
        />
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
            className="relative"
          >
            {/* Glow effect for recommended plan */}
            {isRecommended && (
              <motion.div
                animate={{
                  opacity: isHovered ? 0.6 : 0.3,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-light-cyan to-dark-teal rounded-xl blur-xl"
              />
            )}

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

      {/* Decorative gradient blob */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "absolute -bottom-20 -right-20 w-48 h-48 rounded-full blur-3xl pointer-events-none",
          isRecommended
            ? "bg-gradient-to-br from-light-cyan to-dark-teal"
            : "bg-gradient-to-br from-dark-teal/30 to-light-gray"
        )}
      />
    </motion.div>
  );
};

export default PricingCard;
