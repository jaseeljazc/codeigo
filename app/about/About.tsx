"use client";

import { motion, useReducedMotion } from "framer-motion";

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="will-change-transform"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-6">
              About Codeigo Creations
            </h2>

            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                We're a small team that builds websites and designs for
                businesses that care about quality. No agency fluff, no
                unnecessary complexity—just solid work delivered on time.
              </p>

              <p className="leading-relaxed">
                We’re excited to partner with startups, local businesses, and
                creative professionals to deliver web development and design
                solutions that support real business growth.
              </p>

              <p className="leading-relaxed">
                Our process is simple: understand what you need, build it well,
                and make sure you're happy with the result.
              </p>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: prefersReducedMotion ? 0 : 0.15,
            }}
            className="relative contain-paint"
          >
            <div className="relative aspect-[4/3]">
              {/* Abstract layers (static = cheap) */}
              <div
                className="absolute top-0 right-0 w-3/4 h-3/4
                rounded-2xl bg-linear-to-br from-primary/15 to-primary/5"
              />

              <div
                className="absolute bottom-0 left-0 w-2/3 h-2/3
                rounded-2xl bg-muted border border-border"
              />

              {/* Decorative dots (static) */}
              <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-primary" />
              <div className="absolute bottom-12 right-16 w-3 h-3 rounded-full bg-primary/40" />
              <div className="absolute top-1/2 right-8 w-1.5 h-1.5 rounded-full bg-primary/60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
