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
  },
  {
    id: "fiqh",
    title: "Fiqh (Islamic Jurisprudence)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
    icon: BookOpen,
  },
  {
    id: "tafsir",
    title: "Tafsir (Quranic Exegesis)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
    icon: GraduationCap,
  },
  {
    id: "hadith",
    title: "Hadith (Prophetic Traditions)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
    icon: BookOpen,
  },
  {
    id: "arabic",
    title: "Arabic Language",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
    icon: GraduationCap,
  },
  {
    id: "seerah",
    title: "Seerah (Prophetic Biography)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
    icon: Star,
  },
  {
    id: "usul",
    title: "Usul al-Fiqh (Principles of Jurisprudence)",
    courses: ["Course 1: [Placeholder]"],
    icon: BookOpen,
  },
  {
    id: "mantiq",
    title: "Mantiq (Islamic Logic)",
    courses: ["Course 1: [Placeholder]"],
    icon: Star,
  },
  {
    id: "tazkiyah",
    title: "Purification of the Soul (Tazkiyah)",
    courses: ["Course 1: [Placeholder]"],
    icon: BookOpen,
  },
];

const CurriculumAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-[900px] mx-auto space-y-3">
      {curriculumData.map((science, index) => {
        const Icon = science.icon;
        return (
          <motion.div
            key={science.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index * 0.05
            }}
          >
            <AccordionItem
              value={science.id}
              className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.01]"
            >
              <AccordionTrigger className="px-6 py-5 font-montserrat font-semibold text-dark-teal hover:no-underline text-left">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-10 h-10 bg-light-cyan/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-light-cyan" />
                  </div>
                  <div className="flex-1">
                    <span className="text-base">{science.title}</span>
                    <p className="text-xs text-muted-foreground font-normal mt-1">
                      {science.courses.length} course{science.courses.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-5 pt-2">
                <ul className="space-y-2 pl-14">
                  {science.courses.map((course, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {course}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        );
      })}
    </Accordion>
  );
};

export default CurriculumAccordion;
