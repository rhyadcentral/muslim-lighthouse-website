import CTAButton from "@/components/CTAButton";
import CurriculumAccordion from "@/components/CurriculumAccordion";
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
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient text-center mb-6 font-montserrat leading-tight">
              Never Feel Spiritually Lost Again
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-charcoal/80 text-center mb-12 max-w-3xl mx-auto leading-relaxed"
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
            <CTAButton fullWidth />
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient text-center mb-12 font-montserrat"
          >
            Learn From a Qualified Scholar
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-light-cyan/20 to-dark-teal/20 rounded-2xl shadow-premium border-4 border-light-cyan/30 hover:border-light-cyan/60 transition-all duration-300 flex items-center justify-center"
              >
                <p className="text-charcoal font-semibold text-lg">Ustadh Rhyad Photo</p>
              </motion.div>
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
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span>
                    <strong>Credentials:</strong> Holds Ijazah (traditional certification) in all Islamic sciences
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span>
                    <strong>Background:</strong> Studied in Mauritania, known for rigorous traditional scholarship
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span>
                    <strong>Current:</strong> Based in Madinah — the city of the Prophet ﷺ
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span>
                    <strong>Experience:</strong> Taught 500+ students from confusion to confidence
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
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
      <section className="py-20 md:py-24 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient text-center mb-4 font-montserrat"
          >
            Master All the Islamic Sciences
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient text-center mb-12 font-montserrat"
          >
            Join 500+ Students Already Transforming Their Deen
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient text-center mb-12 font-montserrat"
          >
            Get Complete Access for Less Than a Daily Coffee
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-premium-lg border-2 border-light-cyan/20 p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <p className="text-5xl md:text-6xl font-bold text-gradient mb-4 font-montserrat">
                £29<span className="text-2xl md:text-3xl">/month</span>
              </p>
              <p className="text-charcoal text-lg">
                That's less than a daily coffee. Way less than hiring a private tutor.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-light-cyan/10 to-dark-teal/10 border-2 border-light-cyan/50 rounded-xl p-6 mb-8"
            >
              <p className="text-2xl font-semibold text-dark-teal text-center mb-2 font-montserrat">
                Try FREE for 3 Days
              </p>
              <p className="text-center text-charcoal">
                No credit card required • Cancel anytime
              </p>
            </motion.div>

            <div className="space-y-3 mb-8">
              {[
                "Complete Islamic curriculum — all sciences",
                "Live classes with Ustadh Rhyad (Ijazah holder)",
                "Recordings of every class",
                "Supportive community of 500+ students",
                "Clear roadmap — always know what's next",
                "Direct access to ask questions",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-6 h-6 text-light-cyan shrink-0 mt-0.5" />
                  <span className="text-charcoal">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6 font-montserrat"
          >
            Start Your 3-Day Free Trial Now
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
          >
            <CTAButton fullWidth />
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: Footer */}
      <footer className="bg-gradient-to-br from-dark-teal to-deep-navy py-8 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white text-sm">
            © 2024 Muslim Lighthouse. All rights reserved.
          </p>
          <div className="mt-3 flex justify-center gap-6 text-sm">
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="text-white/80 hover:text-white transition-smooth"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="text-white/80 hover:text-white transition-smooth"
            >
              Terms
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
