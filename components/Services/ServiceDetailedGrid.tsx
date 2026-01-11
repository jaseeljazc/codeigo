"use client";

import {
  FaCode,
  FaPalette,
  FaShoppingCart,
  FaUser,
  FaPenNib,
  FaImage,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaStripe,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiPython,
  SiAdobexd,
  SiShopify,
  SiOdoo,
} from "react-icons/si";

type Tool = {
  icon: any;
  name: string;
  color: string;
};

type Service = {
  title: string;
  icon: any;
  description: string;
  tools: Tool[];
};

const services: Service[] = [
  {
    title: "Web Development",
    icon: FaCode,
    description:
      "We build fast, accessible, and SEO-optimized websites using modern frameworks and best practices. Each project is engineered for performance, maintainability, and scalability. Ideal for businesses seeking a robust digital foundation that grows with them.",
    tools: [
      { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
      { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
      { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
      { icon: SiNextdotjs, name: "React / Next.js", color: "text-foreground" },
      { icon: SiPython, name: "Python", color: "text-blue-400" },
      { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
      { icon: FaGitAlt, name: "Git", color: "text-red-500" },
    ],
  },
  {
    title: "Web Designing",
    icon: FaPalette,
    description:
      "We create user-centered interfaces that prioritize clarity, usability, and visual consistency. Our design approach balances aesthetics with function, ensuring every layout serves the user journey. Built for teams and founders who value thoughtful, mobile-first design.",
    tools: [
      { icon: SiFigma, name: "Figma", color: "text-pink-500" },
      { icon: SiAdobexd, name: "Adobe XD", color: "text-purple-500" },

      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-500" },
      { icon: FaReact, name: "Design Systems", color: "text-cyan-500" },
    ],
  },
  {
    title: "E-commerce Development",
    icon: FaShoppingCart,
    description:
      "We develop conversion-focused online stores with secure payment integration and intuitive product management. Every store is optimized for customer trust and seamless checkout experiences. Perfect for entrepreneurs and brands launching or scaling their digital retail presence.",
    tools: [
      { icon: FaReact, name: "React / Next.js", color: "text-cyan-500" },
      { icon: FaStripe, name: "Stripe", color: "text-indigo-500" },
      { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
      { icon: SiShopify, name: "Shopify", color: "text-green-500" },

    ],
  },
  {
    title: "Personal Portfolio",
    icon: FaUser,
    description:
      "We design minimal, impactful portfolio sites that showcase your work with clarity and confidence. Each portfolio is built to load fast, adapt to any device, and reflect your personal brand. Made for creatives, developers, and professionals establishing their online identity.",
    tools: [
      { icon: FaReact, name: "React", color: "text-cyan-500" },
      { icon: SiTailwindcss, name: "Tailwind", color: "text-sky-500" },
    ],
  },
  {
    title: "Logo Design",
    icon: FaPenNib,
    description:
      "We craft memorable, scalable logos that communicate brand values at a glance. Each design is rooted in strategy, simplicity, and versatility across all media. Designed for startups and businesses building a recognizable visual identity from the ground up.",
    tools: [
      {
        icon: SiAdobeillustrator,
        name: "Illustrator",
        color: "text-orange-500",
      },
      { icon: SiFigma, name: "Figma", color: "text-pink-500" },
    ],
  },
  {
    title: "Graphic Poster Design",
    icon: FaImage,
    description:
      "We produce high-quality print and digital graphics with clear messaging and strong visual impact. From marketing materials to event posters, every piece is crafted to engage and inform. Suitable for campaigns, announcements, and brands seeking professional design collateral.",
    tools: [
      { icon: SiAdobephotoshop, name: "Photoshop", color: "text-blue-600" },
      {
        icon: SiAdobeillustrator,
        name: "Illustrator",
        color: "text-orange-500",
      },
      { icon: SiFigma, name: "Figma", color: "text-pink-500" },
    ],
  },
];

export default function Services() {
  return (
    <div className="relative min-h-screen ">
   
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-70 right-[-300px]
    w-[580px] h-[580px] rounded-full
    bg-linear-to-tr from-cyan-400/10 to-blue-500/10
    blur-[120px]
    -translate-x-1/3 -translate-y-1/3
    gpu-accelerate contain-paint"
      />

      {/* Services List */}
      <section className="section-container py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-20 text-center">
            <h2 className="font-display text-fluid-3xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-fluid-base text-muted-foreground max-w-2xl mx-auto">
              Focused expertise across development, design, and
              branding—delivered with clarity and built to last.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group relative pb-16 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-1 min-w-0">
                      {/* Icon + Title */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl group-hover:bg-primary/10 transition-smooth">
                          <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                        </div>

                        <h3 className="font-display text-lg sm:text-fluid-2xl font-semibold text-foreground">
                          {service.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed max-w-3xl text-sm sm:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="sm ">
                    <div className="flex flex-wrap gap-3">
                      {service.tools.map((tool, idx) => {
                        const ToolIcon = tool.icon;
                        return (
                          <div
                            key={idx}
                            className="group/tool relative"
                            title={tool.name}
                          >
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 group-hover/tool:bg-muted transition-smooth">
                              <ToolIcon
                                className={`h-4 w-4 ${tool.color} transition-smooth group-hover/tool:scale-110`}
                              />
                              <span className="text-xs text-muted-foreground font-medium">
                                {tool.name}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
