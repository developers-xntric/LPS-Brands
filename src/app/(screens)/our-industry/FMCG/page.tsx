import CareersHero from "@/components/careers/careers-hero";
import FirstSection from "@/components/our-industry/first-section";
import FourSection from "@/components/our-industry/four-section";
import SecondSection from "@/components/our-industry/second-section";
import ThirdSection from "@/components/our-industry/third-section";
import React from "react";

const FMGC = () => {
  return (
    <div>
      <CareersHero
        heading="FMCG"
        text="The world of FMCG moves fast and so do we. At LPS, we partner with brands that live in the aisles, on the screens, and in the daily choices of millions. We understand that in this saturated market, it’s not just about visibility, it’s about velocity, value, and voice."
        highlight="FMCG"
        bottom={false}
      />
      <FirstSection
        cardHead1="Omni-Channel Presence That Converts"
        cardPara1="FMCG thrives on volume, but success lies in relevance. Whether it’s in-store activations, influencer-led digital campaigns, e-commerce optimization, or storytelling on social media, we ensure your brand shows up in the right place, with the right message, at the right time."
        cardHead2="Translating Market Signals into Action"
        cardPara2="Trends change fast, and LPS is built to keep up. From changing retail dynamics and digital disruptions to variations in customer behavior, we remain tuned in real-time using industry insights. Our staff not only watches but also analyzes, develops, and implements tactics keeping your brand ahead of the curve."
        cardImg1="/our-industry/c7.webp"
        cardImg2="/our-industry/c8.webp"
        firstImg="/our-industry/4.webp"
        head1="Emerging Trends in FMCG"
        para1="Today’s consumers are no longer just buying, they’re choosing. They’re prioritizing purpose, ethics, and sustainability. From clean labels to eco-friendly packaging, transparency is no longer optional, it’s expected. The new FMCG shopper jumps from shelf to scroll in seconds. Brands need an always-on, always-adaptive presence across brick-and-mortar, e-commerce, quick-commerce, and social."
      />
      <SecondSection />
      <ThirdSection
        img="/our-industry/t4.webp"
        heading="How LPS Helps FMCG Brands Stay Ahead"
        para1="We are aware of the speed, pressure, and possibilities of the FMCG terrain. In this era, consumer behavior changes minute by minute, shelf competition is intense, and trends turn quicker than they have ever done. Our approaches are thus meant to be adaptable, created to adapt with the market and based on what consumers of today really value. From digital material to on-pack marketing, we create stories that seem real, modern, and culturally suited. Whether your audience is watching on screen, in-store, or online, it's narrative that connects."
        para2="We also don't stop there, that is, at execution. From strategic thinking and digital transformation to innovation future-proofing your presence, LPS provides whole spectrum brand creation. All together under one roof."
      />
      <FourSection
        bgImage="/our-industry/44.webp"
        heading="How we understand the market shift"
        para1="At LPS, we expect trends rather than just monitor them. To remain ahead of the curve, we monitor cultural changes, changing consumer behavior, and new digital trends. Our insight-led approach helps us to decipher where the market is heading and convert that information into innovative ideas guiding relevance and outcomes. "
        para2="Whether it’s a little change in consumer behavior or a major industry upheaval, we use statistics to guide companies toward not just adaptation but also confident, clear direction."
      />
    </div>
  );
};

export default FMGC;
