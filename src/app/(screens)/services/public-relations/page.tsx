import ServicesHero from '@/components/careers/careers-hero';
import Wrapper from '@/components/layout/wrapper';
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
    "name": "Public Relations",
    "description": "Trusted Public Relations Agency for Regional & Global Brands",
    "provider": {
        "@type": "Organization",
        "name": "LPS Brands",
        "url": "https://lps-me.com"
    },
    "serviceType": "Public Relations",
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

const PublicRelations = () => {
    return (
        <div>
            <Script
                id="schema-service-cloud"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <ServicesHero heading='Public Relations' highlight='Public Relations' bottom={false} />
            <ProductionEvolutionSection
                title='Trusted Public Relations Agency for Regional & Global Brands'
                highlight='Public Relations'
                heading='Services That Go Beyond Traditional PR'
                text={[
                    "LPS, a forward-looking PR firm, develops brands people trust and discuss by combining media knowledge, strategy, and narrative. Public opinion may be formed in seconds in the hyperconnected world of today, hence we create deliberate, consistent, and interesting stories that stick out, start a discussion. Whether you run a heritage brand, a scale-up, or a startup, we provide complete solutions that enable you to lead with influence.",

                    "LPS is the strategic voice for your business, not simply another PR firm in Dubai. Every project our team does combines regional richness, global perspective, and journalistic sensibility. From media relations to reputation management, we help you create and control the story before someone else does."
                ]}
                images={["/services/pe7.webp", "/services/pe8.webp"]}
            />
            <Timeline
                heading='Why LPS is the Preferred PR Agency in Dubai'
                text='From regional connections to worldwide reputation growth we have guided companies at all levels in increasing their visibility and significance. Being a reputable public relations firm, we provide both audacious ideas and executional quality, building momentum that counts.
                <br/><br/>
                LPS is the PR firm to guide you in leading the discussion whether your goals are to update your story, negotiate a PR crisis, or establish household name.'
                timelineData={[{
                    title: "Audience-First Storytelling",
                    description: "We embed ourselves in your brand culture and your audience’s digital spaces, ensuring your story feels as authentic in a tweet as it does in a media briefing.",
                },
                {
                    title: "Platform-Ready Messaging",
                    description: "We tailor messaging across platforms—from an Instagram carousel series for consumers to a LinkedIn article for investors to a Reddit AMA with your founder.",
                },
                {
                    title: "Full-Funnel Social Strategy",
                    description: "Our approach connects the dots across awareness, engagement, and conversion—building social journeys that are as creatively rich as they are commercially effective.",
                },
                {
                    title: "Multi-Tier Distribution",
                    description: "We blend earned media, digital PR, influencer relations, and social listening to shape visibility that turns heads—and shifts perception.",
                }]}
            />
            <BuildingBrandsCards
                heading="Ready to Start a Powerful PR Journey?"
                para='Let us create a story that links, a reputation that stands the test, and a presence that rules. Your next headline begins here, with LPS, the PR agency in Dubai delivering with intent and impact.'
                t1='Story-Driven, Platform-Ready Content'
                p1='We craft narratives—from origin stories to bold vision pieces—tailored for the platforms where your audience engages most.'
                t2='End-to-End Activation'
                p2='From creator partnerships to digital events and press moments, we roll out campaigns that earn attention and drive meaningful traction.'
                t3='Agile Monitoring & Response'
                p3='With real-time sentiment tracking and rapid response strategies, we help you lead conversations and adapt with confidence.'
            />
            <BrandingStart
                heading='The Real Impact of Real-Time PR'
                para='Modern brands are created in scrolls, shares, and tales; they are not created behind closed doors. PR is not optional in a world where a swipe defines the pace. It’s vital. When done well, public relations builds trust rather than just generates headlines.'
                para2='It increases cultural relevance, shapes leadership, and transforms visibility into ongoing impact. Whether you’re managing a reputation storm, guiding public opinion, or launching the next great app, PR is no longer a department. That is your front line.'
                image='/services/o3.webp'
            />
            <Wrapper>
                <div className='py-16'>
                    <h2 className='text-6xl text-center font-bold'>Shape Narratives. Spark Movements. Stay Remembered.</h2>
                    <p className='text-xl max-w-5xl mx-auto font-medium text-center mt-10'>At LPS, we do PR but also something more, we live platform first, audience-obsessed, and culturally tailored. We create narratives that rule headlines, dialogues that challenge preconceptions, and visibility supporting value. Because the strongest message people remember, repeat, and gather around in today’s environment shapes everything.
                        <br /><br />
                        Let us create the type of impact that transcends the trend and reverberates louder than any news.</p>
                </div>
            </Wrapper>
            <DisplayFeatured />
            <ContactFormSection />
        </div>
    )
}

export default PublicRelations;
