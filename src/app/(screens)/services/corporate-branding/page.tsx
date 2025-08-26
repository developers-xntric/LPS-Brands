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
            <BuildingBrandsCards
                heading='Our Corporate Branding Strategy, Built for the Future'
                para='We start with size and clarity and then apply imagination. Rooted on insights, our corporate branding approach seeks to change companies from the inside out. From corporate culture to outside marketing, we create coherent brand systems that inspire engagement and show quantifiable expansion.'
                t1='Insight-Led Differentiation'
                p1='We uncover what makes your brand distinct through cultural intelligence, competitive analysis, and stakeholder-driven discovery.'
                t2='Future-Ready Identity Systems'
                p2='We design adaptable brand frameworks that not only stay ahead of trends—but define them—across every platform and touchpoint.'
                t3='Purposeful Storytelling & Activation'
                p3='Through strategic storytelling and bold rollouts, we create brand experiences that connect emotionally and leave a lasting impression.'
            />
            <BrandingStart
                heading='The Impact of Branding Done Right'
                para='Ideal brands never stay the same. Our method of managing corporate brands guarantees that your identity remains relevant even as your company grows. Our ready-to-deploy brand kits, scalable design platforms, and continuous content strategies empower your teams and increase your visibility.'
                para2='Audiences of today appreciate real, flexible, culturally sensitive businesses. At LPS, we create brands that lead not only keep-up-with. We design identities that change with the times, participate actively in communities, and leave an impact beyond the scroll.'
                image='/services/o1.webp'
            />
            <DisplayFeatured />
            <ContactFormSection />
        </div>
    )
}

export default CorporateBranding;
