import { motion } from "framer-motion";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--gold)]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--gold)]/5 blur-[120px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/5 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
          <span className="text-xs tracking-[0.2em] uppercase text-[var(--gold)]/90">
            Available for Projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.95] tracking-tight"
        >
          Leander
          <br />
          <span className="text-gradient-gold animate-shimmer italic font-light">
            Menezes
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-3 text-xs sm:text-sm tracking-[0.25em] uppercase text-muted-foreground"
        >
          <span>AI Developer</span>
          <span className="text-[var(--gold)]">/</span>
          <span>Web Designer</span>
          <span className="text-[var(--gold)]">/</span>
          <span>Creative Technologist</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          I build premium digital experiences that help businesses grow using AI —
          where craft meets intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group relative px-8 py-3.5 bg-[var(--gold)] text-background rounded-full font-medium text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
          >
            <span className="relative z-10">View Work →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold-soft)] to-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 border border-white/15 hover:border-[var(--gold)]/60 rounded-full text-sm tracking-wide hover:text-[var(--gold)] transition-all duration-300 backdrop-blur-sm"
          >
            Hire Me
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--gold)] to-transparent" />
      </motion.div>
    </section>
  );
}
