import CareersHero from "@/components/careers/careers-hero";
import FirstSection from "@/components/our-industry/first-section";
import FourSection from "@/components/our-industry/four-section";
import SecondSection from "@/components/our-industry/second-section";
import ThirdSection from "@/components/our-industry/third-section";
import React from "react";

const FoodAndBeverage = () => {
  return (
    <div>
      <CareersHero
        heading="Food & Beverage"
        text="We define how food and beverage brands show up in the world. From packaging that captures attention to strategies that drive shelf dominance, we transform every product into a brand experience worth remembering."
        highlight="Food & Beverage"
        bottom={false}
      />
      <FirstSection
        cardHead1="Adapting to Market Shifts"
        cardPara1="We keep a pulse on industry shifts, including health trends, flavor innovation, and digital shopping behaviors. LPS adapts your brand strategy to meet changing consumer needs while ensuring your product remains relevant and competitive."
        cardHead2="From Kitchen Concept to Global Rollout"
        cardPara2="Whether you’re an indie start-up or a household name, we plug into your journey wherever you need us—ideation, prototyping, launch, or scale. Our end-to-end capabilities are designed to make your product retail-ready and market-strong."
        cardImg1="/our-industry/c5.webp"
        cardImg2="/our-industry/c6.webp"
        firstImg="/our-industry/3.webp"
        head1="Deep Consumer Understanding of Food and Beverage Industry"
        para1="We start with insight. We understand the ever-changing preferences of today’s consumers—from health-conscious choices and clean labels to bold flavors and sustainable packaging. Our strategies are rooted in real data and market intelligence, ensuring your brand connects with the right audience, at the right time."
      />
      <SecondSection />
      <ThirdSection
        img="/our-industry/t3.webp"
        heading="How LPS Comes To The Rescue Here"
        para1="We work with food and beverages businesses to create strong, consumer-first identities that sell rather than just sit-on shelves. Whether you're introducing a premium beverage, a wellness-conscious snack, or a culturally based product, we combine strategic knowledge with design brilliance to communicate your story in a manner that speaks to you."
        para2="From digital carts and packaging that pops in retail aisles to brand language that creates trust and hunger, LPS turns your product into a remarkable experience generating engagement, conversion, and long-term commitment in an always changing environment."
      />
      <FourSection
        bgImage="/our-industry/43.webp"
        heading="From Insights to Impact"
        para1="By continuously monitoring changing consumer tastes, worldwide flavor trends, sustainability demands, and new health-conscious initiatives in the food and beverage sector, at LPS we keep ahead of the curve. Today’s shoppers purchase values, stories, and experiences, not solely the food items. Constant analysis of changes in taste, lifestyle, and market dynamics helps us to enable companies to react fast and truly."
        para2="Whether it’s the emergence of plant-based alternatives, functional drinks, or clean-label packaging."
      />
    </div>
  );
};

export default FoodAndBeverage;
