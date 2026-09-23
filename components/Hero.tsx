import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { HiArrowRight } from "react-icons/hi";
import { main } from "@/types/main";
import ResumeButton from "./ResumeButton";

interface HeroProps {
  mainData: main;
}

const Hero = ({ mainData }: HeroProps) => {
  const { name, titles, heroImage, shortDesc } = mainData;
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.08),transparent_36%)]" />
        <div className="absolute inset-y-0 right-[18%] hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />
      </div>

      <div className="container-page relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Available
            </span>
            <span>Addis Ababa</span>
            <span>Remote</span>
            <span>2017 — Present</span>
          </div>

          <h1 className="font-heading text-6xl leading-[0.86] tracking-[-0.05em] text-slate-900 dark:text-white sm:text-7xl md:text-8xl lg:text-[7.25rem]">
            {firstName}
            <span className="block text-slate-400 dark:text-slate-500">{lastName}</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {shortDesc}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {titles.map((title) => (
              <span
                key={title}
                className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"
              >
                {title}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ScrollLink
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-ring"
              to="projects"
              offset={-90}
              smooth={true}
              duration={400}
            >
              See the work
              <HiArrowRight className="h-4 w-4" />
            </ScrollLink>
            <ResumeButton variant="ghost" label="Download CV" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <p className="mb-4 hidden font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500 lg:block">
            00 / Portrait
          </p>
          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-40 w-40 rounded-full border border-primary/30 lg:block" />
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                alt={`${name} portrait`}
                width={720}
                height={900}
                priority
                className="h-[28rem] w-full object-cover"
                src={heroImage}
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <span>Currently at Convex</span>
              <span className="font-mono text-xs">SR. ENGINEER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
