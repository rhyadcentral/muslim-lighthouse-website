import { cn } from "@/lib/utils";

interface StarProps {
  className?: string;
  /** "line" draws an outlined star, "solid" fills it */
  variant?: "line" | "solid";
  strokeWidth?: number;
}

/**
 * Rub el Hizb — the eight-point star from the Muslim Lighthouse mark.
 * Used as the recurring decorative node throughout the site.
 */
const Star = ({ className, variant = "solid", strokeWidth = 6 }: StarProps) => {
  const d =
    "M50 4 61 28 86 18 76 43 100 50 76 57 86 82 61 72 50 96 39 72 14 82 24 57 0 50 24 43 14 18 39 28z";
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("inline-block", className)}
      fill={variant === "solid" ? "currentColor" : "none"}
      stroke={variant === "line" ? "currentColor" : "none"}
      strokeWidth={variant === "line" ? strokeWidth : 0}
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
};

export default Star;
