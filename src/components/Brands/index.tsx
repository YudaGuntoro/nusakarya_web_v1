"use client";

import ScrollReveal from "../Common/ScrollReveal";
import { useMemo, useState } from "react";
import brandsData from "./brandsData";

const categories = [
  "Semua Sample",
  "Company",
  "Landing Page",
  "Digital",
  "App",
  "One Page",
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
    <section className="dark:bg-gray-dark bg-white pt-16 pb-8">
      <div className="container px-6 sm:px-8 lg:px-10 xl:px-12">
        <ScrollReveal className="mb-10 text-center" variant="fade-up">
          <span className="border-primary/20 bg-primary/10 text-primary mb-5 inline-flex rounded-full border px-4 py-2 text-sm font-semibold">
            Contoh Sample Website
          </span>
          <h2 className="mb-4 text-3xl leading-tight font-bold text-black sm:text-4xl dark:text-white">
            Pilih referensi tampilan yang paling dekat dengan bisnismu.
          </h2>
          <p className="text-body-color dark:text-body-color-dark mx-auto max-w-[720px] text-base leading-relaxed">
            Beberapa contoh layout website yang bisa dijadikan arah visual
            sebelum desain disesuaikan dengan brand, konten, dan kebutuhan
            bisnis Anda.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="mb-9 flex flex-wrap justify-center gap-3"
          delay={100}
          variant="fade-up"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveCategory(item)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold duration-300 ${
                activeCategory === item
                  ? "border-primary bg-primary shadow-btn text-white"
                  : "hover:border-primary hover:text-primary border-gray-200 bg-white text-black dark:border-white/10 dark:bg-white/5 dark:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredBrands.map((item, index) => (
            <ScrollReveal
              key={item.id}
              className="h-full"
              delay={(index % 3) * 120}
              variant="zoom-in"
            >
              <article className="group hover:shadow-feature-2 flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.04]">
                <div className="relative h-[190px] overflow-hidden border-b border-gray-200 bg-[#F8F6FF] dark:border-white/10 dark:bg-[#111827]">
                  <img
                    src={item.thumbnail}
                    alt={`Thumbnail template ${item.title}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent opacity-0 duration-300 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-bold">
                      {item.category}
                    </span>
                    <span className="text-body-color dark:text-body-color-dark text-xs font-semibold">
                      Sample {String(item.id).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark mb-5 text-sm leading-relaxed">
                    {item.note}
                  </p>

                  <div className="mt-auto grid grid-cols-2 gap-3">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:border-primary hover:text-primary inline-flex min-h-[44px] items-center justify-center rounded-full border border-gray-200 px-4 text-sm font-semibold text-black duration-300 dark:border-white/10 dark:text-white"
                    >
                      Lihat Demo
                    </a>
                    <a
                      href="#contact"
                      className="bg-primary hover:bg-primary/90 border-primary inline-flex min-h-[44px] items-center justify-center rounded-full border px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(139,92,246,0.22)] duration-300"
                    >
                      Pilih Style
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-8 rounded-xl border border-[#DDD6FE] bg-[#F8F6FF] p-5 text-center dark:border-white/10 dark:bg-white/[0.04]">
          <p className="text-body-color dark:text-body-color-dark text-sm leading-relaxed">
            Sample di atas hanya referensi arah visual. Konten, warna, halaman,
            dan struktur akan disesuaikan lagi dengan kebutuhan bisnis Anda.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Brands;
