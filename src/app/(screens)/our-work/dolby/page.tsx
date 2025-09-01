import WorkHero from "@/components/careers/careers-hero";
import ImpactSection from "@/components/our-work/impact-section";
import PortfolioSection from "@/components/our-work/portfolio-section";
import React from "react";
const numbersData = [
  {
    name: "Streamers ​",
    value: 4,
    sign: "",
  },
  {
    name: "Full Video Views",
    value: 51,
    sign: "K+",
  },
  {
    name: "Link Clicks​",
    value: 1450,
    sign: "",
  },
  {
    name: "Click Through Rate​​​",
    value: 2.81,
    sign: "%",
  },
];

export const metadata = {
  title: "Dolby​ - LPS Brands",
  description:
    "As a long-term client, Dolby wanted to explore the potential of in-stream gaming advertisements to boost brand awareness. The challenge was to create a strategic campaign that leveraged gaming platforms effectively.",
  alternates: {
    canonical: "https://lps-me.com/our-work/dolby",
  },
};

const Dolby = () => {
  return (
    <div>
      <WorkHero
        isOurWork={true}
        ourworkText="The Curve Ball:"
        heading="Dolby"
        highlight="presence"
        text="Dolby, a long-term client, wanted to explore what gaming in-stream advertising could do for them. They aimed to increase awareness of their advanced audio and visual technologies, Dolby Atmos and Dolby Vision, within Microsoft’s Halo: Infinite.​ The focus was on enhancing the multiplayer gaming experience by showcasing the immersive capabilities of these technologies. To achieve this, Dolby partnered with StreamShreek for a proof-of-concept campaign, with a target of reaching fifty thousand views within a three-week timeframe.​​"
        bottom={false}
      />
      <ImpactSection
        numbersData={numbersData}
        para="We collaborated with influencers in the MENA region to boost brand awareness and engagement for Coffee Planet. The campaign, featuring Instagram stories and a reel, significantly increased brand visibility and interaction. ​ It successfully encouraged user-generated content and drove high engagement, with influencer-led dark ads in KSA and UAE further amplifying the campaign’s reach. The most engaging content connected deeply with the audience, showcasing the effectiveness of the strategy in fostering organic and paid engagement.​"
        video1="https://player.vimeo.com/video/1006207753?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
      />
      <PortfolioSection />
    </div>
  );
};

export default Dolby;
