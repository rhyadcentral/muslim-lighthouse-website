import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Star, Clock } from "lucide-react";

interface Course {
  name: string;
  source?: string;
  comingSoon?: boolean;
}

const curriculumData = [
  {
    id: "aqeedah",
    title: "Aqeedah (Islamic Creed)",
    courses: [
      { name: "Illuminate Program - Flagship program that will lay the foundations and change your life", comingSoon: false }
    ],
    icon: Star,
  },
  {
    id: "tazkiyah",
    title: "Tazkiyah (Purification of the Heart)",
    courses: [
      { name: "The Sound Heart - Curing and Beautifying your Heart", source: "Mat-haratul Quloob", comingSoon: false },
      { name: "Before You Seek - Character of Student of Knowledge", source: "Adab Al-Muta'alim", comingSoon: false },
      { name: "Your Parents - Fix your Dunya & Akhira through your parents", source: "Nathm Al-Buroor", comingSoon: false },
      { name: "Prohibitions of the Tongue - Tune your tongue to the pleasure of Allah ﷻ", source: "Maharim Al-Lisan", comingSoon: false }
    ],
    icon: BookOpen,
  },
  {
    id: "fiqh",
    title: "Fiqh (Islamic Jurisprudence)",
    courses: [
      { name: "Fiqh of Purification", source: "As-halul Masalik", comingSoon: false },
      { name: "Fiqh of Prayer", source: "As-halul Masalik", comingSoon: false },
      { name: "Fiqh of Fasting", source: "As-halul Masalik", comingSoon: false },
      { name: "Fiqh of Zakat", source: "As-halul Masalik", comingSoon: true },
      { name: "Fiqh of Hajj", source: "As-halul Masalik", comingSoon: false },
      { name: "Fiqh of Marriage", source: "As-halul Masalik", comingSoon: true },
      { name: "Fiqh of Business", source: "As-halul Masalik", comingSoon: true },
      { name: "More chapters to be covered", source: "As-halul Masalik", comingSoon: true }
    ],
    icon: BookOpen,
  },
  {
    id: "tafsir",
    title: "Tafsir (Quran Exegesis)",
    courses: [
      { name: "Gems of Surah Kahf", comingSoon: false },
      { name: "Gems of Surah An-Naba'", comingSoon: false },
      { name: "More chapters coming soon", comingSoon: true }
    ],
    icon: GraduationCap,
  },
  {
    id: "mustalah",
    title: "Mustalah Al-Hadith (Science of Hadith)",
    courses: [
      { name: "Advanced Hadith Sciences - Understand the Mechanics behind Hadith literature", source: "Tal'atul Anwar", comingSoon: false }
    ],
    icon: Star,
  },
  {
    id: "hadith",
    title: "Hadith (Prophetic Teachings)",
    courses: [
      { name: "40 Hadith Nawawi - Practical Hadiths that cover Iman, ethics, worship and leadership", comingSoon: true }
    ],
    icon: BookOpen,
  },
  {
    id: "usul",
    title: "Usul Al-Fiqh (Principles of Jurisprudence)",
    courses: [
      { name: "Foundations of Fiqh - Studying 'Al-Waraqat' to gain deep understanding", source: "Nathm Al-Waraqat", comingSoon: true }
    ],
    icon: BookOpen,
  },
  {
    id: "seerah",
    title: "Seerah (Prophetic Biography)",
    courses: [
      { name: "Enchanting Gaze into the life of Prophet Muhammad ﷺ", source: "Qurrat Al-Absar", comingSoon: true },
      { name: "The Battles of the Prophet Muhammad ﷺ", source: "Nathm Al-Ghazawat", comingSoon: true }
    ],
    icon: Star,
  },
  {
    id: "mantiq",
    title: "Mantiq (Logic)",
    courses: [
      { name: "Stairway to the Art of Logic", source: "Sullam Al-Murawnaq", comingSoon: true }
    ],
    icon: Star,
  },
  {
    id: "arabic",
    title: "Arabic Language",
    courses: [
      { name: "Arabic Grammar", source: "Ajurumiyyah", comingSoon: false },
      { name: "How to read the Quran", source: "Al‑Qaida Al‑Baghdadiyya", comingSoon: false }
    ],
    icon: GraduationCap,
  },
];

const CurriculumAccordion = () => {
  return (
    <div className="w-full">
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
                <div className="pl-6 md:pl-14">
                  {science.courses.map((course, idx) => {
                    // Split course into name and description (if there's a dash)
                    const parts = course.name.split(' - ');
                    const courseName = parts[0];
                    const description = parts.length > 1 ? parts.slice(1).join(' - ') : '';

                    return (
                      <div key={idx}>
                        <div className="text-sm text-muted-foreground flex items-start gap-2 flex-wrap py-3">
                          <span className="flex-1 min-w-0 mt-0.5">
                            • <span className="underline">Course {idx + 1}</span>: <strong className={course.comingSoon ? "text-muted-foreground/70" : ""}>{courseName}</strong>{description && ` - ${description}`}
                            {course.source && (
                              <div className="mt-1 ml-4 text-xs italic text-muted-foreground/80">
                                Source: {course.source}
                              </div>
                            )}
                          </span>
                          {course.comingSoon && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-light-cyan/10 text-light-cyan text-xs font-medium whitespace-nowrap flex-shrink-0 mt-0.5">
                              <Clock className="w-3 h-3" />
                              Coming Soon
                            </span>
                          )}
                        </div>
                        {idx < science.courses.length - 1 && (
                          <div className="border-t border-gray-200" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        );
      })}
    </Accordion>
    <p className="text-center text-xs text-muted-foreground mt-6 max-w-[900px] mx-auto">
      * Courses marked as "Coming Soon" will be taught in live classes
    </p>
    </div>
  );
};

export default CurriculumAccordion;
