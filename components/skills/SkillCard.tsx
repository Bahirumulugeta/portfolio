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
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-3 py-3 dark:border-white/10">
      <Image
        alt={`${name} logo`}
        width={40}
        height={40}
        className={`h-7 w-7 object-contain ${invert ? "invert" : ""}`}
        src={image}
      />
      <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{name}</p>
    </div>
  );
};

export default Skill;
