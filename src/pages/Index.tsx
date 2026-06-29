import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Star from "@/components/Star";
import CTAButton from "@/components/CTAButton";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import PricingCard from "@/components/PricingCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ustadhPhoto from "@/assets/ustadh-rhyad.jpg";

const CHECKOUT = "https://www.muslimlighthouse.app/checkout/quarterly-vs-annual-3-months-free";
const ease = [0.22, 1, 0.36, 1] as const;

const Kicker = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`kicker ${className ?? ""}`}>
    <Star className="h-2.5 w-2.5 text-teal" />
    {children}
  </span>
);

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease },
};

const credentials: { label: string; value: React.ReactNode }[] = [
  { label: "Teacher", value: <>Shaykh Baha Al-Majlisi, a well-respected Mauritanian scholar</> },
  { label: "Credentials", value: <>Holds Ijaza — formal authorisation — to teach the major Islamic sciences</> },
  { label: "Background", value: <>Studied in Mauritania, known for rigorous traditional scholarship</> },
  { label: "Current", value: <>Continuing advanced Islamic studies</> },
  { label: "Experience", value: <>5+ years teaching, to over 700 students</> },
  { label: "Approach", value: <>Bridges traditional knowledge with modern, relatable teaching</> },
  { label: "Speciality", value: <>Making complex concepts easy to grasp, in a fraction of the time</> },
];

const rhythms = [
  { day: "Tue", name: "Tadabbur Tuesdays" },
  { day: "Thu", name: "Thikr Thursdays" },
  { day: "Sat", name: "Qiyam Saturdays" },
];

const communityFeatures = [
  "Live weekly sessions to ask, interact and grow in real time",
  "Direct access to your teacher for questions, mentorship & guidance",
  "Private, segregated spaces for brothers & sisters",
  "In-person meetups beyond the screen",
];

const Index = () => {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background">
      <SiteNav />

      {/* ───────────────── HERO ───────────────── */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pt-36">
        {/* Atmospheric layers */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* Lighthouse beacon — radial glow behind the headline */}
          <div className="absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-glow"
               style={{ background: "radial-gradient(ellipse, oklch(0.650 0.120 208 / 0.16) 0%, transparent 68%)" }} />
          {/* Star-field pattern at very low opacity */}
          <div className="star-field absolute inset-0 opacity-[0.035] [mask-image:radial-gradient(70%_60%_at_50%_30%,#000,transparent)]" />
          {/* Giant logo-mark star slowly rotating */}
          <Star
            variant="line"
            strokeWidth={1}
            className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 text-teal/[0.055] animate-spin-slow"
          />
          {/* Lighthouse beam sweep */}
          <div className="absolute left-1/2 top-0 h-full w-[160%] -translate-x-1/2 animate-beam
                          bg-[conic-gradient(from_180deg_at_50%_-5%,transparent_0deg,oklch(0.650_0.120_208_/_0.09)_14deg,transparent_28deg)]" />
        </div>

        <div className="relative mx-auto w-full max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Kicker>Advanced Islamic Studies</Kicker>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.06 }}
            className="display-1 mt-7 text-ink"
          >
            Islamic University
            <em className="mt-1 block font-normal not-italic text-teal-deep">
              in your pocket
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.16 }}
            className="mx-auto mt-8 max-w-lg font-sans text-lg leading-relaxed text-ink-soft sm:text-[1.12rem]"
          >
            Study the full Islamic sciences alongside a strong community built on real initiatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.24 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <CTAButton showSubtext={false} />
            <a href="#curriculum" className="btn-ghost no-rule group">
              Browse curriculum
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Advanced-programme note */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.32 }}
            className="mx-auto mt-9 flex max-w-xl items-start gap-3 rounded-2xl border border-teal/20 bg-teal/[0.07] px-5 py-4 text-left"
          >
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
            <p className="font-sans text-sm leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">This is an advanced programme.</span> If you are still building
              your foundations,{" "}
              <a
                href="https://illuminate.study"
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule font-semibold text-teal-deep"
              >
                start here
              </a>
              .
            </p>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            {...reveal}
            className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-7 gap-y-3"
          >
            {["Students worldwide", "Live weekly classes", "Taught by a qualified teacher"].map((t, i) => (
              <span key={t} className="flex items-center gap-7">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-teal/40" />}
                <span className="font-sans text-sm font-medium text-ink-mute">{t}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────────────── TEACHER ───────────────── */}
      <section id="teacher" className="scroll-mt-24 border-y border-line bg-paper-2/90 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal} className="mb-16 max-w-2xl">
            <Kicker>Your Teacher</Kicker>
            <h2 className="display-2 mt-5 text-ink">
              Learn from a{" "}
              <span className="text-teal-deep">qualified teacher</span>
            </h2>
          </motion.div>

          <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease }}
              className="relative mx-auto w-full max-w-xs"
            >
              {/* Architectural arch frame */}
              <div className="absolute -inset-4 rounded-t-[999px] rounded-b-[2rem] border border-teal/20" />
              {/* Teal halo glow behind photo */}
              <div className="absolute inset-0 rounded-t-[999px] rounded-b-[1.5rem] opacity-60"
                   style={{ boxShadow: "0 0 80px -20px oklch(0.650 0.120 208 / 0.25)" }} aria-hidden />
              <Star className="absolute -top-3 left-1/2 h-7 w-7 -translate-x-1/2 text-teal/70" />
              <div className="overflow-hidden rounded-t-[999px] rounded-b-[1.5rem] border border-line/70 shadow-lift">
                <img
                  src={ustadhPhoto}
                  alt="Ustadh Rhyad teaching"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-7 text-center">
                <p className="font-display text-2xl text-ink" style={{ fontVariationSettings: "'opsz' 24" }}>Ustadh Rhyad</p>
                <p className="mt-1.5 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ink-mute">Founder & Instructor</p>
              </div>
            </motion.div>

            {/* Credentials ledger */}
            <motion.dl
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="divide-y divide-line"
            >
              {credentials.map((c) => (
                <div key={c.label} className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[150px_1fr] sm:gap-8">
                  <dt className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.20em] text-teal-deep">
                    {c.label}
                  </dt>
                  <dd className="font-sans text-[1.02rem] leading-relaxed text-ink-soft">{c.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </section>

      {/* ───────────────── CURRICULUM ───────────────── */}
      <section id="curriculum" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal} className="mb-16 text-center">
            <div className="flex justify-center">
              <Kicker>The Curriculum</Kicker>
            </div>
            <h2 className="display-2 mx-auto mt-5 max-w-3xl text-ink">
              Study the major{" "}
              <span className="text-teal-deep">Islamic sciences</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-sans text-lg text-ink-soft">
              A complete, structured syllabus — eleven disciplines, taught from the classical texts.
            </p>
          </motion.div>

          <CurriculumAccordion />
        </div>
      </section>

      {/* ───────────────── COMMUNITY ───────────────── */}
      <section id="community" className="scroll-mt-24 border-y border-line bg-paper-2/90 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
            <motion.div {...reveal}>
              <Kicker>The Community</Kicker>
              <h2 className="display-2 mt-5 text-ink">
                A community built on{" "}
                <span className="text-teal-deep">real initiatives</span>
              </h2>
              <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-ink-soft">
                Knowledge grows in company. You study alongside brothers and sisters who keep weekly habits,
                meet in person, and carry each other forward.
              </p>
              <ul className="mt-9 space-y-4">
                {communityFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3.5 font-sans text-[1.02rem] leading-relaxed text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal/70" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Weekly rhythm */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
              className="overflow-hidden rounded-2xl border border-line bg-navy shadow-lift"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-line">
                <span className="font-display text-xl text-ink" style={{ fontVariationSettings: "'opsz' 24" }}>
                  Weekly rhythms
                </span>
                <span className="kicker text-[0.60rem]">Every week</span>
              </div>
              <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {rhythms.map((r) => (
                  <div key={r.name} className="flex flex-col items-center gap-3 px-6 py-8 text-center">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-teal/12 font-sans text-xs font-bold uppercase tracking-wider text-teal ring-1 ring-teal/20">
                      {r.day}
                    </span>
                    <span className="font-display text-lg text-ink" style={{ fontVariationSettings: "'opsz' 18" }}>
                      {r.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────────── TESTIMONIALS ───────────────── */}
      <section id="testimonials" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal} className="mb-14 text-center">
            <div className="flex justify-center">
              <Kicker>In Their Words</Kicker>
            </div>
            <h2 className="display-2 mx-auto mt-5 max-w-3xl text-ink">
              Students worldwide, already{" "}
              <span className="text-teal-deep">transforming their deen</span>
            </h2>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* ───────────────── PRICING ───────────────── */}
      <section id="pricing" className="scroll-mt-24 border-t border-line bg-paper-2/90 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal} className="mb-16 text-center">
            <div className="flex justify-center">
              <Kicker>Enrolment</Kicker>
            </div>
            <h2 className="display-2 mx-auto mt-5 max-w-3xl text-ink">
              Choose your{" "}
              <span className="text-teal-deep">path to knowledge</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-sans text-lg text-ink-soft">
              Pay quarterly for flexibility, or go yearly and get three months free.
            </p>
          </motion.div>

          <div className="flex flex-col items-stretch justify-center gap-6 md:flex-row md:items-start md:gap-8">
            <PricingCard
              name="Quarterly"
              tagline="Billed every 3 months. Cancel anytime."
              price={348}
              period="/quarter"
              features={[
                "Full access to all courses",
                "Direct access to your teacher for questions, mentorship & guidance",
                "Live weekly sessions to interact, ask, and grow in real-time",
                "Safe, supportive spaces to share doubts and connect with others on the same path",
                "Private, segregated community for brothers & sisters",
                "Build weekly habits: Fasting Monday, Tadabbur Tuesdays, Thikr Thursdays, Qiyam Saturdays",
              ]}
              bottomNote="Great if you want flexibility and prefer to pay as you go."
              href={CHECKOUT}
              delay={0}
            />
            <PricingCard
              name="Yearly"
              tagline="Pay once a year and save 3 months."
              price={1044}
              period="/year"
              features={[
                "Everything in Quarterly — plus:",
                "3 months free compared to quarterly billing",
                "Best value — only £87 per month equivalent",
                "Lock in your price for a full year",
              ]}
              bottomNote="Best value. Commit for the year and get 3 months on us."
              href={CHECKOUT}
              isRecommended
              badge="3 months free"
              delay={0.1}
            />
          </div>

          <motion.p {...reveal} className="mt-10 text-center font-sans text-sm text-ink-mute">
            Secure checkout · Cancel anytime · Instant access to the full library
          </motion.p>
        </div>
      </section>

      {/* ───────────────── FINAL CTA — logo gradient ───────────────── */}
      <section
        className="relative overflow-hidden px-5 py-28 md:px-8 md:py-36"
        style={{
          background: "linear-gradient(135deg, oklch(0.42 0.085 222) 0%, oklch(0.60 0.112 211) 48%, oklch(0.78 0.140 203) 100%)",
        }}
      >
        {/* Subtle star-field overlay */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="star-field absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(80%_70%_at_50%_40%,#000,transparent)]" />
          <Star variant="line" strokeWidth={1} className="absolute -right-12 top-8 h-48 w-48 text-white/10" />
          <Star variant="line" strokeWidth={1} className="absolute -left-14 bottom-6 h-60 w-60 text-white/08" />
        </div>

        <motion.div {...reveal} className="relative mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/70">
            <Star className="h-2.5 w-2.5 text-white/60" />
            Begin
          </span>
          <h2 className="display-2 mt-6 text-white">
            Start your learning journey now
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-lg leading-relaxed text-white/75">
            Join students worldwide on the path from confusion to clarity.
          </p>

          <div className="mt-11 flex flex-col items-center gap-4">
            <motion.a
              href={CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.99 }}
              className="no-rule group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-9 py-4 font-sans text-[1.05rem] font-semibold text-[oklch(0.42_0.085_222)] shadow-[0_18px_48px_-16px_oklch(0_0_0/0.40)] transition-all duration-300 hover:bg-[oklch(0.97_0.006_218)] hover:-translate-y-0.5 hover:shadow-[0_24px_56px_-16px_oklch(0_0_0/0.50)]"
            >
              Start learning now
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            <p className="font-sans text-sm text-white/60">
              Students worldwide · Cancel anytime
            </p>
          </div>
        </motion.div>
      </section>

      {/* ───────────────── FOOTER ───────────────── */}
      <footer className="bg-navy-deep border-t border-line px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
            <div className="max-w-sm">
              <a href="#top" className="no-rule flex items-center gap-2.5">
                <Star className="h-4 w-4 text-teal/70" />
                <span className="font-display text-xl text-ink" style={{ fontVariationSettings: "'opsz' 24" }}>
                  Muslim Lighthouse
                </span>
              </a>
              <p className="mt-4 font-sans text-sm leading-relaxed text-ink-mute">
                An advanced Islamic studies programme — the full sciences, a qualified teacher, and a community
                built on real initiatives.
              </p>
            </div>

            <nav className="flex flex-col gap-3">
              <span className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-ink-mute">
                Explore
              </span>
              {[
                { label: "Your Teacher", href: "#teacher" },
                { label: "Curriculum", href: "#curriculum" },
                { label: "Community", href: "#community" },
                { label: "Pricing", href: "#pricing" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="link-rule font-sans text-sm text-ink-soft hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <span className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-ink-mute">
                Get started
              </span>
              <a
                href={CHECKOUT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full bg-teal px-5 py-2.5 font-sans text-sm font-semibold text-navy-deep transition-all duration-300 hover:bg-[oklch(0.72_0.135_206)] hover:-translate-y-0.5"
              >
                Start learning
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://illuminate.study"
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule font-sans text-sm text-ink-soft hover:text-ink"
              >
                New to study? Start at Illuminate →
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center gap-3 border-t border-line pt-8 sm:flex-row sm:justify-between">
            <span className="font-sans text-xs text-ink-mute">
              © 2026 Muslim Lighthouse. All rights reserved.
            </span>
            <span className="flex items-center gap-2 font-sans text-xs text-ink-mute">
              <Star className="h-2 w-2 text-teal/50" />
              Seek knowledge, illuminate the heart.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
