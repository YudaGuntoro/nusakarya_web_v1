import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nusakarya Digital Solution | Company Profile, Website, Deck, dan Copywriting",
  description:
    "Nusakarya Digital Solution membantu bisnis merapikan profil, website, deck penawaran, dan copywriting agar terlihat profesional dan lebih dipercaya calon klien.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <AboutSectionOne />
      <Pricing />
      <Contact />
    </>
  );
}
