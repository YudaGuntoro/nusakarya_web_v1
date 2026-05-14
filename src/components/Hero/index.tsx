import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../Common/ScrollReveal";

const metrics = [
  { value: "01", label: "Arah brand" },
  { value: "05+", label: "Materi inti" },
  { value: "7-14", label: "Hari kerja" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="dark:bg-gray-dark relative z-10 overflow-hidden bg-[#F2EEFF] pt-[92px] pb-12 sm:pt-[120px] sm:pb-16 md:pt-[150px] lg:pt-[170px] lg:pb-24 xl:pb-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[-1] h-full bg-[linear-gradient(180deg,#F1ECFF_0%,#F8F6FF_48%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#111827_0%,#090E1A_46%,#090E1A_100%)]" />
      <div className="via-primary/40 pointer-events-none absolute inset-x-0 top-0 z-[-1] h-px bg-linear-to-r from-transparent to-transparent" />

      <div className="container px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col items-center lg:-mx-4 lg:flex-row lg:flex-wrap">
          <div className="w-full lg:w-5/12 lg:px-4">
            <div className="mx-auto max-w-[650px] text-center lg:mx-0 lg:text-left">
              <ScrollReveal
                className="mb-4 sm:mb-5"
                duration={700}
                variant="fade-down"
              >
                <span className="border-primary/20 bg-primary/10 text-primary dark:border-primary/30 dark:bg-primary/15 inline-block w-full max-w-[330px] rounded-full border px-4 py-2 text-center text-[13px] leading-snug font-semibold text-balance whitespace-normal sm:w-auto sm:max-w-none sm:text-sm">
                  Profil Bisnis, Website, Deck, dan Copywriting
                </span>
              </ScrollReveal>

              <ScrollReveal
                className="mb-5 sm:mb-6"
                delay={100}
                variant="fade-right"
              >
                <h1 className="xs:text-[30px] mx-auto max-w-[340px] text-[28px] leading-[1.12] font-bold text-balance sm:max-w-none sm:text-[36px] sm:leading-[1.16] md:text-[38px] xl:text-[42px]">
                  <span className="hero-rainbow-text block bg-[linear-gradient(90deg,#111827_0%,#8B5CF6_25%,#38BDF8_50%,#F59E0B_75%,#EC4899_100%)] bg-clip-text text-transparent dark:bg-[linear-gradient(90deg,#FFFFFF_0%,#C4B5FD_25%,#7DD3FC_50%,#FDE68A_75%,#F9A8D4_100%)]">
                    Tampil profesional,
                  </span>
                  <span className="hero-rainbow-text hero-rainbow-text-delay block bg-[linear-gradient(90deg,#EC4899_0%,#F59E0B_25%,#8B5CF6_50%,#38BDF8_75%,#22C55E_100%)] bg-clip-text text-transparent dark:bg-[linear-gradient(90deg,#F9A8D4_0%,#FDE68A_25%,#C4B5FD_50%,#7DD3FC_75%,#86EFAC_100%)]">
                    Jangkau lebih banyak client.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal
                className="mb-7 sm:mb-8"
                delay={180}
                variant="fade-up"
              >
                <p className="text-body-color dark:text-body-color-dark mx-auto max-w-[330px] text-[15px] leading-[1.65] sm:max-w-[560px] sm:text-lg md:text-xl lg:mx-0">
                  Bangun kepercayaan dan jangkau lebih banyak pelanggan secara
                  online dengan profil, website, deck, dan copywriting yang
                  rapi.
                </p>
              </ScrollReveal>

              <ScrollReveal
                className="mb-7 sm:mb-8"
                delay={260}
                variant="fade-up"
              >
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
                  <Link
                    href="#contact"
                    className="bg-primary shadow-btn hover:bg-primary/90 inline-flex min-h-[52px] w-full max-w-[232px] items-center justify-center rounded-md px-5 text-base font-semibold text-white duration-300 sm:min-h-[54px] sm:w-auto sm:px-8"
                  >
                    Diskusi Kebutuhan
                  </Link>
                  <Link
                    href="#pricing"
                    className="hover:border-primary hover:text-primary dark:hover:border-primary inline-flex min-h-[52px] w-full max-w-[232px] items-center justify-center rounded-md border border-gray-200 bg-white px-5 text-base font-semibold text-black duration-300 sm:min-h-[54px] sm:w-auto sm:px-8 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  >
                    Lihat Estimasi
                  </Link>
                </div>
              </ScrollReveal>

              <div className="mx-auto grid max-w-[330px] grid-cols-3 gap-2.5 text-left sm:max-w-[360px] sm:gap-3 lg:mx-0 lg:max-w-none">
                {metrics.map((item, index) => (
                  <ScrollReveal
                    key={item.label}
                    className="h-full"
                    delay={340 + index * 90}
                    duration={760}
                    variant="zoom-in"
                  >
                    <div className="border-primary/10 h-full border bg-white/80 p-3 shadow-sm sm:p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-primary mb-1 text-lg font-bold sm:text-xl">
                        {item.value}
                      </p>
                      <p className="text-body-color dark:text-body-color-dark text-[11px] leading-snug font-semibold sm:text-xs">
                        {item.label}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden w-full md:mt-12 md:block lg:mt-0 lg:w-7/12 lg:px-4">
            <ScrollReveal delay={220} duration={980} variant="fade-left">
              <div className="relative mx-auto max-w-[430px] sm:max-w-[620px] lg:mr-0 lg:max-w-[760px]">
                <div className="hero-bubble-float shadow-feature-2 relative aspect-[16/10] overflow-hidden rounded-xl border border-[#DDD6FE] bg-[#F1EEFF] dark:border-white/10 dark:bg-[#121927]">
                  <Image
                    src="/images/hero/hero_image.png"
                    alt="Ilustrasi website profesional untuk menjangkau lebih banyak pelanggan"
                    fill
                    priority
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="rounded-xl object-cover object-center"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
