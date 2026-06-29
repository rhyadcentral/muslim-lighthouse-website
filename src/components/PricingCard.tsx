import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex w-full max-w-md flex-col rounded-[1.75rem] p-8 md:p-9",
        isRecommended
          ? "bg-[oklch(0.20_0.030_218)] shadow-lift ring-1 ring-teal/40"
          : "bg-card shadow-soft ring-1 ring-line"
      )}
    >
      {isRecommended && (
        <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,oklch(var(--teal)/0.08),transparent_70%)]" aria-hidden />
      )}

      {(badge || isRecommended) && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal px-4 py-1.5 font-sans text-[0.68rem] font-bold uppercase tracking-[0.18em] text-navy-deep shadow-[0_4px_16px_-4px_oklch(var(--teal)/0.60)]">
            <Star className="h-2.5 w-2.5" />
            {badge ?? "Most popular"}
          </span>
        </div>
      )}

      <div className="relative mb-7">
        <h3 className="font-display text-3xl text-ink">{name}</h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-ink-mute">{tagline}</p>
      </div>

      <div className="relative mb-7 flex items-baseline gap-1.5">
        <span className="font-display text-[3.4rem] leading-none text-ink font-feature-numeric">£{price}</span>
        <span className="font-sans text-base font-medium text-ink-mute">{period}</span>
      </div>

      <div className="relative mb-8 h-px w-full bg-line" />

      <ul className="relative mb-8 flex-1 space-y-3.5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 font-sans text-[0.95rem] leading-relaxed text-ink-soft">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={2.5} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <p className="relative mb-7 rounded-2xl bg-navy-deep/60 px-4 py-3.5 font-sans text-sm leading-relaxed text-ink-mute ring-1 ring-line">
        {bottomNote}
      </p>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0, scale: 0.99 }}
        className={cn(
          "no-rule group relative inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-sans text-base font-semibold transition-all duration-300",
          isRecommended
            ? "bg-teal text-paper shadow-[0_8px_24px_-8px_oklch(var(--teal)/0.55)] hover:bg-[oklch(0.72_0.135_206)] hover:shadow-[0_12px_32px_-8px_oklch(var(--teal)/0.70)]"
            : "bg-transparent text-ink-soft ring-1 ring-line-strong hover:ring-teal/50 hover:text-teal-deep"
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
