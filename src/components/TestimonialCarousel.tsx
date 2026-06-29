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
    keywords: ["community", "well-structured"],
  },
  {
    quote: "I found more than what I was expecting. I thought it would just be uploaded videos, but it turned out to be much more interactive, personal, and engaging. The well-structured courses, active community, in-person meetups, weekly habits, and direct connection with a teacher exceeded my expectations.",
    name: "Fatima",
    keywords: ["interactive", "personal", "engaging", "well-structured courses", "active community", "in-person meetups", "direct connection"],
  },
  {
    quote: "Alhamdulillah for having a real teacher that you can interact with and a supportive community. Sometimes the absence of a teacher can cause chaos especially if you are a fresh student. Because of MLH I've met amazing sisters and have made great friendships!",
    name: "Islam",
    keywords: ["real teacher", "supportive community", "great friendships"],
  },
  {
    quote: "I found more than what I was expecting, not just knowledge but life lessons and practical guidance which has transformed the way I live my life. The interactive nature really makes a difference and can become part of your life.",
    name: "Samah",
    keywords: ["knowledge", "life lessons", "practical guidance", "transformed", "interactive"],
  },
  {
    quote: "Before I joined ML his answer was, 'if you join and study you will be more knowledgeable than 90% of Muslims if you learn and apply the teachings.' I can't argue with that statement being part of ML for over a year now.",
    name: "Shahel",
    keywords: ["more knowledgeable than 90% of Muslims", "learn and apply"],
  },
  {
    quote: "I found more than what was promised because I suspected there would only be classes without knowing there is a whole community. The most compelling aspects are the live class sessions. It's nice having access to a teacher through a screen.",
    name: "Aisha",
    keywords: ["whole community", "live class sessions", "access to a teacher"],
  },
  {
    quote: "You cover sciences and examples that always feel relevant but unspoken of. No matter where you are it is catered for everyone from beginner to advanced. Everyone can learn without feeling left out.",
    name: "Asmaa",
    keywords: ["relevant", "catered for everyone", "beginner to advanced"],
  },
  {
    quote: "I can seek personal advice directly from the teacher, ask questions at any time, and get guidance specific to my situation. The community was something I never expected, everyone is kind, respectful, and genuinely supportive.",
    name: "Lima",
    keywords: ["personal advice", "directly from the teacher", "ask questions", "kind, respectful, and genuinely supportive"],
  },
  {
    quote: "Learning Fiqh has helped me improve my prayer, and lighthouse habits is honestly life-changing. The weekly classes and the variety of lessons which Ustadh teaches really clearly and in depth Allahumma barik.",
    name: "Jumainah",
    keywords: ["improve my prayer", "life-changing", "weekly classes", "clearly and in depth"],
  },
  {
    quote: "The learning structure, the guidance on how to go about actually learning, not just the information itself. You address many misconceptions and take Islam back to its core. The illuminate program is the perfect beginning of guidance which will transform you.",
    name: "Nicolai",
    keywords: ["learning structure", "guidance", "misconceptions", "transform you"],
  },
  {
    quote: "I'm continuously gaining connection with my maker in a way I never thought I would've with the help of your great illustration skills. The series of lessons with all immaculate illustrations is just mind blowing subhanAllah.",
    name: "Muhammed",
    keywords: ["connection with my maker", "illustration skills", "immaculate illustrations"],
  },
];

const highlightKeywords = (quote: string, keywords: string[]) => {
  const parts: { text: string; isHighlight: boolean }[] = [];
  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
  const highlights: { start: number; end: number; text: string }[] = [];

  sortedKeywords.forEach((keyword) => {
    const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    let match;
    while ((match = regex.exec(quote)) !== null) {
      const overlaps = highlights.some(
        (h) =>
          (match!.index >= h.start && match!.index < h.end) ||
          (match!.index + match![0].length > h.start && match!.index + match![0].length <= h.end)
      );
      if (!overlaps) {
        highlights.push({ start: match.index, end: match.index + match[0].length, text: match[0] });
      }
    }
  });

  highlights.sort((a, b) => a.start - b.start);

  let lastIndex = 0;
  highlights.forEach((highlight) => {
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
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
      },
    },
    [Autoplay({ delay: 4800, stopOnInteraction: true })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden py-3" ref={emblaRef}>
        <div className="flex gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_calc(100%-1rem)] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-1rem)] min-w-0"
            >
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-[oklch(0.165_0.025_220)] p-7 transition-all duration-300 hover:border-teal/30 hover:shadow-[0_12px_40px_-16px_oklch(0_0_0/0.50)]">
                <span
                  className="mb-4 font-display text-5xl leading-[0.6] text-teal/40"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote className="mb-7 flex-1 font-sans text-[0.95rem] leading-relaxed text-ink-soft">
                  {highlightKeywords(testimonial.quote, testimonial.keywords).map((part, i) =>
                    part.isHighlight ? (
                      <span
                        key={i}
                        className="font-semibold text-teal-deep"
                      >
                        {part.text}
                      </span>
                    ) : (
                      <span key={i}>{part.text}</span>
                    )
                  )}
                </blockquote>

                <figcaption className="flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-teal/12 font-display text-lg text-teal-deep ring-1 ring-teal/25">
                    {testimonial.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-sans text-sm font-semibold text-ink">{testimonial.name}</span>
                    <span className="block font-sans text-xs text-ink-mute">Muslim Lighthouse student</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-9 flex items-center justify-center gap-3">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-navy text-ink-soft transition-all duration-300 hover:border-teal/40 hover:text-teal-deep disabled:opacity-30"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-navy text-ink-soft transition-all duration-300 hover:border-teal/40 hover:text-teal-deep disabled:opacity-30"
          aria-label="Next testimonials"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
