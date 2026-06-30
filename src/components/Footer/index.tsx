import { whatsappUrl } from "@/lib/contact";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../Common/ScrollReveal";

const services = [
  { label: "Template Siap Pakai", href: "/#pricing" },
  { label: "Template + Penyesuaian", href: "/#pricing" },
  { label: "Website Full Custom", href: "/#pricing" },
  { label: "Company Profile", href: "/#contact" },
  { label: "Deck Penawaran", href: "/#contact" },
];

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Contoh Visual", href: "/#portfolio" },
  { label: "Kenapa Website", href: "/#about" },
  { label: "Model Pengerjaan", href: "/#pricing" },
  { label: "Kontak", href: "/#contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#8B5CF6]/25 bg-[#19172F] pt-16 text-white sm:pt-20 lg:pt-24">
      <div className="pointer-events-none absolute top-[-220px] left-[-150px] h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-180px] bottom-[-260px] h-[520px] w-[520px] rounded-full border border-white/[0.04]" />

      <div className="relative z-10 container px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.45fr_.72fr_.9fr_.93fr] lg:gap-10 lg:pb-16 xl:gap-14">
          <ScrollReveal variant="fade-right">
            <div className="max-w-[460px]">
              <Link href="/" className="mb-6 flex items-center gap-3">
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src="/images/logo/new-logo.png"
                    alt="Logo Nusakarya Digital Solution"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </span>
                <span>
                  <span className="block text-xl font-bold tracking-[-0.025em] text-white sm:text-[22px]">
                    Nusakarya Digital Solution
                  </span>
                  <span className="mt-1 block text-[9px] font-semibold tracking-[0.18em] text-[#A9A2BB] uppercase">
                    Website & Digital Profile
                  </span>
                </span>
              </Link>

              <p className="mb-7 max-w-[440px] text-sm leading-7 text-[#B9B4C6]">
                Membantu bisnis menyusun website, profil, dan materi penawaran
                yang lebih jelas, rapi, dan siap dibagikan kepada calon klien.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hubungi Nusakarya melalui WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-[#C8C2D5] transition hover:border-[#9D7AE3] hover:bg-[#8B5CF6] hover:text-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 11.6a8 8 0 0 1-11.8 7l-4.2 1 1.1-4A8 8 0 1 1 20 11.6Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 8.2c.2-.4.4-.4.7-.4h.4c.2 0 .4 0 .5.4l.7 1.7c.1.3 0 .5-.2.7l-.5.6c-.2.2-.1.4 0 .6.5.9 1.2 1.7 2.1 2.2.2.1.4.2.6 0l.7-.8c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.3-.8 1.8-.5.5-1.2.7-2 .6-1.1-.2-2.6-.7-4.2-2.1-1.3-1.2-2.2-2.7-2.4-3.8-.2-1 .1-1.9.6-2.6Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80} variant="fade-up">
            <div>
              <h2 className="mb-6 text-sm font-bold tracking-[0.02em] text-white">
                Tautan Utama
              </h2>
              <ul className="space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#B9B4C6] transition hover:text-[#C5B0EF]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={140} variant="fade-up">
            <div>
              <h2 className="mb-6 text-sm font-bold tracking-[0.02em] text-white">
                Layanan Kami
              </h2>
              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#B9B4C6] transition hover:text-[#C5B0EF]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} variant="fade-up">
            <div>
              <h2 className="mb-6 text-sm font-bold tracking-[0.02em] text-white">
                Hubungi Kami
              </h2>
              <p className="mb-6 max-w-[250px] text-sm leading-6 text-[#B9B4C6]">
                Diskusikan website atau materi profil bisnismu melalui WhatsApp.
              </p>
              <div className="space-y-3">
                <p className="text-sm leading-6 text-[#B9B4C6]">
                  <span className="font-bold text-white">Telepon:</span>{" "}
                  <a
                    href="tel:+6285157742849"
                    className="transition hover:text-[#C5B0EF]"
                  >
                    0851 5774 2849
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          className="border-t border-white/[0.08] bg-white/[0.035] px-5 py-6 sm:px-7"
          delay={100}
        >
          <div className="flex flex-col gap-2 text-center text-xs text-[#AAA4B7] sm:flex-row sm:items-center sm:justify-center sm:gap-2">
            <span>© 2026 Nusakarya Digital Solution.</span>
            <span className="hidden text-white/25 sm:inline">•</span>
            <span>Hak cipta dilindungi.</span>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
