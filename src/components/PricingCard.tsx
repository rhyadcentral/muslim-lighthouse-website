import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Star from "@/components/Star";

interface PricingCardProps {
  name: string;
  tagline: string;
  price: number;
  period?: string;
  features: string[];
  bottomNote: string;
  isRecommended?: boolean;
  badge?: string;
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
  badge,
  delay = 0,
  href = "https://www.muslimlighthouse.app/checkout/quarterly-vs-annual-3-months-free",
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex w-full max-w-md flex-col rounded-[1.75rem] p-8 md:p-9",
        isRecommended
          ? "bg-card shadow-lift ring-1 ring-brass/50"
          : "bg-card/70 shadow-soft ring-1 ring-line"
      )}
    >
      {(badge || isRecommended) && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brass px-4 py-1.5 font-sans text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[oklch(var(--accent-foreground))] shadow-soft">
            <Star className="h-3 w-3" />
            {badge ?? "Most popular"}
          </span>
        </div>
      )}

      <div className="mb-7">
        <h3 className="font-display text-3xl text-ink">{name}</h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-ink-mute">{tagline}</p>
      </div>

      <div className="mb-7 flex items-baseline gap-1.5">
        <span className="font-display text-[3.25rem] leading-none text-ink font-feature-numeric">£{price}</span>
        <span className="font-sans text-base font-medium text-ink-mute">{period}</span>
      </div>

      <div className="mb-8 h-px w-full bg-line" />

      <ul className="mb-8 flex-1 space-y-3.5">
        {features.map((feature, index) => (
          <li
            key={index}
            className="font-sans text-[0.95rem] leading-relaxed text-ink-soft"
          >
            {feature}
          </li>
        ))}
      </ul>

      <p className="mb-7 rounded-2xl bg-paper-2/70 px-4 py-3.5 font-sans text-sm leading-relaxed text-ink-mute">
        {bottomNote}
      </p>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0, scale: 0.99 }}
        className={cn(
          "no-rule group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-sans text-base font-semibold transition-colors duration-300",
          isRecommended
            ? "bg-teal text-paper hover:bg-teal-deep"
            : "bg-transparent text-ink ring-1 ring-line-strong hover:ring-teal/50 hover:text-teal-deep"
        )}
      >
        {isRecommended ? "Get started now" : "Choose " + name}
        <ArrowRight className="h-[1.05em] w-[1.05em] transition-transform duration-300 group-hover:translate-x-1" />
      </motion.a>

      {isRecommended && (
        <p className="mt-4 text-center font-sans text-xs text-ink-mute">
          Students worldwide · Cancel anytime
        </p>
      )}
    </motion.div>
  );
};

export default PricingCard;
