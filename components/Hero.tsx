// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export function Hero() {
//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center pt-10 overflow-hidden"
//     >
//       {/* ===== Animated Gradient Blobs ===== */}
//       <motion.div
//         className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl"
//         animate={{ scale: [1, 1.15, 1] }}
//         transition={{ duration: 12, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-[-200px] left-[-200px] w-[480px] h-[480px] bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />

//       {/* ===== Subtle Noise Overlay ===== */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
//         <div className="max-w-3xl">
//           {/* Company label */}
//           <motion.span
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="inline-block mb-4 text-xl font-medium tracking-wide text-muted-foreground"
//           >
//             Codeigo Solutions
//           </motion.span>

//           {/* Main heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.05] mb-6"
//           >
//             We build{" "}
//             <p className="bg-gradient-to-r from-primary to-indigo-400 font-display bg-clip-text text-transparent">
//               digital products
//             </p>{" "}
//             that grow your business
//           </motion.h1>

//           {/* Subheading */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-md sm:text-lg text-muted-foreground max-w-xl mb-10"
//           >
//             Codeigo Solutions is a software services company helping startups and
//             businesses design and build fast, reliable websites, web apps, and
//             digital experiences that actually deliver results.
//           </motion.p>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4"
//           >
//             <button
//               onClick={() => scrollToSection("#contact")}
//               className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
//             >
//               Start a Project
//               <ArrowRight
//                 size={18}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </button>

//             <button
//               onClick={() => scrollToSection("#services")}
//               className="inline-flex items-center justify-center gap-2 px-7 py-3.5  text-foreground border border-primary font-medium rounded-xl hover:bg-muted/70 transition-colors"
//             >
//               View Services
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-10 overflow-hidden"
    >
      {/* ===== Optimized Animated Blobs ===== */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full
          bg-linear-to-br from-indigo-500/25 to-purple-500/25
          blur-[120px] will-change-transform"

      />

      <motion.div
        aria-hidden
        className="absolute bottom-[-200px] left-[-200px] w-[480px] h-[480px] rounded-full
          bg-linear-to-tr from-cyan-400/20 to-blue-500/20
          blur-[120px] will-change-transform"
        
      />

      {/* ===== CSS Noise (NO IMAGE, NO DECODE COST) ===== */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        // style={{
        //   background:
        //     "repeating-radial-gradient(circle at 0 0, rgba(0,0,0,0.08) 0 1px, transparent 1px 3px)",
        // }}
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Company label */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4 text-xl font-medium tracking-wide text-muted-foreground"
          >
            Codeigo Creations
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.05] mb-6"
          >
            We build{" "}
            <span className="bg-gradient-to-r font-display from-primary to-indigo-400 bg-clip-text text-transparent">
              digital products
            </span>{" "}
            that grow your business
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-md sm:text-lg text-muted-foreground max-w-xl mb-10"
          >
            Codeigo Solutions is a software services company helping startups and
            businesses design and build fast, reliable websites, web apps, and
            digital experiences that actually deliver results.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollToSection("#contact")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5
                bg-primary text-primary-foreground font-medium rounded-xl
                shadow-lg shadow-primary/20
                hover:shadow-xl hover:shadow-primary/30
                transition-all"
            >
              Start a Project
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => scrollToSection("#services")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5
                text-foreground border border-primary font-medium rounded-xl
                hover:bg-muted/70 transition-colors"
            >
              View Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
