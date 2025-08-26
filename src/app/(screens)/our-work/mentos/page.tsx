import WorkHero from "@/components/careers/careers-hero";
import ImpactSection from "@/components/our-work/impact-section";
import PortfolioSection from "@/components/our-work/portfolio-section";
import React from "react";
const numbersData = [
  {
    name: "Impressions Across GCC​",
    value: 2.5,
    sign: "M",
  },
  {
    name: "Website Visits​",
    value: 32,
    sign: "K+",
  },
  {
    name: "Click Through Rate​",
    value: 1.3,
    sign: "%",
  },
];
const DubaiEconomy = () => {
  return (
    <div>
      <WorkHero
        heading="Mentos"
        highlight="presence"
        text="Mentos aimed to create a multinational awareness ad campaign that would associate their brand with the FIFA World Cup without incurring the high costs of official sponsorship fees. The goal given to us was to strategically position Mentos alongside the excitement of the World Cup, leveraging creative marketing tactics to achieve strong brand association without direct sponsorship.​"
        bottom={false}
      />
      <ImpactSection
        numbersData={numbersData}
        para="We strategically positioned the brand using our in-stream advertising technology streamshreek, live-casting tailored creatives and messages during key moments of the FIFA World Cup. This approach not only drove a significant increase in website visit sessions for Mentos but also captured a twenty % share of voice for the brand on Twitch for FIFA ‘twenty three. Our innovative strategy effectively aligned Mentos with the excitement of the World Cup, enhancing brand visibility and engagement without the need for direct sponsorship.​"
        video1="https://player.vimeo.com/video/1006207430?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
      />
      <PortfolioSection />
    </div>
  );
};

export default DubaiEconomy;
