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
    "name": "Social Media",
    "description": "Social Media Marketing Agency In UAE You Can Trust.",
    "provider": {
        "@type": "Organization",
        "name": "LPS Brands",
        "url": "https://lps-me.com"
    },
    "serviceType": "Social Media",
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
            <ServicesHero heading='Social Media' highlight='Social Media' bottom={false} />
            <ProductionEvolutionSection
                title='Social Media Marketing Agency In UAE You Can Trust'
                highlight='Social Media'
                heading='Strategic, creative, and results-driven marketing that delivers'
                text={[
                    "Your business must own the discussion in the digital environment of today rather than just exist on social media. At LPS, we provide now-oriented social media marketing services. Whether your project is raising awareness, starting a conversation, or producing actual outcomes, our method transforms ordinary materials into cultural capital.",

                    "Being a premium social media agency in Dubai, we reject the idea of one-size-fits-all. To fit your objectives and forward with your audience, we customise plans, narrative, and social-first materials. Because on social media your brand reflects what your audience feels, shares, and discusses rather than what you claim it is."
                ]}
                images={["/services/pe5.webp", "/services/pe6.webp"]}
            />
            <Timeline
                heading='Why LPS is One of the Best Social Media Marketing Companies in Dubai'
                text='Leading social media marketing agency in uae we create adaptable ecosystems engaging audiences, converting clients, and maintaining attention span. We don’t just oversee venues. We migrate culture.'
                timelineData={[{
                    title: "Platform-Tuned Creativity",
                    description: "We craft content to match the behavior, language, and algorithms of each platform—ensuring your brand shows up natively and performs intuitively, wherever your audience scrolls or swipes.",
                },
                {
                    title: "Cultural Agility in Real Time",
                    description: "We stay plugged into the moment—translating cultural shifts, trend signals, and conversations into sharp, timely content that feels present and purposeful.",
                },
                {
                    title: "Full-Funnel Social Strategy",
                    description: "Our approach connects the dots across awareness, engagement, and conversion—building social journeys that are as creatively rich as they are commercially effective.",
                },
                {
                    title: "Creator-Led Amplification",
                    description: "We collaborate with creators who live the platforms they represent—infusing campaigns with real voices, trusted influence, and cultural authenticity.",
                }, {
                    title: "Insight-Driven Optimization",
                    description: "Our content is never static. With real-time performance tracking and audience intelligence, we continuously evolve your strategy to stay relevant, visible, and ahead of the curve",
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
            />
            <DisplayFeatured />
            <ContactFormSection />
        </div>
    )
}

export default CorporateBranding;
