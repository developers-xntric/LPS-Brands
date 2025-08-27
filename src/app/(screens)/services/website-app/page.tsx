import ServicesHero from "@/components/careers/careers-hero";
import Wrapper from "@/components/layout/wrapper";
import BrandingStart from "@/components/services/branding-start";
import BuildingBrandsCards from "@/components/services/building-brands-cards";
import DisplayFeatured from "@/components/services/display-featured";
import ContactFormSection from "@/components/services/form";
import ProductionEvolutionSection from "@/components/services/production-evolution-section";
import Timeline from "@/components/services/time-line";
import Script from "next/script";

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

const WebApp = () => {
  return (
    <div>
      <Script
        id="schema-service-cloud"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ServicesHero
        heading="Website & App"
        highlight="Website & App"
        bottom={false}
      />
      <ProductionEvolutionSection
        title="Website Design and Development Services"
        highlight="Design and Development"
        heading="Full-Spectrum Website & App Solutions"
        text={[
          "Your digital platform is more than a brochure, it’s your frontline for interaction, sales, and brand perception. Whether you need website development services in Dubai or app design for global markets, LPS delivers solutions tailored to performance and scale.",

          "Whether you’re a startup or a legacy brand, our website development services in Dubai are built to meet the demands of today’s users and tomorrow’s innovations. We combine modern design with backend scalability to ensure your platform evolves with your audience.",
        ]}
        images={["/services/pe20.webp", "/services/pe21.webp"]}
      />
      <Timeline
        heading="Why Choose LPS for Website Design Services?"
        text="Your website or app isn’t just a tool, it’s a living digital product that should evolve with your user base. When done right, website design and development services turn casual users into brand loyalists and passive platforms into active growth engines."
        timelineData={[
          {
            title: "Experience Architecture & User Flow Strategy",
            description:
              "We map how people think, move, and convert—designing seamless experiences that reduce friction and boost interaction across every stage.",
          },
          {
            title: "Responsive, Scalable Design Systems",
            description:
              "From desktop to mobile to app, we build modular UI frameworks that are brand-consistent, tech-friendly, and performance-optimized.",
          },
          {
            title: "Human-Centered UX & UI Design",
            description:
              "We translate brand stories into intuitive interfaces—merging visual storytelling with usability, accessibility, and engagement.",
          },
          {
            title: "Custom Development & Platform Integration",
            description:
              "Whether it’s WordPress, Shopify, React, or native app builds—we code with scalability and flexibility in mind, integrating the right tech for long-term growth.",
          },
        ]}
      />
      <BuildingBrandsCards
        heading="Our Process: Built for Simplicity, Designed for Scalability"
        para="Our website and app development process combines discovery, design, and iteration—ensuring we build platforms that are easy to use, easy to scale, and impossible to ignore."
        p1="We begin with user research and experience audits—understanding who your users are, what they need, and how they behave across devices."
        p2="Strategy is translated into wireframes and prototypes—mapping out journeys, key actions, and user flows with clarity and intent."
        p3="Design is approached modularly—crafting clean UI components, scalable design systems, and brand-forward visual identities."
      />
      <BrandingStart
        heading="The Value of Experience Design Done Right"
        para="In today’s hyper connected digital world, your website or app is more than just a functional platform, it’s your brand’s first impression, digital storefront, and long-term growth engine. When website design and development are done right, your platform becomes a living, breathing experience that goes beyond aesthetics and clicks."
        para2="Good design tells a story. Great design lives your brand values in every interaction. From typography and color to motion and layout, we create digital products that embody your identity and connect emotionally with your audience."
        image="/services/o10.webp"
      />
      <Wrapper>
        <div className="lg:py-16 pb-16">
          <h2 className="lg:text-6xl leading-[36px] text-[34px] md:text-4xl text-center font-bold">
            Ready to Launch or Level Up?
          </h2>
          <p className="lg:text-xl max-w-5xl mx-auto font-medium text-center 2xl:mt-10 mt-5">
            When your digital product is built with the user in mind and the
            future in focus, you see results, lower bounce rates, longer session
            times, higher conversion rates, and ultimately, more value for your
            investment.
          </p>
          <p className="lg:text-xl max-w-5xl mx-auto font-medium text-center 2xl:mt-10 mt-5">
            At LPS, we don’t just build websites. We engineer experiences,
            architect platforms, and craft digital journeys that last beyond the
            scroll.
          </p>
        </div>
      </Wrapper>
      <DisplayFeatured text="Our impact speaks through the leaders we’ve shaped. From Fortune 500 executives to disruptive founders, public figures to policy shapers, our leadership branding work has turned personal stories into powerful movements." />
      <ContactFormSection />
    </div>
  );
};

export default WebApp;
