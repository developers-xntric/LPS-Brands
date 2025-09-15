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
  title: "Top Influencer Marketing Agency in Dubai | LPS",
  description:
    "LPS is a leading influencer marketing agency in Dubai. We build authentic creator partnerships that drive impact, build trust, and grow your brand.",
  alternates: {
    canonical: "https://lps-me.com/services/influencer-marketing/",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Influencer Marketing",
  description:
    "Influencer Marketing Agency that Builds Brands Through Authentic Influence",
  provider: {
    "@type": "Organization",
    name: "LPS Brands",
    url: "https://lps-me.com",
  },
  serviceType: "Influencer Marketing",
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

const Influencers = () => {
  return (
    <div>
      <Script
        id="schema-service-cloud"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ServicesHero
      id='test-privacy'
        heading="Influencer Marketing"
        highlight="Influencer Marketing"
        bottom={false}
      />
      <ProductionEvolutionSection
        title="Influencer Marketing Agency that Builds Brands Through Authentic Influence"
        highlight="Influencer Marketing"
        heading="Influencer Marketing with Cultural Precision"
        text={[
          "Every click matters in the digital era and the correct voice may change society. LPS, a forward-looking influencer marketing company, uses creators who inspire, interact, and convert to let businesses create lasting relationships. Whether your brand is developing, a product is being introduced, or you are increasing reach, our influencer tactics are based on authenticity and scalable for effect.",

          "New-age influencers are digital entrepreneurs, brand storytellers, and community leaders, not just content makers. We don’t just link companies to influencers. We build relationships anchored in common values, natural storytelling, and enduring influence. Redefining this impact, it becomes strategic, credible, and community-first.",
        ]}
        images={["/services/pe13.webp", "/services/pe14.webp"]}
      />
      <Timeline
        heading="Why LPS Is a Leading Influencer Marketing Agency in Dubai"
        text="Influencer marketing is treated at LPS as a cultural catalyst rather than as a content source. Being a specialist influencer marketing firm in Dubai, we know the value of local knowledge, narrative, and creator-driven content.
                <br/> <br/>
                Our team located in Dubai combines localized knowledge with worldwide strategy to make sure your message reaches the right people on the correct platform at the correct time.
                "
        timelineData={[
          {
            title: "Community-Driven Matchmaking",
            description:
              "We go beyond follower counts—aligning brands with influencers who share their values, speak their language, and move their audience from passive to passionate.",
          },
          {
            title: "Native Platform Fluency",
            description:
              "We tailor influencer content to feel seamless and contextual—whether it’s a TikTok transition, a long-form YouTube review, or a quiet LinkedIn perspective that sparks industry buzz.",
          },
          {
            title: "Narrative-Led Collaborations",
            description:
              "Each campaign is anchored in story. We build influencer partnerships around authentic narratives that audiences trust—bridging brand goals with personal voice.",
          },
          {
            title: "Influencer Identity Crafting",
            description:
              "From content strategy to visual styling, we work with influencers to elevate their personal brand—ensuring they show up not just as creators, but as thought leaders in their niche.",
          },
        ]}
      />
      <BuildingBrandsCards
        heading="Our Process: Rooted in Authenticity, Designed for Impact"
        para="Influencer marketing at LPS is intentional, iterative, and insight-led. We develop partnerships that grow with time, campaigns that create cultural ripple effects, and creators who evolve into brand allies."
        p1="A narrative-led campaign strategy is developed—integrating brand storylines with creator authenticity to produce content that feels organic, not transactional."
        p2="Whether it's social-first, filmic, or vertical content, we tailor our craft to suit the medium—maximizing engagement where it matters."
        p3="We support content creation through creative direction, visual development, and cross-platform strategy—ensuring every collaboration is high-quality, high-relevance, and high-impact."
      />
      <BrandingStart
        heading="The Power of Influence Done Right"
        para="Our work spans micro-influencer activations, long-term ambassador programs, and product seeding to full-scale campaigns. Whether you need influencer marketing in Dubai or across the region, we bring storytelling, data, and design together for maximum brand lift."
        para2="We think of creators as co-strategists rather than as content providers, hence arming them Our staff enhances their work by supporting them with expert content planning, style, and technical direction, that which fits your brand objectives."
        image="/services/o6.webp"
      />
      <Wrapper>
        <div className="lg:py-16 pb-16">
          <h2 className="lg:text-6xl leading-[36px] text-[34px] md:text-4xl text-center font-bold">
            Let’s Build Influence That Lasts
          </h2>
          <p className="lg:text-xl max-w-5xl mx-auto font-medium text-center 2xl:mt-10 mt-5">
            Looking for an influencer marketing agency that doesn’t just follow
            trends, but creates them? Let’s collaborate. Get in touch to build
            your next creator-powered campaign.
          </p>
        </div>
      </Wrapper>
      <DisplayFeatured text="Our impact speaks through the leaders we’ve shaped. From Fortune 500 executives to disruptive founders, public figures to policy shapers, our leadership branding work has turned personal stories into powerful movements." />
      <ContactFormSection />
    </div>
  );
};

export default Influencers;
