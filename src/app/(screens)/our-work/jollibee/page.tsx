import WorkHero from "@/components/careers/careers-hero";
import ImpactSection from "@/components/our-work/impact-section";
import PortfolioSection from "@/components/our-work/portfolio-section";
import React from "react";
const numbersData = [
  {
    name: "LIVE GAME STREAM",
    value: 180,
    sign: "+",
  },
  {
    name: "GAME STREAM VIEWS​",
    value: 850,
    sign: "K",
  },
  {
    name: "LINKS CLICK",
    value: 5200,
    sign: "+",
  },
  {
    name: "CTR DURING GAME STREAM",
    value: 5.28,
    sign: "%",
  },
];
const Jollibee = () => {
  return (
    <div>
      <WorkHero
        heading="Jollibee"
        highlight="presence"
        text="Fried chicken favourites, Jollibee, was introducing their maiden beef product with the Jolliburger – a cheesy, meaty treat for the tastebuds. The brand wanted to communicate this proposition to the wider community, beyond the Filipino compatriots of the brand, all without ruffling ‘feathers’ of its chicken-loving fan-base. We thought otherwise…​"
        image="single"
        url="/work/12.jpg"
      />
      <ImpactSection videoUrl="/work/v2.webm" numbersData={numbersData} para="The campaign reached a captive, live audience who were willing to beef, participate, and appreciate the Jolliburger. The impact of the campaign spread to social media, influencers, and PR channels at large, leading to an increase not just in engagement but sales too." />
      <PortfolioSection />
    </div>
  );
};

export default Jollibee;
                  