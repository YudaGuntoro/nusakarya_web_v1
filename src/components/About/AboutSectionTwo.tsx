import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="ilustrasi layanan Nusakarya Digital Solution"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="ilustrasi layanan Nusakarya Digital Solution"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Informasi Bisnis Jadi Lebih Mudah Dicerna
                </h3>
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Detail perusahaan, layanan, keunggulan, dan pengalaman Anda
                  kami susun menjadi alur yang lebih enak dibaca dan tidak
                  membingungkan calon klien.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Tampil Lebih Serius di Mata Calon Klien
                </h3>
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Desain website dan deck dibuat bersih, modern, dan konsisten
                  agar bisnis terlihat siap, bukan seperti materi yang dibuat
                  seadanya.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Lebih Mudah Dipakai untuk Menjual
                </h3>
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Hasil akhirnya bisa dipakai untuk presentasi, proposal,
                  tender, follow-up WhatsApp, iklan, dan kebutuhan komunikasi
                  harian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
