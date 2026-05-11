import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Insight Nusakarya Digital Solution | Profil Bisnis, Website, dan Copywriting",
  description:
    "Insight seputar company profile, website, deck penawaran, copywriting, dan konten untuk komunikasi bisnis yang lebih jelas.",
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Insight"
        description="Catatan praktis untuk membuat profil bisnis, website, copywriting, dan deck penawaran lebih jelas, rapi, dan dipercaya."
      />

      <section className="pt-[90px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center gap-y-10">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <p className="text-body-color dark:text-body-color-dark mt-12 text-center text-base">
            Artikel lengkap sedang disiapkan agar setiap topik punya contoh yang
            lebih praktis.
          </p>
        </div>
      </section>
    </>
  );
};

export default Blog;
