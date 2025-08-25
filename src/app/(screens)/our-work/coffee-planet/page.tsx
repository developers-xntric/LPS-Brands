import WorkHero from '@/components/careers/careers-hero'
import ImpactSection from '@/components/our-work/impact-section'
import PortfolioSection from '@/components/our-work/portfolio-section'
import React from 'react'

const CoffeePlanet = () => {
    return (
        <div>
            <WorkHero heading='Coffee Planet' text='UAE’s home-grown, home-brewed specialty coffee brand wanted to change the perception of coffee lovers in the country. Coffee Planet was not just a coffee producer, but a roaster and retailer for leading coffee and hospitality partners locally and internationally. All this in a month, with a shoestring budget.​' image='single' />
            <ImpactSection para='After defining the brand’s proposition – encompassing the entire value chain – we presented Coffee Planet as “Everyone’s Cup of Specialty”, a promise the brand proudly wears on its sleeve to this day. In just four days, we delivered high-fidelity films, brand videos, product shoots, and a comprehensive go-to-market strategy for the revamped brand. A testimony for our lean, mean production abilities.​' />
            <PortfolioSection />
        </div>
    )
}

export default CoffeePlanet
