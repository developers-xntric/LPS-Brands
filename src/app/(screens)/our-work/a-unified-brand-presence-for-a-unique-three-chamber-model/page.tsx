import WorkHero from '@/components/careers/careers-hero'
import ImpactSection from '@/components/our-work/impact-section'
import PortfolioSection from '@/components/our-work/portfolio-section'
import React from 'react'

const UnifiedBrand = () => {
    return (
        <div>
            <WorkHero heading='A unified brand presence for a unique three-chamber model' highlight='presence' text='Dubai Chambers entrusted LPS as its strategic communications partner, recognizing the agency’s deep expertise in corporate communication strategies across the Middle East and its community-focused approach.​' image='single' />
            <ImpactSection />
            <PortfolioSection />
        </div>
    )
}

export default UnifiedBrand
