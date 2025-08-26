import WorkHero from '@/components/careers/careers-hero'
import ImpactSection from '@/components/our-work/impact-section'
import PortfolioSection from '@/components/our-work/portfolio-section'
import React from 'react'


const numbersData = [
    {
        name:"Views",
        value:18,
        sign:"M"
    },
    {
        name:"Interaction",
        value:27,
        sign:"K"
    },
    {
        name:"Organic Engagement Rate​",
        value:2,
        sign:"+%"
    },
    {
        name:"AVERAGE CONVERSIONS​ PER CAMPAIGN​",
        value:800,
        sign:"+"
    },
]
const DubaiEconomy = () => {
    return (
        <div>
            <WorkHero url='/work/dubai-economy.webp' heading='Dubai Economy & Tourism' highlight='presence' text='We were given the mandate as Social Video Partners for Visit Dubai, the flagship presence of Dubai Economy and Tourism. Our task was to conceptualize and execute a social video content strategy that would elevate the ‘Visit Dubai’ brand, positioning Dubai as the premier tourist destination for travelers worldwide. ​​' image='single' />
            <ImpactSection numbersData={numbersData} para='We started with our strategy team studying the various metrics of the Global Liveability index. Our award winning creative and production team at LPS cascaded the central themes to creative concepts in native social video formats – short form videos, CGI, creator pitches, listicles amongst others. The resultant engagement enhanced brand visibility and solidified our reputation as digital content pioneers. The results highlighted the potential of AI-driven creativity to captivate diverse audiences, set new benchmarks for engagement, and shape the digital landscape.​' />
            <PortfolioSection />
        </div>
    )
}

export default DubaiEconomy
