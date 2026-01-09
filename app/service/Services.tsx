import { motion, Variants, useReducedMotion } from "framer-motion";
import ServicesGrid from "../../components/ServicesGrid";

export function Services() {

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute
          -top-[320px] -left-[320px]
          w-[580px] h-[580px] rounded-full
          bg-linear-to-tr from-cyan-400/20 to-blue-500/20
          blur-[120px] will-change-transform"

      />

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center  max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            What we do
          </h2>
          <p className="text-xl text-slate-600">
            We focus on a few things and do them exceptionally well.
          </p>
        </motion.div>
        <ServicesGrid />
      </div>
    </section>
  );
}
