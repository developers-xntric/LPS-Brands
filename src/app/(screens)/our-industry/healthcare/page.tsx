import CareersHero from "@/components/careers/careers-hero";
import FirstSection from "@/components/our-industry/first-section";
import FourSection from "@/components/our-industry/four-section";
import SecondSection from "@/components/our-industry/second-section";
import ThirdSection from "@/components/our-industry/third-section";
import React from "react";

const HealthCare = () => {
  return (
    <div>
      <CareersHero
        heading="Healthcare"
        text="We don’t just communicate care, we work our way to build trust at every touchpoint.  At LPS, we help healthcare brands become more human, more helpful, and more heard."
        highlight="Healthcare"
        bottom={false}
      />
      <FirstSection
        cardHead1="Industry Specific Challenges"
        cardPara1="Healthcare communication straddles between complexity and clarity. Audiences are demanding openness, cynical, and overburdened. Regulatory limits limit creativity; yet, they do not define the need for it. In conventional systems, mistrust drives consumers to look for other providers. More complex dialogues are needed around mental health, chronic care, and holistic wellness.
        
        Older, technologically literate audiences are difficult for legacy businesses to relate to. The difficulty is establishing credibility and connection free from compromise."
        cardHead2="Evolving Challenges in a Digitally-Driven Market"
        cardPara2="Healthcare is no longer confined to clinics — it’s mobile, modular, and measurable. Telehealth, health apps, and wearables are reshaping care journeys. Misinformation spreads fast — and brands must counter with credible, compassionate messaging. Consumers want data privacy, simplified language, and 24/7 accessibility. Traditional advertising doesn’t resonate, purpose-led storytelling does.
        
        SEO, trust signals, and peer reviews impact patient choices more than ever. In a world of content overload, relevance is the real prescription."
        cardImg1="/our-industry/c3.webp"
        cardImg2="/our-industry/c4.webp"
        firstImg="/our-industry/2.webp"
        head1="What are the trends of Healthcare industry."
        para1="We strongly believe that in the upcoming era, preventive care is in. Digital diagnostics are booming at a lightning bolt speed. Right from wearable tech to AI consultations, healthcare is going hybrid. People want wellness on demand, that is, simplified, personalized, and stigma-free."
      />
      <SecondSection />
      <ThirdSection
        img="/our-industry/t2.webp"
        heading="How LPS helps Healthcare industry"
        para1="At LPS, we convert science into narrative and caring into connection. Across all media, we support healthcare companies in teaching, interacting, and building confidence. From drugs to exercise, diagnostics to dentists, we address every aspect of wellbeing. We establish inclusive, intelligent, sympathetic brand voices. Our approaches for communicating fit compliance; they do not seem clinical. Our websites direct, our applications reassure, and our materials simplify the difficulty."
        para2="Whether it's awareness campaigns or new product introductions, our first goal is audience empowerment. With relevant tales, actual experiences, and professional-backed ideas, we humanise healthcare. Working together with medical experts, our teams guarantee authenticity and accuracy. In healthcare, trust is not optional; it is rather everything."
      />
      <FourSection
        bgImage="/our-industry/42.webp"
        heading="How we understand the market shift"
        para1="We study patient behavior, care delivery models, and digital health adoption. Our insights uncover what people feel when they engage with healthcare, not just what they need."
        para2="From health forums to wellness bloggers, we monitor opinion across media. We examine the change from cure to care—from symptom management to lifestyle modification. We track how Millennials and Generation Z interact with wellness differently than older groups."
      />
    </div>
  );
};

export default HealthCare;
