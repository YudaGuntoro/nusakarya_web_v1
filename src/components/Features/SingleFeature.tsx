import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="h-full w-full">
      <div
        className="wow fadeInUp group hover:border-primary/30 hover:shadow-feature-2 dark:hover:border-primary/40 h-full rounded-lg border border-gray-200 bg-white p-7 shadow-sm duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.04]"
        data-wow-delay=".15s"
      >
        <div className="bg-primary/10 text-primary group-hover:bg-primary mb-7 flex h-14 w-14 items-center justify-center rounded-lg duration-300 group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-black lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color dark:text-body-color-dark pr-[10px] text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
