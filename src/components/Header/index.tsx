"use client";
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
        className={`header fixed top-0 left-0 z-9999 flex w-full items-center border-b border-white/[0.06] bg-[#19172F] transition duration-300 ${
          sticky
            ? "bg-[#151329]/95 shadow-[0_10px_35px_rgba(5,4,18,0.24)] backdrop-blur-md"
            : ""
        }`}
      >
        <div className="container px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="relative flex items-center justify-between">
            <div className="min-w-0 shrink-0 pr-3 lg:w-[230px] xl:mr-6">
              <Link href="/" className="flex min-w-0 items-center gap-2.5 py-3">
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src="/images/logo/new-logo.png"
                    alt="Nusakarya Digital Solution logo"
                    fill
                    priority
                    sizes="40px"
                    className="object-contain"
                  />
                </span>
                <span className="flex min-w-0 flex-col justify-center leading-none">
                  <span className="block text-sm font-extrabold tracking-tight text-violet-300 sm:text-base">
                    Nusakarya
                  </span>

                  <span className="mt-[3px] block text-[8px] font-semibold tracking-[0.16em] whitespace-nowrap text-slate-400 uppercase sm:text-[9px]">
                    Digital Solution
                  </span>
                </span>
              </Link>
            </div>
            <div className="flex min-w-0 flex-1 items-center justify-end gap-1 lg:justify-between">
              <div className="order-2 lg:order-1 lg:self-stretch">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  aria-expanded={navbarOpen}
                  className="ring-primary block rounded-md px-2.5 py-2 focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-7 bg-white transition-all duration-300 ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-7 bg-white transition-all duration-300 ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-7 bg-white transition-all duration-300 ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[270px] rounded-b-md border border-white/10 bg-[#19172F] px-6 py-4 shadow-xl duration-300 lg:visible lg:static lg:flex lg:h-full lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:h-full lg:items-stretch lg:gap-7 xl:gap-9">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative lg:flex">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            onClick={() => setNavbarOpen(false)}
                            className={`relative flex py-2.5 text-[16px] font-medium whitespace-nowrap transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-[#8B5CF6] after:transition-transform after:duration-300 lg:items-center lg:py-0 ${
                              usePathName === menuItem.path
                                ? "text-white after:scale-x-100"
                                : "text-[#C5C1D2] after:scale-x-0 hover:text-white hover:after:scale-x-100"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="relative flex cursor-pointer items-center justify-between py-2.5 text-[16px] font-medium whitespace-nowrap text-[#C5C1D2] transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#8B5CF6] after:transition-transform after:duration-300 group-hover:after:scale-x-100 hover:text-white lg:py-0"
                            >
                              {menuItem.title}
                              <span className="pl-1.5">
                                <svg width="18" height="18" viewBox="0 0 25 24">
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
                              className={`submenu relative top-full left-0 rounded-md border border-white/10 bg-[#201D3A] p-2 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[115%] lg:block lg:w-[260px] lg:opacity-0 lg:shadow-xl lg:group-hover:visible lg:group-hover:top-[calc(100%+1px)] ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  onClick={() => setNavbarOpen(false)}
                                  className="block rounded-sm px-3 py-2.5 text-sm text-[#C5C1D2] transition hover:bg-white/5 hover:text-white"
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
              <div className="order-1 flex items-center justify-end gap-1 lg:order-2">
                <Link
                  href="/#pricing"
                  className="hidden px-4 py-3 text-sm font-medium text-[#C5C1D2] transition hover:text-white md:block lg:hidden"
                >
                  Paket
                </Link>
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
