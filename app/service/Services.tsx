import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Code2,
  Palette,
  ShoppingCart,
  User,
  PenTool,
  Image,
  ArrowUpRight,
} from "lucide-react";

/* -------------------- DATA -------------------- */

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites built with modern technologies. Fast, secure, and easy to manage.",
    featured: true,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Palette,
    title: "Web Designing",
    description:
      "Thoughtful interfaces that look good and make sense to your users.",
    featured: false,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Online stores that actually convert. Clear checkout, reliable payments.",
    featured: true,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
  },
  {
    icon: User,
    title: "Personal Portfolio",
    description:
      "Show your work in the best light. Clean, professional, memorable.",
    featured: false,
    gradient: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description:
      "Distinctive marks that represent your brand without trying too hard.",
    featured: false,
    gradient: "from-indigo-500/20 to-violet-500/20",
    iconColor: "text-indigo-500",
  },
  {
    icon: Image,
    title: "Graphic Posters",
    description:
      "Print and digital graphics that communicate clearly and look sharp.",
    featured: false,
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-500",
  },
];

/* -------------------- ANIMATIONS -------------------- */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // ✅ FIXED (no string)
    },
  },
};

/* -------------------- COMPONENT -------------------- */

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative py-20 md:py-32  overflow-hidden"
    >
       {/* 🔵 HERO → ABOUT glow continuation */}
      <motion.div
        className="pointer-events-none absolute
                  -top-[360px] -left-[360px]
w-[630px] h-[620px]                   rounded-full
              bg-gradient-to-tr from-cyan-400/20 to-blue-500/20    blur-3xl"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            What we do
          </h2>
          <p className="text-xl text-slate-600">
            We focus on a few things and do them exceptionally well.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative bg-white/90 backdrop-blur-xs  rounded-2xl p-6 border border-slate-200 hover:shadow-2xl transition-shadow overflow-hidden ${
                service.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Hover gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center w-16 h-16 mb-6 bg-slate-50 rounded-xl"
                >
                  <service.icon
                    size={28}
                    strokeWidth={1.5}
                    className={service.iconColor}
                  />
                </motion.div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <motion.div
                  className="flex items-center text-sm font-medium text-slate-400"
                  whileHover={{ x: 4 }}
                >
                  <span className="mr-2">Learn more</span>
                  <ArrowUpRight size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
