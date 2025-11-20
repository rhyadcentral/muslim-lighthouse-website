interface TestimonialCardProps {
  quote: string;
  name: string;
}

const TestimonialCard = ({ quote, name }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-l-4 border-l-light-cyan transition-smooth hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
      <p className="text-base md:text-lg text-charcoal mb-4 italic">"{quote}"</p>
      <p className="text-sm font-semibold text-dark-teal">— {name}</p>
    </div>
  );
};

export default TestimonialCard;
