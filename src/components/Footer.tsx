export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-lg">
          <span className="text-gradient-gold">L</span>
          <span className="text-foreground/80"> Menezes</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="mailto:leanderlancyml@gmail.com"
            className="hover:text-[var(--gold)] transition-colors"
          >
            Email
          </a>
          <a
            href="https://instagram.com/_leander007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--gold)] transition-colors"
          >
            Instagram
          </a>
          <a
            href="tel:7715808331"
            className="hover:text-[var(--gold)] transition-colors"
          >
            Call
          </a>
        </div>

        <div className="text-xs text-muted-foreground tracking-wide">
          © {year} Leander Menezes. Crafted with care.
        </div>
      </div>
    </footer>
  );
}
