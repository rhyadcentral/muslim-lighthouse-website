import CTAButton from "@/components/CTAButton";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import PricingCard from "@/components/PricingCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import ustadhPhoto from "@/assets/ustadh-rhyad.jpg";
import logo from "@/assets/muslim-lighthouse-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* SECTION 1: Hero */}
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-5 lg:px-10 w-full max-w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-light-cyan/5 via-transparent to-dark-teal/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.img
              src={logo}
              alt="Muslim Lighthouse Logo"
              className="h-10 sm:h-12 md:h-14 w-auto mx-auto mb-8 md:mb-10 lg:mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal text-center mb-4 md:mb-6 font-montserrat leading-tight px-2">
              You'll Never Feel <span className="text-bubble">Spiritually Lost</span> Again
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal text-center mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
            >
              Join 200+ students who replaced <span className="underline decoration-light-cyan decoration-2 underline-offset-4 text-dark-teal font-semibold">scattered learning</span> with <span className="underline decoration-light-cyan decoration-2 underline-offset-4 text-dark-teal font-semibold">structure</span> and are being transformed <span className="underline decoration-light-cyan decoration-2 underline-offset-4 text-dark-teal font-semibold">right now</span>
            </motion.p>
          </motion.div>

          <VideoPlaceholder />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 md:mt-12 flex justify-center"
          >
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Teacher Credibility */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-10 bg-light-gray w-full max-w-full overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal text-center mb-8 md:mb-12 font-montserrat px-2"
          >
            Learn From a <span className="text-bubble">Qualified Teacher</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src={ustadhPhoto}
                alt="Ustadh Rhyad"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-3xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-dark-teal font-montserrat mb-6">
                Ustadh Rhyad
              </h3>
              <ul className="space-y-3 text-charcoal">
                <motion.li
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span>
                    <strong>Credentials:</strong> Holds Ijazah (traditional certification) in all Islamic sciences
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span>
                    <strong>Background:</strong> Studied in Mauritania, known for rigorous traditional scholarship
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span>
                    <strong>Current:</strong> Based in Madinah — the city of the Prophet ﷺ
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span>
                    <strong>Experience:</strong> Taught 700+ students from confusion to confidence
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span>
                    <strong>Approach:</strong> Bridges traditional knowledge with modern, relatable teaching
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Complete Curriculum */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-10 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal text-center mb-3 md:mb-4 font-montserrat px-2"
          >
            Master All the <span className="text-bubble">Islamic Sciences</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl text-charcoal text-center mb-8 md:mb-12 px-2"
          >
            A complete, structured curriculum covering every essential science
          </motion.p>

          <CurriculumAccordion />
        </div>
      </section>

      {/* SECTION 4: Social Proof */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-10 bg-light-gray w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal text-center mb-8 md:mb-12 font-montserrat px-2"
          >
            Join <span className="text-bubble">200+ Students</span> Already Transforming Their Deen
          </motion.h2>

          <TestimonialCarousel />
        </div>
      </section>

      {/* SECTION 5: Pricing & Offer */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-10 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal text-center mb-4 md:mb-6 font-montserrat px-2"
          >
            Choose Your <span className="text-bubble">Path to Knowledge</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl text-charcoal text-center mb-8 md:mb-12 lg:mb-16 max-w-3xl mx-auto px-2"
          >
            Start your journey with our Standard plan or get complete access with Premium
          </motion.p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-6xl mx-auto items-stretch md:items-start justify-center">
            <PricingCard
              name="Standard Subscription"
              tagline="Learn on your own, at your own pace."
              price={9}
              features={[
                "📚 Full access to all courses",
                "♻️ New content added every week",
                "🕌 Invitation to in-person events to strengthen bonds & recharge your imān",
              ]}
              bottomNote="👉 Good if you just want the knowledge without the community or guidance."
              delay={0}
            />
            <PricingCard
              name="Premium Subscription"
              tagline="Build lasting habits, not just knowledge."
              price={29}
              features={[
                "Everything in Standard – PLUS:",
                "👨‍🏫 Direct access to your teacher for questions, mentorship & guidance",
                "📅 Live weekly sessions to interact, ask, and grow in real-time",
                "🤝 Brothers-only & sisters-only weekly sessions – safe, supportive spaces to share doubts, ask personal questions, and connect deeply with others on the same path",
                "🚻 Private, segregated community for brothers & sisters – study, grow & connect together",
                "🌟 Build weekly habits: Fasting Monday, Tadabbur Tuesdays, Thikr Thursdays, Qiyam Saturdays",
              ]}
              bottomNote="👉 Knowledge fades. Habits shape who you become. This keeps you on track every single week."
              isRecommended={true}
              delay={0.1}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-charcoal/70 mt-8 md:mt-12 text-sm md:text-base lg:text-lg px-4"
          >
            Both plans are less than a daily coffee. Way less than hiring a private tutor.
          </motion.p>
        </div>
      </section>

      {/* SECTION 6: Final CTA */}
      <section className="py-16 md:py-20 lg:py-32 px-4 md:px-5 lg:px-10 bg-light-gray w-full max-w-full overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal mb-4 md:mb-6 font-montserrat px-2"
          >
            Start Your <span className="text-bubble">3-Day Free Trial</span> Now
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-charcoal mb-8 md:mb-12 px-2"
          >
            Join 200+ students on the path from confusion to clarity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: Footer */}
      <footer className="bg-deep-navy py-8 md:py-12 px-4 md:px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <img src={logo} alt="Muslim Lighthouse Logo" className="h-10 sm:h-12 w-auto" />
            <span className="text-xs sm:text-sm text-white/70 text-center">
              © 2024 Muslim Lighthouse. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
