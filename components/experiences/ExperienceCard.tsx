import { MdSchool, MdWork } from "react-icons/md";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ExperienceProps {
  index: number;
  company: string;
  position: string;
  desc: string[];
  institute: string;
  degree: string;
  duration: string;
}

const Experience = ({
  index,
  company,
  position,
  desc,
  institute,
  degree,
  duration,
}: ExperienceProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      className={`mb-8 flex w-full items-start md:items-center md:justify-between ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="order-1 hidden md:block md:w-5/12" />

      <span className="z-10 mt-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white ring-4 ring-slate-50 dark:ring-ink md:h-9 md:w-9">
        {company ? <MdWork className="text-sm md:text-lg" /> : <MdSchool className="text-sm md:text-lg" />}
      </span>

      <motion.article
        ref={ref}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={
          inView || shouldReduceMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 16 }
        }
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="order-1 ml-4 w-full rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-surface-dark md:ml-0 md:w-5/12"
      >
        <p className="font-mono text-xs uppercase tracking-wider text-primary">
          {duration}
        </p>
        <h3 className="mt-1 font-heading text-lg font-semibold text-slate-900 dark:text-white md:text-xl">
          {company || institute}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
          {position || degree}
        </p>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {desc &&
            desc.map((d, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{d}</span>
              </li>
            ))}
        </ul>
      </motion.article>
    </div>
  );
};

export default Experience;
