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
      whileHover={{ y: -4 }}
      className="bg-white p-8 rounded-3xl shadow-card-lg hover:shadow-card-hover transition-all duration-200"
    >
      {/* Quote icon - Simplified, no extra animations */}
      <div className="mb-4">
        <div className="w-12 h-12 bg-light-cyan/10 rounded-2xl flex items-center justify-center">
          <Quote className="w-6 h-6 text-light-cyan" />
        </div>
      </div>

      {/* Quote text - Good line height for readability */}
      <p className="text-base leading-relaxed text-charcoal mb-6">
        "{quote}"
      </p>

      {/* Author - Using color for hierarchy */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-light-cyan rounded-full flex items-center justify-center shadow-card">
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
