import { IProject } from "@/types/main";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project = ({ name, image, techstack, link }: IProject) => {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

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
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors duration-200 hover:border-primary dark:border-white/10 dark:bg-surface-dark"
    >
      <div className="relative overflow-hidden bg-slate-100 dark:bg-ink">
        <Image
          alt={`${name} screenshot`}
          width={1200}
          height={750}
          className="h-52 w-full object-cover object-top"
          src={image}
        />
        {link && (
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent p-4 opacity-100 md:opacity-0 md:transition-opacity md:duration-200 md:group-hover:opacity-100">
            <Link
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-primary hover:text-white focus-ring"
            >
              Visit live site
              <BiLinkExternal size={16} />
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">
          {name}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {techstack}
        </p>
      </div>
    </motion.article>
  );
};

export default Project;
