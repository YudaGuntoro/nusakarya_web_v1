import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        className="fill-none stroke-current"
      >
        <path
          d="M18 4.5c7.46 0 13.5 6.04 13.5 13.5S25.46 31.5 18 31.5 4.5 25.46 4.5 18 10.54 4.5 18 4.5Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 18h27M18 4.5c3.38 3.69 5.25 8.48 5.25 13.5S21.38 27.81 18 31.5M18 4.5c-3.38 3.69-5.25 8.48-5.25 13.5S14.62 27.81 18 31.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Arah Pesan yang Jelas",
    paragraph:
      "Kami bantu menentukan pesan utama, sudut jual, dan urutan informasi agar calon klien langsung paham kenapa bisnis Anda layak dipilih.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        className="fill-none stroke-current"
      >
        <path
          d="M18 4.5 27 8.25v7.5c0 6.38-3.83 12.13-9 15-5.17-2.87-9-8.62-9-15v-7.5L18 4.5Z"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="m14.25 18 2.25 2.25 5.25-5.25"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Website yang Membangun Percaya",
    paragraph:
      "Website dirancang untuk menjelaskan bisnis secara singkat, rapi, dan meyakinkan, bukan sekadar menampilkan halaman yang terlihat bagus.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        className="fill-none stroke-current"
      >
        <path
          d="M5.25 8.25h25.5v16.5H5.25V8.25Z"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M5.25 13.5h25.5M11.25 30.75h13.5M15 24.75v6M21 24.75v6M9 10.88h.01M12.75 10.88h.01"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Deck Penawaran yang Rapi",
    paragraph:
      "Deck PDF disusun agar mudah dibaca saat meeting, dikirim ke prospek, dipakai tender, atau menjadi bahan presentasi tim sales.",
  },
  {
    id: 4,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        className="fill-none stroke-current"
      >
        <path
          d="M6.75 7.5h22.5v16.5H6.75V7.5Z"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 29.25h12M18 24v5.25M12 18.75l4.13-4.13 3 3L24 12.75M24 12.75v4.5M24 12.75h-4.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Copywriting yang Tidak Bertele-tele",
    paragraph:
      "Kalimat dibuat padat, jelas, dan meyakinkan, sehingga pengunjung tidak perlu menebak apa layanan Anda dan apa manfaatnya.",
  },
  {
    id: 5,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        className="fill-none stroke-current"
      >
        <path
          d="M24.75 5.25 30.75 11.25 14.25 27.75 7.5 29.25 9 22.5 24.75 5.25Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m21.75 8.25 6 6M13.5 27l-4.5-4.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Visual yang Terasa Lebih Premium",
    paragraph:
      "Kami rapikan layout, warna, icon, dan komposisi agar brand terlihat modern, kredibel, dan tetap sesuai karakter bisnis Anda.",
  },
  {
    id: 6,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        className="fill-none stroke-current"
      >
        <path
          d="M10.5 5.25h10.88L27 10.88v19.87H10.5V5.25Z"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M21 5.25v6h6M14.25 17.25h8.25M14.25 22.5h7.5M14.25 27.75h4.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Konten Siap Dipakai",
    paragraph:
      "Materi inti bisa diturunkan menjadi caption, copy iklan, landing page, follow-up WhatsApp, dan bahan komunikasi digital lainnya.",
  },
];

export default featuresData;
