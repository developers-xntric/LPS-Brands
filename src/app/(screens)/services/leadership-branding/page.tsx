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
            <ProductionEvolutionSection  text={[
                    "Leadership branding is the cornerstone of how you’re seen, appreciated, and followed in the competitive environment of today, not simply a slogan. Whether your role is changemaker, entrepreneur, or executive, your own leadership brand determines your effect. Establishing a leadership brand requires establishing your beliefs, approach of communication, and special presence you provide to every room.",

                    "This goes beyond just leadership. In a society where authority is acquired by authenticity, cultural design for impact, relevance, and influence follows. A leadership brand is the junction between your view of yourself and your professional identity. It’s about regularly and honestly presenting your leadership style, beliefs, strengths, and purpose."
                ]}
                images={["/services/pe1.webp", "/services/pe2.webp"]} />
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
            <BuildingBrandsCards t1='Strategic Discovery' t2='Content and Platform Mapping' t3='Execution with purpose' />
            <BrandingStart />
            <DisplayFeatured text='Our impact speaks through the leaders we’ve shaped. From Fortune 500 executives to disruptive founders, public figures to policy shapers, our leadership branding work has turned personal stories into powerful movements.' />
            <ContactFormSection />
        </div>
    )
}

export default LeadershipBranding;
