import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-y border-gray-100 bg-gray-50 py-16 md:py-20 lg:py-28 dark:border-white/10 dark:bg-[#0B1120]"
    >
      <div className="container">
        <div className="border-primary/20 text-primary mx-auto mb-5 flex w-fit items-center rounded-full border bg-white px-4 py-2 text-sm font-semibold dark:bg-white/5">
          Layanan yang saling terhubung
        </div>

        <SectionTitle
          title="Semua yang Dibutuhkan Agar Bisnis Terlihat Siap"
          paragraph="Kami bantu menyusun pesan, tampilan, dan materi komunikasi yang konsisten, sehingga website, deck, dan konten Anda bekerja sebagai satu sistem penjualan."
          center
          mb="70px"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
