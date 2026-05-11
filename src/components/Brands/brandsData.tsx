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
    category: "Company",
    href: "https://bootstrapmade.com/demo/Devin/",
    thumbnail:
      "https://bootstrapmade.com/content/templatefiles/Devin/Devin-bootstrap-website-template-md.webp",
    note: "Cocok untuk profil perusahaan dan jasa profesional.",
  },
  {
    id: 2,
    title: "Landify",
    category: "Landing Page",
    href: "https://bootstrapmade.com/demo/Landify/",
    thumbnail:
      "https://bootstrapmade.com/content/templatefiles/Landify/Landify-bootstrap-website-template-md.webp",
    note: "Cocok untuk campaign, produk, dan penawaran utama.",
  },
  {
    id: 3,
    title: "Invent",
    category: "Startup",
    href: "https://bootstrapmade.com/demo/Invent/",
    thumbnail:
      "https://bootstrapmade.com/content/templatefiles/Invent/Invent-bootstrap-website-template-md.webp",
    note: "Cocok untuk startup, SaaS, dan layanan digital.",
  },
  {
    id: 4,
    title: "FlexStart",
    category: "Startup",
    href: "https://bootstrapmade.com/demo/FlexStart/",
    thumbnail:
      "https://bootstrapmade.com/content/templatefiles/FlexStart/FlexStart-bootstrap-website-template-md.webp",
    note: "Cocok untuk aplikasi, teknologi, dan bisnis modern.",
  },
  {
    id: 5,
    title: "Appland",
    category: "App",
    href: "https://bootstrapmade.com/demo/Appland/",
    thumbnail:
      "https://bootstrapmade.com/content/templatefiles/Appland/Appland-bootstrap-website-template-md.webp",
    note: "Cocok untuk mobile app, software, dan produk digital.",
  },
  {
    id: 6,
    title: "OnePage",
    category: "One Page",
    href: "https://bootstrapmade.com/demo/OnePage/",
    thumbnail:
      "https://bootstrapmade.com/content/templatefiles/OnePage/OnePage-bootstrap-website-template-md.webp",
    note: "Cocok untuk website singkat, rapi, dan langsung jelas.",
  },
];

export default brandsData;
