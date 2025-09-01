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
    title: "Top Digital Marketing Services in Dubai | LPS",
    description:
        "Boost your brand visibility with cutting-edge digital marketing strategies tailored for real impact.",
    alternates: {
        canonical: "https://lps-me.com/services/digital-marketing/",
    },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Experiences",
  description: "Digital Marketing Services That Deliver Results",
  provider: {
    "@type": "Organization",
    name: "LPS Brands",
    url: "https://lps-me.com",
  },
  serviceType: "Digital Experiences",
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

const DigitalMarketing = () => {
  return (
    <div>
      <Script
        id="schema-service-cloud"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ServicesHero
        heading="Digital Experiences"
        highlight="Digital Experiences"
        bottom={false}
      />
      <ProductionEvolutionSection
        title="Digital Marketing Services That Deliver Results"
        highlight="Digital Marketing"
        heading="New Age is our Edge. 360 is our Craft."
        text={[
          "In today’s hyper-connected world, digital marketing services are not just a trend—they’re essential. At LPS Brands, we empower businesses with data-driven strategies designed to increase visibility, build trust, and drive measurable growth. Whether you’re a startup or an enterprise, our comprehensive digital marketing solutions ensure your brand stands out in a crowded digital landscape.",

          "As a leading digital partner, LPS Brands understands the regional market like no one else. Our digital marketing services in Dubai combine local insights with global best practices to craft campaigns that resonate. From SEO to paid ads, content creation to social media, we help you connect with your audience, wherever they are.",
        ]}
        images={["/services/pe18.webp", "/services/pe19.webp"]}
      />
      <Timeline
        heading="Full-Spectrum Digital Marketing Solutions"
        text="LPS Brands provides digital marketing services in UAE that are adaptive, agile, and aligned with your business goals. Whether you’re targeting local markets or scaling globally, our strategies are designed to grow with your brand."
        timelineData={[
          {
            title: "Insight-Driven Strategy & Planning",
            description:
              "We start with data but think beyond it. From behavioral analytics to competitive audits, we build strategies tailored to your goals, audiences, and performance gaps.",
          },
          {
            title: "Full-Funnel Media Execution",
            description:
              "From search to scroll to sale, we activate SEO, PPC, display, and paid social as a unified force—ensuring every dollar is tracked, optimized, and accountable.",
          },
          {
            title: "Omnichannel Experience Design",
            description:
              "We integrate content, media, UX, and automation into one digital ecosystem—creating cohesive, high-converting journeys across touchpoints.",
          },
          {
            title: "Real-Time Optimization & AI Insights",
            description:
              "We use AI-powered tracking, predictive analytics, and performance data to continually refine campaigns—so your digital presence evolves with every interaction.",
          },
        ]}
      />
      <BuildingBrandsCards
        heading="Our Approach: Designed for Impact, Driven by Insight"
        para="At LPS, digital marketing isn’t a one-and-done task, it’s a living, breathing cycle of discovery, action, and optimization. We don’t believe in set-it-and-forget-it. We believe in refining what works and reinventing what doesn’t."
        p1="We begin by auditing your digital footprint—identifying missed opportunities, audience behaviors, and competitive gaps."
        p2="Strategy is developed across organic and paid channels—mapping content, keywords, and campaigns to user intent and business goals."
        p3="Execution spans from ad creatives to landing pages, integrating copy, UX, and targeting for seamless user journeys."
      />
      <BrandingStart
        heading="The Value of Digital Done Right"
        para="In a world where attention is fleeting and competition is fierce, just being visible isn’t enough. Brands must resonate, across search engines, social feeds, and every digital touchpoint. When executed with strategy and precision, digital marketing goes beyond generating traffic. It builds credibility. It cultivates meaningful engagement. It transforms interest into trust and one-time clicks into long-term loyalty."
        para2="At LPS, our digital marketing services are engineered for real business outcomes. Whether it’s capturing high-value search intent, launching targeted campaigns, or fine-tuning your digital infrastructure, we focus on results that matter. Because we don’t just help brands get noticed. We help them make a lasting impression."
        image="/services/o9.webp"
      />
      <Wrapper>
        <div className="lg:py-16 pb-16">
          <h2 className="lg:text-6xl leading-[36px] text-[34px] md:text-4xl text-center font-bold">
            Let’s Shape the Future of Digital
          </h2>
          <p className="lg:text-xl max-w-5xl mx-auto font-medium text-center 2xl:mt-10 mt-5">
            Ready to grow faster, market smarter, and connect deeper? At LPS,
            we’re more than just a digital marketing provider, we’re your
            strategic growth partner. Every campaign we craft is rooted in
            insight, powered by creativity, and designed to feel personal,
            because today’s digital world demands more than just presence. It
            demands purpose. Let’s build a digital experience that earns trust,
            sparks engagement, and keeps people coming back.
          </p>
        </div>
      </Wrapper>
      <DisplayFeatured text="Our impact speaks through the leaders we’ve shaped. From Fortune 500 executives to disruptive founders, public figures to policy shapers, our leadership branding work has turned personal stories into powerful movements." />
      <ContactFormSection />
    </div>
  );
};

export default DigitalMarketing;
