import WorkHero from '@/components/careers/careers-hero'
import ImpactSection from '@/components/our-work/impact-section'
import PortfolioSection from '@/components/our-work/portfolio-section'
import React from 'react'

const DubaiEconomy = () => {
    return (
        <div>
            <WorkHero url='/work/dubai-economy.webp' heading='Dubai Economy & Tourism' highlight='presence' text='Dubai Chambers entrusted LPS as its strategic communications partner, recognizing the agency’s deep expertise in corporate communication strategies across the Middle East and its community-focused approach.​' image='single' />
            <ImpactSection para='We started with our strategy team studying the various metrics of the Global Liveability index. Our award winning creative and production team at LPS cascaded the central themes to creative concepts in native social video formats – short form videos, CGI, creator pitches, listicles amongst others. The resultant engagement enhanced brand visibility and solidified our reputation as digital content pioneers. The results highlighted the potential of AI-driven creativity to captivate diverse audiences, set new benchmarks for engagement, and shape the digital landscape.​' />
            <PortfolioSection />
        </div>
    )
}

export default DubaiEconomy
