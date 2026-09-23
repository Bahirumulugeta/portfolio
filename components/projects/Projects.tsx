import { project, IProject } from "@/types/main";
import { useMemo, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { ViewAll } from "../ui/ViewAll";

interface Props {
  projectsData: project[];
}

const Projects = ({ projectsData }: Props) => {
  const categories = ["All", ...projectsData.map((s) => s.category)];
  const [category, setCategory] = useState("All");
  const [viewAll, setViewAll] = useState(false);

  const allProjects = useMemo(
    () =>
      projectsData.flatMap((group) =>
        group.projects.map((item) => ({ ...item, category: group.category }))
      ),
    [projectsData]
  );

  const filtered =
    category === "All"
      ? allProjects
      : allProjects.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        );

  const visible = filtered.slice(0, viewAll ? filtered.length : 6);

  return (
    <SectionWrapper id="projects" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="03 — Work"
          title="Selected projects, built for real users."
          subtitle="Filter by stack. Open a card to visit the live product."
        />

        <div
          role="tablist"
          aria-label="Project categories"
          className="flex w-full flex-wrap gap-2 overflow-x-auto scroll-hide rounded-xl border border-slate-200 bg-white p-1.5 dark:border-white/10 dark:bg-surface-dark"
        >
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              onClick={() => {
                setCategory(c);
                setViewAll(false);
              }}
              className={`cursor-pointer whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 focus-ring ${
                category === c
                  ? "bg-primary text-white"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {visible.map((p: IProject & { category?: string }, index) => (
            <ProjectCard
              key={`${p.category}-${p.name}`}
              {...p}
              featured={index === 0 && category === "All"}
            />
          ))}
        </div>

        {filtered.length > 6 && (
          <div className="mt-10">
            <ViewAll
              scrollTo="projects"
              title={viewAll ? "Show less" : "View all projects"}
              handleClick={() => setViewAll(!viewAll)}
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
