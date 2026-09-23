import React from "react";
import Link from "next/link";
import * as Fa from "react-icons/fa";
import { social } from "@/types/main";

const Socials = ({ socials }: { socials: social[] }) => {
  return (
    <section
      aria-label="Social links"
      className="fixed bottom-8 left-6 z-20 hidden flex-col items-center gap-4 lg:flex"
    >
      {socials.map((s: social) => (
        <Link
          href={s.link}
          target="_blank"
          rel="noreferrer"
          key={s.icon}
          aria-label={s.icon.replace("Fa", "")}
          className="cursor-pointer text-slate-500 transition-colors duration-200 hover:text-primary focus-ring dark:text-slate-400 dark:hover:text-primary"
        >
          {
            // @ts-ignore
            React.createElement(Fa[`${s.icon}`])
          }
        </Link>
      ))}
      <span aria-hidden className="h-16 w-px bg-slate-300 dark:bg-white/20" />
    </section>
  );
};

export default Socials;
