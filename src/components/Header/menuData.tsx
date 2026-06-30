import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Beranda",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Layanan",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Company Profile",
        path: "/#features",
        newTab: false,
      },
      {
        id: 22,
        title: "Custom Software (Demo)",
        path: "/demo",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Proses",
    path: "/#process",
    newTab: false,
  },
  {
    id: 4,
    title: "Paket",
    path: "/#pricing",
    newTab: false,
  },
  // {
  //   id: 5,
  //   title: "Insight",
  //   path: "/#blog",
  //   newTab: false,
  // },
  {
    id: 6,
    title: "Kontak",
    path: "/#contact",
    newTab: false,
  },
];

export default menuData;
