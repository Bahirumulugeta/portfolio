"use client";

import { HiOutlineDocumentText } from "react-icons/hi";
import { notifyPortfolioEvent, RESUME_FILENAME, RESUME_PATH } from "@/utils/clientMeta";

interface ResumeButtonProps {
  className?: string;
  label?: string;
  variant?: "primary" | "ghost";
}

const ResumeButton = ({
  className = "",
  label = "Download CV",
  variant = "primary",
}: ResumeButtonProps) => {
  const handleClick = () => {
    notifyPortfolioEvent("resume", { file: RESUME_FILENAME });
  };

  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-hover"
      : "border border-slate-300 bg-transparent text-slate-900 hover:border-primary hover:text-primary dark:border-white/15 dark:text-white";

  return (
    <a
      href={RESUME_PATH}
      download={RESUME_FILENAME}
      onClick={handleClick}
      className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-ring ${styles} ${className}`}
    >
      <HiOutlineDocumentText className="h-4 w-4" />
      {label}
    </a>
  );
};

export default ResumeButton;
