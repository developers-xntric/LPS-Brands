import WorkHero from '@/components/careers/careers-hero'
import ImpactSection from '@/components/our-work/impact-section'
import PortfolioSection from '@/components/our-work/portfolio-section'
import React from 'react'
const numbersData = [
    {
        name:"Views​",
        value:100,
        sign:"K+"
    },
    {
        name:"Link Clicks​",
        value:429,
        sign:""
    },
    {
        name:"Target Achieved",
        value:214,
        sign:"%"
    },
]
const CreateApps = () => {
    return (
        <div>
            <WorkHero  heading='Create Apps by DC' highlight='presence' text='Dubai Chamber of Digital Economy launched the “Create Apps in Dubai” initiative to position the city as a global hub for app development. The goal was to secure two hundred sign-ups for the App Olympics program, targeting young Emirati coders. Reaching this entrepreneurial community required innovative strategies, as traditional channels were less effective.​​' bottom={false}  />
            <ImpactSection video1='https://player.vimeo.com/video/1011538392?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=' numbersData={numbersData} para='We leveraged the growing popularity of live game streams by collaborating with a gamer who had a strong Emirati following. By integrating our communication into his stream through our proprietary in-stream app streamshreek, we generated significant interest in the App Olympics. The initiative went viral as other streamers joined in and promoted the program on their social channels. This approach led to a substantial increase in engagement, exceeding our target by over double and drawing considerable attention to the App Olympics.​' />
            <PortfolioSection />
        </div>
    )
}

export default CreateApps
