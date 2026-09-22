import { social } from "@/types/main";
import Link from "next/link";
import React from "react";
import * as Fa from "react-icons/fa";

export default function Footer({
  socials,
  name,
}: {
  socials: social[];
  name: string;
}) {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-ink">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          © {new Date().getFullYear()} {name}. Built with care.
        </p>
        <div className="flex items-center gap-2">
          {socials.map((s: social) => (
            <Link
              href={s.link}
              target="_blank"
              rel="noreferrer"
              key={s.icon}
              aria-label={s.icon.replace("Fa", "")}
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-full text-slate-600 transition-colors duration-200 hover:text-primary focus-ring dark:text-slate-300"
            >
              {
                // @ts-ignore
                React.createElement(Fa[`${s.icon}`])
              }
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
