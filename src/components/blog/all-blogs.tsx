"use client";
import { Calendar } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../common/button";

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
  const dummyBlogs: Blog[] = [
    {
      id: 1,
      title: "Getting Started with AI in Business",
      slug: "getting-started-ai-business",
      imageURL: "/services/pe1.webp",
      description: "An introduction to how businesses can adopt AI solutions.",
      metaTitle: "AI in Business - Plenum Tech",
      metaDescription:
        "Discover how AI can transform your business operations.",
      publishedDate: "2025-08-01",
    },
    {
      id: 2,
      title: "Cloud Migration Strategies for Enterprises ",
      slug: "cloud-migration-strategies",
      imageURL: "/services/pe1.webp",
      description: "Key strategies to ensure smooth migration to the cloud.",
      metaTitle: "Cloud Migration - Plenum Tech",
      metaDescription:
        "Learn the top strategies for successful cloud migration.",
      publishedDate: "2025-08-10",
    },
    {
      id: 3,
      title: "ERP Implementation Challenges",
      slug: "erp-implementation-challenges",
      imageURL: "/services/pe1.webp",
      description: "Common challenges faced during ERP implementation.",
      metaTitle: "ERP Challenges - Plenum Tech",
      metaDescription: "Understand ERP challenges and how to overcome them.",
      publishedDate: "2025-08-15",
    },
  ];

  useEffect(() => {
    setData(dummyBlogs);
  }, []);

    // useEffect(() => {
    //   const getAllBlogs = async () => {
    //     const res = await axios.get("https://blog.xntric.me/api/v2/blogs");
    //     console.log(res.data.blogs);
    //     setData(res.data.blogs);
    //   };
    //   getAllBlogs();
    // }, []);

  const featuredPost = data[0];
  const remainingPosts = data.slice(1, 5);

  return (
    <>
      <Head>
        <title>
          {featuredPost?.metaTitle ||
            featuredPost?.title ||
            "Blog | Plenum Tech"}
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

      <section className="py-16  2xl:max-w-[1700px] w-[90%] mx-auto space-y-14 flex flex-col">
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
                <Link href={`blog/${featuredPost.slug}`}>
                  <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl overflow-hidden duration-300">
                    <div className="lg:w-1/2">
                      <Image
                        src={featuredPost.imageURL || "/placeholder.svg"}
                        width={600}
                        height={400}
                        alt={featuredPost.title}
                        className="w-full h-64 lg:h-full rounded-2xl object-cover"
                      />
                    </div>
                    <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar size={20} />
                        <span className="text-secondary font-['Exo'] text-[14px]">
                          {featuredPost.publishedDate.slice(0, 10)}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-secondary font-['Exo'] text-base leading-relaxed mb-6">
                        {featuredPost.description}
                      </p>
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
                        <Button text="Read More" bg="bg-black"></Button>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {remainingPosts.map((card, index) => {
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
                  <Link href={`blog/${card.slug}`} key={index}>
                    <div className="bg-white rounded-2xl overflow-hidden duration-300">
                      <Image
                        src={card.imageURL || "/placeholder.svg"}
                        width={400}
                        height={250}
                        alt={card.title}
                        className="w-full h-72 2xl:h-96 object-cover rounded-2xl"
                      />
                      <div className="py-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Calendar size={20} />
                          <span className="text-secondary font-['Exo'] text-[14px]">
                            {featuredPost.publishedDate.slice(0, 10)}
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl  font-bold text-secondary mb-3 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-secondary font-['Exo'] text-[15px] 2xl:text-lg  leading-relaxed mb-4 line-clamp-3">
                          {card.description}
                        </p>
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
                          <Button text="Read More" bg="bg-black"></Button>
                        </Link>
                      </div>
                    </div>
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(imageSchema),
                      }}
                    />
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Cards;
