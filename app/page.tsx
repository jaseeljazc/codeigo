"use client";

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import { ServicesHome } from "../components/Services/ServicesHome";
import Steps from "../components/Steps";
import { ContactGrid } from "../components/contact/ContactGrid";

export default function HomePage() {
  return (
    <div className="relative min-h-screen ">
      <main className="relative z-10">
        <Hero />
        <ServicesHome />
        <About />
        <Steps />
        <ContactGrid />
      </main>
    </div>
  );
}
