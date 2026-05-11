"use client";
import { type FormEvent, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ScrollReveal from "../Common/ScrollReveal";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

type PackageId = "starter" | "growth" | "authority";
type ProjectTypeId = "website" | "websiteDeck";
type HostingId = "3-months" | "6-months" | "12-months";
type DomainCheckStatus =
  | "idle"
  | "checking"
  | "available"
  | "taken"
  | "invalid"
  | "error";

const packageOptions: {
  id: PackageId;
  label: string;
  name: string;
  subtitle: string;
  websitePrice: number;
  websiteDeckPrice: number;
  features: string[];
}[] = [
  {
    id: "starter",
    label: "Starter",
    name: "Starter Profile",
    subtitle:
      "Untuk bisnis yang butuh profil online singkat, rapi, dan bisa langsung dibagikan ke calon pelanggan.",
    websitePrice: 1500000,
    websiteDeckPrice: 1700000,
    features: [
      "Landing page profil bisnis",
      "Struktur konten dasar",
      "Tampilan mobile friendly",
      "CTA WhatsApp dan kontak",
      "Template Variatif",
    ],
  },
  {
    id: "growth",
    label: "Growth",
    name: "Growth Profile",
    subtitle:
      "Untuk bisnis yang ingin menjelaskan layanan, keunggulan, dan bukti kredibilitas dengan lebih lengkap.",
    websitePrice: 3500000,
    websiteDeckPrice: 3700000,
    features: [
      "Hingga 5 halaman website",
      "Copywriting profil dan layanan",
      "Section portofolio atau studi kasus",
      "SEO dasar dan struktur heading",
      "Sesi revisi (limited)",
    ],
  },
  {
    id: "authority",
    label: "Authority",
    name: "Authority Profile",
    subtitle:
      "Untuk brand yang butuh materi lebih serius untuk tender, pitching, campaign, atau proses sales B2B.",
    websitePrice: 6000000,
    websiteDeckPrice: 6500000,
    features: [
      "Hingga 10 halaman website",
      "Copywriting lengkap per section",
      "Arah konten campaign awal",
      "Setup tracking dasar",
      "Review final bersama",
    ],
  },
];

const projectTypeOptions: {
  id: ProjectTypeId;
  label: string;
}[] = [
  { id: "website", label: "Website saja" },
  { id: "websiteDeck", label: "Website + Deck" },
];

const hostingOptions: {
  id: HostingId;
  label: string;
  price: number;
}[] = [
  { id: "3-months", label: "3 bulan", price: 0 },
  { id: "6-months", label: "6 bulan", price: 300000 },
  { id: "12-months", label: "1 tahun", price: 600000 },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("id-ID").format(price);

const normalizeDomain = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0];

const isValidDomain = (value: string) =>
  /^(?!-)(?:[a-z0-9-]{1,63}\.)+[a-z]{2,63}$/.test(value);

const Pricing = () => {
  const [selectedPackageId, setSelectedPackageId] =
    useState<PackageId>("starter");
  const [selectedProjectTypeId, setSelectedProjectTypeId] =
    useState<ProjectTypeId>("website");
  const [selectedHostingId, setSelectedHostingId] =
    useState<HostingId>("3-months");
  const [domainName, setDomainName] = useState("");
  const [checkedDomain, setCheckedDomain] = useState("");
  const [domainCheckStatus, setDomainCheckStatus] =
    useState<DomainCheckStatus>("idle");

  const selectedPackage =
    packageOptions.find((item) => item.id === selectedPackageId) ??
    packageOptions[0];
  const selectedProjectType =
    projectTypeOptions.find((item) => item.id === selectedProjectTypeId) ??
    projectTypeOptions[0];
  const selectedHosting =
    hostingOptions.find((item) => item.id === selectedHostingId) ??
    hostingOptions[0];
  const basePrice =
    selectedProjectTypeId === "website"
      ? selectedPackage.websitePrice
      : selectedPackage.websiteDeckPrice;
  const totalPrice = basePrice + selectedHosting.price;

  const handleDomainCheck = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const domain = normalizeDomain(domainName);
    setCheckedDomain(domain);

    if (!isValidDomain(domain)) {
      setDomainCheckStatus("invalid");
      return;
    }

    setDomainName(domain);
    setDomainCheckStatus("checking");

    try {
      const response = await fetch(
        `https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=NS`,
      );
      const result = await response.json();

      setDomainCheckStatus(result.Status === 3 ? "available" : "taken");
    } catch {
      setDomainCheckStatus("error");
    }
  };

  const domainStatusMessage = {
    idle: "Masukkan nama domain yang ingin dicek, contoh: namabisnis.com",
    checking: "Sedang mengecek domain...",
    available:
      "Belum terdeteksi DNS. Kemungkinan tersedia, tapi tetap perlu konfirmasi final.",
    taken:
      "Domain terdeteksi sudah aktif atau terdaftar. Kita bisa cari alternatif nama.",
    invalid: "Format domain belum valid. Contoh yang benar: namabisnis.com",
    error:
      "Cek otomatis belum berhasil. Nama domain tetap bisa dikonfirmasi saat konsultasi.",
  }[domainCheckStatus];

  const domainStatusClass = {
    idle: "border-gray-200 bg-white text-body-color dark:border-white/10 dark:bg-white/5 dark:text-body-color-dark",
    checking:
      "border-primary/30 bg-primary/10 text-primary dark:border-primary/30 dark:bg-primary/15",
    available:
      "border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D] dark:border-[#22C55E]/40 dark:bg-[#052E16]/40 dark:text-[#BBF7D0]",
    taken:
      "border-[#FED7AA] bg-[#FFF7ED] text-[#C2410C] dark:border-[#F97316]/40 dark:bg-[#431407]/40 dark:text-[#FED7AA]",
    invalid:
      "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C] dark:border-[#EF4444]/40 dark:bg-[#450A0A]/40 dark:text-[#FECACA]",
    error:
      "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C] dark:border-[#EF4444]/40 dark:bg-[#450A0A]/40 dark:text-[#FECACA]",
  }[domainCheckStatus];

  return (
    <section
      id="pricing"
      className="dark:bg-gray-dark relative z-10 border-y border-gray-100 bg-white py-16 md:py-20 lg:py-28 dark:border-white/10"
    >
      <div className="container">
        <ScrollReveal variant="fade-up">
          <SectionTitle
            title="Estimasi Paket untuk Mulai Lebih Terarah"
            paragraph="Pilih paket, jenis materi, dan durasi hosting. Harga estimasi akan menyesuaikan pilihan sebelum kami finalkan setelah brief."
            center
            width="665px"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <ScrollReveal
            className="lg:col-span-7"
            delay={100}
            variant="fade-right"
          >
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 shadow-sm sm:p-7 lg:p-8 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="mb-7">
                <p className="mb-4 text-[13px] leading-none font-bold tracking-[0.04em] text-black uppercase dark:text-white">
                  1. Pilih paket
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {packageOptions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedPackageId(item.id)}
                      className={`min-h-[60px] rounded-lg border px-5 py-4 text-center text-base leading-tight font-bold shadow-sm transition duration-300 sm:text-left ${
                        selectedPackageId === item.id
                          ? "border-primary bg-primary text-white shadow-[0_12px_28px_rgba(139,92,246,0.20)]"
                          : "text-dark hover:border-primary/50 hover:text-primary dark:bg-gray-dark border-gray-200 bg-white dark:border-white/10 dark:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-7">
                <p className="mb-4 text-[13px] leading-none font-bold tracking-[0.04em] text-black uppercase dark:text-white">
                  2. Pilih kebutuhan
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {projectTypeOptions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedProjectTypeId(item.id)}
                      className={`min-h-[60px] rounded-lg border px-5 py-4 text-center text-base leading-tight font-bold shadow-sm transition duration-300 sm:text-left ${
                        selectedProjectTypeId === item.id
                          ? "border-primary bg-primary text-white shadow-[0_12px_28px_rgba(139,92,246,0.20)]"
                          : "text-dark hover:border-primary/50 hover:text-primary dark:bg-gray-dark border-gray-200 bg-white dark:border-white/10 dark:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 text-[13px] leading-none font-bold tracking-[0.04em] text-black uppercase dark:text-white">
                  3. Pilih durasi hosting
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {hostingOptions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedHostingId(item.id)}
                      className={`min-h-[74px] rounded-lg border px-5 py-4 text-center shadow-sm transition duration-300 sm:text-left ${
                        selectedHostingId === item.id
                          ? "border-primary bg-primary text-white shadow-[0_12px_28px_rgba(139,92,246,0.20)]"
                          : "text-dark hover:border-primary/50 hover:text-primary dark:bg-gray-dark border-gray-200 bg-white dark:border-white/10 dark:text-white"
                      }`}
                    >
                      <span className="block text-base leading-tight font-bold">
                        {item.label}
                      </span>
                      <span className="mt-2 block text-xs leading-none font-semibold opacity-80">
                        {item.price === 0
                          ? "Termasuk"
                          : `+Rp${formatPrice(item.price)}`}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-body-color dark:text-body-color-dark mt-4 text-sm leading-relaxed">
                  Belum termasuk domain. Harga domain akan menyesuaikan dengan
                  kebutuhan customer.
                </p>
                <form
                  onSubmit={handleDomainCheck}
                  className="dark:bg-gray-dark mt-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-white/10"
                >
                  <label
                    htmlFor="domain-check"
                    className="mb-3 block text-sm font-bold text-black dark:text-white"
                  >
                    Cek domain yang diinginkan
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      id="domain-check"
                      type="text"
                      value={domainName}
                      onChange={(event) => {
                        setDomainName(event.target.value);
                        setDomainCheckStatus("idle");
                      }}
                      placeholder="contoh: namabisnis.com"
                      className="border-stroke-stroke text-dark focus:border-primary min-h-[48px] flex-1 rounded-md border bg-white px-4 text-sm font-medium outline-hidden duration-300 placeholder:text-gray-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    />
                    <button
                      type="submit"
                      disabled={domainCheckStatus === "checking"}
                      className="bg-primary hover:bg-primary/90 min-h-[48px] rounded-md px-6 text-sm font-bold whitespace-nowrap text-white duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {domainCheckStatus === "checking"
                        ? "Mengecek..."
                        : "Cek Domain"}
                    </button>
                  </div>
                  {domainCheckStatus !== "idle" && (
                    <p
                      className={`mt-3 rounded-md border px-4 py-3 text-sm leading-relaxed font-medium ${domainStatusClass}`}
                    >
                      {checkedDomain && domainCheckStatus !== "invalid"
                        ? `${checkedDomain}: ${domainStatusMessage}`
                        : domainStatusMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="lg:col-span-5"
            delay={180}
            variant="fade-left"
          >
            <PricingBox
              packageName={selectedPackage.name}
              price={formatPrice(totalPrice)}
              duration="paket"
              subtitle={selectedPackage.subtitle}
            >
              <OfferList text={selectedProjectType.label} status="active" />
              {selectedPackage.features.map((item) => (
                <OfferList key={item} text={item} status="active" />
              ))}
              <OfferList
                text="Deck penawaran PDF"
                status={
                  selectedProjectTypeId === "websiteDeck"
                    ? "active"
                    : "inactive"
                }
              />
              <OfferList
                text={`Hosting ${selectedHosting.label}`}
                status="active"
              />
              <OfferList text="Free maintenance" status="active" />
            </PricingBox>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
