import WorkHero from '@/components/careers/careers-hero'
import ImpactSection from '@/components/our-work/impact-section'
import PortfolioSection from '@/components/our-work/portfolio-section'
import React from 'react'
const numbersData = [
    {
        name:"CAMPAIGNS",
        value:200,
        sign:"+"
    },
    {
        name:"UNIQUE​ CREATIVES​",
        value:240,
        sign:""
    },
    {
        name:"EVENTS​ COVERED",
        value:25,
        sign:"+"
    },
    {
        name:"AVERAGE CONVERSIONS​ PER CAMPAIGN​",
        value:800,
        sign:"+"
    },
]

export const metadata = {
  title: "Coffee Planet - LPS Brands",
  description:
    "As a homegrown specialty coffee brand in the UAE, Coffee Planet wanted to change consumer perceptions and establish itself as the top choice for coffee lovers in the country. The challenge was to reshape brand messaging while maintaining authenticity.",
  alternates: {
    canonical: "https://lps-me.com/our-work/coffee-planet",
  },
};


const UnifiedBrand = () => {
    return (
        <div>
            <WorkHero heading='A unified brand presence for a unique three-chamber model' text='Dubai Chambers entrusted LPS as its strategic communications partner, recognizing the agency’s deep expertise in corporate communication strategies across the Middle East and its community-focused approach.​' image='single' />
            <ImpactSection videoUrl='/work/v1.webm' numbersData={numbersData} />
            <PortfolioSection />
        </div>
    )
}

export default UnifiedBrand
