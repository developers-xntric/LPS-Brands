import { ArticlesCarousel } from "@/components/home/article-slider";
import BlogsSection from "@/components/home/blog-section";
import FAQSection from "@/components/home/faqs";
import FeaturedWorks from "@/components/home/featured-work";
import GlobalPresence from "@/components/home/global-presense";
import HeroSection from "@/components/home/hero";
import Industries from "@/components/home/industries";
import { MeetThePears } from "@/components/home/meet-the-pears";
import Wrapper from "@/components/layout/wrapper";
import Script from "next/script";


const faqs = [
  {
    question: "Why is LPS considered the best digital marketing agency in UAE?",
    answer:
      "LPS stands out for its data-driven strategies, creative execution, and 360° impact approach being the best digital marketing agency in UAE, helping brands grow through tailored digital solutions in the UAE and beyond.",
  },
  {
    question: "What services does LPS offer?",
    answer:
      "We offer a full suite of services including digital marketing, branding, public relations, illustration, content creation, process optimization, and strategic consulting.",
  },
  {
    question: "Does LPS handle both local and international brands?",
    answer:
      "Yes, LPS works with a wide range of clients, local startups to global enterprises, delivering strategies that align with regional markets and global ambitions.",
  },
  {
    question: "How does LPS approach brand storytelling?",
    answer:
      "We use a proven brand story framework that crafts emotionally resonant narratives, ensuring your brand connects deeply with your audience in just 30 seconds.",
  },
  {
    question: "Can I consult LPS for PR strategy only?",
    answer:
      "Absolutely. Our PR team specializes in creating proactive and crisis-ready strategies that enhance your brand’s visibility, credibility, and long-term reputation.",
  },
  {
    question: "What industries does LPS specialize in?",
    answer:
      "LPS has worked across various industries including retail, tech, healthcare, real estate, fashion, and lifestyle, delivering personalized strategies for each sector.",
  },
  {
    question: "How can I get started with LPS?",
    answer:
      "You can reach out via our Contact Us page or visit our office to book a discovery session where we understand your goals and tailor a plan accordingly.",
  },
]

export const metadata = {
  title: "LPS is a New-Age 360° Full-Impact Marketing Agency",
  description:
    "LPS is a New-Age 360° full-impact marketing agency, building identities, communications & digital experiences for modern brands with measurable impact.",
  alternates: {
    canonical: "https://lps-me.com/",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website & App",
  description: "Website Design and Development Services",
  provider: {
    "@type": "Organization",
    name: "LPS Brands",
    url: "https://lps-me.com",
  },
  serviceType: "Website & App",
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "53",
    bestRating: "7",
    worstRating: "1",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "LPS Brands",
      url: "https://lps-me.com/",
      "@id": "https://lps-me.com/",
      aggregateRating: {
        url: "https://lps-me.com/",
        reviewCount: "124",
        name: "LPS is a New-Age 360° Full-Impact Marketing Agency",
        isPartOf: { "@id": "https://lps-me.com/" },
      },
      about: { "@id": "https://lps-me.com/" },
      primaryImageOfPage: { "@id": "https://lps-me.com/" },
      image: { "@id": "https://lps-me.com/" },
      thumbnailUrl: "https://lps-me.com/hero-gif.gif",
      datePublished: "2025-01-03T07:49:28+00:00",
      dateModified: "2025-08-29T11:50:56+00:00",
      description:
        "LPS is a New-Age 360° full-impact marketing agency, building identities, communications & digital experiences for modern brands with measurable impact.",
      breadcrumb: { "@id": "https://lps-me.com/" },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://lps-me.com/"],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://lps-me.com/",
      url: "https://lps-me.com/hero-gif.gif",
      contentUrl: "https://lps-me.com/hero-gif.gif",
      width: 2128,
      height: 1220,
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://lps-me.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://lps-me.com/#website",
      url: "https://lps-me.com/",
      name: "LPS Brands",
      description: "",
      publisher: { "@id": "https://lps-me.com/#organization" },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://lps-me.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://lps-me.com/",
      name: "LPS Brands",
      url: "https://lps-me.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://lps-me.com/",
        url: "https://lps-me.com/",
        contentUrl: "https://lps-me.com/",
        width: 749,
        height: 449,
        caption: "LPS Brands",
      },
      image: { "@id": "https://lps-me.com" },
    },
  ],
};

export interface BlogPost {
  id: string;
  _id?: string;
  title: string;
  image: string;
  readMore: string;
  slug: string;
  blogCategory: string;
}

export default async function Home() {
  const res = await fetch("https://blog.xntric.me/api/v2/blogs", {
    next: { revalidate: 60 },
  });
  const { blogs } = await res.json();

  const mappedPosts = blogs.map((blog: {
    _id: string,
    slug: string,
    title: string,
    bannerImageURL: string,
    blogCategory: string,
  }) => ({
    id: blog._id || blog.slug,
    title: blog.title,
    slug: blog.slug,
    image: blog.bannerImageURL || "/default-blog-image.jpg",
    readMore: "Read More",
    _id: blog._id,
    blogCategory: blog.blogCategory,
  }));


  const filteredPosts = mappedPosts.filter(
    (post: BlogPost) => post.blogCategory?.toLowerCase() === "lps"
  );
  return (
    <div>
      <Script
        id="Schema"
        type="application/ld+json"
        // Use JSON.stringify to safely inject the schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <Script
        id="schema-service-cloud"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <HeroSection />
      <FeaturedWorks />
      <GlobalPresence />
      <Industries />
      <MeetThePears />
      <ArticlesCarousel />
      <Wrapper>
        <BlogsSection isVideos={true} posts={filteredPosts} />
      </Wrapper>
      <FAQSection />
    </div>
  );
}
