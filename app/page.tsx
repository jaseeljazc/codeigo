"use client";

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { About } from "./about/About";
import { Services } from "./service/Services";
import Steps from "./steps/Steps";
import { Contact } from "./contact/Contact";
import { BackgroundEffects } from "../components/BackgroundEffects";

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-foreground">
      {/* Global background */}
      {/* <BackgroundEffects /> */}

      {/* Navigation */}
      {/* <Navbar /> */}

      <main className="relative z-10">
        <Hero />

        <Services />
        <About />
        <Steps />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
