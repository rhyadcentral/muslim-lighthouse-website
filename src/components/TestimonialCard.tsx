import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  delay?: number;
}

const TestimonialCard = ({ quote, name, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="relative bg-white p-8 rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-300 group overflow-hidden"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-cyan via-dark-teal to-deep-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{ padding: '2px' }}>
        <div className="w-full h-full bg-white rounded-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Quote icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="mb-4"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-light-cyan/10 to-dark-teal/10 rounded-xl flex items-center justify-center">
            <Quote className="w-6 h-6 text-light-cyan" />
          </div>
        </motion.div>

        {/* Quote text */}
        <p className="text-base md:text-lg text-charcoal mb-6 leading-relaxed">
          "{quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-light-cyan to-dark-teal rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {name.split(' ').map(n => n[0]).slice(0, 2).join('')}
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-dark-teal">{name}</p>
            <p className="text-xs text-muted-foreground">Verified Student</p>
          </div>
        </div>

        {/* Decorative gradient blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-light-cyan/5 to-dark-teal/5 rounded-full blur-2xl"
        />
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
