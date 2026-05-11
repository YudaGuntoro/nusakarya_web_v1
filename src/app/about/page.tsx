import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Nusakarya Digital Solution | Company Profile Studio",
  description:
    "Kenali pendekatan Nusakarya Digital Solution dalam merapikan profil bisnis, website, deck penawaran, dan copywriting agar lebih dipercaya calon klien.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tentang Nusakarya Digital Solution"
        description="Kami membantu bisnis mengubah informasi yang masih tersebar menjadi materi profil, website, dan penawaran yang lebih rapi dan meyakinkan."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
