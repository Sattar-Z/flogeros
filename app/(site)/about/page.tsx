import SecondAbout from "@/components/SecondAbout";
import FeaturesTab from "@/components/FeaturesTab";
import AboutIntro from "@/components/AboutIntro";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Flogeros Impact ",
  // other metadata
};

const AboutPage = async () => {
  return (
    <main className="py-20 lg:py-25 xl:py-30">
      <AboutIntro />
      <SecondAbout />
      <FeaturesTab />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
};

export default AboutPage;
