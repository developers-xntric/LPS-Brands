/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Calendar } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../common/button";
import axios from "axios";

interface Blog {
  id: number;
  title: string;
  slug: string;
  imageURL: string;
  thumbnailURL?: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  publishedDate: string;
  uploadDate?: string;
  tags?: string[];
}

const Cards = () => {
  const [data, setData] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  useEffect(() => {
    const getAllBlogs = async () => {
      const res = await axios.get("https://blog.xntric.me/api/v2/blogs");
      console.log(res.data, "Data");
      const LPSBLogs = res.data.blogs.filter(
        (blog: any) => blog.blogCategory.toLowerCase() === "lps"
      );
      setData(LPSBLogs);
    };
    getAllBlogs();
  }, []);

  const featuredPost = data[0];
  const remainingPosts = data.slice(1);

  // Calculate pagination details
  const totalPosts = remainingPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = remainingPosts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>
          {featuredPost?.metaTitle ||
            featuredPost?.title ||
            "Blog | LPS Brands"}
        </title>
        <meta
          name="description"
          content={
            featuredPost?.metaDescription ||
            featuredPost?.description ||
            "Explore insightful blogs from LPS Brands on AI, Cloud, and ERP solutions."
          }
        />
        <link
          rel="canonical"
          href={`https://lps-me.com/blog/${featuredPost?.slug}`}
        />
      </Head>

      <section className="py-16 2xl:max-w-[1700px] w-[90%] mx-auto space-y-14 flex flex-col">
        {data.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-800">
              Blogs Not Found
            </h2>
            <p className="text-secondary font-['Exo'] mt-2">
              No blogs are available at the moment. Please check back later.
            </p>
          </div>
        ) : (
          <>
            {featuredPost && (
              <div className="mb-12">
                <div>
                  <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl overflow-hidden duration-300">
                    <div className="lg:w-1/2">
                      <Image
                        src={featuredPost.imageURL || "/placeholder.svg"}
                        width={600}
                        height={400}
                        alt={featuredPost.title}
                        className="w-full  lg:h-full rounded-2xl object-cover"
                      />
                    </div>
                    <div className="lg:w-1/2 md:px-8 py-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar size={20} />
                        <span className="text-secondary font-['Exo'] text-[14px]">
                          {featuredPost.publishedDate.slice(0, 10)}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-['Exo'] font-bold text-gray-900 mb-4 leading-tight line-clamp-2">
                        {featuredPost.title}
                      </h2>
                      <p
                        className="
                          text-secondary  font-['Exo'] text-sm md:text-base leading-relaxed mb-6
                          [&_a]:text-[#00FC09] [&_a]:underline [&_a]:font-semibold
                          hover:[&_a]:text-[#4BFE2C]
                        "
                        dangerouslySetInnerHTML={{
                          __html: featuredPost.description,
                        }}
                      />
                      <div className="flex gap-2">
                        {featuredPost.tags?.map((tag, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              index === 0
                                ? "bg-green-500 text-white"
                                : "bg-gray-800 text-white"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`blog/${featuredPost.slug}`}
                        className="w-fit flex items-start"
                      >
                        <Button
                          text="Read More"
                          bg="bg-black"
                          center={false}
                          link={`blog/${featuredPost.slug}`}
                        ></Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {paginatedPosts.map((card, index) => {
                const imageSchema = {
                  "@context": "https://schema.org",
                  "@type": "ImageObject",
                  url: card.imageURL,
                  name: card.title,
                  caption: card.title,
                  contentUrl: card.imageURL,
                  thumbnailUrl: card.thumbnailURL || card.imageURL,
                  description:
                    card.description || `Image about ${card.title} from LPS.`,
                  uploadDate: card.uploadDate || "2025-08-04T12:00:00+00:00",
                  author: {
                    "@type": "Organization",
                    name: "LPS Brands",
                  },
                };

                return (
                  <div key={index}>
                    <div className="bg-white rounded-2xl overflow-hidden duration-300">
                      <Image
                        src={`https://lps-me.com/${card.imageURL} || "/placeholder.svg"`}
                        width={400}
                        height={250}
                        alt={card.title}
                        className="w-full xl:h-72 2xl:h-96 object-cover rounded-2xl"
                      />
                      <div className="py-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Calendar size={20} />
                          <span className="text-secondary font-['Exo'] text-[14px]">
                            {card.publishedDate.slice(0, 10)}
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-['Exo'] font-bold text-secondary mb-3 leading-tight line-clamp-2">
                          {card.title}
                        </h3>
                        <p
                          className="
                            text-secondary font-['Exo'] text-sm md:text-base leading-relaxed line-clamp-2 mb-6
                            [&_a]:text-[#00FC09] [&_a]:underline [&_a]:font-semibold
                            hover:[&_a]:text-[#2054fc]
                          "
                          dangerouslySetInnerHTML={{
                            __html: card.description,
                          }}
                        />
                        <div className="flex gap-2">
                          {card.tags?.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                tagIndex === 0
                                  ? "bg-green text-white"
                                  : "bg-gray-800 text-white"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`blog/${card.slug}`}
                          className="w-fit flex items-start"
                        >
                          <Button
                            text="Read More"
                            bg="bg-black"
                            link={`blog/${card.slug}`}
                          ></Button>
                        </Link>
                      </div>
                    </div>
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(imageSchema),
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="flex flex-wrap  justify-center mt-8 gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`md:w-8 md:h-8 w-6 h-6 rounded-full font-['Exo'] text-xs md:text-sm font-medium ${
                      currentPage === index + 1
                        ? "bg-[#00FC09] text-secondary"
                        : "bg-gray-200 text-secondary hover:bg-gray-300"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default Cards;
