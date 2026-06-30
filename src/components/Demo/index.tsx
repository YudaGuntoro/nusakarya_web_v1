"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import ScrollReveal from "../Common/ScrollReveal";

type DemoProject = {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  detail: string;
  image: string;
  demoUrl?: string;
  status: "ready" | "locked";
};

const demoProjects: DemoProject[] = [
  {
    id: "cmms-maintenance",
    title: "CMMS Maintenance System",
    client: "Nusakarya Digital Solution",
    category: "Maintenance Operation",
    description:
      "Work order, aset, preventive maintenance, dan risiko operasional dalam satu alur kerja.",
    detail:
      "Demo ini memperlihatkan alur pemeliharaan modern mulai dari dashboard real-time, pelacakan siklus hidup aset, integrasi sensor, sampai notifikasi kontraktor agar tim operasional lebih cepat mengambil keputusan.",
    image: "/images/demo/cmms.png",
    demoUrl: "https://cmms.nusakaryadigital.com",
    status: "ready",
  },
  {
    id: "production-monitoring",
    title: "Production Monitoring",
    client: "Nusakarya Digital Solution",
    category: "Industrial Operation",
    description:
      "Pantau output, downtime, performa line, dan progres setiap shift secara real-time.",
    detail:
      "Materi demo Production Monitoring sedang dalam tahap pengembangan.",
    image: "/images/logo/new-logo.png",
    status: "locked",
  },
  {
    id: "warehouse-management",
    title: "Warehouse Management",
    client: "Nusakarya Digital Solution",
    category: "Inventory Operation",
    description:
      "Kelola stok, lokasi rak, perpindahan barang, serta proses inbound dan outbound.",
    detail: "Materi demo Warehouse Management sedang dalam tahap pengembangan.",
    image: "/images/logo/new-logo.png",
    status: "locked",
  },
  {
    id: "utilities-monitoring",
    title: "Utilities Monitoring",
    client: "Nusakarya Digital Solution",
    category: "Factory Utilities",
    description:
      "Lihat konsumsi listrik, air, compressed air, dan utilitas fasilitas dalam satu layar.",
    detail: "Materi demo Utilities Monitoring sedang dalam tahap pengembangan.",
    image: "/images/logo/new-logo.png",
    status: "locked",
  },
];

const SearchIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
    <path
      d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
    <path
      d="M7 17 17 7m0 0H9m8 0v8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
    />
  </svg>
);

const LockIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
    <path
      d="M7.5 10.5V8a4.5 4.5 0 0 1 9 0v2.5m-10 0h11a1.5 1.5 0 0 1 1.5 1.5v6.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5V12a1.5 1.5 0 0 1 1.5-1.5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const CloseIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
    <path
      d="m6 6 12 12M18 6 6 18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const LockedPreview = ({
  project,
  number,
}: {
  project: DemoProject;
  number: string;
}) => (
  <div className="relative aspect-[16/9] overflow-hidden bg-[#E5DDF2] dark:bg-[#211C36]">
    <div
      className="absolute inset-0 opacity-35 dark:opacity-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(121,85,191,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(121,85,191,.22) 1px, transparent 1px)",
        backgroundSize: "34px 34px",
      }}
    />
    <div className="absolute top-[-48%] right-[-18%] h-[125%] w-[68%] rounded-full border-[28px] border-[#8B5CF6]/55 dark:border-[#8B5CF6]/35" />
    <div className="absolute right-[13%] bottom-[-22%] h-[62%] w-[42%] rotate-12 bg-[#F2C96D]/75 dark:bg-[#D4A94D]/45" />

    <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-bold tracking-[0.16em] text-[#604986] uppercase dark:text-[#BCA5ED]">
          In development
        </span>
        <span className="text-[10px] font-bold text-[#604986] dark:text-[#BCA5ED]">
          {number}
        </span>
      </div>
      <p className="relative max-w-[250px] text-[24px] leading-[.95] font-black tracking-[-0.05em] text-[#292431] sm:text-[30px] dark:text-white">
        {project.category}
      </p>
    </div>
  </div>
);

const Demo = () => {
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<DemoProject | null>(
    null,
  );
  const [isMounted, setIsMounted] = useState(false);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return demoProjects;
    }

    return demoProjects.filter((project) =>
      [project.title, project.client, project.category, project.description]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <main className="relative min-h-screen overflow-hidden border-b border-[#DCD6E2] bg-[#F0EDF3] pt-28 pb-20 md:pt-36 lg:pt-[150px] lg:pb-28 dark:border-white/[0.07] dark:bg-[#0D1120]">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] bg-[#E8E1EF] lg:block dark:bg-[#171329]" />
        <div className="pointer-events-none absolute top-[-220px] left-[-180px] h-[520px] w-[520px] rounded-full border border-[#8B5CF6]/15 dark:border-white/[0.04]" />
        <div className="pointer-events-none absolute right-[5%] bottom-[8%] h-36 w-36 rotate-12 border border-[#8B5CF6]/10 dark:border-white/[0.04]" />

        <div className="relative z-10 container px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-14 grid gap-9 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:gap-16">
            <ScrollReveal variant="fade-right" once>
              <div className="max-w-[720px]">
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#7955BF]" />
                  <span className="text-[10px] font-bold tracking-[0.17em] text-[#7651BE] uppercase dark:text-[#BCA5ED]">
                    Software Lab / 01
                  </span>
                </div>
                <h1 className="mb-6 max-w-[700px] text-[42px] leading-[1.01] font-black tracking-[-0.055em] text-[#292530] sm:text-[54px] lg:text-[64px] dark:text-white">
                  Bukan cuma dashboard cantik.{" "}
                  <span className="text-[#7955BF] dark:text-[#BCA5ED]">
                    Harus kepakai.
                  </span>
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} variant="fade-left" once>
              <div className="border-l-2 border-[#7955BF]/35 pl-5">
                <p className="mb-3 text-[17px] leading-7 font-bold text-[#3C3741] dark:text-white">
                  Custom software untuk alur kerja yang benar-benar spesifik.
                </p>
                <p className="text-sm leading-7 text-[#716A76] sm:text-[15px] dark:text-[#AAA5B1]">
                  Dari maintenance sampai warehouse—setiap sistem dimulai dari
                  masalah operasional, bukan dari template fitur.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal
            className="mb-8 flex flex-col gap-5 border-y border-[#D5CEDA] py-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10"
            delay={120}
            variant="fade-up"
            once
          >
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold tracking-[0.15em] text-[#8B8490] uppercase">
                Project index
              </span>
              <span className="h-4 w-px bg-[#CDC6D2] dark:bg-white/10" />
              <span className="text-xs font-semibold text-[#5E5763] dark:text-[#B7B2BD]">
                {String(filteredProjects.length).padStart(2, "0")} project
              </span>
            </div>

            <label className="relative block w-full sm:max-w-[320px]">
              <span className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 text-[#837C88] dark:text-[#918B98]">
                <SearchIcon />
              </span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari sistem..."
                className="h-11 w-full border-b border-[#BFB7C5] bg-transparent pr-2 pl-8 text-sm font-semibold text-[#332E38] transition outline-none placeholder:text-[#96909B] focus:border-[#7955BF] dark:border-white/20 dark:text-white dark:placeholder:text-[#77727F]"
              />
            </label>
          </ScrollReveal>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-12">
              {filteredProjects.map((project, index) => {
                const locked = project.status === "locked";
                const featured = project.id === "cmms-maintenance";
                const number = String(
                  demoProjects.findIndex((item) => item.id === project.id) + 1,
                ).padStart(2, "0");

                return (
                  <ScrollReveal
                    key={project.id}
                    className={
                      featured
                        ? "h-full lg:col-span-8"
                        : index === 1
                          ? "h-full lg:col-span-4"
                          : "h-full lg:col-span-6"
                    }
                    delay={index * 80}
                    duration={720}
                    variant="fade-up"
                    once
                  >
                    <article
                      className={`group flex h-full flex-col overflow-hidden border bg-[#FAF8FB] transition duration-300 dark:bg-[#171A2A] ${
                        locked
                          ? "border-[#D8D1DD] dark:border-white/10"
                          : "border-[#7955BF]/45 hover:border-[#7955BF] dark:border-[#8B5CF6]/45 dark:hover:border-[#8B5CF6]"
                      }`}
                    >
                      <button
                        type="button"
                        disabled={locked}
                        onClick={() => setSelectedProject(project)}
                        className="flex h-full w-full flex-col text-left disabled:cursor-default"
                      >
                        {locked ? (
                          <LockedPreview project={project} number={number} />
                        ) : (
                          <div className="relative aspect-[16/8.2] overflow-hidden border-b border-[#D8D1DD] bg-[#151827] dark:border-white/10">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              priority
                              sizes="(min-width: 992px) 67vw, 100vw"
                              className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.02]"
                            />
                            <div className="absolute top-0 left-0 bg-[#19172F] px-4 py-3 text-[10px] font-bold tracking-[0.14em] text-white">
                              {number}
                            </div>
                          </div>
                        )}

                        <div className="flex flex-1 flex-col p-6 sm:p-7">
                          <div className="mb-5 flex items-center justify-between gap-4">
                            <span className="text-[9px] font-bold tracking-[0.14em] text-[#7955BF] uppercase dark:text-[#BCA5ED]">
                              {project.category}
                            </span>
                            <span
                              className={
                                locked
                                  ? "text-[#9A939E]"
                                  : "text-[#5E5763] transition group-hover:text-[#7955BF] dark:text-[#B7B2BD]"
                              }
                            >
                              {locked ? <LockIcon /> : <ArrowIcon />}
                            </span>
                          </div>

                          <h2
                            className={`mb-3 font-bold tracking-[-0.035em] text-[#2C2831] dark:text-white ${
                              featured
                                ? "text-[26px] sm:text-[32px]"
                                : "text-[22px] sm:text-[25px]"
                            }`}
                          >
                            {project.title}
                          </h2>
                          <p className="text-sm leading-6 text-[#746D78] dark:text-[#A39EAA]">
                            {project.description}
                          </p>

                          <div className="mt-auto pt-7">
                            <span className="border-t border-[#DDD7E1] pt-4 text-[10px] font-bold tracking-[0.12em] text-[#8D8691] uppercase dark:border-white/10">
                              {locked
                                ? "Belum bisa dibuka"
                                : "Klik untuk detail"}
                            </span>
                          </div>
                        </div>
                      </button>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          ) : (
            <div className="border border-[#D5CEDA] bg-white/50 p-10 text-center dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-sm font-semibold text-[#716A76] dark:text-[#AAA5B1]">
                Belum ada sistem yang cocok dengan pencarianmu.
              </p>
            </div>
          )}
        </div>
      </main>

      {isMounted && selectedProject
        ? createPortal(
            <div
              className="demo-modal-backdrop fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-[#090812]/85 px-4 py-5 backdrop-blur-sm sm:py-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-modal-title"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  closeProjectModal();
                }
              }}
            >
              <div
                className="demo-modal-panel relative max-h-[calc(100dvh-2.5rem)] w-full max-w-[880px] overflow-y-auto border border-[#D8D1DD] bg-[#F8F6F9] shadow-[18px_18px_0_rgba(139,92,246,0.20)] dark:border-white/10 dark:bg-[#171A2A]"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-[#D8D1DD] px-5 py-4 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#55B98A]" />
                    <span className="text-[10px] font-bold tracking-[0.14em] text-[#6E6673] uppercase dark:text-[#B2ACB8]">
                      Live demo available
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={closeProjectModal}
                    aria-label="Tutup detail demo"
                    className="flex h-9 w-9 items-center justify-center text-[#6E6673] transition hover:bg-[#EAE5ED] hover:text-[#292530] dark:text-[#AAA5B1] dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <CloseIcon />
                  </button>
                </div>

                <div className="relative aspect-[16/8.5] min-h-[210px] border-b border-[#D8D1DD] bg-[#10131F] dark:border-white/10">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    priority
                    sizes="880px"
                    className="pointer-events-none object-cover object-top"
                  />
                </div>

                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_.72fr] lg:p-10">
                  <div>
                    <p className="mb-4 text-[9px] font-bold tracking-[0.15em] text-[#7955BF] uppercase dark:text-[#BCA5ED]">
                      {selectedProject.category}
                    </p>
                    <h2
                      id="demo-modal-title"
                      className="mb-5 text-[30px] leading-[1.05] font-bold tracking-[-0.04em] text-[#292530] sm:text-[38px] dark:text-white"
                    >
                      {selectedProject.title}
                    </h2>
                    <p className="text-[15px] leading-7 text-[#716A76] dark:text-[#AAA5B1]">
                      {selectedProject.detail}
                    </p>
                  </div>

                  <div className="flex flex-col border-t border-[#D8D1DD] pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 dark:border-white/10">
                    <span className="mb-2 text-[9px] font-bold tracking-[0.14em] text-[#96909A] uppercase">
                      Dibuat oleh
                    </span>
                    <p className="mb-8 text-sm font-bold text-[#38333D] dark:text-white">
                      {selectedProject.client}
                    </p>

                    <div className="mt-auto space-y-3">
                      {selectedProject.demoUrl && (
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 bg-[#7955BF] px-6 text-sm font-bold text-white transition hover:bg-[#6342A8]"
                        >
                          Buka live demo
                          <ArrowIcon />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={closeProjectModal}
                        className="inline-flex min-h-[48px] w-full items-center justify-center border border-[#D1CAD7] px-6 text-sm font-bold text-[#4B4550] transition hover:border-[#7955BF] hover:text-[#7955BF] dark:border-white/10 dark:text-[#C7C2CB] dark:hover:border-[#8B5CF6] dark:hover:text-white"
                      >
                        Kembali
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};

export default Demo;
