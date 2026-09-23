interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  index,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) => {
  return (
    <div
      className={`mb-10 md:mb-14 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl"
      }`}
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary md:text-sm">
        {index}
      </p>
      <h2 className="font-heading text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-50 md:text-[2.75rem] md:leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
