import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Company Profile yang Baik Harus Menjawab Apa Saja?",
    paragraph:
      "Bukan hanya tentang sejarah perusahaan. Profil yang kuat perlu menjelaskan masalah, solusi, bukti, dan langkah berikutnya.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Nusakarya Team",
      image: "/images/blog/author-03.png",
      designation: "Profile Strategist",
    },
    tags: ["profile"],
    publishDate: "2026",
  },
  {
    id: 2,
    title: "Copywriting Website: Jelas Dulu, Baru Menjual",
    paragraph:
      "Kalimat yang bagus membantu pengunjung cepat paham layanan Anda sebelum mereka membaca harga, fitur, atau portofolio.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Nusakarya Team",
      image: "/images/blog/author-02.png",
      designation: "Copy Strategist",
    },
    tags: ["copywriting"],
    publishDate: "2026",
  },
  {
    id: 3,
    title: "Deck Penawaran yang Membantu Sales Meeting",
    paragraph:
      "Deck yang rapi membantu percakapan lebih terarah, dari pembuka, penjelasan solusi, bukti kredibilitas, sampai ajakan diskusi.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Nusakarya Team",
      image: "/images/blog/author-03.png",
      designation: "Content Designer",
    },
    tags: ["sales deck"],
    publishDate: "2026",
  },
];
export default blogData;
