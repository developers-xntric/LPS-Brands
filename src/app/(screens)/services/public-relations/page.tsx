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
  title: "Award-Winning PR Agency in Dubai, UAE | LPS",
  description:
    "LPS is an award-winning PR agency in Dubai, UAE offering strategic public relations and digital media solutions that drive visibility.",
  alternates: {
    canonical: "https://lps-me.com/services/public-relations/",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Public Relations",
  description: "Trusted Public Relations Agency for Regional & Global Brands",
  provider: {
    "@type": "Organization",
    name: "LPS Brands",
    url: "https://lps-me.com",
  },
  serviceType: "Public Relations",
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
      "@id": "https://lps-me.com/services/public-relations/",
      "url": "https://lps-me.com/services/public-relations/",
      "name": "Award-Winning PR Agency in Dubai, UAE | LPS",
      "isPartOf": {
        "@id": "https://lps-me.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://lps-me.com/services/public-relations/#primaryimage"
      },
      "image": {
        "@id": "https://lps-me.com/services/public-relations/#primaryimage"
      },
      "thumbnailUrl": "https://lps-me.com/services/pe7.webp",
      "datePublished": "2025-04-09T10:46:41+00:00",
      "dateModified": "2025-07-21T11:14:21+00:00",
      "description": "LPS is an award-winning PR agency in Dubai, UAE offering strategic public relations and digital media solutions that drive visibility.",
      "breadcrumb": {
        "@id": "https://lps-me.com/services/public-relations/#breadcrumb"
      },
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": [
            "https://lps-me.com/services/public-relations/"
          ]
        }
      ]
    },
    {
      "@type": "ImageObject",
      "inLanguage": "en-US",
      "@id": "https://lps-me.com/services/public-relations/#primaryimage",
      "url": "https://lps-me.com/services/pe7.webp",
      "contentUrl": "https://lps-me.com/services/pe7.webp",
      "width": 1295,
      "height": 780
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://lps-me.com/services/public-relations/#breadcrumb",
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
          "name": "Public Relations"
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
      "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971 54 308 9222",
    "contactType": "sales",
    "areaServed": "AE",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/lpsbrands",
    "https://www.instagram.com/lps.brands/",
     "https://ae.linkedin.com/company/lps-brands",
     "https://www.youtube.com/channel/UC3D2a1-SVRq5GTsSajcCtpA",
  ]

    }
  ]
}


const PublicRelations = () => {
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
        id="test-privacy"
        heading="Public Relations"
        highlight="Public Relations"
        bottom={false}
      />
      <ProductionEvolutionSection
        title="Trusted Public Relations Agency for Regional & Global Brands"
        highlight="Public Relations"
        heading="Services That Go Beyond Traditional PR"
        text={[
          "LPS, a forward-looking PR firm, develops brands people trust and discuss by combining media knowledge, strategy, and narrative. Public opinion may be formed in seconds in the hyperconnected world of today, hence we create deliberate, consistent, and interesting stories that stick out, start a discussion. Whether you run a heritage brand, a scale-up, or a startup, we provide complete solutions that enable you to lead with influence.",

          "LPS is the strategic voice for your business, not simply another PR firm in Dubai. Every project our team does combines regional richness, global perspective, and journalistic sensibility. From media relations to reputation management, we help you create and control the story before someone else does.",
        ]}
        images={["/services/pe7.webp", "/services/pe8.webp"]}
      />
      <Timeline
        heading="Why LPS is the Preferred PR Agency in Dubai"
        text="From regional connections to worldwide reputation growth we have guided companies at all levels in increasing their visibility and significance. Being a reputable public relations firm, we provide both audacious ideas and executional quality, building momentum that counts.
                <br/><br/>
                LPS is the PR firm to guide you in leading the discussion whether your goals are to update your story, negotiate a PR crisis, or establish household name."
        timelineData={[
          {
            title: "Audience-First Storytelling",
            description:
              "We embed ourselves in your brand culture and your audience’s digital spaces, ensuring your story feels as authentic in a tweet as it does in a media briefing.",
          },
          {
            title: "Platform-Ready Messaging",
            description:
              "We tailor messaging across platforms—from an Instagram carousel series for consumers to a LinkedIn article for investors to a Reddit AMA with your founder.",
          },
          {
            title: "Full-Funnel Social Strategy",
            description:
              "Our approach connects the dots across awareness, engagement, and conversion—building social journeys that are as creatively rich as they are commercially effective.",
          },
          {
            title: "Multi-Tier Distribution",
            description:
              "We blend earned media, digital PR, influencer relations, and social listening to shape visibility that turns heads—and shifts perception.",
          },
        ]}
      />
      <BuildingBrandsCards
        heading="Ready to Start a Powerful PR Journey?"
        para="Let us create a story that links, a reputation that stands the test, and a presence that rules. Your next headline begins here, with LPS, the PR agency in Dubai delivering with intent and impact."
        t1="Story-Driven, Platform-Ready Content"
        p1="We craft narratives—from origin stories to bold vision pieces—tailored for the platforms where your audience engages most."
        t2="End-to-End Activation"
        p2="From creator partnerships to digital events and press moments, we roll out campaigns that earn attention and drive meaningful traction."
        t3="Agile Monitoring & Response"
        p3="With real-time sentiment tracking and rapid response strategies, we help you lead conversations and adapt with confidence."
      />
      <BrandingStart
        heading="The Real Impact of Real-Time PR"
        para="Modern brands are created in scrolls, shares, and tales; they are not created behind closed doors. PR is not optional in a world where a swipe defines the pace. It’s vital. When done well, public relations builds trust rather than just generates headlines."
        para2="It increases cultural relevance, shapes leadership, and transforms visibility into ongoing impact. Whether you’re managing a reputation storm, guiding public opinion, or launching the next great app, PR is no longer a department. That is your front line."
        image="/services/o3.webp"
      />
      <Wrapper>
        <div className="lg:py-16 pb-16">
          <h2 className="lg:text-6xl leading-[36px] text-[34px] md:text-4xl text-center font-bold">
            Shape Narratives. Spark Movements. Stay Remembered.
          </h2>
          <p className="lg:text-xl max-w-5xl mx-auto font-medium text-center 2xl:mt-10 mt-5">
            platform first, audience-obsessed, and culturally tailored. We
            create narratives that rule headlines, dialogues that challenge
            preconceptions, and visibility supporting value. Because the
            strongest message people remember, repeat, and gather around in
            today’s environment shapes everything.
          </p>
          <p className="lg:text-xl max-w-5xl mx-auto font-medium text-center 2xl:mt-10 mt-5">
            Let us create the type of impact that transcends the trend and
            reverberates louder than any news.
          </p>
        </div>
      </Wrapper>
      <DisplayFeatured text="LPS isn’t just about filming—it’s about creating immersive brand experiences that shape perceptions and drive engagement. We believe that in today’s landscape, content should be built for community resonance, native platform storytelling, and cross-format integration. Our forward-thinking methodology ensures that your content isn’t just seen but truly felt." />
      <ContactFormSection />
    </div>
  );
};

export default PublicRelations;
