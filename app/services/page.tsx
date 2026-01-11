import React from "react";
import ServicesDetailGrid from "../../components/Services/ServiceDetailedGrid";
import WhyChooseUs from "../../components/Services/WhyChooseUs";
import { SectionIntro } from "@/components/ui/SectionIntro";
import Link from "next/link";

const Services = () => {
  return (
    <div>
      <section className="relative overflow-hidden ">
       

        <div className="absolute inset-0 bg-grid opacity-30" />
    
        <SectionIntro
          label="Digital Services"
          title="Crafting Digital Excellence"
          description="We build modern digital solutions with precision and care—helping startups and businesses establish a professional presence that stands out."
        />
      </section>{" "}
      <ServicesDetailGrid />
      <WhyChooseUs />
    {/* CTA Section */}
<section className="relative overflow-hidden border-t border-border">
  {/* Background */}
  <div
    aria-hidden
    className="
      pointer-events-none absolute inset-0
      bg-gradient-to-br from-primary/5 via-background to-background
      transform-gpu
    "
  />
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 bg-noise opacity-15"
  />

  <div className="relative py-24 md:py-32">
    <div className="mx-auto max-w-3xl px-6 text-center">
      <h2 className="mb-6 font-display text-fluid-4xl font-bold text-foreground">
        Let&apos;s Build the Future Together with{" "}
        <span className="relative inline-block">
          <span
            className="
              relative z-10
              bg-gradient-to-r from-foreground to-primary
              bg-clip-text text-transparent
            "
          >
            Codeigo
          </span>

          {/* Text glow */}
          <span
            aria-hidden
            className="
              pointer-events-none absolute inset-0 -z-10
              bg-gradient-to-r from-primary to-primary-dark
              opacity-30 blur-xl
              transform-gpu
            "
          />
        </span>
      </h2>

      <p className="mx-auto mb-10 max-w-xl text-fluid-base leading-relaxed text-muted-foreground">
        Let&apos;s collaborate on your next project. We bring expertise,
        creativity, and a commitment to quality.
      </p>

      <Link href="/contact" className="inline-block">
        <button
          className="
            group inline-flex items-center gap-2
            rounded-full bg-primary px-8 py-3.5
            font-medium text-primary-foreground
            transition-all duration-300 ease-out
            hover:-translate-y-0.5 hover:shadow-lg
            motion-reduce:transition-none
            transform-gpu will-change-transform
          "
        >
          Start Your Project
          <svg
            className="
              h-4 w-4 transition-transform duration-300
              group-hover:translate-x-0.5
              motion-reduce:transition-none
            "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </Link>
    </div>
  </div>
</section>

    </div>
  );
};

export default Services;
