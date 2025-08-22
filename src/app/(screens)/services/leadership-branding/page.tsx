import ServiceHeo from '@/components/careers/careers-hero';
import ContactFormSection from '@/components/services/form';
import ProductionEvolutionSection from '@/components/services/production-evolution-section';
import React from 'react'

const LeadershipBranding = () => {
    return (
        <div>
            <ServiceHeo heading='LEADERSHIP BRANDING' highlight='LEADERSHIP BRANDING' bottom={false} />
            <ProductionEvolutionSection />
            <ContactFormSection />
        </div>
    )
}

export default LeadershipBranding;
