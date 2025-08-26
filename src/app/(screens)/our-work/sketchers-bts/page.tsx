import WorkHero from "@/components/careers/careers-hero";
import ImpactSection from "@/components/our-work/impact-section";
import PortfolioSection from "@/components/our-work/portfolio-section";
import React from "react";

const sketchersBts = () => {
  return (
    <div>
      <WorkHero
        heading="Skechers- BTS"
        highlight="presence"
        text="Skechers aimed to create a video that not only told a compelling story but also showcased the wide range of designs in their Kids Footwear collection for the Back to School season.​​"
        bottom={false}
      />
      <ImpactSection
        video1="https://player.vimeo.com/video/1011249982?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
        para="Our work highlighted Skechers’ comfortable and stylish footwear, positioning it as the perfect choice for the new school year. The campaign effectively captured the brand’s energy, driving awareness and excitement for the latest collection among its target audience. Effectively connecting with both kids and their parents.​"
      />
      <PortfolioSection />
    </div>
  );
};

export default sketchersBts;
