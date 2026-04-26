import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";

const contacts = [
  {
    label: "Phone",
    value: "+91 7715 808 331",
    href: "tel:7715808331",
  },
  {
    label: "Email",
    value: "leanderlancyml@gmail.com",
    href: "mailto:leanderlancyml@gmail.com",
  },
  {
    label: "Instagram",
    value: "@_leander007",
    href: "https://instagram.com/_leander007",
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields");
      return;
    }
    const subject = encodeURIComponent(`New inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:leanderlancyml@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };

  return (
    <section id="contact" className="relative py-32 md:py-44 px-6 border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[var(--gold)]/8 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build something{" "}
              <span className="italic text-gradient-gold">powerful</span> together.
            </>
          }
          description="Have a project in mind, or simply want to say hello? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-5 gap-10 md:gap-16">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-6">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.label === "Instagram" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group block p-6 rounded-xl border border-white/10 hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/[0.03] transition-all duration-500"
              >
                <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-2">
                  {c.label}
                </div>
                <div className="text-lg md:text-xl font-display group-hover:text-[var(--gold)] transition-colors flex items-center justify-between">
                  {c.value}
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[var(--gold)]">
                    →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3 space-y-5 p-8 md:p-10 rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm"
          >
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/15 py-3 text-foreground focus:outline-none focus:border-[var(--gold)] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/15 py-3 text-foreground focus:outline-none focus:border-[var(--gold)] transition-colors"
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/15 py-3 text-foreground focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                placeholder="Tell me about your project…"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full md:w-auto px-8 py-3.5 bg-[var(--gold)] text-background rounded-full font-medium text-sm tracking-wide hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
