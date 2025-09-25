import ServicesHero from "@/components/careers/careers-hero";
import Wrapper from "@/components/layout/wrapper";
import BrandingStart from "@/components/services/branding-start";
import BuildingBrandsCards from "@/components/services/building-brands-cards";
import DisplayFeatured from "@/components/services/display-featured";
import ContactFormSection from "@/components/services/form";
import ProductionEvolutionSection from "@/components/services/production-evolution-section";
import Timeline from "@/components/services/time-line";
import Script from "next/script";
import React from "react";

export const metadata = {
    title: "Short Form Videos for Bold Brand Stories",
    description:
        "Short Form Videos for Bold Brand StoriesBoost your brand with short form video production that grabs attention and drives results. Explore our creative and strategic video solutions at LPS.",
    alternates: {
        canonical: "https://lps-me.com/services/short-form-video/",
    },
};


const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Short-Form Video",
  description: "Let’s Create Content People Actually Want to Watch",
  provider: {
    "@type": "Organization",
    name: "LPS Brands",
    url: "https://lps-me.com",
  },
  serviceType: "Short-Form Video",
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

const schemaData2 = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://lps-me.com/services/short-form-video/",
      "url": "https://lps-me.com/services/short-form-video/",
      "name": "Short Form Videos for Bold Brand Stories",
      "isPartOf": {
        "@id": "https://lps-me.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://lps-me.com/services/short-form-video/#primaryimage"
      },
      "image": {
        "@id": "https://lps-me.com/services/short-form-video/#primaryimage"
      },
      "thumbnailUrl": "https://lps-me.com/services/pe16.webp",
      "datePublished": "2025-04-11T06:23:59+00:00",
      "dateModified": "2025-07-21T11:13:03+00:00",
      "description": "Boost your brand with short form video production that grabs attention and drives results. Explore our creative and strategic video solutions at LPS.",
      "breadcrumb": {
        "@id": "https://lps-me.com/services/short-form-video/#breadcrumb"
      },
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": [
            "https://lps-me.com/services/short-form-video/"
          ]
        }
      ]
    },
    {
      "@type": "ImageObject",
      "inLanguage": "en-US",
      "@id": "https://lps-me.com/services/short-form-video/#primaryimage",
      "url": "https://lps-me.com/services/pe16.webp",
      "contentUrl": "https://lps-me.com/services/pe16.webp"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://lps-me.com/services/short-form-video/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://lps-me.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://lps-me.com/services/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Short Form Videos for Bold Brand Stories"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://lps-me.com/#website",
      "url": "https://lps-me.com/",
      "name": "LPS Brands",
      "description": "",
      "publisher": {
        "@id": "https://lps-me.com/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://lps-me.com/?s={search_term_string}"
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            "valueRequired": true,
            "valueName": "search_term_string"
          }
        }
      ],
      "inLanguage": "en-US"
    },
    {
      "@type": "Organization",
      "@id": "https://lps-me.com/#organization",
      "name": "LPS Brands",
      "url": "https://lps-me.com/",
      "logo": {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "https://lps-me.com/lps-logo.webp",
        "url": "https://lps-me.com/lps-logo.webp",
        "contentUrl": "https://lps-me.com/lps-logo.webp",
        "width": 749,
        "height": 449,
        "caption": "LPS Brands"
      },
      "image": {
        "@id": "https://lps-me.com/lps-logo.webp"
      }
    }
  ]
}

const ShortFormVideo = () => {
  return (
    <div>
      <Script
        id="schema-service-cloud"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Script
        id="schema-service-cloud-2"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData2) }}
      />
      <ServicesHero
      id='test-privacy'
        heading="Short-Form Video"
        highlight="Short-Form Video"
        bottom={false}
      />
      <ProductionEvolutionSection
        title="Let’s Create Content People Actually Want to Watch"
        highlight="Want to Watch"
        heading="Accelerating Brand Engagement"
        text={[
          "Short form video creation is more than simply a content format in the digital era of today; it’s a potent instrument for audience engagement, brand amplification, and action driving force. Our area of expertise at LPS is creating platform-optimized, high-impact short form content meant for instant audience connection.",

          "Short form content agencies like LPS have approaches that are grounded on thorough knowledge of digital habits and cultural trends. Our method guarantees that every video we create feels rather than just looks good.",
        ]}
        images={["/services/pe16.webp", "/services/pe17.webp"]}
      />
      <Timeline
        heading="Why Choose Us for Your Short Form Video Needs?"
        text="At LPS, we bring creative vision, technical expertise, and a deep understanding of audience behavior to every project. With our short video production company, you can count on our seamless production process.
                <br /><br />
                Ready to get started? Whether you want to launch a campaign, scale your content strategy, or build long-term engagement, LPS is here to make your brand shine with TikTok video marketing, short form video ideas, and much more."
        timelineData={[
          {
            title: "Hook-First Storytelling",
            description:
              "We open strong and land harder—structuring content around compelling hooks, emotional triggers, and audience-specific insights to maximize retention and shareability.",
          },
          {
            title: "Platform-Native Creativity",
            description:
              "We tailor every frame to the ecosystem it lives in—optimizing for TikTok trends, Instagram pacing, YouTube Shorts rhythm, or LinkedIn storytelling without ever diluting your brand voice.",
          },
          {
            title: "Scroll-Linked Narrative Flow",
            description:
              "Our videos are more than just clips—they’re miniature brand stories. We create cohesion across posts, campaigns, and series to build recall, loyalty, and layered engagement.",
          },
          {
            title: "Creative x Production Synergy",
            description:
              "Our in-house strategists, editors, creators, and motion artists work as a single creative unit—delivering high-volume, high-quality short-form content at the speed your brand needs.",
          },
        ]}
      />
      <BuildingBrandsCards
        heading="Let’s Make Videos That Stop the Scroll and Spark Conversations"
        para="The traditional methods of brand communication no longer have the same effectiveness in today’s digital age. Short video storytelling by LPS flips the script, providing brands with an opportunity to convey their message in a way that feels organic and authentic to the platform it’s shared on."
        p1="We start by mapping content strategy to platform behavior—identifying what your audience watches, skips, and shares to inform ideation and tone."
        p2="Scripts, formats, and visuals are developed to match trending structures, while staying true to your campaign message and brand tone."
        p3="Filming and editing are approached with performance and pace in mind—balancing creative flair with algorithm-friendly structuring."
      />
      <BrandingStart
        heading="The Value of Short-Form Video Done Right"
        para="Short form videos have become one of the most effective tools for brands to stay relevant in a fast-moving digital landscape. As social media platforms evolve, users’ attention spans have become shorter, meaning content needs to engage quickly."
        para2="Short form videos leverage this by providing high-impact visuals, creative storytelling, and an authentic connection with the audience—all within seconds. This approach not only amplifies your brand’s visibility but also increases the likelihood of driving user action."
        image="/services/o8.webp"
      />
      <Wrapper>
        <div className="lg:py-16 pb-16">
          <h2 className="lg:text-6xl leading-[36px] text-[34px] md:text-4xl text-center font-bold">
            Let’s Create What’s Next—One Scroll at a Time
          </h2>
          <p className="lg:text-xl max-w-5xl mx-auto font-medium text-center 2xl:mt-10 mt-5">
            At LPS, we’re fluent in the speed of culture. Whether you’re
            building a brand from scratch or scaling content for growth, our
            short-form video teams are ready to script, shoot, edit, and deliver
            stories that connect on impact—and travel further.
          </p>
          <p className="lg:text-xl max-w-5xl mx-auto font-medium text-center 2xl:mt-10 mt-5">
            Because in a world that moves fast, the brands that win are the ones
            that speak in motion. Let’s create the content people actually want
            to watch. The kind that makes them stop, feel, and follow.
          </p>
        </div>
      </Wrapper>

      <DisplayFeatured text="Our impact speaks through the leaders we’ve shaped. From Fortune 500 executives to disruptive founders, public figures to policy shapers, our leadership branding work has turned personal stories into powerful movements." />
      <ContactFormSection />
    </div>
  );
};

export default ShortFormVideo;
