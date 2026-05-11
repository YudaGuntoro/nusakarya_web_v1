import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak Nusakarya Digital Solution | Diskusi Profil Bisnis",
  description:
    "Hubungi Nusakarya Digital Solution untuk diskusi profil bisnis, website, deck penawaran, copywriting, dan materi promosi.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Kontak"
        description="Ceritakan kebutuhan bisnis Anda. Kami bantu petakan solusi yang paling pas, mulai dari website, deck, copywriting, sampai materi promosi."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
