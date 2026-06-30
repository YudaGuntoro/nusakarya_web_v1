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
      "Demo sistem CMMS untuk pemantauan work order, aset, jadwal preventive maintenance, dan notifikasi risiko operasional.",
    detail:
      "Demo ini memperlihatkan alur pemeliharaan modern mulai dari dashboard real-time, pelacakan siklus hidup aset, integrasi sensor, sampai notifikasi kontraktor agar tim operasional lebih cepat mengambil keputusan.",
    image: "/images/demo/cmms.png",
    demoUrl: "https://cmms.nusakaryadigital.com",
    status: "ready",
  },
  {
    id: "production-monitoring",
    title: "Production Monitoring System",
    client: "Nusakarya Digital Solution",
    category: "Industrial Operation",
    description:
      "Preview sistem industri untuk memantau output produksi, downtime, performa line, dan progres shift secara real-time.",
    detail:
      "Materi demo sedang disiapkan. Untuk sementara kartu ini menggunakan logo Nusakarya sebagai placeholder.",
    image: "/images/logo/new-logo.png",
    status: "locked",
  },
  {
    id: "warehouse-management",
    title: "Warehouse Management System",
    client: "Nusakarya Digital Solution",
    category: "Inventory Operation",
    description:
      "Preview sistem industri untuk mengelola stok gudang, lokasi rak, pergerakan barang, dan aktivitas inbound-outbound.",
    detail:
      "Materi demo sedang disiapkan. Untuk sementara kartu ini menggunakan logo Nusakarya sebagai placeholder.",
    image: "/images/logo/new-logo.png",
    status: "locked",
  },
  {
    id: "utilities-monitoring",
    title: "Utilities Monitoring System",
    client: "Nusakarya Digital Solution",
    category: "Factory Utilities",
    description:
      "Preview sistem industri untuk memantau listrik, air, compressed air, gas, dan konsumsi energi fasilitas produksi.",
    detail:
      "Materi demo sedang disiapkan. Untuk sementara kartu ini menggunakan logo Nusakarya sebagai placeholder.",
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
      <section className="relative z-10 min-h-screen overflow-hidden bg-gray-50 pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-[150px] lg:pb-28 dark:bg-[#080B10]">
        <div className="from-primary/10 dark:from-primary/20 absolute inset-x-0 top-0 h-64 bg-linear-to-b via-white/70 to-transparent dark:via-[#101827]/80" />
        <div className="from-primary/5 dark:from-primary/10 absolute inset-y-0 left-0 w-1/2 bg-linear-to-r to-transparent" />

        <div className="relative container">
          <div className="mb-10 grid gap-7 lg:mb-12 lg:grid-cols-[minmax(0,680px)_minmax(280px,360px)] lg:items-end lg:justify-between">
            <ScrollReveal className="max-w-[680px]" variant="fade-up" once>
              <span className="border-primary/30 bg-primary/10 text-primary mb-5 inline-flex rounded-full border px-4 py-2 text-sm font-semibold">
                Custom Software (Demo)
              </span>
              <h1 className="mb-5 max-w-[680px] text-3xl leading-tight font-extrabold tracking-normal text-black sm:text-4xl lg:text-[42px] dark:text-white">
                Custom Software Demo
              </h1>
              <div className="border-primary/30 max-w-[620px] border-l-4 pl-5">
                <p className="text-dark mb-2 text-lg leading-relaxed font-semibold dark:text-white">
                  Kumpulan contoh tampilan sistem digital Nusakarya.
                </p>
                <p className="text-body-color text-base leading-relaxed dark:text-slate-300">
                  Selain pembuatan website dan company profile, kami juga
                  membuat custom software untuk kebutuhan industri, operasional,
                  dan proses kerja internal.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="fade-left" once>
              <label className="relative block w-full lg:w-full">
                <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400">
                  <SearchIcon />
                </span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Cari demo..."
                  className="text-dark focus:border-primary/60 h-12 w-full rounded-lg border border-gray-200 bg-white pr-4 pl-12 text-sm font-medium shadow-sm outline-hidden transition duration-300 placeholder:text-gray-400 focus:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:placeholder:text-slate-400 dark:focus:bg-white/[0.09]"
                />
              </label>
            </ScrollReveal>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {filteredProjects.map((project) => {
                const locked = project.status === "locked";

                return (
                  <ScrollReveal
                    key={project.id}
                    delay={120 + filteredProjects.indexOf(project) * 80}
                    duration={760}
                    variant="fade-up"
                    once
                  >
                    <article
                      className={`shadow-three group overflow-hidden rounded-lg border bg-white transition duration-300 dark:bg-[#111827] dark:shadow-[0_16px_50px_rgba(0,0,0,0.28)] ${
                        locked
                          ? "border-gray-200 opacity-80 dark:border-white/10"
                          : "border-primary/20 hover:border-primary/40 dark:border-primary/25 dark:hover:border-primary/40 hover:-translate-y-1"
                      }`}
                    >
                      <button
                        type="button"
                        disabled={locked}
                        onClick={() => setSelectedProject(project)}
                        className="block w-full text-left disabled:cursor-not-allowed"
                      >
                        <div
                          className={`relative aspect-[1264/848] overflow-hidden ${
                            locked
                              ? "bg-slate-100 dark:bg-slate-200"
                              : "bg-slate-100 dark:bg-slate-950"
                          }`}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(min-width: 1200px) 25vw, (min-width: 768px) 50vw, 100vw"
                            className={`transition duration-500 ${
                              locked
                                ? "object-contain p-12 opacity-55 grayscale"
                                : "object-fill group-hover:scale-105"
                            }`}
                          />
                          {locked && (
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-200/45">
                              <span className="text-center text-lg font-bold text-slate-500">
                                Coming Soon
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="p-5">
                          <div className="mb-4 flex items-center justify-between gap-3">
                            <span className="max-w-[75%] truncate rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
                              {project.client}
                            </span>
                            <span
                              className={`shrink-0 ${
                                locked
                                  ? "text-slate-400"
                                  : "group-hover:text-primary text-slate-500 dark:text-slate-300"
                              }`}
                            >
                              {locked ? <LockIcon /> : <ArrowIcon />}
                            </span>
                          </div>
                          <h2 className="mb-3 min-h-[52px] text-lg leading-snug font-bold text-black dark:text-white">
                            {project.title}
                          </h2>
                          <p className="text-body-color line-clamp-3 text-sm leading-relaxed dark:text-slate-400">
                            {project.description}
                          </p>
                        </div>
                      </button>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          ) : (
            <div className="text-body-color rounded-lg border border-gray-200 bg-white p-8 text-center dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
              Demo yang dicari belum tersedia.
            </div>
          )}
        </div>
      </section>

      {isMounted && selectedProject
        ? createPortal(
            <div
              className="demo-modal-backdrop fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-5 backdrop-blur-sm sm:py-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-modal-title"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  closeProjectModal();
                }
              }}
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  closeProjectModal();
                }
              }}
            >
              <div
                className="demo-modal-panel shadow-three relative max-h-[calc(100dvh-2.5rem)] w-full max-w-[720px] overflow-y-auto rounded-lg border border-gray-200 bg-white dark:border-white/10 dark:bg-[#111827] dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                onClick={(event) => event.stopPropagation()}
                onPointerDown={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onPointerDown={(event) => {
                    event.stopPropagation();
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                    closeProjectModal();
                  }}
                  aria-label="Tutup detail demo"
                  className="absolute top-4 right-4 z-[100000] flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-lg transition duration-300 hover:bg-white hover:text-slate-950"
                >
                  <CloseIcon />
                </button>

                <div className="relative h-[min(34dvh,330px)] min-h-[180px] bg-slate-100 sm:min-h-[220px] dark:bg-slate-950">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    priority
                    sizes="720px"
                    className="pointer-events-none object-fill"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <span className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />
                    Demo Tersedia
                  </span>
                  <h2
                    id="demo-modal-title"
                    className="mb-3 text-2xl leading-tight font-bold text-black sm:text-3xl dark:text-white"
                  >
                    {selectedProject.title}
                  </h2>
                  <p className="text-body-color mb-6 text-sm font-medium dark:text-slate-400">
                    {selectedProject.category} - {selectedProject.client}
                  </p>

                  <div className="mb-8 border-t border-gray-200 pt-6 dark:border-white/10">
                    <h3 className="mb-3 text-base font-bold text-black dark:text-white">
                      About Demo
                    </h3>
                    <p className="text-body-color text-base leading-relaxed dark:text-slate-300">
                      {selectedProject.detail}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {selectedProject.demoUrl ? (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 inline-flex h-12 items-center justify-center rounded-lg px-6 text-sm font-semibold text-white transition duration-300"
                      >
                        Lihat Demo
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="inline-flex h-12 cursor-not-allowed items-center justify-center rounded-lg bg-gray-200 px-6 text-sm font-semibold text-gray-500 dark:bg-white/10 dark:text-slate-400"
                      >
                        Belum Tersedia
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={closeProjectModal}
                      className="text-dark inline-flex h-12 items-center justify-center rounded-lg bg-gray-100 px-6 text-sm font-semibold transition duration-300 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                    >
                      Tutup
                    </button>
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
