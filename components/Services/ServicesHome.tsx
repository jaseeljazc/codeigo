import { motion, Variants, useReducedMotion } from "framer-motion";
import ServicesGrid from "./ServicesGrid";
import GradientText from "../ui/GradientText";

export function ServicesHome() {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 md:py-32 overflow-hidden"
    >
     

      <div className="absolute inset-0 -z-10 contain-paint">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] gpu-accelerate" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] gpu-accelerate" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 sm:mb-6">
            What we {" "}
            <GradientText text="do" />{" "}
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
