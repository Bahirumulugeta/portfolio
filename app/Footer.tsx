import { social } from "@/types/main";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Fa from "react-icons/fa";

export default function Footer({
  socials,
  name,
}: {
  socials: social[];
  name: string;
}) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Addis_Ababa",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-slate-200 dark:border-white/10">
      <div className="container-page flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
          © {new Date().getFullYear()} {name}
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
          Addis Ababa · {time || "--:--:--"}
        </p>
        <div className="flex items-center gap-1">
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
