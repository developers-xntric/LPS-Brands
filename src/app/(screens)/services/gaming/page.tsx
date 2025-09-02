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
    title: "Gaming Experiences &amp; Activations | LPS",
    description:
        "Create immersive gaming experiences with LPS. From esports tournaments to gamified brand activations, we bring brands to life inside the gaming world.",
    alternates: {
        canonical: "https://lps-me.com/services/gaming-experiences/",
    },
};


const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gaming Experiences",
  description: "Where Brands Don’t Just Appear, They Play",
  provider: {
    "@type": "Organization",
    name: "Gaming Experiences",
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

const Gaming = () => {
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
        heading="Gaming Experiences"
        highlight="Gaming Experiences"
        bottom={false}
      />
      <ProductionEvolutionSection
        title="Where Brands Don’t Just Appear, They Play"
        highlight="They Play"
        heading="A 360° Ecosystem for Gaming Marketing"
        text={[
          "Modern gaming experiences define society, impact communities, and change dialogues. At LPS, we build immersive gaming experiences that transcend commercials into involvement. Whether via gamified touchpoints, live stream integrations, or esports events, we let companies live where gamers play, broadcast, and interact.",

          "We co-create with gamers; we do not just market to them. Our team creates real, creator-first, performance-led gaming activations that appeal to Gen Z, gaming communities, and competitive venues both. Our approach to gaming marketing is deeply rooted in cultural fluency. We understand how gamers think, share, and engage, and we help brands become part of that narrative.",
        ]}
        images={["/services/pe24.webp", "/services/pe25.webp"]}
      />
      <Timeline
        heading="Why Choose LPS for Gaming Experiences?"
        text="At LPS, our approach to gaming marketing is deeply rooted in cultural fluency. We understand how gamers think, share, and engage, and we help brands become part of that narrative. From custom-built gaming tournaments to interactive online gaming advertisements, we design every activation to be playable, shareable, and unforgettable.
                <br /><br />
                We blend storytelling, tech, and competition into a unified ecosystem where your brand doesn’t interrupt the game, it becomes part of it. 
                "
        timelineData={[
          {
            title: "Esports & Tournament Activations",
            description:
              "We design and manage competitive gaming experiences—from grassroots community tournaments to global showdowns—positioning your brand as part of the action, not just around it.",
          },
          {
            title: "Influencer & Streamer Collaborations",
            description:
              "We partner with creators on Twitch, YouTube, and beyond to develop branded streams, content integrations, and live experiences that deliver authenticity and audience trust.",
          },
          {
            title: "Gamified Brand Experiences",
            description:
              "From mobile games to branded leaderboards, we build interactive, gamified touchpoints that turn consumers into players—and players into superfans.",
          },
          {
            title: "Culturally Tuned Strategy & Execution",
            description:
              "Our insights team tracks trends, titles, and gamer behavior across platforms—ensuring every activation hits the right platform, at the right time, with the right energy.",
          },
        ]}
      />
      <BuildingBrandsCards
        heading="Our Process: Built for Immersion, Designed for Impact"
        para="Gaming at LPS is where creative storytelling meets competitive engagement. Our process ensures brands earn credibility in gaming culture—not just presence."
        p1="We begin by identifying your brand’s fit in the gaming universe—audience, genre, platform, and engagement potential."
        p2="Strategy is mapped to format—whether that’s a long-term creator collab, an esports partnership, or an interactive activation inside a game."
        p3="We work with gaming influencers, production teams, and developers to craft a story-first experience that feels native—not disruptive."
      />
      <BrandingStart
        heading="The Power of Gaming Activations"
        para="Gaming is the main stage; it is no more a subsidiary channel. The companies that succeed are those that engage actively because attention spans are moving to Twitch broadcasts and gaming conversations. Not just rent it, but at LPS we employ gaming activations to help companies occupy their spot in the game. Because when gamers play with you, they stay with you."
        para2="Let’s build next-gen gaming experiences, from console to cloud, tournaments to tokens. Whether you’re looking for video game advertising companies, creative strategy, or full-scale production, LPS brings your brand to life in the digital playground. From creator campaigns to large-scale gaming events, explore how we’ve helped brands dominate the game space with unforgettable activations and high-impact storytelling."
        image="/services/o12.webp"
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
            aims.All set to create the most remarkable next event? Let’s create
            something remarkable together!
          </p>
        </div>
      </Wrapper>
      <DisplayFeatured text="Our impact speaks through the leaders we’ve shaped. From Fortune 500 executives to disruptive founders, public figures to policy shapers, our leadership branding work has turned personal stories into powerful movements." />
      <ContactFormSection />
    </div>
  );
};

export default Gaming;
