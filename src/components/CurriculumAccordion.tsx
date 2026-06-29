import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface Course {
  name: string;
  source?: string;
  comingSoon?: boolean;
}

interface Science {
  id: string;
  title: string;
  arabic: string;
  courses: Course[];
}

const curriculumData: Science[] = [
  {
    id: "aqeedah",
    title: "Aqeedah",
    arabic: "Islamic Creed",
    courses: [
      { name: "Illuminate Program - Flagship program that will lay the foundations and change your life", source: "Custom built syllabus under scholarly supervision", comingSoon: false },
    ],
  },
  {
    id: "tazkiyah",
    title: "Tazkiyah",
    arabic: "Purification of the Heart",
    courses: [
      { name: "The Sound Heart - Curing and Beautifying your Heart", source: "Mat-haratul Quloob", comingSoon: false },
      { name: "Before You Seek - Character of Student of Knowledge", source: "Adab Al-Muta'alim", comingSoon: false },
      { name: "Your Parents - Fix your Dunya & Akhira through your parents", source: "Nathm Al-Buroor", comingSoon: false },
      { name: "Prohibitions of the Tongue - Tune your tongue to the pleasure of Allah ﷻ", source: "Maharim Al-Lisan", comingSoon: false },
    ],
  },
  {
    id: "fiqh",
    title: "Fiqh",
    arabic: "Islamic Jurisprudence",
    courses: [
      { name: "Fiqh of Purification", source: "As-halul Masalik", comingSoon: false },
      { name: "Fiqh of Prayer", source: "As-halul Masalik", comingSoon: false },
      { name: "Fiqh of Fasting", source: "As-halul Masalik", comingSoon: false },
      { name: "Fiqh of Zakat", source: "As-halul Masalik", comingSoon: false },
      { name: "Fiqh of Hajj", source: "As-halul Masalik", comingSoon: false },
      { name: "Fiqh of Death", source: "As-halul Masalik", comingSoon: false },
      { name: "Fiqh of Slaughter", source: "As-halul Masalik", comingSoon: false },
      { name: "Fiqh of Sacrificing", source: "As-halul Masalik", comingSoon: false },
      { name: "Fiqh of Oaths", source: "As-halul Masalik", comingSoon: false },
      { name: "Fiqh of Marriage", source: "As-halul Masalik", comingSoon: true },
      { name: "Fiqh of Business", source: "As-halul Masalik", comingSoon: true },
    ],
  },
  {
    id: "tafsir",
    title: "Tafsir",
    arabic: "Quran Exegesis",
    courses: [
      { name: "Gems of Surah Kahf", comingSoon: false },
      { name: "Gems of Surah An-Naba'", comingSoon: false },
      { name: "More chapters coming soon", comingSoon: true },
    ],
  },
  {
    id: "mustalah",
    title: "Mustalah Al-Hadith",
    arabic: "Science of Hadith",
    courses: [
      { name: "Advanced Hadith Sciences - Understand the Mechanics behind Hadith literature", source: "Tal'atul Anwar", comingSoon: false },
    ],
  },
  {
    id: "hadith",
    title: "Hadith",
    arabic: "Prophetic Teachings",
    courses: [
      { name: "40 Hadith Nawawi - Practical Hadiths that cover Iman, ethics, worship and leadership", source: "40 Hadith Nawawi", comingSoon: true },
    ],
  },
  {
    id: "usul",
    title: "Usul Al-Fiqh",
    arabic: "Principles of Jurisprudence",
    courses: [
      { name: "Foundations of Fiqh - Studying 'Al-Waraqat' to gain deep understanding", source: "Nathm Al-Waraqat", comingSoon: true },
    ],
  },
  {
    id: "seerah",
    title: "Seerah",
    arabic: "Prophetic Biography",
    courses: [
      { name: "Enchanting Gaze into the life of Prophet Muhammad ﷺ", source: "Qurrat Al-Absar", comingSoon: true },
      { name: "The Battles of the Prophet Muhammad ﷺ", source: "Nathm Al-Ghazawat", comingSoon: true },
    ],
  },
  {
    id: "tajweed",
    title: "Tajweed",
    arabic: "Quran Recitation",
    courses: [
      { name: "Rules of Recitation", source: "Al-Jazariyyah", comingSoon: true },
    ],
  },
  {
    id: "mantiq",
    title: "Mantiq",
    arabic: "Logic",
    courses: [
      { name: "Stairway to the Art of Logic", source: "Sullam Al-Murawnaq", comingSoon: true },
    ],
  },
  {
    id: "arabic",
    title: "Arabic Language",
    arabic: "Lisan al-'Arab",
    courses: [
      { name: "Arabic Grammar", source: "Ajurumiyyah", comingSoon: false },
      { name: "How to read the Quran", source: "Al‑Qaida Al‑Baghdadiyya", comingSoon: false },
    ],
  },
];

const CurriculumAccordion = () => {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <Accordion type="single" collapsible className="w-full">
        <div className="overflow-hidden rounded-2xl border border-line bg-navy shadow-lift">
          {curriculumData.map((science, index) => {
            return (
              <motion.div
                key={science.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.2), ease: [0.22, 1, 0.36, 1] }}
              >
                <AccordionItem
                  value={science.id}
                  className="border-b border-line last:border-b-0 data-[state=open]:bg-[oklch(0.22_0.032_218)]"
                >
                  <AccordionTrigger className="group px-5 py-5 hover:no-underline md:px-7 [&>svg]:hidden">
                    <div className="flex w-full items-center gap-4 md:gap-6">
                      <span className="font-display text-base text-teal font-feature-numeric tabular-nums w-7 shrink-0"
                            style={{ fontVariationSettings: "'opsz' 24" }}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 text-left">
                        <span className="font-display text-xl text-ink md:text-2xl"
                              style={{ fontVariationSettings: "'opsz' 24" }}>
                          {science.title}
                        </span>
                        <span className="ml-2.5 font-sans text-sm italic text-ink-mute">{science.arabic}</span>
                      </div>
                      <span className="hidden font-sans text-xs uppercase tracking-[0.18em] text-ink-mute sm:block">
                        {science.courses.length} {science.courses.length === 1 ? "course" : "courses"}
                      </span>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-teal transition-all duration-300 group-hover:border-teal/50 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-teal group-data-[state=open]:text-navy-deep">
                        <Plus className="h-4 w-4" />
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-5 pb-6 pt-0 md:px-7">
                    <ol className="ml-7 space-y-0 border-l border-line/60 md:ml-11">
                      {science.courses.map((course, idx) => {
                        const [courseName, ...rest] = course.name.split(" - ");
                        const description = rest.join(" - ");
                        return (
                          <li key={idx} className="relative pl-5 py-3 first:pt-1">
                            <span className="absolute -left-[3px] top-[1.35rem] h-1.5 w-1.5 rounded-full bg-teal/50" />
                            <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1.5">
                              <p className="flex-1 font-sans text-[0.95rem] leading-relaxed text-ink-soft">
                                <span className={course.comingSoon ? "font-semibold text-ink-mute" : "font-semibold text-ink"}>
                                  {courseName}
                                </span>
                                {description && <span className="text-ink-mute"> — {description}</span>}
                                {course.source && (
                                  <span className="mt-1 block font-sans text-xs italic text-ink-mute">
                                    Source · {course.source}
                                  </span>
                                )}
                              </p>
                              {course.comingSoon && (
                                <span className="mt-0.5 inline-flex shrink-0 items-center rounded-full bg-teal/10 px-2.5 py-0.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-teal ring-1 ring-teal/20">
                                  Coming soon
                                </span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </div>
      </Accordion>
      <p className="mt-5 text-center font-sans text-xs text-ink-mute">
        Courses marked "Coming soon" will be taught in our live weekly classes.
      </p>
    </div>
  );
};

export default CurriculumAccordion;
