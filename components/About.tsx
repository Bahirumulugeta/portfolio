import Image from "next/image";
import { about } from "@/types/main";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import { HiOutlineDocumentText, HiPhone } from "react-icons/hi";

interface Props {
  aboutData: about;
  name: string;
}

const stats = [
  { value: "5+", label: "Years shipping products" },
  { value: "10+", label: "Production systems" },
  { value: "8", label: "Teams collaborated with" },
];

const About = ({ aboutData, name }: Props) => {
  const { aboutImage, title, about, resumeUrl, callUrl } = aboutData;

  return (
    <SectionWrapper id="about" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="01 — About"
          title="Product-minded engineer with fullstack range."
          subtitle="I design, build, and maintain web platforms that stay fast, maintainable, and easy for teams to ship on."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lift dark:border-white/10 dark:bg-surface-dark">
              <Image
                alt={`${name} working portrait`}
                width={720}
                height={900}
                className="h-[22rem] w-full object-cover sm:h-[26rem]"
                src={aboutImage}
              />
              <div className="border-t border-slate-200 px-5 py-4 dark:border-white/10">
                <p className="font-heading text-lg font-semibold">{name}</p>
                <p className="text-sm text-primary">{title}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
              {about}
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-surface-dark"
                >
                  <dt className="font-heading text-2xl font-semibold text-slate-900 dark:text-white md:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {resumeUrl.trim() && (
                <Link
                  href={resumeUrl}
                  target="_blank"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-ring"
                >
                  <HiOutlineDocumentText className="h-4 w-4" />
                  Download resume
                </Link>
              )}
              {callUrl.trim() && (
                <Link
                  href={callUrl}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:border-primary hover:text-primary focus-ring dark:border-white/15 dark:text-white"
                >
                  <HiPhone className="h-4 w-4" />
                  Call now
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
