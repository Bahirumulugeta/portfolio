import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Typewriter from "typewriter-effect";
import { HiArrowRight, HiOutlineDocumentText } from "react-icons/hi";
import { main } from "@/types/main";

interface HeroProps {
  mainData: main;
  resumeUrl?: string;
}

const Hero = ({ mainData, resumeUrl }: HeroProps) => {
  const { name, titles, heroImage, shortDesc } = mainData;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl motion-safe:animate-pulse" />
        <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="container-page relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Open to senior fullstack roles
          </div>

          <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
            Software engineer
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {name}
          </h1>

          <div className="mt-4 flex min-h-[2rem] items-center gap-2 text-lg md:text-2xl">
            <span className="text-slate-600 dark:text-slate-300">I build as a</span>
            {shouldReduceMotion ? (
              <span className="font-medium text-primary">{titles[0]}</span>
            ) : (
              <Typewriter
                options={{
                  strings: titles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                  delay: 45,
                  wrapperClassName: "font-medium text-primary",
                  cursorClassName: "text-primary",
                }}
              />
            )}
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
            {shortDesc}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ScrollLink
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-ring"
              to="projects"
              offset={-90}
              smooth={true}
              duration={400}
              isDynamic={true}
            >
              View selected work
              <HiArrowRight className="h-4 w-4" />
            </ScrollLink>
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:border-primary hover:text-primary focus-ring dark:border-white/15 dark:bg-transparent dark:text-white"
              >
                <HiOutlineDocumentText className="h-4 w-4" />
                Resume
              </a>
            )}
          </div>
        </div>

        <div className="order-1 mx-auto lg:order-2">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/40 via-transparent to-cyan-400/20 blur-lg" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-surface-dark shadow-glow">
              <Image
                alt={`${name} portrait`}
                width={640}
                height={800}
                priority
                className="h-[22rem] w-72 object-cover sm:h-[26rem] sm:w-80 md:h-[28rem] md:w-96"
                src={heroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
