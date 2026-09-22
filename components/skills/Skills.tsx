import { useState } from "react";
import { skill } from "@/types/main";
import SkillCard from "./SkillCard";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../ui/SectionHeading";

interface Props {
  skillData: skill[];
}

const Skills = ({ skillData }: Props) => {
  const categories = Array.from(
    new Set(skillData.map((s) => s.category))
  );
  const [category, setCategory] = useState(categories[0]);
  const active = skillData.find(
    (s) => s.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <SectionWrapper id="skills" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="02 — Stack"
          title="Tools I use to ship reliable software."
          subtitle="Frontend, backend, and infrastructure selected for speed, clarity, and maintainability."
        />

        <div
          role="tablist"
          aria-label="Skill categories"
          className="flex w-full max-w-lg flex-wrap gap-2 rounded-xl border border-slate-200 bg-white p-1.5 dark:border-white/10 dark:bg-surface-dark"
        >
          {categories.map((c: string) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category.toLowerCase() === c.toLowerCase()}
              onClick={() => setCategory(c)}
              className={`flex-1 cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium capitalize transition-colors duration-200 focus-ring ${
                category.toLowerCase() === c.toLowerCase()
                  ? "bg-primary text-white"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {active?.skills.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
