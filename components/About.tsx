import Image from "next/image";
import { about } from "@/types/main";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import ResumeButton from "./ResumeButton";
import { HiPhone } from "react-icons/hi";

interface Props {
  aboutData: about;
  name: string;
  portrait: string;
}

const stats = [
  { value: "05+", label: "Years" },
  { value: "10+", label: "Products" },
  { value: "08", label: "Teams" },
];

const About = ({ aboutData, name, portrait }: Props) => {
  const { title, about, callUrl } = aboutData;

  return (
    <SectionWrapper id="about" className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              index="01 — About"
              title="I turn messy product ideas into systems people actually ship on."
            />
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
              {about}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ResumeButton />
              {callUrl.trim() && (
                <Link
                  href={callUrl}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:border-primary hover:text-primary focus-ring dark:border-white/15 dark:text-white"
                >
                  <HiPhone className="h-4 w-4" />
                  Call
                </Link>
              )}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10">
              <Image
                alt={`${name} portrait`}
                width={800}
                height={900}
                className="h-72 w-full object-cover"
                src={portrait}
              />
            </div>
            <div className="grid grid-cols-3 overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`bg-white p-5 dark:bg-surface-dark ${i > 0 ? "border-l border-slate-200 dark:border-white/10" : ""}`}
                >
                  <p className="font-heading text-3xl tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
              {title} · Convex Technologies
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
