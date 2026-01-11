"use client";

import { motion } from "framer-motion";

export const BackgroundGlow = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ contain: "strict" }}
    >
      {/* Top Right Glow */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40
          w-[520px] h-[520px] rounded-full
          bg-linear-to-br from-indigo-500/30 to-purple-500/30
          blur-[80px] transform-gpu"
        style={{ willChange: "transform" }}
      />

      {/* Bottom Left Glow */}
      <div
        aria-hidden
        className="absolute bottom-[-200px] left-[-200px]
          w-[480px] h-[480px] rounded-full
          bg-linear-to-tr from-cyan-400/25 to-blue-500/25
          blur-[70px] transform-gpu"
        style={{ willChange: "transform" }}
      />
    </div>
  );
};
