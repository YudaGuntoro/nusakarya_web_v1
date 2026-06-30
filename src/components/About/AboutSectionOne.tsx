import Link from "next/link";
import ScrollReveal from "../Common/ScrollReveal";

const reasons = [
  {
    number: "01",
    title: "Orang langsung paham",
    text: "Layanan, cara kerja, dan pembeda bisnismu terbaca tanpa perlu dijelaskan berulang kali.",
  },
  {
    number: "02",
    title: "Bukti kerja lebih meyakinkan",
    text: "Portofolio dan testimoni punya tempat yang rapi untuk menjawab keraguan calon klien.",
  },
  {
    number: "03",
    title: "Selalu siap dibagikan",
    text: "Satu tautan yang bisa kamu kirim saat follow-up, pitching, atau kenalan dengan calon partner.",
  },
];

const WebsitePreview = () => (
  <div className="relative">
    <div className="absolute -top-5 -right-5 h-28 w-28 rounded-full bg-[#F2C96D]/25 blur-2xl" />
    <div className="absolute -bottom-6 -left-4 h-36 w-36 rounded-full bg-[#8B5CF6]/25 blur-2xl" />

    <div className="relative rotate-[-1deg] rounded-[18px] border border-white/10 bg-[#181729] p-2.5 shadow-[0_28px_70px_rgba(35,25,57,0.22)] transition duration-500 hover:rotate-0">
      <div className="overflow-hidden rounded-[11px] bg-[#FAF8F3]">
        <div className="flex h-11 items-center justify-between border-b border-[#E4DED4] px-4">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF8275]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F1C45F]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#70B996]" />
          </div>
          <span className="text-[9px] font-semibold tracking-[0.12em] text-[#817B72]">
            NAMABISNIS.COM
          </span>
          <span className="h-1.5 w-8 rounded-full bg-[#D7D1C8]" />
        </div>

        <div className="grid min-h-[380px] sm:grid-cols-[1.08fr_.92fr]">
          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#282431] text-xs font-black text-white">
                    B
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.08em] text-[#282431] uppercase">
                    Brand kamu
                  </span>
                </div>
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-1.5 w-7 rounded-full bg-[#D4CEC4]" />
                  <span className="h-1.5 w-5 rounded-full bg-[#D4CEC4]" />
                </div>
              </div>

              <p className="mb-3 text-[10px] font-bold tracking-[0.14em] text-[#7955BF] uppercase">
                Jelas sejak awal
              </p>
              <h3 className="max-w-[310px] text-[30px] leading-[1.03] font-bold tracking-[-0.045em] text-[#26222B] sm:text-[36px]">
                Bikin orang yakin sebelum mulai chat.
              </h3>
              <p className="mt-4 max-w-[290px] text-xs leading-5 text-[#777079] sm:text-sm sm:leading-6">
                Tunjukkan apa yang kamu kerjakan, untuk siapa, dan kenapa orang
                layak memilihmu.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="rounded-md bg-[#7955BF] px-4 py-2.5 text-[10px] font-bold text-white sm:text-xs">
                Lihat pekerjaan
              </span>
              <span className="text-[10px] font-semibold text-[#554F59] underline decoration-[#B7AFBA] underline-offset-4 sm:text-xs">
                Tentang kami
              </span>
            </div>
          </div>

          <div className="relative hidden overflow-hidden bg-[#DCD1F2] p-5 sm:flex sm:flex-col sm:justify-end">
            <div className="absolute top-[-18%] right-[-28%] h-64 w-64 rounded-full border-[34px] border-[#8B5CF6]/75" />
            <div className="absolute top-10 left-5 text-[9px] font-bold tracking-[0.14em] text-[#624794] uppercase">
              Dipercaya karena jelas
            </div>

            <div className="relative space-y-2.5">
              {[
                "Layanan mudah dipahami",
                "Bukti kerja terlihat",
                "Kontak mudah ditemukan",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-md border border-white/60 bg-white/85 px-3 py-3 shadow-[0_8px_20px_rgba(73,52,108,0.09)] backdrop-blur-sm"
                >
                  <span className="text-[9px] font-bold text-[#7955BF]">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] font-semibold text-[#35303B]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative mt-5 flex items-center gap-3 pl-1">
      <span
        className="h-px w-9 shrink-0 bg-[#7955BF] dark:bg-[#BCA5ED]"
        aria-hidden="true"
      />
      <span className="text-[10px] font-bold tracking-[0.12em] text-[#625A68] uppercase dark:text-[#B8B3C0]">
        Website = profil yang selalu siap
      </span>
    </div>
  </div>
);

const AboutSectionOne = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-b border-[#DED7E5] bg-[#F0ECF4] py-20 sm:py-24 lg:py-28 dark:border-white/[0.07] dark:bg-[#0D1120]"
    >
      <span id="about" className="absolute top-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(242, 201, 109, 0.18) 0, transparent 25%), radial-gradient(circle at 12% 78%, rgba(139, 92, 246, 0.14) 0, transparent 28%), linear-gradient(140deg, #F4F0F6 0%, #ECE7F1 55%, #F5F1EA 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(circle at 85% 14%, rgba(223, 170, 65, 0.10) 0, transparent 25%), radial-gradient(circle at 12% 78%, rgba(139, 92, 246, 0.18) 0, transparent 30%), linear-gradient(140deg, #0D1120 0%, #151229 55%, #101624 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(121, 85, 191, 0.45) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 24%, black 72%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute top-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full border border-[#8B5CF6]/15 dark:border-white/5" />

      <div className="relative z-10 container px-6 sm:px-8 lg:px-10 xl:px-12">
        <ScrollReveal
          className="mb-12 grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-end"
          variant="fade-up"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#8B5CF6]" />
              <span className="text-[11px] font-bold tracking-[0.17em] text-[#7651BE] uppercase sm:text-xs dark:text-[#BCA5ED]">
                Kenapa harus punya website?
              </span>
            </div>
            <h2 className="max-w-[760px] text-[36px] leading-[1.06] font-bold tracking-[-0.045em] text-[#27232C] sm:text-[46px] lg:text-[54px] dark:text-white">
              Calon klien biasanya{" "}
              <span className="font-serif font-normal text-[#7955BF] italic dark:text-[#BCA5ED]">
                kepo dulu,
              </span>{" "}
              baru chat.
            </h2>
          </div>

          <p className="max-w-[520px] border-l-2 border-[#8B5CF6]/35 pl-5 text-[15px] leading-7 text-[#6D6672] sm:text-base dark:text-[#AAA5B1]">
            Kalau informasi bisnismu sulit ditemukan, mereka bisa pindah sebelum
            kamu sempat menjelaskan. Website membantu membangun rasa percaya
            dari kunjungan pertama.
          </p>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <ScrollReveal variant="fade-right">
            <WebsitePreview />
          </ScrollReveal>

          <ScrollReveal delay={120} variant="fade-left">
            <div className="border-t border-[#D4CDDB] dark:border-white/10">
              {reasons.map((reason) => (
                <div
                  key={reason.number}
                  className="group grid grid-cols-[44px_1fr] gap-4 border-b border-[#D4CDDB] py-6 sm:grid-cols-[54px_1fr] sm:gap-5 dark:border-white/10"
                >
                  <span className="pt-1 text-xs font-bold tracking-[0.12em] text-[#7955BF] dark:text-[#BCA5ED]">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="mb-2 text-xl font-bold tracking-[-0.02em] text-[#2D2932] transition group-hover:text-[#7955BF] sm:text-[22px] dark:text-white dark:group-hover:text-[#BCA5ED]">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-6 text-[#736C78] sm:text-[15px] dark:text-[#AAA5B1]">
                      {reason.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[320px] text-sm leading-6 font-medium text-[#5F5864] dark:text-[#C5C1CC]">
                Intinya: bukan sekadar punya website, tapi punya alasan untuk
                dipercaya.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#7651BE] transition hover:text-[#4F2D91] dark:text-[#BCA5ED] dark:hover:text-white"
              >
                Mulai dari kebutuhanmu
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
