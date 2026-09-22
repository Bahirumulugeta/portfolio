import Image from "next/image";
import { ISkill } from "@/types/main";
import { useTheme } from "next-themes";

const Skill = ({ name, image }: ISkill) => {
  const { theme } = useTheme();
  const invert =
    theme === "dark" &&
    ["GitHub", "Github", "Vercel", "NextJS", "NextJs", "ExpressJS", "ExpressJs"].includes(
      name
    );

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-colors duration-200 hover:border-primary dark:border-white/10 dark:bg-surface-dark">
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-slate-100 dark:bg-ink">
        <Image
          alt={`${name} logo`}
          width={56}
          height={56}
          className={`h-10 w-10 object-contain ${invert ? "invert" : ""}`}
          src={image}
        />
      </div>
      <p className="text-center text-sm font-medium text-slate-800 dark:text-slate-100">
        {name}
      </p>
    </div>
  );
};

export default Skill;
