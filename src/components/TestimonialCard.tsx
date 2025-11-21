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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:border-light-cyan/40 transition-all duration-300 group"
    >
      {/* Quote icon */}
      <div className="mb-4">
        <div className="w-10 h-10 bg-light-cyan/10 rounded-2xl flex items-center justify-center group-hover:bg-light-cyan/20 group-hover:scale-110 transition-all duration-300">
          <Quote className="w-5 h-5 text-light-cyan" />
        </div>
      </div>

      {/* Quote text */}
      <p className="text-base text-charcoal mb-6 leading-relaxed">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-light-cyan rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
          <span className="text-white font-bold text-sm">
            {name.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-dark-teal">{name}</p>
          <p className="text-xs text-muted-foreground">Verified Student</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
