export type SampleSite = {
  id: number;
  title: string;
  category: string;
  href: string;
  thumbnail: string;
  note: string;
};

const brandsData: SampleSite[] = [
  {
    id: 1,
    title: "Devin",
    category: "Profil Perusahaan",
    href: "https://bootstrapmade.com/demo/Devin/",
    thumbnail:
      "https://bootstrapmade.com/content/templatefiles/Devin/Devin-bootstrap-website-template-md.webp",
    note: "Cocok untuk profil perusahaan dan jasa profesional.",
  },
  {
    id: 2,
    title: "Landify",
    category: "Laman Promosi",
    href: "https://bootstrapmade.com/demo/Landify/",
    thumbnail:
      "https://bootstrapmade.com/content/templatefiles/Landify/Landify-bootstrap-website-template-md.webp",
    note: "Cocok untuk campaign, produk, dan penawaran utama.",
  },
  {
    id: 3,
    title: "Invent",
    category: "Produk Digital",
    href: "https://bootstrapmade.com/demo/Invent/",
    thumbnail:
      "https://bootstrapmade.com/content/templatefiles/Invent/Invent-bootstrap-website-template-md.webp",
    note: "Cocok untuk SaaS, produk digital, dan layanan teknologi.",
  },
  {
    id: 4,
    title: "FlexStart",
    category: "Produk Digital",
    href: "https://bootstrapmade.com/demo/FlexStart/",
    thumbnail:
      "https://bootstrapmade.com/content/templatefiles/FlexStart/FlexStart-bootstrap-website-template-md.webp",
    note: "Cocok untuk aplikasi, teknologi, dan bisnis modern.",
  },
  {
    id: 5,
    title: "Appland",
    category: "Aplikasi",
    href: "https://bootstrapmade.com/demo/Appland/",
    thumbnail:
      "https://bootstrapmade.com/content/templatefiles/Appland/Appland-bootstrap-website-template-md.webp",
    note: "Cocok untuk mobile app, software, dan produk digital.",
  },
  {
    id: 6,
    title: "OnePage",
    category: "Satu Halaman",
    href: "https://bootstrapmade.com/demo/OnePage/",
    thumbnail:
      "https://bootstrapmade.com/content/templatefiles/OnePage/OnePage-bootstrap-website-template-md.webp",
    note: "Cocok untuk website singkat, rapi, dan langsung jelas.",
  },
];

export default brandsData;
