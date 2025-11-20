import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const curriculumData = [
  {
    id: "aqeedah",
    title: "Aqeedah (Islamic Creed)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]", "Course 3: [Placeholder]"],
  },
  {
    id: "fiqh",
    title: "Fiqh (Islamic Jurisprudence)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
  },
  {
    id: "tafsir",
    title: "Tafsir (Quranic Exegesis)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
  },
  {
    id: "hadith",
    title: "Hadith (Prophetic Traditions)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
  },
  {
    id: "arabic",
    title: "Arabic Language",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
  },
  {
    id: "seerah",
    title: "Seerah (Prophetic Biography)",
    courses: ["Course 1: [Placeholder]", "Course 2: [Placeholder]"],
  },
  {
    id: "usul",
    title: "Usul al-Fiqh (Principles of Jurisprudence)",
    courses: ["Course 1: [Placeholder]"],
  },
  {
    id: "tajweed",
    title: "Tajweed (Quranic Recitation)",
    courses: ["Course 1: [Placeholder]"],
  },
  {
    id: "history",
    title: "Islamic History",
    courses: ["Course 1: [Placeholder]"],
  },
  {
    id: "tazkiyah",
    title: "Purification of the Soul (Tazkiyah)",
    courses: ["Course 1: [Placeholder]"],
  },
];

const CurriculumAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-[900px] mx-auto space-y-3">
      {curriculumData.map((science) => (
        <AccordionItem
          key={science.id}
          value={science.id}
          className="bg-white rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-border-gray overflow-hidden transition-smooth hover:border-l-4 hover:border-l-light-cyan"
        >
          <AccordionTrigger className="px-5 py-5 font-montserrat font-semibold text-dark-teal hover:no-underline text-left">
            {science.title}
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 bg-[#FAFBFC]">
            <ul className="space-y-2">
              {science.courses.map((course, index) => (
                <li key={index} className="text-charcoal pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-light-cyan">
                  {course}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CurriculumAccordion;
