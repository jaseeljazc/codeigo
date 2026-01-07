"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Contact() {
  return (
  <section
  id="contact"
  className="relative py-20 sm:py-28 lg:py-32  text-foreground overflow-x-hidden"
>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full bg-primary/10 blur-[140px]" />
      </div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 sm:mb-20 lg:mb-24"
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">
            Let’s work together
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Have a project in mind or need help refining an idea?
            Reach out and let’s explore how we can help.
          </p>
        </motion.div>

        {/* Contact rows */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="max-w-5xl"
        >
          <ContactRow
            icon={<Mail size={18} />}
            label="Email"
            value="hello@codeigo.com"
            description="Best for detailed conversations"
            href="mailto:hello@codeigo.com"
          />

          <ContactRow
            icon={<Phone size={18} />}
            label="Phone"
            value="+91 98765 43210"
            description="Quick questions or urgent work"
            href="tel:+919876543210"
          />

          <ContactRow
            icon={<MapPin size={18} />}
            label="Location"
            value="Remote — Worldwide"
            description="Available across all time zones"
            href="#"
          />
        </motion.div>

        {/* Footer note */}
       <div className="pt-12 sm:pt-16">
  <p className="text-sm text-muted-foreground">
    We typically respond within 24 hours. Clear communication and
    long-term collaboration matter to us.
  </p>
</div>

      </div>
    </section>
  );
}

/* ---------- Contact Row ---------- */

function ContactRow({
  icon,
  label,
  value,
  description,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  href: string;
}) {
  return (
    <motion.a
      variants={fadeUp}
      href={href}
      className="
        group flex flex-col sm:flex-row
        sm:items-center sm:justify-between
        gap-4 sm:gap-0
        py-6 sm:py-8
        border-b border-border
        hover:border-primary/50
        transition-colors
      "
    >
      <div className="flex gap-4">
        <div className="mt-1 text-primary shrink-0">
          {icon}
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
            {label}
          </p>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            {value}
          </p>

          <p className="text-sm text-muted-foreground mt-1 max-w-md">
            {description}
          </p>
        </div>
      </div>

      {/* Arrow hidden on mobile */}
      <ArrowUpRight
        size={18}
        className="
          hidden sm:block
          text-muted-foreground
          transition-transform duration-300
          group-hover:translate-x-1 group-hover:-translate-y-1
        "
      />
    </motion.a>
  );
}
