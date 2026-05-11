import SectionTitle from "../Common/SectionTitle";

const workflow = [
  {
    phase: "01",
    title: "Audit Bisnis dan Materi",
    description:
      "Kami pahami model bisnis, target klien, layanan utama, keunggulan, dan materi lama yang sudah Anda miliki.",
  },
  {
    phase: "02",
    title: "Arah Cerita dan Struktur",
    description:
      "Kami susun urutan cerita, headline, penjelasan layanan, bukti kredibilitas, dan CTA sebelum masuk ke desain.",
  },
  {
    phase: "03",
    title: "Produksi Desain dan Konten",
    description:
      "Website, deck, dan materi konten dibuat dengan visual yang rapi, bahasa yang jelas, dan format yang mudah dipakai.",
  },
  {
    phase: "04",
    title: "Review dan Serah Terima",
    description:
      "Kami bantu finalisasi revisi, menyiapkan file akhir, dan memastikan aset siap digunakan untuk penjualan dan promosi.",
  },
];

export default function Video() {
  return (
    <section
      id="process"
      className="dark:bg-gray-dark relative z-10 bg-white py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Prosesnya Jelas, Hasilnya Siap Dipakai"
          paragraph="Kami tidak langsung mendesain dari halaman kosong. Setiap proyek dimulai dari memahami bisnis, merapikan pesan, lalu mengubahnya menjadi aset yang bisa dipakai untuk menjual."
          center
          mb="70px"
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="shadow-feature-2 border border-gray-200 bg-[#0F172A] p-6 text-white dark:border-white/10">
            <p className="text-primary mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
              Cara Kerja
            </p>
            <h3 className="mb-5 text-3xl font-bold">
              Dari informasi yang masih mentah menjadi materi bisnis yang siap
              dikirim.
            </h3>
            <p className="mb-8 text-base leading-relaxed text-white/70">
              Anda tidak perlu memikirkan struktur, kata-kata, dan layout dari
              nol. Kami bantu menyatukan strategi, copywriting, desain, dan
              implementasi dalam satu alur kerja.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-white/10 bg-white/5 p-4">
                <p className="mb-1 text-2xl font-bold">4</p>
                <p className="text-sm text-white/70">Tahap produksi</p>
              </div>
              <div className="border border-white/10 bg-white/5 p-4">
                <p className="mb-1 text-2xl font-bold">3</p>
                <p className="text-sm text-white/70">Aset utama</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {workflow.map((item) => (
              <div
                key={item.phase}
                className="hover:border-primary/30 hover:shadow-feature-2 border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <span className="bg-primary/10 text-primary mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg text-sm font-bold">
                  {item.phase}
                </span>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
