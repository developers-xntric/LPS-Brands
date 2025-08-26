/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import BlogsSection from "@/components/home/blog-section";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  Key,
} from "react";
import LogoLPS from "@/components/icons/lps-logo";
import Wrapper from "@/components/layout/wrapper";

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
        <div className="pt-4 pb-10">
          <LogoLPS />
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
            <div className="lg:max-w-[72%] 2xl:max-w-[60%] py-10 space-y-4">
              <h1
                id="main-title"
                className="text-secondary font-['Exo'] leading-[34px] lg:leading-[56px] text-[30px] lg:text-[46px] font-semibold"
              >
                {data?.title}
              </h1>
              {data?.publishedDate && (
                <p className="text-secondary text-[15px] font-medium font-['Exo'] flex items-center gap-2">
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
                  <div className="lg:w-[30%] lg:sticky lg:top-20 lg:self-start mt-10">
                    <div className="table-of-contents">
                      <h3>Table of Content</h3>
                      <ul className="toc-list">
                        {tableOfContents.map((item, index) => (
                          <li key={index} className="toc-item">
                            <Link href={`#${item.id}`} className="toc-link font-['Exo'] 2xl:text-lg">
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="lg:w-[70%]">
                  <div className="md:px-6 pb-2 md:pb-12 py-12 space-y-12">
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
                        <div key={index} className="space-y-8">
                          {subsection.subtitle && (
                            <h2
                              id={`subsection-${index}`}
                              className="text-[25px] lg:text-[36px] text-secondary font-['Exo'] font-semibold leading-[35px] lg:leading-[35px]"
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
                                <h3 className="text-xl lg:text-2xl font-bold mb-2">
                                  {list.listTitle}
                                </h3>
                                {list.listDescription && (
                                  <div
                                    className="text-base  text-secondary font-['Exo'] font-medium mb-4 blog-content"
                                    dangerouslySetInnerHTML={{
                                      __html: list.listDescription,
                                    }}
                                  />
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
                                          className="text-[15px]  text-secondary font-['Exo'] font-medium leading-[35px] lg:leading-[29px]"
                                        >
                                          {item.title}
                                          {item.description && (
                                            <div
                                              className="text-base text-secondary font-['Exo'] font-medium mt-4 blog-content"
                                              dangerouslySetInnerHTML={{
                                                __html: item.description,
                                              }}
                                            />
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
                      <div className="space-y-8">
                        <h2
                          id="conclusion"
                          className="text-[25px] lg:text-[36px] font-semibold font-['Exo'] leading-[35px] lg:leading-[42px]"
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
                      <div className="space-y-6">
                        <h2
                          id="faqs"
                          className="text-[20px] lg:text-[30px] font-['Exo'] font-semibold mb-2 leading-[35px] lg:leading-[42px]"
                        >
                          Frequently Asked Questions
                        </h2>
                        {data?.faqs.map(
                          (
                            faq: { question: string; answer: string },
                            index: number
                          ) => (
                            <div key={index} className="space-y-2">
                              <h3 className="text-[18px] lg:text-[23px] font-['Exo'] font-semibold leading-[35px] lg:leading-[42px]">
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
              <div className="w-full border  px-10 py-6 rounded-3xl my-10">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/asim.webp"
                      alt="Shaikh zubaer Aasim"
                      width={100}
                      height={55}
                      className="rounded-full bg-center"
                    />
                    <h4 className="md:text-2xl ">Shaikh Zubaer Aasim</h4>
                  </div>
                  <div>
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
                <div className="space-y-3">
                  <p className="text-justify text-secondary font-['Exo'] text-sm md:text-base">
                    With over two decades of driving marketing transformation
                    across the GCC, Aasim brings a rare blend of brand
                    leadership, digital innovation, and business foresight. He
                    has demonstrated a unique ability to align with evolving
                    customer and market demands whilst predicting and leading
                    best practice in digital and customer experiences.
                  </p>
                  <p className="text-justify text-secondary font-['Exo'] text-sm md:text-base">
                    His journey spans across building multi-million-dirham
                    portfolios, launching modern marketing campaigns, building
                    AI enablled Tech platforms and leading award-winning teams
                    across both client and agency environments. His appointment
                    to the MMA Board of Director reinforces a larger belief:
                    Modern marketing demands more than strategy it demands ideas
                    that are unafraid to build what’s next.
                  </p>
                  <p className="text-justify text-secondary font-['Exo'] text-sm md:text-base">
                    His appointment to the MMA Board of Director reinforces a
                    larger belief:
                  </p>
                  <p className="text-justify text-secondary font-['Exo'] text-sm md:text-base">
                    Modern marketing demands more than strategy it demands ideas
                    that are unafraid to build what’s next.
                  </p>
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
