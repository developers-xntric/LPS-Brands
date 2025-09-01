import WorkHero from "@/components/careers/careers-hero";
import ImpactSection from "@/components/our-work/impact-section";
import PortfolioSection from "@/components/our-work/portfolio-section";
import React from "react";

export const metadata = {
  title: "Skechers- Hajj Campain - LPS Brands",
  description:
    "We collaborated with Skechers to create a culturally insightful film specifically for their Hajj campaign. This project aimed to connect deeply with the Arabic audience by focusing on culturally relevant storytelling and visuals.",
  alternates: {
    canonical: "https://lps-me.com/our-work/skechers-hajj-campaign",
  },
};

const SkechersHajj = () => {
  return (
    <div>
      <WorkHero
        isOurWork={true}
        ourworkText="The Big Idea:​"
        heading="Skechers- Hajj Campain"
        highlight="presence"
        text="We collaborated with Skechers to create a culturally insightful film specifically for their Hajj campaign. This project aimed to connect deeply with the Arabic audience by focusing on culturally relevant storytelling and visuals.​​"
        bottom={false}
      />
      <ImpactSection
        para="The film was crafted with cultural insights, from storyline to visual elements, ensuring it resonated deeply with the Arabic audience. This thoughtful approach helped create an emotional connection with the brand, making the campaign particularly impactful.​"
        video1="https://player.vimeo.com/video/1011248018?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
      />
      <PortfolioSection />
    </div>
  );
};

export default SkechersHajj;
