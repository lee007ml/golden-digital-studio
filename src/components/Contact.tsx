import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Phone, Mail, Instagram, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const contacts = [
  { icon: Phone, value: "7715808331", href: "tel:7715808331" },
  { icon: Mail, value: "leanderlancyml@gmail.com", href: "mailto:leanderlancyml@gmail.com" },
  { icon: Instagram, value: "@_leander007", href: "https://instagram.com/_leander007", external: true },
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
    <section id="contact" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[11px] tracking-[0.25em] uppercase text-[var(--brand)] font-medium mb-4">
              Let's Connect
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.03em] font-bold">
              Let's Build Something
              <br />
              Amazing Together
            </h2>

            <div className="mt-10 space-y-4">
              {contacts.map((c) => (
                <a
                  key={c.value}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 hover:text-[var(--brand)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand)]/10 border border-[var(--brand)]/20 flex items-center justify-center group-hover:bg-[var(--brand)]/20 transition-colors">
                    <c.icon className="w-4 h-4 text-[var(--brand)]" />
                  </div>
                  <span className="text-base">{c.value}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="surface-card rounded-2xl p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--brand)]/50 transition-colors"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Your Email"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--brand)]/50 transition-colors"
              />
            </div>
            <textarea
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your Message"
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--brand)]/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[var(--brand)] text-background rounded-xl font-medium text-sm hover:shadow-[0_0_40px_rgba(255,104,0,0.5)] transition-all duration-300"
            >
              Send Message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
