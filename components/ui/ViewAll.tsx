import { Link } from "react-scroll";

type MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

export const ViewAll = ({
  handleClick,
  title,
  scrollTo,
}: {
  handleClick: MouseEventHandler;
  title: string;
  scrollTo: string;
}) => {
  const className =
    "inline-flex cursor-pointer items-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:border-primary hover:text-primary focus-ring dark:border-white/10 dark:bg-surface-dark dark:text-slate-100 dark:hover:border-primary dark:hover:text-primary";

  if (title.toLowerCase().includes("less") || title.toLowerCase().includes("okay")) {
    return (
      <div className="mt-2 text-center">
        <Link
          to={scrollTo}
          className={className}
          offset={-90}
          smooth={true}
          duration={400}
          // @ts-ignore
          onClick={() => handleClick()}
        >
          {title}
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-2 text-center">
      <button type="button" onClick={handleClick} className={className}>
        {title}
      </button>
    </div>
  );
};
