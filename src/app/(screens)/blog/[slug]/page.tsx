/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogsSection from "@/components/home/blog-section";
import LogoLPS from "@/components/icons/lps-logo";
import MobileNavbar from "@/components/layout/mobile-navbar";
import Wrapper from "@/components/layout/wrapper";
import { Calendar, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Twitter, Facebook, Linkedin } from "lucide-react";

import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const res = await fetch(
      `https://blog.xntric.me/api/v2/blog/${params.slug}`,
      {
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { blog } = await res.json();

    return {
      title: blog.metaTitle || blog.title || "Blog | LPS Web",
      description:
        blog.metaDescription ||
        blog.description ||
        "Explore insightful blogs from LPS Web on AI, Cloud, and ERP solutions.",
      alternates: {
        canonical: `https://www.lps-web.com/blog/${blog.slug}`,
      },
      openGraph: {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || blog.description,
        url: `https://www.lps-web.com/blog/${blog.slug}`,
        images: blog.bannerImageURL ? [{ url: blog.bannerImageURL }] : [],
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return {
      title: "Blog Not Found | LPS Web",
      description: "The requested blog could not be loaded.",
    };
  }
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blogs",
  description: "Blogs from LPS Brands",
  provider: {
    "@type": "Organization",
    name: "LPS Web Solutions",
    url: "https://lps-web.com",
  },
  serviceType: "ERP Consulting",
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "53",
    bestRating: "5",
    worstRating: "1",
  },
};

const socialLinks = [
  {
    link: "https://www.facebook.com/lpsbrands",
    Icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        width={"20px"}
        height={"20px"}
        className="e-font-icon-svg e-fab-facebook"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
      </svg>
    ),
  },
  {
    link: "#",
    Icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        width={"20px"}
        height={"20px"}
        className="e-font-icon-svg e-fab-twitter"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
      </svg>
    ),
  },
  {
    link: "https://www.linkedin.com/company/lps-brands/",
    Icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        width={"20px"}
        height={"20px"}
        className="e-font-icon-svg e-fab-linkedin"
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
      </svg>
    ),
  },
];

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  let data = null;
  let error = null;

  try {
    const res = await fetch(
      `https://blog.xntric.me/api/v2/blog/${params.slug}`
    );

    if (!res.ok) {
      console.error(`Failed to load blog: ${res.status}`);
      error = "Blog not found.";
    } else {
      const { blog } = await res.json();

      data = blog;
    }
  } catch (err) {
    console.error("Blog fetch error:", err);
    error = "Failed to load blog content.";
  }

  // Generate table of contents dynamically
  const tableOfContents = [];
  if (data?.title) {
    tableOfContents.push({ id: "main-title", title: data?.title });
  }
  if (data?.subsections?.length > 0) {
    data?.subsections.forEach(
      (subsection: { subtitle: string }, index: number) => {
        if (subsection.subtitle) {
          tableOfContents.push({
            id: `subsection-${index}`,
            title: subsection.subtitle,
          });
        }
      }
    );
  }
  if (data?.conclusion) {
    tableOfContents.push({ id: "conclusion", title: "Conclusion" });
  }
  if (data?.faqs?.length > 0) {
    tableOfContents.push({ id: "faqs", title: "Frequently Asked Questions" });
  }

  return (
    <Wrapper>
      <div className="felx flex-col space-y-10">
        {/* Top Left LPS Logo */}
        <div className="flex justify-between items-center p-4 ">
          <LogoLPS />
          <MobileNavbar />
        </div>
        {/* FEATURED IMAGE  */}
        <Image
          src={`${data?.bannerImageURL}`}
          alt="LPS Logo"
          width={2000}
          height={2000}
          className="w-full h-full rounded-3xl "
        />
        <div>
          <div className="">
            <div className="lg:max-w-[100%] 2xl:max-w-[100%] w-full py-10  pt-0 pb-10 md:pb-5 space-y-4">
              <h1
                id="main-title"
                className="text-secondary font-['Exo'] leading-[34px] lg:leading-[46px] text-[30px] lg:text-[34px] font-semibold"
              >
                {data?.title}
              </h1>
              {data?.publishedDate && (
                <p className="text-secondary text-base md:text-[15px] font-medium font-['Exo'] flex items-center gap-2">
                  <Calendar size={16} className="mb-[2px]" />
                  {data?.publishedDate.slice(0, 10)}
                </p>
              )}
              <div className="bg-[#D9D9D9] w-fit px-4 py-1 rounded-full">
                {data?.category && (
                  <p className="text-secondary text-[15px] font-medium font-['Exo'] flex items-center gap-2">
                    {data?.category}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-6 pt-6">
                {socialLinks.map(({ Icon, link }, index) => (
                  <Link
                    key={index}
                    href={link}
                    target="_blank"
                    className=" rounded-full w-8 h-8 flex items-center justify-center text-white"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script
        id="schema-service-cloud"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Script
        id="schema-author"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            name: "Shaikh Zubaer Aasim",
          }),
        }}
      />

      <style>{`
        .blog-content a {
          color: #00FC09;
        }
        
        .table-of-contents {
          padding: 20px;
        }
        
        .table-of-contents h3 {
          font-size: 24px;
          font-weight: 700;
          color: #333;
          margin-bottom: 16px;
          border-bottom: 2px solid #e9ecef;
          padding-bottom: 8px;
        }
        
        .toc-list {
          list-style: none;
          border-left: 2px solid #00FC09; 
          padding: 0;
          margin: 0;
        }
        
        .toc-item {
          margin-bottom: 8px;
        }
        
        .toc-link {
          display: block;
          color: #101820;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 4px;
          transition: all 0.2s ease;
          font-weight: 500;
          line-height: 1.4;
        }
        
        .toc-link:hover {
          background-color: #00FC09;
          color: #000;
          transform: translateX(4px);
        }
        
        .toc-link.active {
          background-color: #00FC09;
          color: white;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Add scroll offset for fixed headers */
        [id] {
          scroll-margin-top: 100px;
        }
      `}</style>

      {data?.faqs?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: data?.faqs.map(
                (faq: { question: string; answer: string }) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })
              ),
            }),
          }}
        />
      )}

      <div className="font-['Asgard'] pt-34 ">
        {error ? (
          <div className="p-10 text-center text-secondary">{error}</div>
        ) : (
          <>
            <div className="">
              <div className="flex flex-col lg:flex-row gap-8">
                {tableOfContents.length > 0 && (
                  <div className="lg:w-[30%] lg:sticky lg:top-10 lg:self-start mt-">
                    <div className="table-of-contents">
                      <h3 className="text-center ">Table of Content</h3>
                      <ul className="toc-list">
                        {tableOfContents.map((item, index) => (
                          <li key={index} className="toc-item">
                            <Link
                              href={`#${item.id}`}
                              className="toc-link font-['Exo'] text-sm 2xl:text-lg"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="lg:w-[70%]">
                  <div className="md:px-6 pb-2 md:pb-12 py-12 md:pt-5 pt-2 space-y-8">
                    {data?.description && (
                      <div
                        className="text-[15px] lg:text-[18px] text-secondary font-['Exo'] font-medium blog-content"
                        dangerouslySetInnerHTML={{ __html: data?.description }}
                      />
                    )}

                    {data?.subsections?.map(
                      (
                        subsection: {
                          subtitle:
                            | string
                            | number
                            | bigint
                            | boolean
                            | ReactElement<
                                any,
                                string | JSXElementConstructor<any>
                              >
                            | Iterable<ReactNode>
                            | ReactPortal
                            | Promise<AwaitedReactNode>
                            | null
                            | undefined;
                          subdescription: any[];
                          lists: any[];
                        },
                        index: Key | null | undefined
                      ) => (
                        <div key={index} className="space-y-3">
                          {subsection.subtitle && (
                            <h2
                              id={`subsection-${index}`}
                              className="text-[20px] lg:text-[26px] text-secondary font-['Exo'] font-semibold leading-[30px] md:leading-[35px] lg:leading-[35px]"
                            >
                              {subsection.subtitle}
                            </h2>
                          )}
                          {subsection.subdescription?.map(
                            (desc: any, descIndex: Key | null | undefined) => (
                              <div
                                key={descIndex}
                                className="text-base  text-secondary font-['Exo'] font-medium blog-content"
                                dangerouslySetInnerHTML={{ __html: desc }}
                              />
                            )
                          )}
                          {subsection.lists?.map(
                            (
                              list: {
                                listTitle:
                                  | string
                                  | number
                                  | bigint
                                  | boolean
                                  | ReactElement<
                                      any,
                                      string | JSXElementConstructor<any>
                                    >
                                  | Iterable<ReactNode>
                                  | ReactPortal
                                  | Promise<AwaitedReactNode>
                                  | null
                                  | undefined;
                                listDescription: any;
                                items: any[];
                              },
                              listIndex: Key | null | undefined
                            ) => (
                              <div key={listIndex}>
                                <h3 className="text-xl lg:text-[20px] font-bold mb-2">
                                  <div
                                    className="blog-content"
                                    dangerouslySetInnerHTML={{
                                      __html: list.listTitle as string,
                                    }}
                                  />
                                </h3>
                                {list.listDescription && (
                                  <div
                                    className="blog-content mt-2"
                                    dangerouslySetInnerHTML={{
                                      __html: list.listDescription,
                                    }}
                                  ></div>
                                )}
                                {list.items?.length > 0 && (
                                  <ul className="list-disc pl-5 space-y-1">
                                    {list.items.map(
                                      (
                                        item: {
                                          title:
                                            | string
                                            | number
                                            | bigint
                                            | boolean
                                            | ReactElement<
                                                any,
                                                | string
                                                | JSXElementConstructor<any>
                                              >
                                            | Iterable<ReactNode>
                                            | ReactPortal
                                            | Promise<AwaitedReactNode>
                                            | null
                                            | undefined;
                                          description: any;
                                        },
                                        itemIndex: Key | null | undefined
                                      ) => (
                                        <li
                                          key={itemIndex}
                                          className="text-[15px]  text-secondary font-['Exo'] font-medium leading-[26px] lg:leading-[29px]"
                                        >
                                          <div
                                            className="blog-content"
                                            dangerouslySetInnerHTML={{
                                              __html: item.title as string,
                                            }}
                                          />
                                          {list.listDescription && (
                                            <div
                                              className="blog-content mt-2"
                                              dangerouslySetInnerHTML={{
                                                __html: item.description,
                                              }}
                                            ></div>
                                          )}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      )
                    )}

                    {data?.conclusion && (
                      <div className="space-y-3">
                        <h2
                          id="conclusion"
                          className="text-[25px] lg:text-[26px] font-semibold font-['Exo'] leading-[35px] lg:leading-[42px]"
                        >
                          Conclusion
                        </h2>
                        <div
                          className="text-base text-secondary font-['Exo'] font-medium blog-content"
                          dangerouslySetInnerHTML={{ __html: data?.conclusion }}
                        />
                      </div>
                    )}

                    {data?.faqs && data?.faqs.length > 0 && (
                      <div className="space-y-3">
                        <h2
                          id="faqs"
                          className="text-[18px] lg:text-[26px] font-['Exo'] font-semibold mb-2 leading-[35px] lg:leading-[42px]"
                        >
                          Frequently Asked Questions
                        </h2>
                        {data?.faqs.map(
                          (
                            faq: { question: string; answer: string },
                            index: number
                          ) => (
                            <div key={index} className="space-y-2">
                              <h3 className="text-[18px] lg:text-[19px] font-['Exo'] font-semibold  md:leading-[35px] lg:leading-[42px]">
                                {index + 1}. {faq.question}
                              </h3>
                              <div
                                className="text-base text-secondary font-['Exo'] font-medium blog-content"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                              />
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full border px-2 md:px-10 py-6 rounded-3xl my-10">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-start  gap-4">
                    <Image
                      src="/asim.webp"
                      alt="Shaikh zubaer Aasim"
                      width={100}
                      height={55}
                      className="rounded-full w-[55px] md:w-[100px] bg-center"
                    />
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="md:text-2xl font-bold ">
                          Shaikh Zubaer Aasim
                        </h4>
                        <div className="block">
                          <div className="w-fit h-fit bg-black rounded-[8px] p-1 ps-1">
                            <Link
                              target="_blank"
                              href="https://www.linkedin.com/in/aasimzshaikh"
                            >
                              <LinkedinIcon color="white" size={24} />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3 mt-6">
                        <p className="text-justify text-secondary font-['Exo'] text-[13px] md:text-base">
                          With over two decades of driving marketing
                          transformation across the GCC, Aasim brings a rare
                          blend of brand leadership, digital innovation, and
                          business foresight. He has demonstrated a unique
                          ability to align with evolving customer and market
                          demands whilst predicting and leading best practice in
                          digital and customer experiences.
                        </p>
                        <p className="text-justify text-secondary font-['Exo'] text-[13px] md:text-base">
                          His journey spans across building multi-million-dirham
                          portfolios, launching modern marketing campaigns,
                          building AI enablled Tech platforms and leading
                          award-winning teams across both client and agency
                          environments. His appointment to the MMA Board of
                          Director reinforces a larger belief: Modern marketing
                          demands more than strategy it demands ideas that are
                          unafraid to build what’s next.
                        </p>
                        <p className="text-justify text-secondary font-['Exo'] text-[13px] md:text-base">
                          His appointment to the MMA Board of Director
                          reinforces a larger belief:
                        </p>
                        <p className="text-justify text-secondary font-['Exo'] text-[13px] md:text-base">
                          Modern marketing demands more than strategy it demands
                          ideas that are unafraid to build what’s next.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <BlogsSection heading="Dicover Our Blogs" />
      </div>
    </Wrapper>
  );
}
