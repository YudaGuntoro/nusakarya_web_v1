import Demo from "@/components/Demo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Project | Nusakarya Digital Solution",
  description:
    "Lihat contoh custom software Nusakarya untuk kebutuhan industri, operasional, proses kerja internal, dan sistem digital seperti CMMS.",
};

const DemoPage = () => {
  return <Demo />;
};

export default DemoPage;
