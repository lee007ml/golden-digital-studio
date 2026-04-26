import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Plushpad Search",
    description: "An intelligent search experience with refined UI and intuitive flow.",
    tag: "AI · Search",
    url: "https://plushpad-search.lovable.app",
    gradient: "from-amber-500/20 via-yellow-600/10 to-transparent",
  },
  {
    title: "Porsche Website",
    description: "A cinematic showcase site capturing the essence of automotive luxury.",
    tag: "Web · Luxury",
    url: "https://porche-website-sandy.vercel.app/",
    gradient: "from-red-500/15 via-orange-600/10 to-transparent",
  },
  {
    title: "Real Estate AI",
    description: "AI-driven property discovery platform with smart recommendations.",
    tag: "AI · PropTech",
    url: "https://real-estate-ai-calli-go6g.bolt.host/",
    gradient: "from-emerald-500/15 via-teal-600/10 to-transparent",
  },
  {
    title: "HomeFinder AI",
    description: "Conversational home search powered by intelligent matching.",
    tag: "AI · Real Estate",
    url: "https://homefinder-ai-17.preview.emergentagent.com/",
    gradient: "from-blue-500/15 via-indigo-600/10 to-transparent",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 md:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Projects crafted with{" "}
              <span className="italic text-gradient-gold">precision.</span>
            </>
          }
          description="A selection of recent work spanning AI, design, and digital craftsmanship."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative block rounded-2xl overflow-hidden border border-white/10 bg-card/60 backdrop-blur-sm hover:border-[var(--gold)]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(212,175,55,0.3)]"
            >
              {/* Visual area */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {/* Decorative pattern */}
                <div
                  className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-700"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, var(--gold) 0, transparent 50%), radial-gradient(circle at 70% 70%, var(--gold) 0, transparent 50%)",
                  }}
                />

                <div className="absolute top-6 left-6 text-[10px] tracking-[0.25em] uppercase text-[var(--gold)]/80">
                  {project.tag}
                </div>

                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--gold)] group-hover:border-[var(--gold)] group-hover:rotate-45 transition-all duration-500">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-foreground group-hover:text-background"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-3xl md:text-4xl mb-2 group-hover:text-[var(--gold)] transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="flex items-center justify-between px-8 py-5 border-t border-white/5 text-xs tracking-wider uppercase">
                <span className="text-muted-foreground">Live Project</span>
                <span className="text-[var(--gold)] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Visit Site
                  <span>→</span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
