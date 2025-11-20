import CTAButton from "@/components/CTAButton";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import AnimatedNav from "@/components/AnimatedNav";
import AnimatedStats from "@/components/AnimatedStats";
import { Check, Sparkles, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Navigation */}
      <AnimatedNav />

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-light-cyan/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-dark-teal/5 rounded-full blur-3xl"
        />
      </div>

      {/* SECTION 1: Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-5 md:px-10">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-light-cyan/10 to-dark-teal/10 border border-light-cyan/20 rounded-full px-6 py-3 mb-8"
            >
              <Sparkles className="w-4 h-4 text-light-cyan" />
              <span className="text-sm font-semibold text-dark-teal">
                Trusted by 500+ Students Worldwide
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient text-center mb-6 font-montserrat leading-tight">
              Never Feel Spiritually
              <br />
              Lost Again
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-charcoal/80 text-center mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              Watch this 20-minute message if you're tired of learning alone and scattered
            </motion.p>
          </motion.div>

          <VideoPlaceholder />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <CTAButton fullWidth />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex justify-center gap-8 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-light-cyan" />
              <span className="text-sm text-muted-foreground">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-light-cyan" />
              <span className="text-sm text-muted-foreground">Instant Access</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 md:py-24 px-5 md:px-10">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient font-montserrat mb-4">
              Join a Thriving Community
            </h2>
            <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
              Be part of something bigger. Learn alongside hundreds of motivated students.
            </p>
          </motion.div>

          <AnimatedStats />
        </div>
      </section>

      {/* SECTION 2: Teacher Credibility */}
      <section className="relative py-20 md:py-32 px-5 md:px-10 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient text-center mb-4 font-montserrat">
              Learn From a Qualified Scholar
            </h2>
            <p className="text-lg md:text-xl text-charcoal/70 text-center mb-16 max-w-2xl mx-auto">
              Traditional knowledge meets modern teaching methodology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-light-cyan/20 to-dark-teal/20 rounded-3xl shadow-premium overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-charcoal font-semibold text-lg">Ustadh Rhyad Photo</p>
                  </div>

                  {/* Decorative gradient border */}
                  <div className="absolute inset-0 border-4 border-light-cyan/30 rounded-3xl group-hover:border-light-cyan/60 transition-all duration-300" />
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-premium p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-light-cyan to-dark-teal rounded-xl flex items-center justify-center">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-teal">Ijazah Holder</p>
                      <p className="text-xs text-muted-foreground">Certified Scholar</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-dark-teal font-montserrat mb-8">
                Ustadh Rhyad
              </h3>

              <div className="space-y-4">
                {[
                  { title: "Credentials", text: "Holds Ijazah (traditional certification) in all Islamic sciences" },
                  { title: "Background", text: "Studied in Mauritania, known for rigorous traditional scholarship" },
                  { title: "Current", text: "Based in Madinah — the city of the Prophet ﷺ" },
                  { title: "Experience", text: "Taught 500+ students from confusion to confidence" },
                  { title: "Approach", text: "Bridges traditional knowledge with modern, relatable teaching" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-light-cyan to-dark-teal rounded-lg flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-teal mb-1">{item.title}</p>
                      <p className="text-charcoal/80 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Complete Curriculum */}
      <section className="relative py-20 md:py-32 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient font-montserrat mb-4">
              Master All the Islamic Sciences
            </h2>
            <p className="text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              A complete, structured curriculum covering every essential science — from foundational to advanced
            </p>
          </motion.div>

          <CurriculumAccordion />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Social Proof */}
      <section className="relative py-20 md:py-32 px-5 md:px-10 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient font-montserrat mb-4">
              Students Love Muslim Lighthouse
            </h2>
            <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
              Join 500+ students already transforming their Deen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
      <section className="relative py-20 md:py-32 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient font-montserrat mb-4">
              Transform Your Knowledge
            </h2>
            <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
              Complete access for less than a daily coffee
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-white rounded-3xl shadow-premium-lg border-2 border-light-cyan/20 p-8 md:p-12 overflow-hidden group">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-light-cyan/5 via-transparent to-dark-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative elements */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-light-cyan/10 to-dark-teal/10 rounded-full blur-3xl"
              />

              <div className="relative z-10">
                {/* Pricing */}
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <p className="text-6xl md:text-7xl font-bold text-gradient mb-4 font-montserrat">
                      £29<span className="text-3xl md:text-4xl">/month</span>
                    </p>
                    <p className="text-charcoal/70 text-lg">
                      Less than a daily coffee • Way less than a private tutor
                    </p>
                  </motion.div>
                </div>

                {/* Free trial badge */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-r from-light-cyan/20 to-dark-teal/20 border-2 border-light-cyan/50 rounded-2xl p-8 mb-10 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-light-cyan/10 rounded-full blur-2xl" />
                  <div className="relative z-10 text-center">
                    <p className="text-3xl font-bold text-dark-teal mb-2 font-montserrat">
                      Try FREE for 3 Days
                    </p>
                    <p className="text-charcoal/70">
                      No credit card required • Cancel anytime
                    </p>
                  </div>
                </motion.div>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-4 mb-10">
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
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 bg-light-gray/50 p-4 rounded-xl hover:bg-light-gray transition-all duration-300"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-light-cyan to-dark-teal rounded-lg flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-charcoal/90 leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <CTAButton fullWidth />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: Final CTA */}
      <section className="relative py-24 md:py-40 px-5 md:px-10 bg-gradient-to-br from-light-gray via-white to-light-gray overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-light-cyan/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-dark-teal/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-light-cyan/20 to-dark-teal/20 border-2 border-light-cyan/30 rounded-full px-8 py-3 mb-8"
            >
              <Sparkles className="w-5 h-5 text-light-cyan" />
              <span className="text-sm font-bold text-dark-teal">
                Limited Time: 3-Day Free Trial
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6 font-montserrat leading-tight">
              Ready to Transform
              <br />
              Your Islamic Knowledge?
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed"
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

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-charcoal/60 text-sm"
            >
              Start learning today • No commitment required
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: Footer */}
      <footer className="relative bg-gradient-to-br from-dark-teal via-dark-teal to-deep-navy py-12 px-5 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-light-cyan rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-light-cyan rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-light-cyan to-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-dark-teal font-bold text-lg">ML</span>
              </div>
              <span className="font-montserrat font-bold text-xl text-white">
                Muslim Lighthouse
              </span>
            </div>

            <div className="flex gap-8 text-sm">
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Contact
              </motion.a>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm">
              © 2024 Muslim Lighthouse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
