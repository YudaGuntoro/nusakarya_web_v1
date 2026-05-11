import Image from "next/image";
import ScrollReveal from "../Common/ScrollReveal";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const starIcon = (
  <svg width="15" height="15" viewBox="0 0 20 20" className="fill-current">
    <path d="M9.103 2.316c.367-.744 1.427-.744 1.794 0l1.917 3.884 4.287.623c.821.119 1.149 1.128.555 1.707l-3.102 3.024.732 4.27c.14.817-.718 1.441-1.452 1.055L10 14.864l-3.834 2.015c-.734.386-1.592-.238-1.452-1.055l.732-4.27L2.344 8.53c-.594-.579-.266-1.588.555-1.707L7.186 6.2l1.917-3.884Z" />
  </svg>
);

const certificateIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="stroke-current"
  >
    <path
      d="M12 3 14.2 5.1 17.2 4.8 18 7.7 20.7 9 19.5 11.8 20.7 14.6 18 15.9 17.2 18.8 14.2 18.5 12 20.6 9.8 18.5 6.8 18.8 6 15.9 3.3 14.6 4.5 11.8 3.3 9 6 7.7 6.8 4.8 9.8 5.1 12 3Z"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="m8.8 12 2 2 4.4-4.4" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            <ScrollReveal className="w-full px-4 lg:w-1/2" variant="fade-right">
              <SectionTitle
                title={
                  <>
                    Kenapa Bisnis Kamu{" "}
                    <em className="hero-rainbow-text bg-[linear-gradient(90deg,#8B5CF6_0%,#38BDF8_25%,#22C55E_50%,#F59E0B_75%,#EC4899_100%)] bg-clip-text pr-1 italic text-transparent [-webkit-box-decoration-break:clone] [box-decoration-break:clone] dark:bg-[linear-gradient(90deg,#C4B5FD_0%,#7DD3FC_25%,#86EFAC_50%,#FDE68A_75%,#F9A8D4_100%)]">
                      Harus Punya Website?
                    </em>
                  </>
                }
                paragraph="Calon klien tidak selalu mundur karena harga. Seringnya, mereka belum cukup yakin untuk percaya pada bisnismu."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Calon klien lebih cepat paham value kamu" />
                    <List text="Bukti kerja mudah dilihat sebelum nego" />
                    <List text="Layanan jelas tanpa dijelaskan berulang" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Bisnis terlihat serius sejak kesan pertama" />
                    <List text="Link rapi untuk follow-up calon klien" />
                    <List text="Keraguan berkurang sebelum mereka chat" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal
              className="w-full px-6 sm:px-8 lg:w-1/2 lg:px-6"
              delay={140}
              variant="fade-left"
            >
              <div className="relative mx-auto my-8 max-w-[610px] lg:mr-4 lg:my-0">
                <div className="absolute -top-6 right-3 h-full w-[90%] rounded-md bg-[#efe8ff] dark:bg-[#241f35]" />

                <div className="relative overflow-hidden rounded-md border border-[#e3d9ff] bg-[#f7f3ff] p-3 shadow-[0_22px_55px_rgba(105,72,170,0.16)] dark:border-white/10 dark:bg-[#1f1a2d] dark:shadow-none">
                  <Image
                    src="/images/about/about-trusted-seller.png"
                    alt="ilustrasi trusted seller untuk bisnis"
                    width={1040}
                    height={694}
                    className="h-auto w-full rounded-sm object-cover mix-blend-multiply dark:mix-blend-normal"
                  />

                  <div className="pointer-events-none absolute inset-3 rounded-sm">
                    <div className="about-bubble-float absolute top-3 left-3 z-20 rounded-md border border-[#e7dcff] bg-white/95 px-3 py-2.5 shadow-[0_14px_35px_rgba(105,72,170,0.16)] backdrop-blur-sm sm:top-4 sm:left-4 sm:px-4 sm:py-3 dark:border-white/10 dark:bg-[#211c32]/95">
                      <div className="text-primary mb-1 flex items-center gap-2 text-sm font-bold">
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
                          {checkIcon}
                        </span>
                        Trusted
                      </div>
                      <p className="text-body-color text-xs font-medium dark:text-body-color-dark">
                        Seller verified
                      </p>
                    </div>

                    <div className="about-bubble-float about-bubble-float-delay absolute top-[42%] right-4 z-20 hidden rounded-md border border-[#fee7b0] bg-white/95 px-4 py-3 shadow-[0_14px_35px_rgba(202,138,4,0.14)] backdrop-blur-sm xs:block dark:border-white/10 dark:bg-[#211c32]/95">
                      <p className="mb-1 text-xs font-semibold text-[#8a5b00] dark:text-[#facc15]">
                        Rating
                      </p>
                      <div className="flex items-center gap-1 text-[#f5b301]">
                        {[...Array(5)].map((_, index) => (
                          <span key={index}>{starIcon}</span>
                        ))}
                      </div>
                    </div>

                    <div className="about-bubble-float about-bubble-float-slow absolute bottom-3 left-3 z-20 rounded-md border border-[#d8f3df] bg-white/95 px-3 py-2.5 shadow-[0_14px_35px_rgba(22,163,74,0.14)] backdrop-blur-sm sm:bottom-4 sm:left-6 sm:px-4 sm:py-3 dark:border-white/10 dark:bg-[#211c32]/95">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#dcfce7] text-[#16a34a] dark:bg-[#14351f] dark:text-[#86efac]">
                          {certificateIcon}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-black dark:text-white">
                            Certified
                          </p>
                          <p className="text-body-color text-xs font-medium dark:text-body-color-dark">
                            Trusted seller
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
