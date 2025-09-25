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
    title: "Gen AI Services | Strategic Generative AI Solutions by LPS",
    description:
        "Unlock future-ready solutions with LPS Gen AI. From content creation to marketing automation, we power growth with generative AI that thinks like your brand.",
    alternates: {
        canonical: "https://lps-me.com/services/gen-ai/",
    },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gen AI Solutions",
  description: "Intelligence that Creates. Imagination that Scales",
  provider: {
    "@type": "Organization",
    name: "LPS Brands",
    url: "https://lps-me.com",
  },
  serviceType: "Gen AI Solutions",
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

const schemaData2 ={
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://lps-me.com/services/gen-ai/",
      "url": "https://lps-me.com/services/gen-ai/",
      "name": "Gen AI Services | Strategic Generative AI Solutions by LPS",
      "isPartOf": {
        "@id": "https://lps-me.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://lps-me.com/services/gen-ai/#primaryimage"
      },
      "image": {
        "@id": "https://lps-me.com/services/gen-ai/#primaryimage"
      },
      "thumbnailUrl": "https://lps-me.com/wp-content/uploads/2025/04/np_AI-in-Business_-Unlocking-Success_5oDeB8_free.png",
      "datePublished": "2025-04-11T06:15:50+00:00",
      "dateModified": "2025-07-21T11:13:32+00:00",
      "description": "Unlock future-ready solutions with LPS Gen AI. From content creation to marketing automation, we power growth with generative AI that thinks like your brand.",
      "breadcrumb": {
        "@id": "https://lps-me.com/services/gen-ai/#breadcrumb"
      },
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": [
            "https://lps-me.com/services/gen-ai/"
          ]
        }
      ]
    },
    {
      "@type": "ImageObject",
      "inLanguage": "en-US",
      "@id": "https://lps-me.com/services/gen-ai/#primaryimage",
      "url": "https://lps-me.com/wp-content/uploads/2025/04/np_AI-in-Business_-Unlocking-Success_5oDeB8_free.png",
      "contentUrl": "https://lps-me.com/wp-content/uploads/2025/04/np_AI-in-Business_-Unlocking-Success_5oDeB8_free.png"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://lps-me.com/services/gen-ai/#breadcrumb",
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
          "name": "Gen AI Solutions"
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
        "@id": "https://lps-me.com/#/schema/logo/image/",
        "url": "https://lps-me.com/lps-logo.webp",
        "contentUrl": "https://lps-me.com/lps-logo.webp",
        "width": 749,
        "height": 449,
        "caption": "LPS Brands"
      },
      "image": {
        "@id": "https://lps-me.com/#/schema/logo/image/"
      }
    }
  ]
}

const GenerativeAI = () => {
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
        heading="Gen AI Solutions"
        highlight="Gen AI Solutions"
        bottom={false}
      />
      <ProductionEvolutionSection
        title="Intelligence that Creates. Imagination that Scales"
        highlight="Imagination"
        heading="Gen AI with Soul, Scale, and Strategy"
        text={[
          "At LPS, we go beyond plug-and-play AI. Our custom-built Gen AI ecosystems are integrated thoughtfully and ethically across your business. Our Gen AI solutions at LPS are meant to magnify human potential rather than just automate.We enable companies to use disruptive technology as a competitive advantage as the world adopts Generative AI. Our Gen AI solutions think fast, act smart, and feel human, from creating customized content to driving improved customer experiences to unearthing predictive insights.Let’s build a system that doesn’t just respond to change, It leads it.",

          " ",
        ]}
        images={["/services/pe15.webp", null]}
      />
      <Timeline
        heading="Why LPS? Why Gen AI, Why Now?"
        text="In a world where speed meets narrative, we make sure your brand stays current, flexible, and aggressively futuristic. At LPS, we think the innovators of today are the finest brands of tomorrow. Whether your interest is in Gen AI use cases in marketing or ready to include generative AI into your content ecosystem, we are your friend in creating a smarter, more human digital future.
                <br/>
                Ready to explore what Gen AI can do for your brand?"
        timelineData={[
          {
            title: "Insight-Led AI Integration",
            description:
              "We start by understanding your workflows, audiences, and goals—so our AI tools align not just with what you do, but how and why you do it.",
          },
          {
            title: "Humanised Machine Intelligence",
            description:
              "From smart content and ad copy to chatbot scripts and visual generation, every AI output is refined to carry your tone, values, and context—keeping the brand soul intact.",
          },
          {
            title: "Omnichannel Deployment",
            description:
              "We deploy Gen AI across platforms—from content generation and campaign automation to customer service, UX, and design—ensuring performance across every touchpoint.",
          },
          {
            title: "Ethical + Evolving Systems",
            description:
              "Our AI is trained for accuracy, inclusivity, and responsibility—built with continuous learning loops and guided by both data integrity and creative intuition.",
          },
        ]}
      />
      <BuildingBrandsCards
        heading="Our Process: Built for Precision, Powered by Possibility"
        para="Generative AI at LPS is guided by insight and engineered for impact. Every solution is designed to be intelligent, intuitive, and integrative—enhancing human potential while future-proofing your operations."
        p1="We begin with brand discovery and workflow mapping—identifying where AI can provide lift, speed, and creativity without compromising consistency."
        p2="Our AI strategy aligns with your objectives—whether that’s content scale, faster ideation, or personalization at speed—so the tech stays in service of the story."
        p3="We develop, fine-tune, and implement AI tools—from writing assistants to creative generators—embedding your tone, ethics, and user needs throughout."
      />
      <BrandingStart
        heading="The Value of Gen AI Done Right"
        para="We strongly believe that marketing is no longer one-size-fits-all. Our Gen AI marketing systems personalize, predict, and perform, turning raw data into real-time creative strategies. Whether it’s dynamic ad copy, adaptive email flows, or A/B tested scripts, we help your brand speak directly to each segment."
        para2="From blogs to banners, captions to campaigns, our generative AI tools help you scale high-performing content across all platforms."
        image="/services/o7.webp"
      />
      <Wrapper>
        <div className="lg:py-16 pb-16">
          <h2 className="lg:text-6xl leading-[36px] text-[34px] md:text-4xl text-center font-bold">
            Let’s Talk AI!
          </h2>
          <p className="lg:text-xl max-w-5xl mx-auto font-medium text-center 2xl:mt-10 mt-5">
            Generative AI is not replacing humans. It’s enhancing them. By
            embedding intelligence into every layer of your brand operations.
            Ready to explore what Gen AI can do for your brand? We’re just one
            click away!
          </p>
        </div>
      </Wrapper>
      <DisplayFeatured text="Our impact speaks through the leaders we’ve shaped. From Fortune 500 executives to disruptive founders, public figures to policy shapers, our leadership branding work has turned personal stories into powerful movements." />
      <ContactFormSection />
    </div>
  );
};

export default GenerativeAI;
