import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mb-16 md:mb-20"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-px bg-[var(--gold)]" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
