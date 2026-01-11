"use client";

import { motion, type Variants } from "framer-motion";
import GradientText from "@/components/ui/GradientText";

interface SectionIntroProps {
  label: string;
  title: string;
  description: string;
  className?: string;
}

export const SectionIntro: React.FC<SectionIntroProps> = ({
  label,
  title,
  description,
  className = "",
}) => {
  const words = title.trim().split(" ");
  const lastWord = words.pop();
  const rest = words.join(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div className={`section-container relative mt-15 sm:mt-20 ${className}`}>
      <motion.div
        className="mx-auto max-w-3xl py-24 md:py-32 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Label */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5"
        >
          <span className="text-sm text-muted-foreground font-medium mt-15">
            {label}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-fluid-4xl font-bold tracking-tight text-foreground mb-6"
        >
          {rest}{" "}
          {lastWord && (
            <motion.span variants={fadeUp} className="inline-block">
              <GradientText text={lastWord} />
            </motion.span>
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-fluid-lg text-muted-foreground leading-relaxed"
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
};
