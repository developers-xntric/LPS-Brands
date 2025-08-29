import ListingSecond from "@/components/services/listing-second";
import ServiceListingHero from "@/components/services/service-listing-hero";
import { ServiceAccordian } from "@/components/services/services-accordian";
import React from "react";

const Services = () => {
  const IdentityAccor = [
    {
      id: "leadership",
      title: "Leadership Branding",
      href: "/services/leadership-branding",
    },
    {
      id: "corporate",
      title: "Corporate Branding",
      href: "/services/corporate-branding",
    },
    {
      id: "social",
      title: "Social Media",
      href: "/services/social-media",
    },
    {
      id: "pr",
      title: "Public Relations",
      href: "/services/public-relations",
    },
  ];
  const CommunicationAccor = [
    {
      id: "leadership",
      title: "Creative ",
      href: "/services/our-creative-services",
    },
    {
      id: "corporate",
      title: "Production",
      href: "/services/production-services",
    },
    {
      id: "social",
      title: "Influencers",
      href: "/services/influencers-marketing",
    },
    {
      id: "pr",
      title: "Gen AI",
      href: "/services/gen-ai",
    },
    {
      id: "pr",
      title: "Short Form Video",
      href: "/services/short-form-video",
    },
  ];
  const ExperiencesAccor = [
    {
      id: "leadership",
      title: "Digital",
      href: "/services/digital-marketing",
    },
    {
      id: "corporate",
      title: "Events",
      href: "/services/event-management",
    },
    {
      id: "social",
      title: "Website & Apps",
      href: "/services/website-app",
    },
    {
      id: "pr",
      title: "Gaming",
      href: "/services/gaming",
    },
  ];

  return (
    <div>
      <ServiceListingHero text="We crystallise brand identities and unlock the power of new-age media, building native presence in Marketing strategies through our 360° approach, proprietary tech, and cross-industry innovations. We pioneer new platforms, frameworks and formats every day, challenging the expected, and crafting transformative solutions that drive lasting change." />
      <ListingSecond />

      {/* IDENTITY */}
      <ServiceAccordian
        title="Identity"
        description="Identity isn’t just about visibility it’s about impact. We don’t create brands to blend into the noise; we craft icons that lead conversations. Our approach is rooted in cultural relevance, social intelligence, and platform nativeness. We leverage emerging platforms, AI-driven insights, and unconventional storytelling to build identities that don’t just exist but command attention, disrupt norms, and drive influence."
        accordionItems={IdentityAccor}
        videoSrc="/services/identitiy.gif"
        layout="video-right"
      />

      {/* Communications */}
      <ServiceAccordian
        title="Communications"
        description="In a world oversaturated with content, standing out isn’t an option it’s a necessity. We firmly believe communication isn’t just about storytelling; it’s about creating movements that reshape industries and drive action. Whether it’s through video-first strategies, creator-led campaigns, or interactive storytelling, every communication is designed to engage, challenge, and leave a lasting imprint."
        accordionItems={CommunicationAccor}
        videoSrc="/services/communications1.gif"
        layout="video-left"
      />

      {/* Experiences */}
      <ServiceAccordian
        title="Experiences"
        description="For us, experiences aren’t passive—they’re dynamic ecosystems where brands don’t just interact but become a part of people’s worlds. We build experiences that transcend touchpoints, designing immersive brand moments, digital playgrounds, and seamless consumer journeys that drive action. We create ecosystems where brands and consumers connect organically, meaningfully, and impactfully."
        accordionItems={ExperiencesAccor}
        videoSrc="/services/experiences-1.gif"
        layout="video-right"
      />
    </div>
  );
};

export default Services;
