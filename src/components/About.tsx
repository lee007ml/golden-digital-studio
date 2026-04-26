import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden surface-card">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/20 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl font-display font-bold text-white/5">LM</div>
              </div>
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,104,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,104,0,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-3"
          >
            <SectionHeading
              eyebrow="About Me"
              title={
                <>
                  Building intelligent solutions
                  <br />
                  for a better tomorrow.
                </>
              }
            />

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                I'm Leander Menezes, an AI Developer and Creative Technologist who helps
                businesses and individuals transform ideas into powerful digital products.
              </p>
              <p>
                From AI automation to full-stack websites, I bring ideas to life with
                creativity, precision, and purpose.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 md:gap-10">
              {[
                { num: "3+", label: "Years Experience" },
                { num: "20+", label: "Projects Completed" },
                { num: "10+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl md:text-5xl font-bold text-[var(--brand)]">
                    {stat.num}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
