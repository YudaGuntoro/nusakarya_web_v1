import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../Common/ScrollReveal";

const workingNotes = [
  "Bahasa yang mudah dipahami",
  "Tampilan sesuai karakter bisnis",
  "Siap dipakai untuk follow-up",
];

const HeroPreview = () => (
  <div className="relative mx-auto max-w-[700px] lg:mr-0">
    <div className="absolute -top-6 -right-4 h-32 w-32 rounded-full bg-[#F2C96D]/35 blur-2xl sm:-right-8" />
    <div className="absolute -bottom-8 -left-5 h-40 w-40 rounded-full bg-[#8B5CF6]/20 blur-2xl" />

    <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-[#D8D0E9] bg-[#EEE9FA] p-2.5 shadow-[0_28px_80px_rgba(49,39,72,0.22)] dark:border-white/10 dark:bg-[#202130]">
      <div className="relative h-full overflow-hidden rounded-[15px]">
        <Image
          src="/images/hero/hero_image.png"
          alt="Ilustrasi website profesional untuk menjangkau lebih banyak pelanggan"
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover object-center"
        />
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-[#F7F4EE] pt-[108px] pb-16 sm:pt-[132px] sm:pb-20 lg:pt-[164px] lg:pb-28 dark:bg-[#0C1220]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-[-3] dark:hidden"
        style={{
          background:
            "radial-gradient(circle at 12% 22%, rgba(139, 92, 246, 0.18) 0, transparent 28%), radial-gradient(circle at 86% 28%, rgba(242, 201, 109, 0.24) 0, transparent 30%), linear-gradient(135deg, #F8F5EF 0%, #F1EDF8 58%, #F7F4EE 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[-3] hidden dark:block"
        style={{
          background:
            "radial-gradient(circle at 13% 22%, rgba(139, 92, 246, 0.22) 0, transparent 30%), radial-gradient(circle at 85% 24%, rgba(226, 174, 74, 0.12) 0, transparent 28%), linear-gradient(135deg, #0C1220 0%, #12142B 58%, #0B101D 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[-2] opacity-45 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(121, 85, 191, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(121, 85, 191, 0.12) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "linear-gradient(to right, black 0%, rgba(0,0,0,.6) 36%, transparent 72%)",
        }}
      />
      <div className="pointer-events-none absolute top-[18%] right-[-12%] z-[-2] h-[70%] w-[46%] rotate-6 rounded-[80px] border border-white/30 bg-white/10 dark:border-white/[0.04] dark:bg-white/[0.015]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[-1] h-px bg-[#8B5CF6]/30" />
      <div className="pointer-events-none absolute top-28 left-[-90px] z-[-1] h-60 w-60 rounded-full border border-[#BDA7EC]/35 sm:left-[-120px] sm:h-80 sm:w-80 dark:border-white/5" />

      <div className="container px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-10 xl:gap-16">
          <div className="max-w-[620px]">
            <ScrollReveal className="mb-5" duration={650} variant="fade-down">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#8B5CF6]" />
                <span className="text-[11px] font-bold tracking-[0.16em] text-[#7250B5] uppercase sm:text-xs dark:text-[#BCA5ED]">
                  Studio digital untuk bisnis Indonesia
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal
              className="mb-6"
              delay={80}
              duration={720}
              variant="fade-right"
            >
              <h1 className="max-w-[590px] text-[38px] leading-[1.04] font-bold tracking-[-0.045em] text-[#25222B] sm:text-[48px] md:text-[55px] lg:text-[52px] xl:text-[60px] dark:text-white">
                Biar calon klien paham,{" "}
                <span className="font-serif font-normal text-[#7955BF] italic dark:text-[#BDA7EC]">
                  lalu percaya.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal
              className="mb-8"
              delay={150}
              duration={720}
              variant="fade-up"
            >
              <p className="max-w-[545px] text-[16px] leading-[1.75] text-[#66616D] sm:text-lg dark:text-gray-300">
                Kami bantu merapikan website dan materi penawaran—dari isi
                sampai tampilannya. Jelas, enak dibaca, dan siap Anda kirim ke
                calon klien.
              </p>
            </ScrollReveal>

            <ScrollReveal
              className="mb-8"
              delay={210}
              duration={720}
              variant="fade-up"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-[#25222B] px-7 text-sm font-semibold text-white duration-300 hover:bg-[#7955BF] sm:text-base dark:bg-[#8B5CF6] dark:hover:bg-[#7955BF]"
                >
                  Ceritakan bisnis Anda
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-[#CFC8BC] px-7 text-sm font-semibold text-[#35313A] duration-300 hover:border-[#7955BF] hover:text-[#7955BF] sm:text-base dark:border-white/15 dark:text-white"
                >
                  Lihat contoh pekerjaan
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={270} duration={720} variant="fade-up">
              <ul className="grid gap-2.5 border-t border-[#DCD6CC] pt-6 sm:grid-cols-3 sm:gap-4 dark:border-white/10">
                {workingNotes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs leading-relaxed font-medium text-[#625D68] dark:text-gray-400"
                  >
                    <span className="mt-1 text-[#7955BF]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <div className="hidden md:block">
            <ScrollReveal delay={160} duration={900} variant="fade-left">
              <HeroPreview />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
