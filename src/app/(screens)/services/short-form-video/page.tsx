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
    "name": "Short-Form Video",
    "description": "Let’s Create Content People Actually Want to Watch",
    "provider": {
        "@type": "Organization",
        "name": "LPS Brands",
        "url": "https://lps-me.com"
    },
    "serviceType": "Short-Form Video",
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

const GenerativeAI = () => {
    return (
        <div>
            <Script
                id="schema-service-cloud"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <ServicesHero heading='Short-Form Video' highlight='Short-Form Video' bottom={false} />
            <ProductionEvolutionSection
                title='Let’s Create Content People Actually Want to Watch'
                highlight='Want to Watch'
                heading='Accelerating Brand Engagement'
                text={[
                    "Short form video creation is more than simply a content format in the digital era of today; it’s a potent instrument for audience engagement, brand amplification, and action driving force. Our area of expertise at LPS is creating platform-optimized, high-impact short form content meant for instant audience connection.",

                    "Short form content agencies like LPS have approaches that are grounded on thorough knowledge of digital habits and cultural trends. Our method guarantees that every video we create feels rather than just looks good."
                ]}
                images={["/services/pe16.webp", "/services/pe17.webp"]}
            />
            <Timeline
                heading='Why Choose Us for Your Short Form Video Needs?'
                text='At LPS, we bring creative vision, technical expertise, and a deep understanding of audience behavior to every project. With our short video production company, you can count on our seamless production process.
                <br /><br />
                Ready to get started? Whether you want to launch a campaign, scale your content strategy, or build long-term engagement, LPS is here to make your brand shine with TikTok video marketing, short form video ideas, and much more.'
                timelineData={[{
                    title: "Hook-First Storytelling",
                    description: "We open strong and land harder—structuring content around compelling hooks, emotional triggers, and audience-specific insights to maximize retention and shareability.",
                },
                {
                    title: "Platform-Native Creativity",
                    description: "We tailor every frame to the ecosystem it lives in—optimizing for TikTok trends, Instagram pacing, YouTube Shorts rhythm, or LinkedIn storytelling without ever diluting your brand voice.",
                },
                {
                    title: "Scroll-Linked Narrative Flow",
                    description: "Our videos are more than just clips—they’re miniature brand stories. We create cohesion across posts, campaigns, and series to build recall, loyalty, and layered engagement.",
                },
                {
                    title: "Creative x Production Synergy",
                    description: "Our in-house strategists, editors, creators, and motion artists work as a single creative unit—delivering high-volume, high-quality short-form content at the speed your brand needs.",
                }]}
            />
            <BuildingBrandsCards
                heading="Let’s Make Videos That Stop the Scroll and Spark Conversations"
                para='The traditional methods of brand communication no longer have the same effectiveness in today’s digital age. Short video storytelling by LPS flips the script, providing brands with an opportunity to convey their message in a way that feels organic and authentic to the platform it’s shared on.'
                t1='Modular Execution'
                p1='We start by mapping content strategy to platform behavior—identifying what your audience watches, skips, and shares to inform ideation and tone.'
                t2='Format-First Thinking'
                p2="Scripts, formats, and visuals are developed to match trending structures, while staying true to your campaign message and brand tone."
                t3='End-to-End Craftsmanship'
                p3='Filming and editing are approached with performance and pace in mind—balancing creative flair with algorithm-friendly structuring.'
            />
            <BrandingStart
                heading='The Value of Short-Form Video Done Right'
                para='Short form videos have become one of the most effective tools for brands to stay relevant in a fast-moving digital landscape. As social media platforms evolve, users’ attention spans have become shorter, meaning content needs to engage quickly.'
                para2='Short form videos leverage this by providing high-impact visuals, creative storytelling, and an authentic connection with the audience—all within seconds. This approach not only amplifies your brand’s visibility but also increases the likelihood of driving user action.'
                image='/services/o8.webp'
            />
            <Wrapper>
                <div className='py-16'>
                    <h2 className='text-6xl text-center font-bold'>Let’s Create
                        What’s Next—One Scroll at a Time</h2>
                    <p className='text-xl max-w-5xl mx-auto font-medium text-center mt-10'>At LPS, we’re fluent in the speed of culture. Whether you’re building a brand from scratch or scaling content for growth, our short-form video teams are ready to script, shoot, edit, and deliver stories that connect on impact—and travel further.

                        <br /><br />Because in a world that moves fast, the brands that win are the ones that speak in motion. <br /> <br />
                        Let’s create the content people actually want to watch.
                        <br />
                        The kind that makes them stop, feel, and follow.

                    </p>
                </div>
            </Wrapper>
            <DisplayFeatured />
            <ContactFormSection />
        </div>
    )
}

export default GenerativeAI;