import type { ReactNode } from "react";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: ReactNode;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 break-words text-3xl leading-[1.18]! font-bold text-black dark:text-white sm:text-4xl md:text-[45px] md:leading-[1.16]!">
          {title}
        </h2>
        <p className="text-base leading-relaxed! text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
