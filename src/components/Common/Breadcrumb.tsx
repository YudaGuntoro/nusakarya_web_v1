import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <section className="relative z-10 overflow-hidden border-b border-gray-100 bg-gray-50 pt-28 pb-12 lg:pt-[150px] lg:pb-16 dark:border-white/10 dark:bg-[#0B1120]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-8/12 lg:w-7/12">
            <div className="mb-8 max-w-[620px] md:mb-0">
              <span className="bg-primary/10 text-primary mb-5 inline-flex rounded-full px-4 py-2 text-sm font-semibold">
                Nusakarya Digital Solution
              </span>
              <h1 className="mb-5 text-3xl font-bold text-black sm:text-4xl dark:text-white">
                {pageName}
              </h1>
              <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-4/12 lg:w-5/12">
            <div className="text-end">
              <ul className="flex items-center md:justify-end">
                <li className="flex items-center">
                  <Link
                    href="/"
                    className="text-body-color hover:text-primary pr-1 text-base font-medium"
                  >
                    Home
                  </Link>
                  <span className="border-body-color mr-3 block h-2 w-2 rotate-45 border-t-2 border-r-2" />
                </li>
                <li className="text-primary text-base font-medium">
                  {pageName}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
