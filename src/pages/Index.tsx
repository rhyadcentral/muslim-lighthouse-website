import CTAButton from "@/components/CTAButton";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SECTION 1: Hero */}
      <section className="py-20 md:py-32 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-navy text-center mb-4 font-montserrat">
            Never Feel Spiritually Lost Again
          </h1>
          <p className="text-lg md:text-xl text-charcoal text-center mb-12 max-w-3xl mx-auto">
            Watch this 20-minute message if you're tired of learning alone and scattered
          </p>
          
          <VideoPlaceholder />
          
          <div className="mt-12 flex justify-center">
            <CTAButton fullWidth />
          </div>
          
          <p className="text-center text-muted-foreground mt-6">
            Join 500+ students • No credit card required
          </p>
        </div>
      </section>

      {/* SECTION 2: Teacher Credibility */}
      <section className="py-20 md:py-24 px-5 md:px-10 bg-light-gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-teal text-center mb-12 font-montserrat">
            Learn From a Qualified Scholar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-light-cyan/20 to-dark-teal/20 rounded-lg shadow-lg border-4 border-light-cyan flex items-center justify-center">
                <p className="text-charcoal font-semibold text-lg">Ustadh Rhyad Photo</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-dark-teal font-montserrat mb-6">
                Ustadh Rhyad
              </h3>
              <ul className="space-y-3 text-charcoal">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span><strong>Credentials:</strong> Holds Ijazah (traditional certification) in all Islamic sciences</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span><strong>Background:</strong> Studied in Mauritania, known for rigorous traditional scholarship</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span><strong>Current:</strong> Based in Madinah — the city of the Prophet ﷺ</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span><strong>Experience:</strong> Taught 500+ students from confusion to confidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-light-cyan shrink-0 mt-1" />
                  <span><strong>Approach:</strong> Bridges traditional knowledge with modern, relatable teaching</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Complete Curriculum */}
      <section className="py-20 md:py-24 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-teal text-center mb-4 font-montserrat">
            Master All the Islamic Sciences
          </h2>
          <p className="text-lg md:text-xl text-charcoal text-center mb-12">
            A complete, structured curriculum covering every essential science
          </p>
          
          <CurriculumAccordion />
        </div>
      </section>

      {/* SECTION 4: Social Proof */}
      <section className="py-20 md:py-24 px-5 md:px-10 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-teal text-center mb-12 font-montserrat">
            Join 500+ Students Already Transforming Their Deen
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="I finally have structure. For the first time, I know exactly what to study next."
              name="Muslim Lighthouse Student"
            />
            <TestimonialCard
              quote="I've learned more in 3 months with Muslim Lighthouse than in years on my own."
              name="Muslim Lighthouse Student"
            />
            <TestimonialCard
              quote="The community keeps me accountable. I'm not alone anymore."
              name="Muslim Lighthouse Student"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: Pricing & Offer */}
      <section className="py-20 md:py-24 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-teal text-center mb-12 font-montserrat">
            Get Complete Access for Less Than a Daily Coffee
          </h2>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-[0_4px_16px_rgba(0,151,178,0.15)] border border-light-cyan p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-5xl md:text-6xl font-bold text-dark-teal mb-4 font-montserrat">
                £29<span className="text-2xl md:text-3xl">/month</span>
              </p>
              <p className="text-charcoal text-lg">
                That's less than a daily coffee. Way less than hiring a private tutor.
              </p>
            </div>
            
            <div className="bg-light-cyan/10 border-2 border-light-cyan rounded-lg p-6 mb-8">
              <p className="text-2xl font-semibold text-dark-teal text-center mb-2 font-montserrat">
                Try FREE for 3 Days
              </p>
              <p className="text-center text-charcoal">
                No credit card required • Cancel anytime
              </p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-light-cyan shrink-0 mt-0.5" />
                <span className="text-charcoal">Complete Islamic curriculum — all sciences</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-light-cyan shrink-0 mt-0.5" />
                <span className="text-charcoal">Live classes with Ustadh Rhyad (Ijazah holder)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-light-cyan shrink-0 mt-0.5" />
                <span className="text-charcoal">Recordings of every class</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-light-cyan shrink-0 mt-0.5" />
                <span className="text-charcoal">Supportive community of 500+ students</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-light-cyan shrink-0 mt-0.5" />
                <span className="text-charcoal">Clear roadmap — always know what's next</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-light-cyan shrink-0 mt-0.5" />
                <span className="text-charcoal">Direct access to ask questions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Final CTA */}
      <section className="py-24 md:py-32 px-5 md:px-10 bg-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-teal mb-6 font-montserrat">
            Start Your 3-Day Free Trial Now
          </h2>
          <p className="text-lg md:text-xl text-charcoal mb-12">
            Join 500+ students on the path from confusion to clarity
          </p>
          
          <CTAButton fullWidth />
        </div>
      </section>

      {/* SECTION 7: Footer */}
      <footer className="bg-dark-teal py-8 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white text-sm">
            © 2024 Muslim Lighthouse. All rights reserved.
          </p>
          <div className="mt-3 flex justify-center gap-6 text-sm">
            <a href="#" className="text-white/80 hover:text-white transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-smooth">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
