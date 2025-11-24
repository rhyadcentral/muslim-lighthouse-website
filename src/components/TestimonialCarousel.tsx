import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  quote: string;
  name: string;
  keywords: string[];
}

const testimonials: Testimonial[] = [
  {
    quote: "The most compelling thing about Muslim Lighthouse is that it's a community. People are always doing something to benefit the other students. The classes are well-structured, and it makes it easy to listen and learn.",
    name: "Yaseen",
    keywords: ["community", "well-structured"]
  },
  {
    quote: "I found more than what I was expecting. I thought it would just be uploaded videos, but it turned out to be much more interactive, personal, and engaging. The well-structured courses, active community, in-person meetups, weekly habits, and direct connection with a teacher exceeded my expectations.",
    name: "Fatima",
    keywords: ["interactive", "personal", "engaging", "well-structured courses", "active community", "in-person meetups", "direct connection"]
  },
  {
    quote: "Alhamdulillah for having a real teacher that you can interact with and a supportive community. Sometimes the absence of a teacher can cause chaos especially if you are a fresh student. Because of MLH I've met amazing sisters and have made great friendships!",
    name: "Islam",
    keywords: ["real teacher", "supportive community", "great friendships"]
  },
  {
    quote: "I found more than what I was expecting—not just knowledge but life lessons and practical guidance which has transformed the way I live my life. The interactive nature really makes a difference and can become part of your life.",
    name: "Samah",
    keywords: ["knowledge", "life lessons", "practical guidance", "transformed", "interactive"]
  },
  {
    quote: "Before I joined ML his answer was, 'if you join and study you will be more knowledgeable than 90% of Muslims if you learn and apply the teachings.' I can't argue with that statement being part of ML for over a year now.",
    name: "Shahel",
    keywords: ["more knowledgeable than 90% of Muslims", "learn and apply"]
  },
  {
    quote: "I found more than what was promised because I suspected there would only be classes without knowing there is a whole community. The most compelling aspects are the live class sessions. It's nice having access to a teacher through a screen.",
    name: "Aisha",
    keywords: ["whole community", "live class sessions", "access to a teacher"]
  },
  {
    quote: "You cover sciences and examples that always feel relevant but unspoken of. No matter where you are it is catered for everyone from beginner to advanced. Everyone can learn without feeling left out.",
    name: "Asmaa",
    keywords: ["relevant", "catered for everyone", "beginner to advanced"]
  },
  {
    quote: "I can seek personal advice directly from the teacher, ask questions at any time, and get guidance specific to my situation. The community was something I never expected—everyone is kind, respectful, and genuinely supportive.",
    name: "Lima",
    keywords: ["personal advice", "directly from the teacher", "ask questions", "kind, respectful, and genuinely supportive"]
  },
  {
    quote: "Learning Fiqh has helped me improve my prayer, and lighthouse habits is honestly life-changing. The weekly classes and the variety of lessons which Ustadh teaches really clearly and in depth Allahumma barik.",
    name: "Jumainah",
    keywords: ["improve my prayer", "life-changing", "weekly classes", "clearly and in depth"]
  },
  {
    quote: "The learning structure, the guidance on how to go about actually learning, not just the information itself. You address many misconceptions and take Islam back to its core. The illuminate program is the perfect beginning of guidance which will transform you.",
    name: "Nicolai",
    keywords: ["learning structure", "guidance", "misconceptions", "transform you"]
  },
  {
    quote: "I'm continuously gaining connection with my maker in a way I never thought I would've with the help of your great illustration skills. The series of lessons with all immaculate illustrations is just mind blowing subhanAllah.",
    name: "Muhammed",
    keywords: ["connection with my maker", "illustration skills", "immaculate illustrations"]
  }
];

// Helper function to highlight keywords in a quote
const highlightKeywords = (quote: string, keywords: string[]) => {
  let highlightedQuote = quote;
  const parts: { text: string; isHighlight: boolean }[] = [];

  // Sort keywords by length (longest first) to avoid partial matches
  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);

  // Create a map of positions to highlight
  const highlights: { start: number; end: number; text: string }[] = [];
  sortedKeywords.forEach(keyword => {
    const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    let match;
    while ((match = regex.exec(quote)) !== null) {
      // Check if this position is already highlighted
      const overlaps = highlights.some(h =>
        (match.index >= h.start && match.index < h.end) ||
        (match.index + match[0].length > h.start && match.index + match[0].length <= h.end)
      );
      if (!overlaps) {
        highlights.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[0]
        });
      }
    }
  });

  // Sort highlights by position
  highlights.sort((a, b) => a.start - b.start);

  // Build the parts array
  let lastIndex = 0;
  highlights.forEach(highlight => {
    if (highlight.start > lastIndex) {
      parts.push({ text: quote.substring(lastIndex, highlight.start), isHighlight: false });
    }
    parts.push({ text: highlight.text, isHighlight: true });
    lastIndex = highlight.end;
  });
  if (lastIndex < quote.length) {
    parts.push({ text: quote.substring(lastIndex), isHighlight: false });
  }

  return parts;
};

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 }
      }
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative py-8 pb-16">
      <div className="overflow-x-clip overflow-y-visible py-4" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6 px-4 md:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex-[0_0_calc(100%-2rem)] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-1rem)] min-w-0"
            >
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-card-lg hover:shadow-card-hover transition-all duration-200 h-full flex flex-col">
                {/* Quote icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-light-cyan/10 rounded-2xl flex items-center justify-center">
                    <Quote className="w-6 h-6 text-light-cyan" />
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-sm md:text-base leading-relaxed text-charcoal mb-6 flex-1">
                  "{highlightKeywords(testimonial.quote, testimonial.keywords).map((part, i) => (
                    part.isHighlight ? (
                      <span key={i} className="bg-light-cyan/15 px-1 rounded">
                        {part.text}
                      </span>
                    ) : (
                      part.text
                    )
                  ))}"
                </p>

                {/* Author with abstract avatar */}
                <div className="flex items-center gap-3">
                  <img
                    src={`https://api.dicebear.com/7.x/shapes/svg?seed=${testimonial.name}&backgroundColor=b6e3f4`}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full shadow-card"
                  />
                  <div>
                    <p className="text-sm font-semibold text-dark-teal">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">Muslim Lighthouse Student</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-2 mt-6 md:mt-8">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-card hover:shadow-card-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center group"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-dark-teal group-hover:text-light-cyan transition-colors" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-card hover:shadow-card-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center group"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-dark-teal group-hover:text-light-cyan transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
