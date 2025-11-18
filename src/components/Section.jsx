import { useInView } from "../hooks/useInView";

export default function Section({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.2,
  once = true,
}) {
  const [ref, isInView] = useInView({ threshold, once });

  return (
    <section
      ref={ref}
      style={{
        transitionDelay: `${delay}s`,
      }}
      className={`${className} ${animation} ${isInView ? "is-visible" : ""}`}
    >
      {children}
    </section>
  );
}
