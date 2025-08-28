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
const UnifiedBrand = () => {
    return (
        <div>
            <WorkHero heading='A unified brand presence for a unique three-chamber model'highlight='presence' text='Dubai Chambers entrusted LPS as its strategic communications partner, recognizing the agency’s deep expertise in corporate communication strategies across the Middle East and its community-focused approach.​' image='single' />
            <ImpactSection videoUrl='/work/v1.webm' numbersData={numbersData} />
            <PortfolioSection />
        </div>
    )
}

export default UnifiedBrand
