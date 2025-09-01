import ServicesHero from "@/components/careers/careers-hero";
import Wrapper from "@/components/layout/wrapper";
import BrandingStart from "@/components/services/branding-start";
import BuildingBrandsCards from "@/components/services/building-brands-cards";
import DisplayFeatured from "@/components/services/display-featured";
import ContactFormSection from "@/components/services/form";
import ProductionEvolutionSection from "@/components/services/production-evolution-section";
import Timeline from "@/components/services/time-line";
import Script from "next/script";

export const metadata = {
    title: "Event Management Dubai | Full-Service Event Solutions | LPS",
    description:
        "LPS offers event management in Dubai. From concept to execution, we create unforgettable experiences for live, hybrid, and digital events.",
    alternates: {
        canonical: "https://lps-me.com/services/event-management/",
    },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Event Management",
  description: "Crafting Experiences That Resonate Beyond the Moment",
  provider: {
    "@type": "Organization",
    name: "Event Management",
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

const Events = () => {
  return (
    <div>
      <Script
        id="schema-service-cloud"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ServicesHero
        heading="Event Management"
        highlight="Event Management"
        bottom={false}
      />
      <ProductionEvolutionSection
        title="Crafting Experiences That Resonate Beyond the Moment"
        highlight="Experiences"
        heading="Full-Spectrum Services with Cultural Precision"
        text={[
          "LPS combines creativity, technology, and execution into one immersive engine unlike conventional event management firms in Dubai. Our emphasis is on creating an experience that stays on hearts and headlines, not just on organising an event. From stadium-scale activations to private boardrooms, we create perfectly carried out events that mirror the voice, values, and vision of your company.",

          "We specialize in experiential marketing that blends digital and physical worlds. Think pop-ups, live installations, and multi-sensory showcases that drive connections. Whether you’re exploring event management companies near me or aiming to partner with a globally capable team, LPS is your one-stop solution for event management in Dubai.",
        ]}
        images={["/services/pe22.webp", "/services/pe23.webp"]}
      />
      <Timeline
        heading="Why LPS? A New-Age Partner for Event Management Dubai"
        text="From global product launches to exclusive VIP gatherings, our work reflects creative precision, emotional depth, and cultural fluency. Explore how we’ve helped clients go beyond the brief and into the hearts of their audience.
                <br /><br />
                We craft stories that move, moments that matter, and experiences that stay with people. 
                "
        timelineData={[
          {
            title: "Experience-First Event Architecture",
            description:
              "We craft event journeys from the audience’s perspective—mapping key moments, emotional triggers, and interactive elements that turn participation into passion.",
          },
          {
            title: "Immersive Brand Activations",
            description:
              "From pop-ups and showcases to live demos and installations, we turn brands into environments—blending physical presence with digital storytelling.",
          },
          {
            title: "Hybrid & Digital Amplification",
            description:
              "We design events that scale across platforms—integrating live streaming, social engagement, and influencer collaborations to extend reach far beyond the venue.",
          },
          {
            title: "End-to-End Strategy & Execution",
            description:
              "We manage every detail—from concept, scripting, and creative direction to logistics, tech, and production—ensuring seamless execution across all touchpoints.",
          },
        ]}
      />
      <BuildingBrandsCards
        heading="Our Process: Built for Impact, Designed for Emotion"
        para="Events at LPS are not one-off moments—they’re crafted to deliver emotional depth, cultural relevance, and long-term value."
        p1="We begin with brand and audience discovery—uncovering what matters most to your attendees and aligning it with your brand’s goals."
        p2="Strategy is mapped into a cohesive experience—from the invite to the post-event conversation—ensuring continuity and clarity at every stage."
        p3="We design every element—from scenic design and speaker flow to digital integrations and social storytelling—with precision and creativity."
      />
      <BrandingStart
        heading="The Power of Events Done Right"
        para="An exceptional event leaves an effect, not just meets expectations. It ties people emotionally, starts important business conversations, and turns attendees into devoted champions"
        para2="Live and hybrid events provide a special edge that no internet advertisement can match in the world of today, when people search for real, personal relationships. These activities foster trust, help to define your brand, and create tales that appeal and attract attention for long after. At LPS, we create amazing brand experiences that live on in memory and disseminate via media, not just plan events."
        image="/services/o11.webp"
      />
      <Wrapper>
        <div className="lg:py-16 pb-16">
          <h2 className="lg:text-6xl leading-[36px] text-[34px] md:text-4xl text-center font-bold">
            Let’s Build What’s Next in Live Experiences
          </h2>
          <p className="lg:text-xl max-w-5xl mx-auto font-medium text-center 2xl:mt-10 mt-5">
            From hybrid and digital experiences that span platforms to immersive
            brand activations combining digital and physical aspects, we make
            sure every moment captures the vision of your brand and interacts
            with the audience.
          </p>
          <p className="lg:text-xl max-w-5xl mx-auto font-medium text-center 2xl:mt-10 mt-5">
            We create flawless, powerful events whether it’s end-to-end
            production, where we manage every element from idea to execution, or
            strategic experience design, where every flow is customised to your
            aims. All set to create the most remarkable next event? Let’s create
            something remarkable together!
          </p>
        </div>
      </Wrapper>
      <DisplayFeatured text="Our impact speaks through the leaders we’ve shaped. From Fortune 500 executives to disruptive founders, public figures to policy shapers, our leadership branding work has turned personal stories into powerful movements." />
      <ContactFormSection />
    </div>
  );
};

export default Events;
