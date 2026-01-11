import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-10 overflow-hidden contain-paint"
    >
      {/* ===== Optimized Animated Blobs ===== */}
      {/* <motion.div
        aria-hidden
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full
          bg-linear-to-br from-indigo-500/25 to-purple-500/25
          blur-[120px] gpu-accelerate"
      />

      <motion.div
        aria-hidden
        className="absolute bottom-[-200px] left-[-200px] w-[480px] h-[480px] rounded-full
          bg-linear-to-tr from-cyan-400/20 to-blue-500/20
          blur-[120px] gpu-accelerate"
      /> */}

      {/* ===== CSS Noise (NO IMAGE, NO DECODE COST) ===== */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Company label */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block mb-3 sm:mb-4 text-lg sm:text-xl font-medium tracking-wide text-muted-foreground"
          >
            Codeigo Creations
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.05] mb-5 sm:mb-6"
          >
            We build{" "}
            <span className="bg-gradient-to-r font-display from-primary to-indigo-400 bg-clip-text text-transparent gpu-accelerate">
              digital products
            </span>{" "}
            that grow your business
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 sm:mb-10 leading-relaxed"
          >
            Codeigo Solutions is a software services company helping startups
            and businesses design and build fast, reliable websites, web apps,
            and digital experiences that actually deliver results.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link href="/contact">
              <button
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5
                bg-primary text-primary-foreground font-medium rounded-xl
                shadow-lg shadow-primary/20
                hover:shadow-xl hover:shadow-primary/30
                transition-all duration-300 ease-out
                touch-target focus-ring"
              >
                Start a Project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                />
              </button>
            </Link>
            <Link href="services">
              <button
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5
                text-foreground border border-black/10 font-medium rounded-xl
                hover:bg-muted/70 transition-all duration-300 ease-out shadow-lg
                hover:border-black/10 hover:shadow-xl hover:shadow-primary/30
                touch-target focus-ring"
              >
                View Services
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
