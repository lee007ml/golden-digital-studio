import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    number: "01",
    title: "AI Solutions for Businesses",
    description:
      "Custom AI integrations, intelligent automations and bespoke models tailored to elevate your operations.",
  },
  {
    number: "02",
    title: "Website Development",
    description:
      "Premium, performant websites built from scratch — designed to convert and crafted to impress.",
  },
  {
    number: "03",
    title: "Automation Systems",
    description:
      "End-to-end workflow automation that saves hours, reduces friction and scales effortlessly.",
  },
  {
    number: "04",
    title: "Photography & Editing",
    description:
      "Visual storytelling with cinematic editing — refined imagery that aligns with your brand identity.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-44 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              What I do —{" "}
              <span className="italic text-gradient-gold">end to end.</span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-background p-10 md:p-12 hover:bg-card transition-colors duration-500 cursor-default"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-sm text-[var(--gold)]/60">
                  {service.number}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)]/10 transition-all duration-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground group-hover:text-[var(--gold)] transition-colors">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 group-hover:text-[var(--gold)] transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[var(--gold)] to-transparent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
