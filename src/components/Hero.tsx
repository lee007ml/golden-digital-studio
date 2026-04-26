import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 md:pt-24 pb-16 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-8 items-center min-h-[calc(100vh-7rem)]">
        {/* Left: Text */}
        <div className="relative z-10 order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.92] tracking-[-0.04em] font-extrabold"
          >
            Leander
            <br />
            Menezes
            <span className="text-[var(--brand)]">®</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground font-light"
          >
            AI Developer | Web Designer
            <br />
            Creative Technologist
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--brand)] text-background rounded-full font-medium text-sm hover:shadow-[0_0_40px_rgba(255,104,0,0.6)] transition-all duration-300"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-3 px-6 py-3.5 border border-white/15 hover:border-[var(--brand)]/60 rounded-full text-sm hover:text-[var(--brand)] transition-all duration-300"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right: Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative order-1 md:order-2"
        >
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[80vh] rounded-2xl overflow-hidden">
            <img
              src={heroPortrait}
              alt="Leander Menezes portrait"
              width={1024}
              height={1280}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-6 right-6 max-w-[220px] text-right text-xs text-muted-foreground leading-relaxed hidden md:block">
            Crafting digital experiences that drive growth and create impact.
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-[var(--brand)] animate-bounce" />
        </div>
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
