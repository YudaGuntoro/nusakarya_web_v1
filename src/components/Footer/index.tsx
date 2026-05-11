"use client";

import { contactEmail, whatsappUrl } from "@/lib/contact";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../Common/ScrollReveal";

const services = [
  "Company profile website",
  "Deck penawaran PDF",
  "Copywriting layanan",
  "Konten promosi awal",
];

const quickLinks = [
  { label: "Layanan", href: "/#features" },
  { label: "Proses", href: "/#process" },
  { label: "Paket", href: "/#pricing" },
  { label: "Kontak", href: "/#contact" },
];

const Footer = () => {
  return (
    <footer className="dark:bg-gray-dark relative z-10 border-t border-gray-200 bg-white pt-16 md:pt-20 lg:pt-24 dark:border-white/10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <ScrollReveal className="w-full px-4 lg:w-5/12" variant="fade-right">
            <div className="mb-12 max-w-[420px] lg:mb-16">
              <Link href="/" className="mb-7 flex items-center gap-3">
                <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src="/images/footer/footer_image.png"
                    alt="Nusakarya Digital Solution logo"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </span>
                <span>
                  <span className="block text-xl font-bold text-black dark:text-white">
                    Nusakarya Digital Solution
                  </span>
                </span>
              </Link>
              <p className="text-body-color dark:text-body-color-dark mb-8 text-base leading-relaxed">
                Kesempatan besar sering hilang diam-diam karena first impression yang lemah.
                Jangan beri calon klien waktu untuk ragu hanya karena bisnis Anda belum terlihat cukup meyakinkan.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white duration-300"
                >
                  Konsultasi WhatsApp
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:border-primary hover:text-primary text-dark inline-flex items-center justify-center rounded-md border border-gray-200 px-6 py-3 text-sm font-semibold duration-300 dark:border-white/10 dark:text-white"
                >
                  Email Kami
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="w-full px-4 sm:w-1/2 lg:w-3/12"
            delay={100}
            variant="fade-up"
          >
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                Layanan
              </h2>
              <ul>
                {services.map((item) => (
                  <li key={item}>
                    <span className="text-body-color dark:text-body-color-dark mb-4 inline-block text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="w-full px-4 sm:w-1/2 lg:w-2/12"
            delay={180}
            variant="fade-up"
          >
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                Navigasi
              </h2>
              <ul>
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="w-full px-4 lg:w-2/12"
            delay={260}
            variant="fade-up"
          >
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                Kontak
              </h2>
              <p className="text-body-color dark:text-body-color-dark mb-4 text-base">
                {contactEmail}
              </p>
              <p className="text-body-color dark:text-body-color-dark text-base">
                0851 5774 2849
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-white/20"
          delay={100}
        />
        <ScrollReveal className="py-8" delay={140}>
          <p className="text-body-color dark:text-body-color-dark text-center text-base">
            (c) 2026 Nusakarya Digital Solution. Company profile, website,
            deck, dan copywriting untuk bisnis yang ingin terlihat lebih siap.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
