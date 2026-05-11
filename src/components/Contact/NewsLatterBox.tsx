import { contactEmail, whatsappUrl } from "@/lib/contact";

const contactPoints = [
  "Kami bantu petakan kebutuhan utama",
  "Anda mendapat estimasi ruang lingkup dan timeline",
  "Kami beri arahan materi awal yang perlu disiapkan",
];

const NewsLatterBox = () => {
  return (
    <div className="shadow-three dark:bg-gray-dark relative z-10 rounded-lg border border-gray-200 bg-white p-8 sm:p-10 lg:p-8 xl:p-10 dark:border-white/10">
      <span className="bg-primary/10 text-primary mb-5 inline-flex rounded-full px-4 py-2 text-sm font-semibold">
        Respon lebih terarah
      </span>
      <h3 className="mb-4 text-2xl leading-tight font-bold text-black dark:text-white">
        Tidak yakin harus mulai dari mana?
      </h3>
      <p className="border-body-color/10 text-body-color dark:text-body-color-dark mb-8 border-b pb-8 text-base leading-relaxed dark:border-white/10">
        Tidak masalah kalau materi masih berantakan. Kami bisa mulai dari cerita
        singkat tentang bisnis Anda, lalu membantu mengubahnya menjadi struktur
        konten yang lebih siap diproduksi.
      </p>

      <div className="mb-8 space-y-4">
        {contactPoints.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="bg-primary mt-1.5 h-2 w-2 shrink-0 rounded-full" />
            <p className="text-body-color dark:text-body-color-dark text-sm font-medium">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark flex w-full items-center justify-center rounded-md px-6 py-4 text-base font-semibold text-white duration-300"
        >
          Tanya Kebutuhan Saya
        </a>
        <a
          href={`mailto:${contactEmail}`}
          className="border-stroke text-dark hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary flex w-full items-center justify-center rounded-md border px-6 py-4 text-base font-semibold duration-300 dark:border-white/10 dark:text-white"
        >
          {contactEmail}
        </a>
      </div>
    </div>
  );
};

export default NewsLatterBox;
