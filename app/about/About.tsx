"use client";

import { motion } from "framer-motion";
import AboutImg from "@/assets/about-img.png";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
     

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-6">
              About Codeigo Solutions
            </h2>

            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                We're a small team that builds websites and designs for
                businesses that care about quality. No agency fluff, no
                unnecessary complexity—just solid work delivered on time.
              </p>

              <p className="leading-relaxed">
                Started in 2020, we've worked with startups, local businesses,
                and creative professionals who needed websites that actually
                helped their business grow.
              </p>

              <p className="leading-relaxed">
                Our process is simple: understand what you need, build it well,
                and make sure you're happy with the result.
              </p>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3]">
              {/* Abstract layers */}
              <div
                className="absolute top-0 right-0 w-3/4 h-3/4
                rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5"
              />

              <div
                className="absolute bottom-0 left-0 w-2/3 h-2/3
                rounded-2xl bg-muted border border-border"
              />

              {/* Image container */}
              <div
                className="absolute top-1/2 left-1/2 w-1/2 h-1/2
                -translate-x-1/2 -translate-y-1/2
                rounded-xl bg-card border border-primary/20
                shadow-xl overflow-hidden flex items-center justify-center"
              ></div>

              {/* Decorative dots */}
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
