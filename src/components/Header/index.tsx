"use client";
import { whatsappUrl } from "@/lib/contact";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="min-w-0 shrink-0 pr-2 sm:pr-3 lg:w-[290px] xl:mr-10">
              <Link
                href="/"
                className={`header-logo flex min-w-0 items-center gap-2.5 sm:gap-3 ${
                  sticky ? "py-3 lg:py-2" : "py-4 md:py-6 lg:py-8"
                } `}
              >
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md sm:h-16 sm:w-16 lg:h-24 lg:w-24 xl:h-28 xl:w-28">
                  <Image
                    src="/images/logo/new-logo.png"
                    alt="Nusakarya Digital Solution logo"
                    fill
                    priority
                    sizes="(min-width: 1200px) 112px, (min-width: 992px) 96px, (min-width: 575px) 64px, 56px"
                    className="object-contain"
                  />
                </span>
                <span className="flex min-w-0 flex-col justify-center leading-none">
                  <span className="block text-base font-extrabold tracking-tight text-violet-600 sm:text-lg dark:text-violet-400">
                    Nusakarya
                  </span>

                  <span className="mt-[2px] block text-[9px] font-semibold tracking-[0.14em] whitespace-nowrap text-slate-500 uppercase sm:text-[11px] sm:tracking-[0.18em] dark:text-slate-400">
                    Digital Solution
                  </span>
                </span>
              </Link>
            </div>
            <div className="flex min-w-0 flex-1 items-center justify-end gap-2 lg:justify-between lg:px-4">
              <div className="order-2 lg:order-1">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary block rounded-lg px-2.5 py-2 focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-7 bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-7 bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-7 bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`header-hover-wiggle flex py-2 text-[17px] font-semibold lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="header-hover-wiggle text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-[17px] font-semibold lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="header-hover-wiggle text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="order-1 flex items-center justify-end gap-1.5 lg:order-2 lg:gap-0">
                <Link
                  href="/#pricing"
                  className="header-hover-wiggle text-dark hover:text-primary hidden px-5 py-3 text-[17px] font-semibold md:block dark:text-white"
                >
                  Paket
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-hover-wiggle ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden rounded-md px-6 py-3 text-[17px] font-semibold text-white transition duration-300 md:block lg:px-5 xl:px-7"
                >
                  Diskusi Gratis
                </a>
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
