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
    "name": "Corporate Branding",
    "description": "Purpose-Driven Corporate Branding That Builds More Than Identity.",
    "provider": {
        "@type": "Organization",
        "name": "LPS Brands",
        "url": "https://lps-me.com"
    },
    "serviceType": "Corporate Branding",
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

const CorporateBranding = () => {
    return (
        <div>
            <Script
                id="schema-service-cloud"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <ServicesHero heading='Corporate Branding' highlight='Corporate Branding' bottom={false} />
            <ProductionEvolutionSection
                title='Purpose-Driven Corporate Branding That Builds More Than Identity'
                highlight='Corporate Branding'
                heading='Brand Expression Through Purposeful Storytelling'
                text={[
                    "Corporate branding nowadays is about creating stories, experiences, and processes that match your brand with mission, culture, and consumer demands, not just a graphic exercise. Corporate branding is seen at LPS as a living, breathing ecosystem that changes with your audience and has a long-lasting effect at every point of contact.",

                    "Whether your company is starting a rebrand, growing internationally, or launching a startup, our systematic approach to corporate branding in Dubai guarantees that your brand is remembered, appreciated, and trusted rather than only seen."
                ]}
                images={["/services/pe3.webp", "/services/pe4.webp"]}
            />
            <Timeline
                heading='Why Choose LPS as Your Corporate Branding Agency in Dubai?'
                text='LPS is your strategic development partner rather than your usual corporate branding agency From insight to effect, we create future-ready companies for the fast-paced, technologically driven environment of today.
                <br /><br />
                Our approach extends long-term brand guardianship to guarantee sustained resonance and relevance, not only with regard to branding.'
                timelineData={[{
                    title: "Core Discovery & Brand Architecture",
                    description: "We uncover what makes your brand tick—from mission clarity to stakeholder insights—and craft an authentic blueprint for growth.",
                },
                {
                    title: "Cross-Format Design Language",
                    description: "We build flexible identity systems that perform across social, digital, and corporate—ensuring consistency and recognition.",
                },
                {
                    title: "Narrative-Led Brand Expression",
                    description: "We activate stories that matter—rooted in truth, elevated through emotion, and tailored for omnichannel resonance.",
                },
                {
                    title: "Scalable Ecosystems",
                    description: "From launch to rebrand, we deliver plug-and-play brand tools that empower internal teams and inspire external audiences.",
                }]}
            />
            <BuildingBrandsCards />
            <BrandingStart />
            <DisplayFeatured />
            <ContactFormSection />
        </div>
    )
}

export default CorporateBranding;
