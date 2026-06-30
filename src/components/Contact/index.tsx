"use client";

import { whatsappNumber, whatsappUrl } from "@/lib/contact";
import type { FormEvent } from "react";
import ScrollReveal from "../Common/ScrollReveal";

const contactSteps = [
  {
    number: "01",
    title: "Cerita singkat sudah cukup",
    text: "Tidak perlu menunggu brief sempurna. Mulai dari kondisi bisnismu sekarang.",
  },
  {
    number: "02",
    title: "Kami bantu petakan",
    text: "Kebutuhan, prioritas, dan model pengerjaan akan dibahas bersama.",
  },
  {
    number: "03",
    title: "Lanjut lewat WhatsApp",
    text: "Kamu tetap memegang kendali sebelum pesan benar-benar dikirim.",
  },
];

const inputClassName =
  "min-h-[52px] w-full border border-[#D6D0DC] bg-white px-4 text-sm font-medium text-[#302B35] outline-none transition placeholder:text-[#AAA3AE] focus:border-[#7955BF] focus:ring-3 focus:ring-[#7955BF]/10 dark:border-white/10 dark:bg-white/[0.035] dark:text-white dark:placeholder:text-[#777280]";

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();

    const message = [
      "Halo Nusakarya, saya ingin mendiskusikan kebutuhan website.",
      "",
      `Nama: ${name}`,
      `Nomor telepon: ${phone}`,
      `Model pengerjaan: ${projectType}`,
      `Detail kebutuhan: ${details}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-[#D8D3DE] bg-[#EFEDF2] py-20 sm:py-24 lg:py-28 dark:border-white/[0.07] dark:bg-[#101321]"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[39%] bg-[#E8E2EF] lg:block dark:bg-[#17142A]" />
      <div className="pointer-events-none absolute top-[-210px] left-[-190px] h-[450px] w-[450px] rounded-full border border-[#7955BF]/15 dark:border-white/[0.04]" />
      <div className="pointer-events-none absolute right-[8%] bottom-[-90px] h-40 w-40 rotate-12 border border-[#7955BF]/10 dark:border-white/[0.04]" />

      <div className="relative z-10 container px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 xl:gap-24">
          <ScrollReveal variant="fade-right">
            <div className="max-w-[560px]">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#7955BF]" />
                <span className="text-[10px] font-bold tracking-[0.17em] text-[#7651BE] uppercase dark:text-[#BCA5ED]">
                  Kontak / 05
                </span>
              </div>

              <h2 className="mb-6 max-w-[550px] text-[40px] leading-[1.04] font-bold tracking-[-0.045em] text-[#292530] sm:text-[50px] lg:text-[58px] dark:text-white">
                Punya gambaran?{" "}
                <span className="text-[#7955BF] dark:text-[#BCA5ED]">
                  Ceritain aja dulu.
                </span>
              </h2>

              <p className="mb-10 max-w-[520px] text-[15px] leading-7 text-[#6B6570] sm:text-base dark:text-[#AAA5B1]">
                Ceritakan bisnismu, tujuan website, atau referensi yang kamu
                suka. Dari sana, kita bisa menentukan langkah yang paling masuk
                akal.
              </p>

              <div className="border-t border-[#D2CCD7] dark:border-white/10">
                {contactSteps.map((step) => (
                  <div
                    key={step.number}
                    className="grid grid-cols-[38px_1fr] gap-3 border-b border-[#D2CCD7] py-5 dark:border-white/10"
                  >
                    <span className="pt-0.5 text-[10px] font-bold tracking-[0.12em] text-[#7955BF] dark:text-[#BCA5ED]">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="mb-1.5 text-[15px] font-bold text-[#35303A] dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-6 text-[#77707B] dark:text-[#9994A0]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#7651BE] transition hover:text-[#4F2D91] dark:text-[#BCA5ED] dark:hover:text-white"
              >
                Langsung buka WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} variant="fade-left">
            <div className="border border-[#D5CEDB] bg-[#F9F7FA] p-6 shadow-[12px_12px_0_rgba(121,85,191,0.10)] sm:p-9 lg:p-10 dark:border-white/10 dark:bg-[#191C2B] dark:shadow-[12px_12px_0_rgba(139,92,246,0.09)]">
              <div className="mb-8 border-b border-[#DDD7E1] pb-7 dark:border-white/10">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-[#7955BF] uppercase dark:text-[#BCA5ED]">
                    Project request
                  </span>
                  <span className="text-[10px] font-semibold text-[#8C8590]">
                    4 kolom
                  </span>
                </div>
                <h3 className="text-[28px] font-bold tracking-[-0.035em] text-[#292530] sm:text-[34px] dark:text-white">
                  Mulai dari sini.
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#77707B] dark:text-[#9994A0]">
                  Isi secukupnya, lalu lanjutkan obrolan di WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs font-bold text-[#49434D] dark:text-[#D2CED6]"
                    >
                      Nama
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Nama kamu"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-xs font-bold text-[#49434D] dark:text-[#D2CED6]"
                    >
                      Nomor WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="08xx xxxx xxxx"
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="contact-project"
                    className="mb-2 block text-xs font-bold text-[#49434D] dark:text-[#D2CED6]"
                  >
                    Model pengerjaan
                  </label>
                  <select
                    id="contact-project"
                    name="projectType"
                    required
                    defaultValue=""
                    className={`${inputClassName} appearance-none bg-[linear-gradient(45deg,transparent_50%,#8B5CF6_50%),linear-gradient(135deg,#8B5CF6_50%,transparent_50%)] bg-[size:5px_5px,5px_5px] bg-[position:calc(100%-19px)_23px,calc(100%-14px)_23px] bg-no-repeat pr-11`}
                  >
                    <option value="" disabled>
                      Pilih yang paling mendekati
                    </option>
                    <option value="Template Siap Pakai">
                      Template Siap Pakai
                    </option>
                    <option value="Template + Penyesuaian">
                      Template + Penyesuaian
                    </option>
                    <option value="Full Custom">Full Custom</option>
                    <option value="Belum yakin">Belum yakin</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="contact-details"
                    className="mb-2 block text-xs font-bold text-[#49434D] dark:text-[#D2CED6]"
                  >
                    Cerita singkat
                  </label>
                  <textarea
                    id="contact-details"
                    name="details"
                    required
                    rows={5}
                    placeholder="Tentang bisnis, tujuan website, atau referensi yang kamu suka"
                    className={`${inputClassName} min-h-[132px] resize-y py-4`}
                  />
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[260px] text-[11px] leading-5 text-[#8A838E] dark:text-[#817C88]">
                    Pesan akan terbuka di WhatsApp dan belum langsung terkirim.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex min-h-[50px] shrink-0 items-center justify-center gap-2 bg-[#292530] px-6 text-sm font-bold text-white transition hover:bg-[#7955BF] dark:bg-[#7955BF] dark:hover:bg-[#6845B2]"
                  >
                    Lanjut ke WhatsApp
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
