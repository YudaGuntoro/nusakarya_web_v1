import { whatsappUrl } from "@/lib/contact";

const WhatsAppIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 32 32"
    aria-hidden="true"
    className="fill-current"
  >
    <path d="M16.02 3.2A12.74 12.74 0 0 0 3.25 15.9c0 2.24.59 4.42 1.72 6.34L3.2 28.8l6.72-1.76a12.77 12.77 0 0 0 6.1 1.55h.01A12.73 12.73 0 0 0 28.8 15.9 12.74 12.74 0 0 0 16.02 3.2Zm0 23.25h-.01a10.57 10.57 0 0 1-5.39-1.47l-.39-.23-3.99 1.04 1.07-3.88-.25-.4a10.48 10.48 0 0 1-1.61-5.61c0-5.79 4.74-10.51 10.57-10.51 2.82 0 5.48 1.09 7.47 3.07a10.43 10.43 0 0 1 3.1 7.44c0 5.8-4.74 10.55-10.57 10.55Zm5.79-7.9c-.32-.16-1.87-.92-2.16-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.56a9.48 9.48 0 0 1-1.76-2.18c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.31.32-.52.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.98-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.31-1.11 1.08-1.11 2.64 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.38 5.4 4.74.75.32 1.34.51 1.8.65.76.24 1.45.2 1.99.12.61-.09 1.87-.76 2.13-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.61-.37Z" />
  </svg>
);

const FloatingWhatsApp = () => {
  return (
    <div className="fixed right-5 bottom-20 z-[999] flex flex-col items-end gap-3 sm:right-[88px] sm:bottom-8 sm:max-w-[calc(100vw-7rem)]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group border-primary/20 shadow-primary/10 hover:bg-primary relative hidden items-center gap-2 rounded-md border bg-[#0F172A] px-4 py-2 text-[11px] font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 sm:flex"
      >
        <span className="h-2 w-2 rounded-full bg-[#22C55E] shadow-[0_0_10px_rgba(34,197,94,0.75)]" />
        Diskusi profil bisnis sekarang
        <span className="group-hover:bg-primary absolute right-7 -bottom-1.5 h-3 w-3 rotate-45 bg-[#0F172A] transition" />
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Nusakarya Digital Solution"
        className="group hover:border-primary/40 shadow-primary/10 hover:shadow-primary/15 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/95 p-0 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:h-auto sm:w-[260px] sm:max-w-full sm:justify-start sm:gap-3 sm:rounded-xl sm:border-gray-200/80 sm:p-3 dark:border-white/10 dark:bg-[#151B28]/95 dark:shadow-black/30"
      >
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#22C55E] to-[#0EA55B] text-white shadow-lg ring-1 shadow-[#22C55E]/25 ring-white/30 sm:h-10 sm:w-10 sm:rounded-xl">
          <WhatsAppIcon />
          <span className="absolute -top-1.5 -right-1.5 hidden h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#EF4444] text-[10px] font-bold text-white shadow-sm sm:flex dark:border-[#151B28]">
            1
          </span>
        </span>

        <span className="hidden min-w-0 sm:block">
          <span className="mb-0.5 block text-[9px] font-bold tracking-[0.16em] text-[#64748B] uppercase dark:text-white/60">
            Nusakarya Digital
          </span>
          <span className="group-hover:text-primary dark:group-hover:text-primary block text-[13px] font-bold whitespace-nowrap text-[#0F172A] transition dark:text-white">
            Butuh Profil Bisnis?
          </span>
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
