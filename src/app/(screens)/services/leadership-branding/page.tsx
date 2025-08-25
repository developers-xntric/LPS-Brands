import ServicesHero from '@/components/careers/careers-hero';
import BrandingStart from '@/components/services/branding-start';
import BuildingBrandsCards from '@/components/services/building-brands-cards';
import DisplayFeatured from '@/components/services/display-featured';
import ContactFormSection from '@/components/services/form';
import ProductionEvolutionSection from '@/components/services/production-evolution-section';
import Timeline from '@/components/services/time-line';
import Script from 'next/script';
import React from 'react'

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Leadership Branding",
    "description": "Let Modern Leadership Branding Shape Your Identity as a Leader.",
    "provider": {
        "@type": "Organization",
        "name": "LPS Brands",
        "url": "https://lps-me.com"
    },
    "serviceType": "Leadership Branding",
    "areaServed": {
        "@type": "Place",
        "name": "Global"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "53",
        "bestRating": "7",
        "worstRating": "1"
    }
}

const LeadershipBranding = () => {
    return (
        <div>
            <Script
                id="schema-service-cloud"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <ServicesHero heading='Leadership Branding' highlight='Leadership Branding' bottom={false} />
            <ProductionEvolutionSection />
            <Timeline
                timelineData={
                    [{
                        title: "Identity Discovery & Strategic Clarity",
                        description:
                            "We map out your unique leadership DNA—your core values, differentiators, and purpose—and translate it into a compelling brand foundation.",
                    },
                    {
                        title: "Format-Driven Storytelling",
                        description:
                            "From bite-sized thought leadership to long-form keynote narratives, we craft your voice across scrolls, stages, and screens.",
                    },
                    {
                        title: "Omnichannel Presence",
                        description:
                            "We build dynamic content ecosystems—tailored for digital, earned, and live platforms—to keep your leadership brand active and aligned.",
                    },
                    {
                        title: "Performance-Driven Evolution",
                        description:
                            "We continuously optimize your brand's performance through data-driven insights and strategic refinements.",
                    }]}
            />
            <BuildingBrandsCards />
            <BrandingStart />
            <DisplayFeatured />
            <ContactFormSection />
        </div>
    )
}

export default LeadershipBranding;
