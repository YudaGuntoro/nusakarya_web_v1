import { contactEmail, whatsappUrl } from "@/lib/contact";
import ScrollReveal from "../Common/ScrollReveal";

const trustIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3 19 6v5c0 4.4-2.8 8.4-7 10-4.2-1.6-7-5.6-7-10V6l7-3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="m9 12 2 2 4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const reachIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 12h5l3-7 3 14 3-7h2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const shareIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M8 12h8M14 8l4 4-4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 5v14h8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const growthIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 18V6M4 18h16M8 15l3-3 3 2 5-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const contactCards = [
  {
    title: "Mudah dipercaya",
    text: "Calon customer bisa lihat layanan, bukti, dan kontak bisnismu.",
    icon: trustIcon,
    accent: "bg-[#3B82F6]",
    iconColor: "text-[#2563EB]",
  },
  {
    title: "Jangkauan lebih luas",
    text: "Bisnismu bisa ditemukan lebih mudah oleh calon pembeli baru.",
    icon: reachIcon,
    accent: "bg-[#8B5CF6]",
    iconColor: "text-[#7C3AED]",
  },
  {
    title: "Siap dibagikan",
    text: "Link website bisa dipakai di WhatsApp, bio, iklan, dan proposal.",
    icon: shareIcon,
    accent: "bg-[#EC4899]",
    iconColor: "text-[#DB2777]",
  },
  {
    title: "Bantu closing",
    text: "Informasi yang rapi bikin customer lebih yakin untuk menghubungi.",
    icon: growthIcon,
    accent: "bg-[#14B8A6]",
    iconColor: "text-[#0F766E]",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8F5FF] py-16 md:py-20 lg:py-24 dark:bg-[#0E1422]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/35 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(139,92,246,0.10)_0%,rgba(255,255,255,0)_42%,rgba(56,189,248,0.08)_100%)] dark:bg-[linear-gradient(135deg,rgba(139,92,246,0.16)_0%,rgba(14,20,34,0)_45%,rgba(56,189,248,0.10)_100%)]" />

      <div className="container">
        <div className="relative -mx-4 flex flex-wrap items-center gap-y-12">
          <ScrollReveal className="w-full px-4 lg:w-5/12" variant="fade-right">
            <span className="border-primary/15 bg-white/70 text-primary mb-5 inline-flex rounded-md border px-4 py-2 text-sm font-semibold dark:bg-white/5">
              Kontak
            </span>
            <h2 className="mb-5 max-w-[680px] text-3xl leading-tight font-bold text-black sm:text-4xl lg:text-[42px] dark:text-white">
              <span className="hero-rainbow-text bg-[linear-gradient(90deg,#111827_0%,#8B5CF6_24%,#38BDF8_48%,#22C55E_68%,#EC4899_100%)] bg-clip-text text-transparent [-webkit-box-decoration-break:clone] [box-decoration-break:clone] dark:bg-[linear-gradient(90deg,#FFFFFF_0%,#C4B5FD_24%,#7DD3FC_48%,#86EFAC_68%,#F9A8D4_100%)]">
                Siap menjangkau customer lebih banyak?
              </span>
            </h2>
            <p className="text-body-color dark:text-body-color-dark mb-9 max-w-[620px] text-base leading-relaxed font-medium sm:text-lg">
              Ceritakan bisnismu, nanti kami bantu susun website yang rapi,
              mudah dibagikan, dan bikin calon customer lebih yakin untuk
              menghubungi kamu.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary shadow-feature-2 hover:bg-primary/90 inline-flex min-h-[56px] items-center justify-center rounded-md px-8 text-base font-semibold text-white duration-300"
              >
                Chat WhatsApp
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="border-primary/20 bg-white/70 text-dark hover:border-primary hover:text-primary dark:hover:border-primary inline-flex min-h-[56px] items-center justify-center rounded-md border px-8 text-base font-semibold duration-300 dark:bg-white/5 dark:text-white"
              >
                Kirim Email
              </a>
            </div>

            <p className="text-body-color dark:text-body-color-dark mt-5 text-sm font-medium">
              Email langsung:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-primary font-semibold hover:underline"
              >
              {contactEmail}
            </a>
          </p>
          </ScrollReveal>

          <div className="w-full px-4 lg:w-7/12">
            <div className="grid gap-5 sm:grid-cols-2">
              {contactCards.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  delay={(index % 2) * 120 + Math.floor(index / 2) * 80}
                  variant="zoom-in"
                >
                  <div className="relative flex min-h-[260px] flex-col overflow-hidden rounded-md border border-white/70 bg-white/80 p-7 shadow-[0_18px_45px_rgba(88,28,135,0.08)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                    <span
                      className={`absolute inset-x-0 top-0 h-1 ${item.accent}`}
                    />
                    <div className="mb-6 flex items-center gap-4">
                      <span
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#EEF1FA] ${item.iconColor} dark:bg-white/10`}
                      >
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="text-lg leading-snug font-bold text-[#172554] dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-body-color dark:text-body-color-dark text-sm leading-relaxed font-medium">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
