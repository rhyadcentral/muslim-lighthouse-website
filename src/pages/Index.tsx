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

/* ── Small shared building blocks ─────────────────────────────── */

const Kicker = ({ children }: { children: React.ReactNode }) => (
  <span className="kicker">
    <Star className="h-3 w-3 text-brass" />
    {children}
  </span>
);

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease },
};

/* ── Teacher credentials ──────────────────────────────────────── */

const credentials: { label: string; value: React.ReactNode }[] = [
  { label: "Teacher", value: <>Shaykh Baha Al-Majlisi, a well-respected Mauritanian scholar</> },
  { label: "Credentials", value: <>Holds Ijaza — formal authorisation — to teach the major Islamic sciences</> },
  { label: "Background", value: <>Studied in Mauritania, known for rigorous traditional scholarship</> },
  { label: "Current", value: <>Continuing advanced Islamic studies</> },
  { label: "Experience", value: <>5+ years teaching, to over 700 students</> },
  { label: "Approach", value: <>Bridges traditional knowledge with modern, relatable teaching</> },
  { label: "Speciality", value: <>Making complex concepts easy to grasp, in a fraction of the time</> },
];

/* ── Community rhythms (drawn from the live programme) ─────────── */

const rhythms = [
  { day: "Mon", name: "Fasting Mondays" },
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
      <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:pb-20 md:px-8 md:pt-32 lg:pb-24">
        {/* Atmospheric geometry */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="star-field absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(70%_55%_at_50%_30%,#000,transparent)]" />
          <Star
            variant="line"
            strokeWidth={1.5}
            className="absolute left-1/2 top-[8%] h-[520px] w-[520px] -translate-x-1/2 text-teal/[0.06] animate-spin-slow"
          />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Kicker>Advanced Islamic Studies</Kicker>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.06 }}
            className="display-1 mt-6 text-ink"
          >
            Islamic University
            <span className="mt-1 block text-teal-deep">in your pocket</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.16 }}
            className="mx-auto mt-7 max-w-xl font-sans text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            Study the full Islamic sciences alongside a strong community built on real initiatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.24 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <CTAButton showSubtext={false} />
            <a href="#intro" className="btn-ghost no-rule group">
              Watch the intro
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Advanced-programme note */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.32 }}
            className="mx-auto mt-8 flex max-w-xl items-start gap-3 rounded-2xl border border-brass/30 bg-brass/[0.06] px-5 py-4 text-left"
          >
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brass-deep" />
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
        </div>

        {/* Trust strip */}
        <motion.div {...reveal} className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {["Students worldwide", "Live weekly classes", "Taught by a qualified teacher"].map((t, i) => (
            <span key={t} className="flex items-center gap-6">
              {i > 0 && <Star className="h-2.5 w-2.5 text-brass/60" />}
              <span className="font-sans text-sm font-medium text-ink-mute">{t}</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* ───────────────── TEACHER ───────────────── */}
      <section id="teacher" className="scroll-mt-24 border-y border-line bg-paper-2/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal} className="mb-14 max-w-2xl">
            <Kicker>Your Teacher</Kicker>
            <h2 className="display-2 mt-5 text-ink">
              Learn from a <span className="text-teal-deep">qualified teacher</span>
            </h2>
          </motion.div>

          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            {/* Portrait in a mihrab niche */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className="relative mx-auto w-full max-w-sm"
            >
              <div className="absolute -inset-3 rounded-t-[999px] rounded-b-[1.75rem] border border-brass/30" />
              <Star className="absolute -top-3 left-1/2 h-7 w-7 -translate-x-1/2 text-brass" />
              <div className="overflow-hidden rounded-t-[999px] rounded-b-[1.5rem] border border-line bg-card shadow-lift">
                <img
                  src={ustadhPhoto}
                  alt="Ustadh Rhyad teaching"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="font-display text-2xl text-ink">Ustadh Rhyad</p>
                <p className="mt-1 font-sans text-sm uppercase tracking-[0.18em] text-ink-mute">Founder & Instructor</p>
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
                <div key={c.label} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[160px_1fr] sm:gap-6">
                  <dt className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">
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
      <section id="curriculum" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal} className="mb-14 text-center">
            <div className="flex justify-center">
              <Kicker>The Curriculum</Kicker>
            </div>
            <h2 className="display-2 mx-auto mt-5 max-w-3xl text-ink">
              Study the major <span className="text-teal-deep">Islamic sciences</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-sans text-lg text-ink-mute">
              A complete, structured syllabus — eleven disciplines, taught from the classical texts.
            </p>
          </motion.div>

          <CurriculumAccordion />
        </div>
      </section>

      {/* ───────────────── COMMUNITY ───────────────── */}
      <section id="community" className="scroll-mt-24 border-y border-line bg-paper-2/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <motion.div {...reveal}>
              <Kicker>The Community</Kicker>
              <h2 className="display-2 mt-5 text-ink">
                A community built on <span className="text-teal-deep">real initiatives</span>
              </h2>
              <p className="mt-5 max-w-md font-sans text-lg leading-relaxed text-ink-soft">
                Knowledge grows in company. You study alongside brothers and sisters who keep weekly habits,
                meet in person, and carry each other forward.
              </p>
              <ul className="mt-8 space-y-3.5">
                {communityFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-sans text-[1.02rem] leading-relaxed text-ink-soft">
                    <Star className="mt-1.5 h-3 w-3 shrink-0 text-brass" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Weekly rhythm ledger */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="surface overflow-hidden p-2"
            >
              <div className="flex items-center justify-between px-5 py-4">
                <span className="font-display text-xl text-ink">Weekly rhythms</span>
                <span className="kicker text-[0.62rem]">Every week</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {rhythms.map((r, i) => (
                  <div
                    key={r.name}
                    className={`flex items-center gap-4 px-5 py-5 ${i % 2 === 0 ? "sm:border-r" : ""} ${
                      i < 2 ? "border-b" : ""
                    } border-line`}
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-teal/10 font-sans text-xs font-bold uppercase tracking-wider text-teal-deep ring-1 ring-teal/15">
                      {r.day}
                    </span>
                    <span className="font-display text-lg text-ink">{r.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 bg-paper-2/70 px-5 py-4">
                <Star className="h-3.5 w-3.5 text-brass" />
                <span className="font-sans text-sm text-ink-mute">
                  Plus Tadabbur circles, Qiyam nights and in-person gatherings.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────────── TESTIMONIALS ───────────────── */}
      <section id="testimonials" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal} className="mb-12 text-center">
            <div className="flex justify-center">
              <Kicker>In Their Words</Kicker>
            </div>
            <h2 className="display-2 mx-auto mt-5 max-w-3xl text-ink">
              Students worldwide, already <span className="text-teal-deep">transforming their deen</span>
            </h2>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* ───────────────── PRICING ───────────────── */}
      <section id="pricing" className="scroll-mt-24 border-t border-line bg-paper-2/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div {...reveal} className="mb-14 text-center">
            <div className="flex justify-center">
              <Kicker>Enrolment</Kicker>
            </div>
            <h2 className="display-2 mx-auto mt-5 max-w-3xl text-ink">
              Choose your <span className="text-teal-deep">path to knowledge</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-sans text-lg text-ink-mute">
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
                "📚 Full access to all courses",
                "👨‍🏫 Direct access to your teacher for questions, mentorship & guidance",
                "📅 Live weekly sessions to interact, ask, and grow in real-time",
                "🤝 Safe, supportive spaces to share doubts, ask questions, and connect deeply with others on the same path",
                "🚻 Private, segregated community for brothers & sisters – study, grow & connect together",
                "🌟 Build weekly habits: Fasting Monday, Tadabbur Tuesdays, Thikr Thursdays, Qiyam Saturdays",
              ]}
              bottomNote="👉 Great if you want flexibility and prefer to pay as you go."
              href={CHECKOUT}
              delay={0}
            />
            <PricingCard
              name="Yearly"
              tagline="Pay once a year and save 3 months."
              price={1044}
              period="/year"
              features={[
                "✅ Everything in Quarterly — PLUS:",
                "🎁 3 months free compared to quarterly billing",
                "💸 Best value — only £87/month equivalent",
                "🔒 Lock in your price for a full year",
              ]}
              bottomNote="👉 Best value. Commit for the year and get 3 months on us."
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

      {/* ───────────────── FINAL CTA (dark band) ───────────────── */}
      <section className="relative overflow-hidden bg-navy-deep px-5 py-24 md:px-8 md:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="star-field absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(80%_70%_at_50%_40%,#000,transparent)]" />
          {/* lighthouse beam */}
          <div className="absolute left-1/2 top-0 h-full w-[140%] -translate-x-1/2 animate-beam bg-[conic-gradient(from_180deg_at_50%_-10%,transparent_0deg,oklch(var(--teal)/0.16)_18deg,transparent_36deg)]" />
          <Star variant="line" strokeWidth={1.5} className="absolute -right-10 top-10 h-44 w-44 text-teal-bright/10" />
          <Star variant="line" strokeWidth={1.5} className="absolute -left-12 bottom-8 h-56 w-56 text-brass/10" />
        </div>

        <motion.div {...reveal} className="relative mx-auto max-w-2xl text-center">
          <span className="kicker text-brass">
            <Star className="h-3 w-3 text-brass" />
            Begin
          </span>
          <h2 className="display-2 mt-6 text-paper">
            Start your learning journey now
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-lg leading-relaxed text-[oklch(var(--paper)/0.72)]">
            Join students worldwide on the path from confusion to clarity.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <motion.a
              href={CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.99 }}
              className="no-rule group inline-flex items-center justify-center gap-2.5 rounded-full bg-brass px-9 py-4 font-sans text-[1.05rem] font-semibold text-[oklch(var(--accent-foreground))] shadow-[0_18px_44px_-18px_oklch(var(--brass)/0.9)] transition-colors duration-300 hover:bg-[oklch(0.76_0.1_74)]"
            >
              Start learning now
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            <p className="font-sans text-sm text-[oklch(var(--paper)/0.6)]">
              Students worldwide · Cancel anytime
            </p>
          </div>
        </motion.div>
      </section>

      {/* ───────────────── FOOTER ───────────────── */}
      <footer className="bg-navy px-5 py-14 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
            <div className="max-w-sm">
              <a href="#top" className="no-rule flex items-center gap-2.5">
                <Star className="h-5 w-5 text-brass" />
                <span className="font-display text-xl text-paper">Muslim Lighthouse</span>
              </a>
              <p className="mt-4 font-sans text-sm leading-relaxed text-[oklch(var(--paper)/0.6)]">
                An advanced Islamic studies programme — the full sciences, a qualified teacher, and a community
                built on real initiatives.
              </p>
            </div>

            <nav className="flex flex-col gap-3">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(var(--paper)/0.45)]">
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
                  className="link-rule font-sans text-sm text-[oklch(var(--paper)/0.78)] hover:text-paper"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(var(--paper)/0.45)]">
                Get started
              </span>
              <a
                href={CHECKOUT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full bg-brass px-5 py-2.5 font-sans text-sm font-semibold text-[oklch(var(--accent-foreground))] transition-colors hover:bg-[oklch(0.76_0.1_74)]"
              >
                Start learning
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://illuminate.study"
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule font-sans text-sm text-[oklch(var(--paper)/0.78)] hover:text-paper"
              >
                New to study? Start at Illuminate →
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 border-t border-[oklch(var(--paper)/0.12)] pt-7 sm:flex-row sm:justify-between">
            <span className="font-sans text-xs text-[oklch(var(--paper)/0.5)]">
              © 2026 Muslim Lighthouse. All rights reserved.
            </span>
            <span className="flex items-center gap-2 font-sans text-xs text-[oklch(var(--paper)/0.5)]">
              <Star className="h-2.5 w-2.5 text-brass/70" />
              Seek knowledge, illuminate the heart.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
