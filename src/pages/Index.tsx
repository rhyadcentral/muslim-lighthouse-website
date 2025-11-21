import CTAButton from "@/components/CTAButton";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import PricingCard from "@/components/PricingCard";
import TestimonialCard from "@/components/TestimonialCard";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SECTION 1: Hero */}
      <section className="py-20 md:py-32 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="text-center mb-8"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal text-center mb-6 font-montserrat leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Never Feel <motion.span
                className="text-bubble inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
              >Spiritually Lost</motion.span> Again
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
              className="text-xl md:text-2xl text-charcoal text-center mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Watch this 20-minute message if you're tired of learning alone and scattered
            </motion.p>
          </motion.div>

          <VideoPlaceholder />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <CTAButton />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-muted-foreground mt-6"
          >
            Join 500+ students • No credit card required
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: Teacher Credibility */}
      <section className="py-20 md:py-24 px-5 md:px-10 bg-light-gray">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal text-center mb-12 font-montserrat"
          >
            Learn From a <span className="text-bubble">Qualified Scholar</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-3xl shadow-lg border-2 border-gray-200 flex items-center justify-center">
                <p className="text-charcoal font-semibold text-lg">Ustadh Rhyad Photo</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-dark-teal font-montserrat mb-6">
                Ustadh Rhyad
              </h3>
              <ul className="space-y-3 text-charcoal">
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 100 }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <span>
                    <strong>Credentials:</strong> Holds Ijazah (traditional certification) in all Islamic sciences
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <span>
                    <strong>Background:</strong> Studied in Mauritania, known for rigorous traditional scholarship
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 100 }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                  >
                    <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <span>
                    <strong>Current:</strong> Based in Madinah — the city of the Prophet ﷺ
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 100 }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <span>
                    <strong>Experience:</strong> Taught 500+ students from confusion to confidence
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 100 }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
                  >
                    <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
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
      <section className="py-20 md:py-24 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal text-center mb-4 font-montserrat"
          >
            Master All the <span className="text-bubble">Islamic Sciences</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-charcoal text-center mb-12"
          >
            A complete, structured curriculum covering every essential science
          </motion.p>

          <CurriculumAccordion />
        </div>
      </section>

      {/* SECTION 4: Social Proof */}
      <section className="py-20 md:py-24 px-5 md:px-10 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal text-center mb-12 font-montserrat"
          >
            Join <span className="text-bubble">500+ Students</span> Already Transforming Their Deen
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="I finally have structure. For the first time, I know exactly what to study next."
              name="Muslim Lighthouse Student"
              delay={0}
            />
            <TestimonialCard
              quote="I've learned more in 3 months with Muslim Lighthouse than in years on my own."
              name="Muslim Lighthouse Student"
              delay={0.1}
            />
            <TestimonialCard
              quote="The community keeps me accountable. I'm not alone anymore."
              name="Muslim Lighthouse Student"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: Pricing & Offer */}
      <section className="py-20 md:py-24 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal text-center mb-6 font-montserrat"
          >
            Choose Your <span className="text-bubble">Path to Knowledge</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-charcoal text-center mb-16 max-w-3xl mx-auto"
          >
            Start your journey with our Standard plan or get complete access with Premium
          </motion.p>

          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto items-start justify-center">
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
            className="text-center text-charcoal/70 mt-12 text-lg"
          >
            Both plans are less than a daily coffee. Way less than hiring a private tutor.
          </motion.p>
        </div>
      </section>

      {/* SECTION 6: Final CTA */}
      <section className="py-24 md:py-32 px-5 md:px-10 bg-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 font-montserrat"
          >
            Start Your <span className="text-bubble">3-Day Free Trial</span> Now
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal mb-12"
          >
            Join 500+ students on the path from confusion to clarity
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
      <footer className="border-t border-gray-200 py-8 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Brand */}
            <div className="text-sm text-muted-foreground">
              © 2024 Muslim Lighthouse. All rights reserved.
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-charcoal transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-charcoal transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-charcoal transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
