import WorkHero from '@/components/careers/careers-hero'
import ImpactSection from '@/components/our-work/impact-section'
import PortfolioSection from '@/components/our-work/portfolio-section'
import React from 'react'

const CoffeePlanet = () => {
    return (
        <div>
            <WorkHero heading='Coffee Planet' highlight='presence' text='UAE’s home-grown, home-brewed specialty coffee brand wanted to change the perception of coffee lovers in the country. Coffee Planet was not just a coffee producer, but a roaster and retailer for leading coffee and hospitality partners locally and internationally. All this in a month, with a shoestring budget.​' image='single' />
            <ImpactSection />
            <PortfolioSection />
        </div>
    )
}

export default CoffeePlanet
