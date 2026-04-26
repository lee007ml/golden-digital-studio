import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Plushpad Search",
    description: "AI-powered search platform for smarter and faster results.",
    url: "https://plushpad-search.lovable.app",
    gradient: "from-purple-600/30 via-blue-600/20 to-transparent",
  },
  {
    title: "Porsche Website",
    description: "Luxury car website with modern design and smooth experience.",
    url: "https://porche-website-sandy.vercel.app/",
    gradient: "from-zinc-400/20 via-zinc-700/20 to-transparent",
  },
  {
    title: "Real Estate AI",
    description: "AI-driven real estate platform for smart property recommendations.",
    url: "https://real-estate-ai-calli-go6g.bolt.host/",
    gradient: "from-amber-500/25 via-orange-700/15 to-transparent",
  },
  {
    title: "HomeFinder AI",
    description: "Intelligent platform to find your dream home, powered by AI.",
    url: "https://homefinder-ai-17.preview.emergentagent.com/",
    gradient: "from-yellow-500/25 via-orange-600/15 to-transparent",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Featured Projects"
          title={<>My Recent Work</>}
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative block surface-card rounded-2xl overflow-hidden hover:border-[var(--brand)]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(255,104,0,0.25)]"
            >
              {/* Visual */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                <div
                  className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-700"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 40%, var(--brand) 0, transparent 40%)",
                  }}
                />

                {/* Card overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-7 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 group-hover:text-[var(--brand)] transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-11 h-11 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[var(--brand)] group-hover:border-[var(--brand)] transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-background group-hover:rotate-45 transition-all" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
