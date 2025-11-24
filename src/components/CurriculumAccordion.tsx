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
    courses: ["Illuminate Program - Flagship program that will lay the foundations and change your life"],
    icon: Star,
  },
  {
    id: "tazkiyah",
    title: "Tazkiyah (Purification of the Heart)",
    courses: [
      "The Sound Heart - Curing and Beautifying your Heart",
      "Before You Seek - Character of Student of Knowledge",
      "Your Parents - Fix your Dunya & Akhira through your parents",
      "Prohibitions of the Tongue - Tune your tongue to the pleasure of Allah ﷻ"
    ],
    icon: BookOpen,
  },
  {
    id: "fiqh",
    title: "Fiqh (Islamic Jurisprudence)",
    courses: [
      "Fiqh of Purification",
      "Fiqh of Prayer",
      "Fiqh of Fasting",
      "Fiqh of Zakat",
      "Fiqh of Hajj",
      "Fiqh of Marriage",
      "Fiqh of Business",
      "More chapters to be covered"
    ],
    icon: BookOpen,
  },
  {
    id: "tafsir",
    title: "Tafsir (Quran Exegesis)",
    courses: [
      "Gems of Surah Kahf",
      "Gems of Surah An-Naba'",
      "More chapters coming soon"
    ],
    icon: GraduationCap,
  },
  {
    id: "mustalah",
    title: "Mustalah Al-Hadith (Science of Hadith)",
    courses: ["Advanced Hadith Sciences - Understand the Mechanics behind Hadith literature"],
    icon: Star,
  },
  {
    id: "hadith",
    title: "Hadith (Prophetic Teachings)",
    courses: ["40 Hadith Nawawi - Practical Hadiths that cover Iman, ethics, worship and leadership"],
    icon: BookOpen,
  },
  {
    id: "usul",
    title: "Usul Al-Fiqh (Principles of Jurisprudence)",
    courses: ["Foundations of Fiqh - Studying 'Al-Waraqat' to gain deep understanding"],
    icon: BookOpen,
  },
  {
    id: "seerah",
    title: "Seerah (Prophetic Biography)",
    courses: [
      "Enchanting Gaze into the life of Prophet Muhammad ﷺ",
      "The Battles of the Prophet Muhammad ﷺ"
    ],
    icon: Star,
  },
  {
    id: "mantiq",
    title: "Mantiq (Logic)",
    courses: ["Stairway to the Art of Logic"],
    icon: Star,
  },
  {
    id: "arabic",
    title: "Arabic Language",
    courses: ["How to read Quran from scratch"],
    icon: GraduationCap,
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
                  {science.courses.map((course, idx) => {
                    // Split course into name and description (if there's a dash)
                    const parts = course.split(' - ');
                    const courseName = parts[0];
                    const description = parts.length > 1 ? parts.slice(1).join(' - ') : '';

                    return (
                      <li key={idx} className="text-sm text-muted-foreground">
                        • <span className="underline">Course {idx + 1}:</span> <strong>{courseName}</strong>{description && ` - ${description}`}
                      </li>
                    );
                  })}
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
