"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/Common/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import "../styles/index.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="id">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body
        className={`bg-[#FCFCFC] dark:bg-black ${poppins.className} ${poppins.variable}`}
      >
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <ScrollToTop />
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
