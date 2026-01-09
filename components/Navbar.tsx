"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(64);

  const prefersReducedMotion = useReducedMotion();
  const navRef = useRef<HTMLElement | null>(null);

  /* Detect navbar height */
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  /* Scroll detection */
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 contain-paint ${
          isScrolled
            ? "bg-background/60 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="font-display font-semibold text-xl sm:text-2xl tracking-tight focus-ring-inset touch-target"
            >
              Codeigo<span className="text-primary">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-md font-medium text-muted-foreground hover:text-primary transition-colors duration-200 focus-ring-inset touch-target"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors duration-200 focus-ring touch-target"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              className="md:hidden p-2 focus-ring-inset touch-target-lg"
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden contain-paint"
              style={{ top: navHeight }}
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:hidden fixed inset-x-0 z-50 bg-background border-b border-border contain-paint gpu-accelerate"
              style={{
                top: navHeight,
                height: `calc(100dvh - ${navHeight}px)`,
              }}
            >
              <div className="section-container py-6 flex flex-col h-full">
                {/* Links */}
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-lg sm:text-xl font-medium text-muted-foreground hover:text-primary transition-colors duration-200 py-2 focus-ring-inset touch-target"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                  className="mt-auto mx-4 sm:mx-10 px-4 py-3.5 bg-primary text-primary-foreground rounded-lg text-center hover:bg-primary-dark transition-colors duration-200 focus-ring touch-target"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
