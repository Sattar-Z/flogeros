import { Metadata } from "next";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Feature from "@/components/Features";
import Why from "@/components/Why";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import ContactHome from "@/components/ContactHome";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero2 />
      {/* <Hero /> */}
      <Integration />
      <Feature />
      <Why />
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <CTA /> */}
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      <ContactHome />
      {/* <Blog /> */}
    </main>
  );
}
