"use client";

import { motion } from "framer-motion";

export const BackgroundGlow = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Top Right Glow */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-40
          w-[520px] h-[520px] rounded-full
          bg-linear-to-br from-indigo-500/30 to-purple-500/30
          blur-[80px] gpu-accelerate"
      />

      {/* Bottom Left Glow */}
      <motion.div
        aria-hidden
        className="overflow-visible relative bottom-[-400px] left-[-200px]
          w-[480px] h-[480px] rounded-full
          bg-linear-to-tr from-cyan-400/25 to-blue-500/25
          blur-[70px] gpu-accelerate"
      />
    </div>
  );
};
