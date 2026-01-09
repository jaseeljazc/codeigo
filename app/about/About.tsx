import { motion, useReducedMotion } from "framer-motion";

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-violet-50/30 to-transparent pointer-events-none contain-paint" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
        {/* Visual Elements - Background Layer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: prefersReducedMotion ? 0 : 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 max-w-md aspect-square pointer-events-none hidden lg:block contain-paint gpu-accelerate"
        >
          {/* Accent card - top right */}
          <div className="absolute top-8 right-8 w-48 h-48 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl shadow-lg shadow-violet-600/20 -rotate-6 gpu-accelerate" />

          {/* Accent card - bottom left */}
          <div className="absolute bottom-8 left-8 w-40 h-40 bg-violet-50 rounded-2xl border border-violet-100 rotate-3 gpu-accelerate" />

          {/* Decorative dots */}
          <div className="absolute top-16 left-16 w-3 h-3 rounded-full bg-violet-600 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-violet-400" />
          <div className="absolute top-1/2 right-12 w-2.5 h-2.5 rounded-full bg-violet-300" />
        </motion.div>

        {/* Text Content - Foreground Layer */}
        <div className="relative z-10 max-w-2xl">
          {/* Overline label */}
          <div className="inline-block">
            <p className="text-sm sm:text-base text-black/50 mb-2 ml-1">
              About Us
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 sm:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tight">
              Codeigo Creations
            </h2>

            <div className="space-y-5 sm:space-y-6 text-gray-600 leading-relaxed">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                We're a small team that builds websites and designs for
                businesses that care about quality. No agency fluff, no
                unnecessary complexity—just solid work delivered on time.
              </p>

              <p>
                We're excited to partner with startups, local businesses, and
                creative professionals to deliver web development and design
                solutions that support real business growth.
              </p>

              <p>
                Our process is simple: understand what you need, build it well,
                and make sure you're happy with the result.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
