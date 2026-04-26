import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`max-w-3xl mb-12 md:mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div className={`text-[11px] tracking-[0.25em] uppercase text-[var(--brand)] font-medium mb-4 ${align === "center" ? "" : ""}`}>
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.03em] font-bold">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
