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
      className="dark:bg-gray-dark relative z-10 overflow-hidden bg-[#F2EEFF] pt-[120px] pb-16 md:pt-[150px] lg:pt-[170px] lg:pb-24 xl:pb-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[-1] h-full bg-[linear-gradient(180deg,#F1ECFF_0%,#F8F6FF_48%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#111827_0%,#090E1A_46%,#090E1A_100%)]" />
      <div className="via-primary/40 pointer-events-none absolute inset-x-0 top-0 z-[-1] h-px bg-linear-to-r from-transparent to-transparent" />

      <div className="container px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-5/12">
            <div className="max-w-[650px] text-center lg:text-left">
              <ScrollReveal className="mb-5" duration={700} variant="fade-down">
                <span className="border-primary/20 bg-primary/10 text-primary dark:border-primary/30 dark:bg-primary/15 inline-flex rounded-full border px-4 py-2 text-sm font-semibold">
                  Profil Bisnis, Website, Deck, dan Copywriting
                </span>
              </ScrollReveal>

              <ScrollReveal className="mb-6" delay={100} variant="fade-right">
                <h1 className="text-[30px] leading-[1.18] font-bold sm:text-[36px] md:text-[38px] xl:text-[42px]">
                  <span className="hero-rainbow-text block bg-[linear-gradient(90deg,#111827_0%,#8B5CF6_25%,#38BDF8_50%,#F59E0B_75%,#EC4899_100%)] bg-clip-text text-transparent dark:bg-[linear-gradient(90deg,#FFFFFF_0%,#C4B5FD_25%,#7DD3FC_50%,#FDE68A_75%,#F9A8D4_100%)]">
                    Tampil profesional,
                  </span>
                  <span className="hero-rainbow-text hero-rainbow-text-delay block bg-[linear-gradient(90deg,#EC4899_0%,#F59E0B_25%,#8B5CF6_50%,#38BDF8_75%,#22C55E_100%)] bg-clip-text text-transparent dark:bg-[linear-gradient(90deg,#F9A8D4_0%,#FDE68A_25%,#C4B5FD_50%,#7DD3FC_75%,#86EFAC_100%)]">
                    Jangkau lebih banyak client.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal className="mb-8" delay={180} variant="fade-up">
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed sm:text-lg md:text-xl">
                  Bangun kepercayaan dan jangkau lebih banyak pelanggan secara
                  online dengan profil, website, deck, dan copywriting yang
                  rapi.
                </p>
              </ScrollReveal>

              <ScrollReveal className="mb-8" delay={260} variant="fade-up">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    href="#contact"
                    className="bg-primary shadow-btn hover:bg-primary/90 inline-flex min-h-[54px] items-center justify-center rounded-md px-8 text-base font-semibold text-white duration-300"
                  >
                    Diskusi Kebutuhan
                  </Link>
                  <Link
                    href="#pricing"
                    className="hover:border-primary hover:text-primary dark:hover:border-primary inline-flex min-h-[54px] items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-base font-semibold text-black duration-300 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  >
                    Lihat Estimasi
                  </Link>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-3 gap-3 text-left">
                {metrics.map((item, index) => (
                  <ScrollReveal
                    key={item.label}
                    className="h-full"
                    delay={340 + index * 90}
                    duration={760}
                    variant="zoom-in"
                  >
                    <div className="border-primary/10 h-full border bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                      <p className="text-primary mb-1 text-xl font-bold">
                        {item.value}
                      </p>
                      <p className="text-body-color dark:text-body-color-dark text-xs font-semibold">
                        {item.label}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 w-full px-4 lg:mt-0 lg:w-7/12">
            <ScrollReveal delay={220} duration={980} variant="fade-left">
              <div className="relative mx-auto max-w-[760px] lg:mr-0">
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
