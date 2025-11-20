import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, BookOpen, Award, TrendingUp } from "lucide-react";

interface StatProps {
  value: number;
  label: string;
  icon: React.ElementType;
  delay: number;
  suffix?: string;
}

const AnimatedCounter = ({ value, delay, suffix = "" }: { value: number; delay: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(stepValue * currentStep));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatCard = ({ value, label, icon: Icon, delay, suffix }: StatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative group"
    >
      <div className="relative bg-white rounded-2xl p-8 shadow-premium hover:shadow-premium-lg transition-all duration-300 overflow-hidden">
        {/* Gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-light-cyan/0 to-dark-teal/0 group-hover:from-light-cyan/10 group-hover:to-dark-teal/10 transition-all duration-300" />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 bg-gradient-to-br from-light-cyan to-dark-teal rounded-2xl flex items-center justify-center mb-4 shadow-lg"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Value */}
          <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 font-montserrat">
            <AnimatedCounter value={value} delay={delay} suffix={suffix} />
          </div>

          {/* Label */}
          <p className="text-charcoal/70 text-sm md:text-base">{label}</p>
        </div>

        {/* Decorative blob */}
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
          className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-light-cyan/5 to-dark-teal/5 rounded-full blur-2xl"
        />
      </div>
    </motion.div>
  );
};

const AnimatedStats = () => {
  const stats = [
    { value: 500, label: "Active Students", icon: Users, suffix: "+" },
    { value: 10, label: "Islamic Sciences", icon: BookOpen, suffix: "+" },
    { value: 100, label: "Hours of Content", icon: Award, suffix: "+" },
    { value: 95, label: "Student Satisfaction", icon: TrendingUp, suffix: "%" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} delay={index * 0.1} />
      ))}
    </div>
  );
};

export default AnimatedStats;
