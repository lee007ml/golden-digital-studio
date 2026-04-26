import { motion } from "framer-motion";
import { Brain, Code2, Workflow, Camera } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Custom AI solutions that automate tasks, analyze data, and drive growth.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Beautiful, fast, and responsive websites built with modern technologies.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Workflow automation and systems that save time and increase efficiency.",
  },
  {
    icon: Camera,
    title: "Photography & Editing",
    description: "High-quality photography and professional editing that captures your story.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What I Do"
          title={<>Services I Offer</>}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative surface-card rounded-2xl p-7 hover:border-[var(--brand)]/40 hover:-translate-y-1 transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--brand)]/10 border border-[var(--brand)]/20 flex items-center justify-center mb-6 group-hover:bg-[var(--brand)]/20 transition-colors">
                <service.icon className="w-6 h-6 text-[var(--brand)]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
