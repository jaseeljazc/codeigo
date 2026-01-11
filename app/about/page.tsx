"use client";
import { BackgroundGlow } from "@/components/ui/BackgroundGlow";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { motion, Variants } from "framer-motion";
import { Code2, Users, Target, Award, Zap, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  const stagger: Variants = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description:
        "Every project we take on has a clear goal: to solve real problems and create measurable value for your business.",
    },
    {
      icon: Zap,
      title: "Quality First",
      description:
        "We don't cut corners. Clean code, thoughtful design, and attention to detail are non-negotiable in everything we build.",
    },
    {
      icon: Heart,
      title: "Human-Centered",
      description:
        "Technology should serve people, not the other way around. We design with empathy and build for real users.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description:
        "Your input matters. We work closely with you throughout the process, ensuring the final product truly reflects your vision.",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  const team = [
    {
      name: "Our Approach",
      description:
        "We believe in building relationships, not just websites. Every client is unique, and we take the time to understand your business, your challenges, and your goals before we write a single line of code.",
    },
    {
      name: "Our Process",
      description:
        "From initial discovery to final deployment, we maintain clear communication and transparent workflows. You'll always know what we're working on, why we're doing it, and what comes next.",
    },
    {
      name: "Our Promise",
      description:
        "When you work with Codeigo, you're not just getting a service provider—you're getting a partner invested in your success. We measure our success by the results you achieve.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-primary font-medium mb-4">
              About Us
            </motion.p>
            
            <motion.h1 
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Building Digital Solutions That Matter
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8"
            >
              We're a small team of developers and designers who are genuinely passionate about creating web experiences that work. No corporate fluff, no unnecessary complexity—just honest work that delivers results.
            </motion.p>
          </motion.div>
        </div> */}
        <SectionIntro
          label="About Us"
          title="Building Digital Solutions That Matter"
          description="We're a small team of developers and designers who are genuinely passionate about creating web experiences that work. No corporate fluff, no unnecessary complexity—just honest work that delivers results."
        />
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Codeigo Creations started with a simple idea: create
                  high-quality digital products without the agency bloat. We saw
                  too many businesses struggling with overpriced,
                  overcomplicated solutions that didn't actually solve their
                  problems.
                </p>
                <p>
                  So we built something different. A team that listens first,
                  codes second. A process that's transparent and collaborative.
                  A service that treats your budget with respect and your
                  timeline with seriousness.
                </p>
                <p>
                  Today, we work with startups finding their footing,
                  established businesses modernizing their web presence, and
                  creative professionals who need a reliable technical partner.
                  What hasn't changed is our commitment to doing right by every
                  client.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                {/* Image */}
                <Image
                  src="/images/about-section-img.png"
                  alt="Web Development Illustration"
                  fill
                  className="object-contain rounded-2xl mt-10"
                  priority
                />
              </div>

              {/* Decorative blocks */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              What We Stand For
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              These aren't just words on a page—they're the principles that
              guide every decision we make.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-background rounded-xl p-6 sm:p-8 shadow-sm border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center"
            >
              How We Work
            </motion.h2>

            <div className="space-y-8">
              {team.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Ready to Work Together?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Whether you're starting from scratch or need help improving an
              existing project, we'd love to hear about it. Let's build
              something great together.
            </motion.p>

            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium transition-smooth hover-lift hover:shadow-lg">
                Start Your Project
                <svg
                  className="w-4 h-4 transition-smooth group-hover:translate-x-0.5"
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
