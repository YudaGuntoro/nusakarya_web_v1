const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;

  return (
    <div className="w-full">
      <div className="shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark hover:border-primary/30 relative z-10 h-full rounded-lg border border-gray-200 bg-white px-8 py-10 duration-300 hover:-translate-y-1 dark:border-white/10">
        <div className="mb-7">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h4 className="text-dark text-xl font-bold dark:text-white">
              {packageName}
            </h4>
            <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-bold">
              Estimasi
            </span>
          </div>
          <p className="text-body-color dark:text-body-color-dark mb-5 text-base leading-relaxed">
            {subtitle}
          </p>
          <h3 className="price text-[34px] font-bold text-black dark:text-white">
            Rp<span className="amount">{price}</span>
            <span className="time text-body-color dark:text-body-color-dark text-base font-medium">
              /{duration}
            </span>
          </h3>
        </div>

        <div className="border-body-color/10 mb-8 border-b pb-8 dark:border-white/10">
          <a
            href="#contact"
            className="bg-primary hover:shadow-signUp hover:bg-primary/90 flex w-full items-center justify-center rounded-md p-3 text-base font-semibold text-white transition duration-300 ease-in-out"
          >
            Diskusikan Paket
          </a>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PricingBox;
