import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionWrapper = ({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.12,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={
        inView || shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 24 }
      }
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      id={id}
      className={`scroll-mt-28 ${className ?? ""}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
