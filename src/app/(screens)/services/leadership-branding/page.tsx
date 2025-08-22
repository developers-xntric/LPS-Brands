import CareersHero from '@/components/careers/careers-hero';
import BrandingStart from '@/components/services/branding-start';
import BuildingBrandsCards from '@/components/services/building-brands-cards';
import ContactFormSection from '@/components/services/form';
import ProductionEvolutionSection from '@/components/services/production-evolution-section';
import Timeline from '@/components/services/time-line';
import React from 'react'

const LeadershipBranding = () => {
    return (
        <div>
            <CareersHero heading='Leadership Branding' highlight='Leadership Branding' bottom={false} />
            <ProductionEvolutionSection />
            <Timeline/>
            <BuildingBrandsCards/>
            <BrandingStart/>
            <ContactFormSection />
        </div>
    )
}

export default LeadershipBranding;
