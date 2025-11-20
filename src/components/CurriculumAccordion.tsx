import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Star } from "lucide-react";

const curriculumData = [
  {
    id: "aqeedah",
    title: "Aqeedah (Islamic Creed)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]", "Course 3: [Placeholder]"],
    icon: Star,
    color: "from-light-cyan to-dark-teal",
  },
  {
    id: "fiqh",
    title: "Fiqh (Islamic Jurisprudence)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
    icon: BookOpen,
    color: "from-dark-teal to-deep-navy",
  },
  {
    id: "tafsir",
    title: "Tafsir (Quranic Exegesis)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
    icon: GraduationCap,
    color: "from-light-cyan to-dark-teal",
  },
  {
    id: "hadith",
    title: "Hadith (Prophetic Traditions)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
    icon: BookOpen,
    color: "from-dark-teal to-deep-navy",
  },
  {
    id: "arabic",
    title: "Arabic Language",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
    icon: GraduationCap,
    color: "from-light-cyan to-dark-teal",
  },
  {
    id: "seerah",
    title: "Seerah (Prophetic Biography)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
    icon: Star,
    color: "from-dark-teal to-deep-navy",
  },
  {
    id: "usul",
    title: "Usul al-Fiqh (Principles of Jurisprudence)",
    courses: ["Course 1: [Placeholder]"],
    icon: BookOpen,
    color: "from-light-cyan to-dark-teal",
  },
  {
    id: "tajweed",
    title: "Tajweed (Quranic Recitation)",
    courses: ["Course 1: [Placeholder]"],
    icon: GraduationCap,
    color: "from-dark-teal to-deep-navy",
  },
  {
    id: "history",
    title: "Islamic History",
    courses: ["Course 1: [Placeholder]"],
    icon: Star,
    color: "from-light-cyan to-dark-teal",
  },
  {
    id: "tazkiyah",
    title: "Purification of the Soul (Tazkiyah)",
    courses: ["Course 1: [Placeholder]"],
    icon: BookOpen,
    color: "from-dark-teal to-deep-navy",
  },
];

const CurriculumAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-[900px] mx-auto space-y-4">
      {curriculumData.map((science, index) => {
        const Icon = science.icon;
        return (
          <motion.div
            key={science.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <AccordionItem
              value={science.id}
              className="group relative bg-white rounded-2xl shadow-premium hover:shadow-premium-lg border-2 border-transparent hover:border-light-cyan/20 overflow-hidden transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-light-cyan/0 via-light-cyan/5 to-light-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <AccordionTrigger className="px-6 py-6 font-montserrat font-semibold text-dark-teal hover:no-underline text-left relative z-10">
                <div className="flex items-center gap-4 w-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className={`w-12 h-12 bg-gradient-to-br ${science.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <span className="text-base md:text-lg">{science.title}</span>
                    <p className="text-xs text-muted-foreground font-normal mt-1">
                      {science.courses.length} course{science.courses.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-6 relative z-10">
                <div className="bg-gradient-to-br from-light-gray to-white rounded-xl p-4 border border-border-gray/50">
                  <ul className="space-y-3">
                    {science.courses.map((course, courseIndex) => (
                      <motion.li
                        key={courseIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: courseIndex * 0.1 }}
                        className="flex items-start gap-3 text-charcoal"
                      >
                        <div className="w-2 h-2 bg-gradient-to-br from-light-cyan to-dark-teal rounded-full mt-2 shrink-0" />
                        <span className="flex-1">{course}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        );
      })}
    </Accordion>
  );
};

export default CurriculumAccordion;
