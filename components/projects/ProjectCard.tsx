import { IProject } from "@/types/main";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectProps extends IProject {
  featured?: boolean;
  category?: string;
}

const Project = ({ name, image, techstack, link, featured, category }: ProjectProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.12,
    triggerOnce: true,
  });
  const tags = techstack.split(",").map((item) => item.trim()).filter(Boolean);

  return (
    <motion.article
      ref={ref}
      initial={shouldReduceMotion ? false : { y: 18, opacity: 0 }}
      animate={
        inView || shouldReduceMotion
          ? { y: 0, opacity: 1 }
          : { y: 18, opacity: 0 }
      }
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-transparent ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-slate-100 dark:bg-black ${featured ? "h-72 md:h-80" : "h-52"}`}>
        <Image
          alt={`${name} screenshot`}
          width={1400}
          height={900}
          className="h-full w-full object-cover object-top transition-[filter] duration-200 group-hover:brightness-75"
          src={image}
        />
        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white">
            {category}
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-4 p-5">
        <div>
          <h3 className="font-heading text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {name}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs text-slate-500 dark:text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${name}`}
            className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full border border-slate-200 text-slate-700 transition-colors duration-200 hover:border-primary hover:text-primary focus-ring dark:border-white/10 dark:text-white"
          >
            <BiLinkExternal size={16} />
          </Link>
        )}
      </div>
    </motion.article>
  );
};

export default Project;
