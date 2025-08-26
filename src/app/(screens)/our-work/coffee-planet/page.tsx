import WorkHero from '@/components/careers/careers-hero'
import ImpactSection from '@/components/our-work/impact-section'
import PortfolioSection from '@/components/our-work/portfolio-section'
import React from 'react'
const numbersData = [
    {
        name:"Brand Films​",
        value:1,
        sign:""
    },
    {
        name:"Days of Work​​",
        value:20,
        sign:"+"
    },
    {
        name:"Days of Delivery",
        value:4,
        sign:""
    },
]
const CoffeePlanet = () => {
    return (
        <div>
            <WorkHero heading='Coffee Planet' text='UAE’s home-grown, home-brewed specialty coffee brand wanted to change the perception of coffee lovers in the country. Coffee Planet was not just a coffee producer, but a roaster and retailer for leading coffee and hospitality partners locally and internationally. All this in a month, with a shoestring budget.​' bottom={false} />
            <ImpactSection video1='https://player.vimeo.com/video/1006132436?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=' numbersData={numbersData} para='After defining the brand’s proposition – encompassing the entire value chain – we presented Coffee Planet as “Everyone’s Cup of Specialty”, a promise the brand proudly wears on its sleeve to this day. In just four days, we delivered high-fidelity films, brand videos, product shoots, and a comprehensive go-to-market strategy for the revamped brand. A testimony for our lean, mean production abilities.​' />
            <PortfolioSection />
        </div>
    )
}

export default CoffeePlanet
