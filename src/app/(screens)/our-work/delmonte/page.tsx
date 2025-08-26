import WorkHero from "@/components/careers/careers-hero";
import ImpactSection from "@/components/our-work/impact-section";
import PortfolioSection from "@/components/our-work/portfolio-section";
import React from "react";
const numbersData = [
  {
    name: "UGC Pieces ​",
    value: 80,
    sign: "K+",
  },
  {
    name: "Organic Views​",
    value: 600,
    sign: "K",
  },
  {
    name: "Paid Views​",
    value: 2,
    sign: "M",
  },
  {
    name: "Organic Engagement​​",
    value: 6,
    sign: "k+",
  },
  {
    name: "Paid Engagement​",
    value: 755,
    sign: "+",
  },
];
const Delmonte = () => {
  return (
    <div>
      <WorkHero
        heading="Delmonte"
        highlight="presence"
        text="Del Monte wanted their product highlighted across the MENA market with an aim generate awareness and drive traffic to physical stores for the Honey Glow Pineapple activation in the region. We had to think of a way we could ​​"
        bottom={false}
      />
      <ImpactSection numbersData={numbersData} para="We collaborated with influencers in the MENA region to boost brand awareness and engagement for Del Monte’s HoneyGlow Pineapple. The campaign, featuring Instagram stories and a reel, significantly increased brand visibility and interaction. ​ It successfully encouraged user-generated content and drove high engagement, with influencer-led dark ads in KSA and UAE further amplifying the campaign’s reach. The most engaging content connected deeply with the audience, showcasing the effectiveness of the strategy in fostering organic and paid engagement.​" video1="https://player.vimeo.com/video/1006133293?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=" />
      <PortfolioSection />
    </div>
  );
};

export default Delmonte;
