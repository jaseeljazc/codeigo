"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stepsData = [
  {
    step: "01",
    label: "IMMERSION",
    title: "Discover",
    items: [
      "Understand business goals",
      "Analyze user needs & behavior",
      "Review technical constraints",
      "Define core problems clearly",
    ],
  },
  {
    step: "02",
    label: "FOUNDATION",
    title: "Blueprint",
    items: [
      "Structure information logically",
      "Plan scalable components",
      "Define design tokens & styles",
      "Create a clear technical plan",
    ],
  },
  {
    step: "03",
    label: "CREATION",
    title: "Construct",
    items: [
      "Build high-quality UI components",
      "Ensure consistency across patterns",
      "Optimize performance",
      "Purposeful motion & interactions",
    ],
  },
  {
    step: "04",
    label: "TRANSITION",
    title: "Integrate",
    items: [
      "Seamless developer handoff",
      "Provide system documentation",
      "Support long-term scalability",
      "Assist post-launch improvements",
    ],
  },
];

const Steps = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-28 md:py-40">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="heading-font text-center text-gray-900 text-4xl md:text-5xl font-semibold tracking-tighter mb-6"
        >
          Intentional. Precise. Elegant.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-gray-500 text-center max-w-md mx-auto mb-24"
        >
          Every engagement follows our deliberate 4-phase process designed to
          eliminate waste while maximizing creative potential.
        </motion.p>

        <div className="relative">
          {/* Connecting line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block absolute top-[130px] left-0 right-0 h-px
              bg-gradient-to-r from-transparent via-gray-100 to-transparent"
          />

          {/* Steps grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10
              place-items-center md:place-items-start md:ml-20"
          >
            {stepsData.map((step) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="mb-7 flex flex-col items-center md:items-start">
                  <div className="inline-block mb-3">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl font-semibold tabular-nums">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <div className="uppercase font-mono text-indigo-500 text-[11px] tracking-[0.14em] font-bold mb-2">
                    {step.label}
                  </div>

                  <div className="heading-font text-2xl font-semibold text-gray-800">
                    {step.title}
                  </div>
                </div>

                <div className="space-y-2.5 text-gray-500 text-[15px]">
                  {step.items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
