import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const skills = ["AI Solutions", "Web Development", "Automation", "Photography"];

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Designing the future,{" "}
              <span className="italic text-gradient-gold">one detail at a time.</span>
            </>
          }
        />

        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I'm Leander — a developer and creative technologist crafting premium
              digital experiences at the intersection of design, code, and artificial
              intelligence.
            </p>
            <p>
              From AI-powered platforms to elegant brand websites, I help ambitious
              businesses move faster, look sharper, and feel more human in a digital
              world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-5">
              Expertise
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full border border-white/10 bg-white/[0.02] hover:border-[var(--gold)]/50 hover:text-[var(--gold)] hover:shadow-[0_0_20px_var(--gold-muted)] transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="border-l border-[var(--gold)]/40 pl-4">
                <div className="font-display text-3xl text-gradient-gold">50+</div>
                <div className="text-xs text-muted-foreground mt-1">Projects shipped</div>
              </div>
              <div className="border-l border-[var(--gold)]/40 pl-4">
                <div className="font-display text-3xl text-gradient-gold">5y+</div>
                <div className="text-xs text-muted-foreground mt-1">Building craft</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
