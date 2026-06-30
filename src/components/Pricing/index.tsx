import Link from "next/link";
import ScrollReveal from "../Common/ScrollReveal";

type PackageIcon = "user" | "briefcase" | "spark";

const packages: {
  id: string;
  number: string;
  label: string;
  title: string;
  summary: string;
  idealFor: string;
  features: string[];
  cta: string;
  icon: PackageIcon;
  featured?: boolean;
}[] = [
  {
    id: "starter",
    number: "01",
    label: "Praktis & efisien",
    title: "Template Siap Pakai",
    summary:
      "Pilih tampilan yang paling dekat dengan bisnismu, lalu isi dengan identitas dan konten milikmu.",
    idealFor: "Bisnis yang ingin tampil profesional tanpa proses yang panjang",
    features: [
      "Pilihan template dari katalog",
      "Pemasangan logo dan identitas bisnis",
      "Pengisian konten yang sudah tersedia",
      "Struktur mengikuti template pilihan",
      "Tampilan responsif",
      "Kontak dan CTA utama",
    ],
    cta: "Gunakan template",
    icon: "user",
  },
  {
    id: "growth",
    number: "02",
    label: "Lebih fleksibel",
    title: "Template + Penyesuaian",
    summary:
      "Berangkat dari template pilihan, lalu beberapa bagian disesuaikan agar terasa lebih dekat dengan brand.",
    idealFor: "Bisnis yang ingin lebih khas tanpa memulai semuanya dari nol",
    features: [
      "Template sebagai struktur awal",
      "Penyesuaian warna dan tipografi",
      "Penyesuaian susunan beberapa bagian",
      "Tambahan section sesuai kebutuhan",
      "Review konten dan tampilan",
      "Sesi revisi terarah",
    ],
    cta: "Sesuaikan template",
    icon: "briefcase",
    featured: true,
  },
  {
    id: "authority",
    number: "03",
    label: "Dibuat khusus",
    title: "Full Custom",
    summary:
      "Strategi, struktur, dan tampilan dirancang dari awal mengikuti karakter serta kebutuhan bisnismu.",
    idealFor:
      "Brand dengan kebutuhan, alur, atau identitas yang lebih spesifik",
    features: [
      "Sesi discovery dan pemetaan kebutuhan",
      "Struktur website yang dirancang khusus",
      "Desain visual dari nol",
      "Fitur mengikuti kebutuhan bisnis",
      "Arah copywriting dan konten",
      "Review menyeluruh sebelum tayang",
    ],
    cta: "Mulai full custom",
    icon: "spark",
  },
];

const PackageIcon = ({ type }: { type: PackageIcon }) => {
  if (type === "briefcase") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 7V5.8c0-1 .8-1.8 1.8-1.8h2.4c1 0 1.8.8 1.8 1.8V7M4 11.5h16M9.5 11.5v1.7h5v-1.7M5.4 7h13.2c.8 0 1.4.6 1.4 1.4v9.2c0 .8-.6 1.4-1.4 1.4H5.4c-.8 0-1.4-.6-1.4-1.4V8.4C4 7.6 4.6 7 5.4 7Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "spark") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3ZM19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M5.5 20v-2.5A4.5 4.5 0 0 1 10 13h4a4.5 4.5 0 0 1 4.5 4.5V20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-b border-[#DED8E5] bg-[#F5F1F6] py-20 sm:py-24 lg:py-28 dark:border-white/[0.07] dark:bg-[#101423]"
    >
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          background:
            "radial-gradient(circle at 8% 14%, rgba(242, 201, 109, 0.18) 0, transparent 24%), radial-gradient(circle at 90% 72%, rgba(139, 92, 246, 0.16) 0, transparent 28%), linear-gradient(145deg, #F8F4EF 0%, #EFEAF4 52%, #F5F1F7 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(circle at 8% 14%, rgba(225, 172, 67, 0.10) 0, transparent 25%), radial-gradient(circle at 90% 72%, rgba(139, 92, 246, 0.20) 0, transparent 30%), linear-gradient(145deg, #101423 0%, #17132A 52%, #111827 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(121, 85, 191, 0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(121, 85, 191, 0.13) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to bottom, black 0%, rgba(0,0,0,.45) 58%, transparent 100%)",
        }}
      />

      <div className="relative z-10 container px-6 sm:px-8 lg:px-10 xl:px-12">
        <ScrollReveal
          className="mb-12 grid gap-7 lg:grid-cols-[1.05fr_.95fr] lg:items-end"
          variant="fade-up"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#8B5CF6]" />
              <span className="text-[11px] font-bold tracking-[0.17em] text-[#7651BE] uppercase sm:text-xs dark:text-[#BCA5ED]">
                Model pengerjaan
              </span>
            </div>
            <h2 className="max-w-[760px] text-[36px] leading-[1.06] font-bold tracking-[-0.045em] text-[#28242D] sm:text-[46px] lg:text-[54px] dark:text-white">
              Pilih cara kerja yang paling{" "}
              <span className="font-serif font-normal text-[#7955BF] italic dark:text-[#BCA5ED]">
                pas
              </span>{" "}
              buat bisnismu.
            </h2>
          </div>

          <p className="max-w-[520px] border-l-2 border-[#8B5CF6]/35 pl-5 text-[15px] leading-7 text-[#6D6672] sm:text-base dark:text-[#AAA5B1]">
            Bukan soal berapa banyak halaman. Struktur, konten, dan cakupan
            pengerjaan akan mengikuti kebutuhan serta prioritas bisnismu.
          </p>
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((item, index) => (
            <ScrollReveal
              key={item.id}
              className="h-full"
              delay={index * 90}
              variant="fade-up"
            >
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-[12px] border bg-[#FCFBFD]/95 p-7 backdrop-blur-sm transition duration-300 sm:p-8 dark:bg-[#171A2A]/95 ${
                  item.featured
                    ? "border-[#8B5CF6] shadow-[0_24px_65px_rgba(93,63,150,0.18)] dark:border-[#8B5CF6]"
                    : "border-[#DAD4E0] hover:border-[#8B5CF6]/50 hover:shadow-[0_20px_55px_rgba(55,39,78,0.10)] dark:border-white/10 dark:hover:border-[#8B5CF6]/45"
                }`}
              >
                {item.featured && (
                  <div className="absolute top-0 right-0 bg-[#8B5CF6] px-4 py-2 text-[9px] font-bold tracking-[0.13em] text-white uppercase">
                    Paling fleksibel
                  </div>
                )}

                <div className="mb-7 flex items-start justify-between gap-5">
                  <div>
                    <span className="mb-2 block text-[10px] font-bold tracking-[0.13em] text-[#918A96]">
                      {item.number}
                    </span>
                    <h3 className="text-xl font-bold tracking-[-0.025em] text-[#292530] sm:text-[22px] dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#EEE9FA] text-[#7955BF] dark:bg-[#8B5CF6]/15 dark:text-[#BCA5ED]">
                    <PackageIcon type={item.icon} />
                  </span>
                </div>

                <div className="mb-7">
                  <p className="mb-2 text-[28px] leading-tight font-bold tracking-[-0.035em] text-[#2D2932] dark:text-white">
                    {item.label}
                  </p>
                  <p className="min-h-[72px] text-sm leading-6 text-[#746D78] dark:text-[#AAA5B1]">
                    {item.summary}
                  </p>
                </div>

                <div className="mb-7 border-y border-[#E2DCE6] py-4 dark:border-white/10">
                  <span className="mb-1.5 block text-[9px] font-bold tracking-[0.13em] text-[#918A96] uppercase">
                    Cocok untuk
                  </span>
                  <p className="text-xs leading-5 font-semibold text-[#514A55] dark:text-[#D0CBD5]">
                    {item.idealFor}
                  </p>
                </div>

                <ul className="mb-8 space-y-4">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-5 text-[#4E4852] dark:text-[#CBC6D0]"
                    >
                      <span
                        className="mt-0.5 text-[#16A66A]"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={`mt-auto inline-flex min-h-[48px] items-center justify-center rounded-md px-5 text-sm font-bold transition ${
                    item.featured
                      ? "bg-[#7955BF] text-white hover:bg-[#6342A8]"
                      : "bg-[#242131] text-white hover:bg-[#7955BF] dark:bg-white/10 dark:hover:bg-[#7955BF]"
                  }`}
                >
                  {item.cta}
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          className="mt-8 flex flex-col gap-3 border-t border-[#DAD4E0] pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10"
          delay={120}
        >
          <p className="text-sm leading-6 text-[#746D78] dark:text-[#AAA5B1]">
            Belum yakin pilih yang mana? Mulai saja dari cerita tentang
            bisnismu.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#7651BE] transition hover:text-[#4F2D91] dark:text-[#BCA5ED] dark:hover:text-white"
          >
            Diskusikan dulu
            <span aria-hidden="true">→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;
