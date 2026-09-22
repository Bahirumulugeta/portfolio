import React from "react";
import Link from "next/link";
import * as Fa from "react-icons/fa";
import { social } from "@/types/main";

const Socials = ({ socials }: { socials: social[] }) => {
  return (
    <section
      id="socials"
      aria-label="Social links"
      className="fixed bottom-6 left-6 z-20 hidden flex-col items-center gap-3 lg:flex"
    >
      {socials.map((s: social) => (
        <Link
          href={s.link}
          target="_blank"
          rel="noreferrer"
          key={s.icon}
          aria-label={s.icon.replace("Fa", "")}
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors duration-200 hover:border-primary hover:text-primary focus-ring dark:border-white/10 dark:bg-surface-dark dark:text-slate-200"
        >
          {
            // @ts-ignore
            React.createElement(Fa[`${s.icon}`])
          }
        </Link>
      ))}
      <span aria-hidden className="mt-1 h-16 w-px bg-slate-300 dark:bg-white/20" />
    </section>
  );
};

export default Socials;
