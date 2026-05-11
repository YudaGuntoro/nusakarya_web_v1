import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Tim Sales",
    designation: "Untuk follow-up calon klien",
    content:
      "Materi bisnis jadi lebih mudah dikirim, lebih enak dijelaskan, dan tidak perlu membuat calon klien menebak-nebak layanan yang ditawarkan.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Founder Bisnis Jasa",
    designation: "Untuk membangun kesan pertama",
    content:
      "Website dan deck membantu bisnis terlihat lebih serius sejak interaksi pertama, terutama saat calon klien membandingkan beberapa vendor.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Business Development",
    designation: "Untuk pitching dan tender",
    content:
      "Struktur pesan yang lebih fokus membuat presentasi terasa lebih singkat, jelas, dan langsung masuk ke alasan kenapa bisnis layak dipilih.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Hasil yang Kami Kejar di Setiap Project"
          paragraph="Kami ingin setiap materi yang dibuat bisa membantu bisnis menjelaskan nilai, membangun kepercayaan, dan memudahkan proses penjualan."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
