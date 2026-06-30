"use client";

import { useMemo, useState } from "react";
import ScrollReveal from "../Common/ScrollReveal";
import brandsData from "./brandsData";

const categories = [
  "Semua",
  "Profil Perusahaan",
  "Laman Promosi",
  "Produk Digital",
  "Aplikasi",
  "Satu Halaman",
];

const Brands = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredBrands = useMemo(() => {
    if (activeCategory === categories[0]) {
      return brandsData;
    }

    return brandsData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-y border-[#E6E0EC] bg-[#F5F2F8] py-20 sm:py-24 dark:border-white/[0.07] dark:bg-[#111525]"
    >
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          background:
            "radial-gradient(circle at 8% 18%, rgba(139, 92, 246, 0.14) 0, transparent 27%), radial-gradient(circle at 92% 72%, rgba(242, 201, 109, 0.18) 0, transparent 25%), linear-gradient(145deg, #F7F4FA 0%, #F0ECF6 48%, #F8F5F1 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(circle at 9% 20%, rgba(139, 92, 246, 0.19) 0, transparent 29%), radial-gradient(circle at 91% 70%, rgba(221, 169, 67, 0.10) 0, transparent 26%), linear-gradient(145deg, #101525 0%, #17142C 52%, #111827 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-35 dark:opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(121, 85, 191, 0.12) 1px, transparent 1px), linear-gradient(30deg, rgba(121, 85, 191, 0.09) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black 0%, rgba(0,0,0,.65) 48%, transparent 92%)",
        }}
      />
      <div className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] translate-x-1/3 -translate-y-1/2 rounded-full border border-[#8B5CF6]/20 dark:border-[#BCA5ED]/10" />
      <div className="pointer-events-none absolute top-[38%] left-[-190px] h-[420px] w-[420px] rounded-full border border-[#8B5CF6]/10 dark:border-white/[0.04]" />
      <div className="pointer-events-none absolute right-[8%] bottom-[7%] h-24 w-24 rotate-12 border border-[#D9B45E]/20 bg-[#F2C96D]/5 dark:border-[#F2C96D]/10" />

      <div className="relative z-10 container px-6 sm:px-8 lg:px-10 xl:px-12">
        <ScrollReveal
          className="mb-12 grid gap-7 lg:grid-cols-[1.15fr_.85fr] lg:items-end"
          variant="fade-up"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#8B5CF6]" />
              <span className="text-[11px] font-bold tracking-[0.17em] text-[#7651BE] uppercase sm:text-xs dark:text-[#BCA5ED]">
                Contoh arah visual
              </span>
            </div>
            <h2 className="max-w-[720px] text-3xl leading-[1.12] font-bold tracking-[-0.035em] text-[#25222B] sm:text-4xl lg:text-[46px] dark:text-white">
              Mana yang terasa paling dekat dengan bisnis Anda?
            </h2>
          </div>

          <div className="border-l-2 border-[#8B5CF6]/35 pl-5 lg:mb-1">
            <p className="max-w-[540px] text-[15px] leading-7 text-[#6E6875] sm:text-base dark:text-[#A9A5B5]">
              Gunakan contoh ini untuk membicarakan suasana, susunan, dan cara
              penyampaian. Hasil akhirnya tetap dibuat mengikuti karakter bisnis
              Anda.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal
          className="mb-8 overflow-x-auto border-y border-[#DCD5E3] dark:border-white/10"
          delay={80}
          variant="fade-up"
        >
          <div className="flex min-w-max items-center gap-8 sm:gap-10">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={activeCategory === item}
                onClick={() => setActiveCategory(item)}
                className={`relative py-5 text-[13px] font-semibold whitespace-nowrap transition duration-300 after:absolute after:right-0 after:bottom-[-1px] after:left-0 after:h-0.5 after:origin-left after:bg-[#8B5CF6] after:transition-transform after:duration-300 sm:text-sm ${
                  activeCategory === item
                    ? "text-[#5F3EA3] after:scale-x-100 dark:text-white"
                    : "text-[#77717E] after:scale-x-0 hover:text-[#5F3EA3] hover:after:scale-x-100 dark:text-[#9995A5] dark:hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredBrands.map((item, index) => (
            <ScrollReveal
              key={item.id}
              className="h-full"
              delay={(index % 3) * 90}
              variant="fade-up"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-[#DED8E4] bg-[#FCFBFD] transition duration-300 hover:border-[#8B5CF6]/45 hover:shadow-[0_20px_55px_rgba(63,45,91,0.10)] dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-[#8B5CF6]/50">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[#DED8E4] bg-[#E9E4EF] dark:border-white/10 dark:bg-[#171B2D]">
                  <img
                    src={item.thumbnail}
                    alt={`Contoh tampilan ${item.title}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute top-0 left-0 flex h-11 min-w-11 items-center justify-center border-r border-b border-[#DED8E4] bg-[#FCFBFD]/95 px-3 text-[11px] font-bold tracking-[0.12em] text-[#5F3EA3] backdrop-blur-sm dark:border-white/10 dark:bg-[#171B2D]/95 dark:text-[#BCA5ED]">
                    {String(item.id).padStart(2, "0")}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
                    <span className="text-[10px] font-bold tracking-[0.14em] text-[#77717E] uppercase dark:text-[#A9A5B5]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="mb-2 text-[23px] leading-tight font-bold tracking-[-0.025em] text-[#28242D] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mb-6 text-sm leading-6 text-[#746E7A] dark:text-[#A9A5B5]">
                    {item.note}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-5 border-t border-[#E5DFE9] pt-5 dark:border-white/10">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#312D36] transition hover:text-[#7651BE] dark:text-white dark:hover:text-[#BCA5ED]"
                    >
                      Buka demo
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-right text-sm font-semibold text-[#7651BE] transition hover:text-[#4F2D91] dark:text-[#BCA5ED] dark:hover:text-white"
                    >
                      Pilih sebagai acuan
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          className="mt-10 grid gap-3 border-t border-[#DCD5E3] pt-6 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6 dark:border-white/10"
          delay={100}
        >
          <span className="text-[10px] font-bold tracking-[0.16em] text-[#7651BE] uppercase dark:text-[#BCA5ED]">
            Catatan
          </span>
          <p className="max-w-[760px] text-sm leading-6 text-[#746E7A] dark:text-[#A9A5B5]">
            Contoh di atas adalah titik awal diskusi, bukan desain siap pakai.
            Warna, isi, dan alur halaman akan disesuaikan kembali.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Brands;
