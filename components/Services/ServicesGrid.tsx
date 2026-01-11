import { motion, Variants, useReducedMotion } from "framer-motion";
import {
  Code2,
  Palette,
  ShoppingCart,
  User,
  PenTool,
  Image,
  ArrowUpRight,
} from "lucide-react";
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
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const ServicesGrid = () => {
  return (
    <div>
      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
      >
        {services?.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            onHoverStart={(e) => {
              if (!e?.currentTarget) return;
              (e.currentTarget as HTMLElement).style.willChange = "transform";
            }}
            onHoverEnd={(e) => {
              if (!e?.currentTarget) return;
              (e.currentTarget as HTMLElement).style.willChange = "auto";
            }}
            className={`group relative
  rounded-2xl p-5 sm:p-6
  bg-white/20
  border border-white/30
  shadow-xl shadow-black/5 
  transition-[transform,box-shadow,background] duration-300
  hover:shadow-2xl hover:bg-white/70
  overflow-hidden
  contain-paint
  ${service.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            {/* Hover gradient (CSS only – no JS state) */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100
                transition-opacity duration-300 ease-out
                bg-gradient-to-br ${service.gradient} contain-paint`}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mb-5 sm:mb-6 bg-slate-50 rounded-xl">
                <service.icon
                  size={28}
                  strokeWidth={1.5}
                  className={`${service.iconColor} gpu-accelerate`}
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-6">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesGrid;
