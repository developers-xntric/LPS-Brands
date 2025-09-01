import WorkHero from "@/components/careers/careers-hero";
import ImpactSection from "@/components/our-work/impact-section";
import PortfolioSection from "@/components/our-work/portfolio-section";
import React from "react";
const numbersData = [
  {
    name: "INCREASE IN BUSINESS VALUE",
    value: 136,
    sign: "%",
  },
  {
    name: "SALES VOLUME​",
    value: 138,
    sign: "%",
  },
  {
    name: "VIEWS",
    value: 13,
    sign: "MN",
  },
  {
    name: "REACH​",
    value: 11.2,
    sign: "MN",
  },
];

export const metadata = {
  title: "Treva - LPS Brands",
  description:
    "Reach out to LPS, your all-in-one marketing agency for creative, strategic, and impactful solutions for your your brand presence and growth.",
  alternates: {
    canonical: "https://lps-me.com/our-work/treva",
  },
};

const Treva = () => {
  return (
    <div>
      <WorkHero
        heading="Treva"
        highlight="presence"
        text="Treva, a loved domestic brand in Saudi Arabia, wanted to create awareness among its consumers – discerning homemakers – in a modern, relevant tone that is best understood by them. Homemakers in the kingdom are difficult to reach, let alone engage. So, we tapped into the insight that homemakers assume the position of home economists –
celebrating their economical awareness at the time of purchase – with a rap song.​"
        image="single"
        url="/work/11.jpg"
      />
      <ImpactSection
        videoUrl="/work/v2.webm"
        numbersData={numbersData}
        para="Treva successfully reached out to the community of home economists, in a manner that was entertaining and relevant – a true ode to the homemakers and their knowledge of all things."
      />
      <PortfolioSection />
    </div>
  );
};

export default Treva;
