import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import ResumeButton from "./ResumeButton";
import { RESUME_PATH } from "@/utils/clientMeta";

const Resume = () => {
  return (
    <SectionWrapper id="resume" className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="05 — Resume"
            title="A concise snapshot of roles, stack, and results."
            subtitle="Preview the PDF here, or download a copy for hiring pipelines."
          />
          <ResumeButton className="mb-10 shrink-0 md:mb-14" />
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lift dark:border-white/10 dark:bg-surface-dark">
          <iframe
            title="Bahiru Mulugeta resume"
            src={`${RESUME_PATH}#view=FitH`}
            className="h-[70vh] w-full bg-white md:h-[80vh]"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Resume;
