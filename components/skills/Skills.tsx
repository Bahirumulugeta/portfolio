import { useState } from "react";
import { skill } from "@/types/main";
import SkillCard from "./SkillCard";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../ui/SectionHeading";

interface Props {
  skillData: skill[];
}

const Skills = ({ skillData }: Props) => {
  const categories = Array.from(new Set(skillData.map((s) => s.category)));
  const [category, setCategory] = useState(categories[0]);
  const active = skillData.find(
    (s) => s.category.toLowerCase() === category.toLowerCase()
  );
  const marqueeItems = skillData.flatMap((group) =>
    group.skills.map((item) => item.name)
  );

  return (
    <SectionWrapper id="skills" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="02 — Stack"
          title="A tight toolkit. No decoration."
          subtitle="The same languages and platforms behind ecommerce, betting, and enterprise products."
        />

        <div className="relative mb-10 overflow-hidden border-y border-slate-200 py-3 dark:border-white/10">
          <div className="marquee-track gap-8 pr-8">
            {[...marqueeItems, ...marqueeItems].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Skill categories"
          className="mb-8 flex flex-wrap gap-2"
        >
          {categories.map((c: string) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category.toLowerCase() === c.toLowerCase()}
              onClick={() => setCategory(c)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors duration-200 focus-ring ${
                category.toLowerCase() === c.toLowerCase()
                  ? "bg-primary text-white"
                  : "border border-slate-200 text-slate-600 hover:border-primary dark:border-white/10 dark:text-slate-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {active?.skills.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
