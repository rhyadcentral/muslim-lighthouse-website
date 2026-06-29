import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/muslim-lighthouse-logo.png";

const CHECKOUT = "https://www.muslimlighthouse.app/checkout/quarterly-vs-annual-3-months-free";

const links = [
  { label: "Teacher", href: "#teacher" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Community", href: "#community" },
  { label: "Pricing", href: "#pricing" },
];

const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "bg-paper/85 backdrop-blur-md shadow-[0_1px_0_oklch(var(--line)/1),0_10px_30px_-24px_oklch(var(--ink)/0.5)]"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-5 py-3.5 md:px-8">
          <a href="#top" className="no-rule flex items-center" aria-label="Muslim Lighthouse — home">
            <img src={logo} alt="Muslim Lighthouse" className="h-7 w-auto sm:h-8" />
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-rule font-sans text-sm font-medium text-ink-soft transition-colors hover:text-teal-deep"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-teal px-5 py-2.5 font-sans text-sm font-semibold text-paper transition-colors duration-300 hover:bg-teal-deep sm:inline-flex"
            >
              Start learning
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-paper-2 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile sheet */}
        <div
          className={cn(
            "grid overflow-hidden border-t border-line transition-[grid-template-rows] duration-300 md:hidden",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent"
          )}
        >
          <div className="min-h-0">
            <div className="flex flex-col gap-1 bg-paper/95 px-5 py-4 backdrop-blur-md">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="no-rule rounded-xl px-3 py-3 font-sans text-base font-medium text-ink transition-colors hover:bg-paper-2"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={CHECKOUT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-full bg-teal px-5 py-3 text-center font-sans text-base font-semibold text-paper"
              >
                Start learning
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default SiteNav;
