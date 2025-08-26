import WorkHero from '@/components/careers/careers-hero'
import ImpactSection from '@/components/our-work/impact-section'
import PortfolioSection from '@/components/our-work/portfolio-section'
import React from 'react'
const numbersData = [
    {
        name:"Streamers",
        value:55,
        sign:""
    },
    {
        name:"Views​",
        value:500,
        sign:"+"
    },
    {
        name:"Different Games​",
        value:124,
        sign:""
    },
]
const LondonDairy = () => {
    return (
        <div>
            <WorkHero  heading='London Dairy' highlight='presence' text='London Dairy, a premium ice cream brand, aimed to promote their three new flavors and enhance brand recognition through a targeted gaming campaign. The primary markets for this initiative were the UAE and KSA, with an additional objective to drive UAE traffic to Noon for conversions.​​' bottom={false} />
            <ImpactSection numbersData={numbersData} video1='https://player.vimeo.com/video/1006207241?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t='  para='By collaborating with fifty-five nano and micro game streamers across the UAE and KSA, we successfully engaged the gaming community over a three-month campaign with our in house game streaming adtech streamshreek. Utilizing their live streams on hundred twenty four different games on Twitch, we effectively promoted London Dairy’s new flavors, creating strong brand awareness and connection with a highly engaged audience in the gaming sector.​'/>
            <PortfolioSection />
        </div>
    )
}

export default LondonDairy
