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
    "name": "Creative Services",
    "description": "Trusted Public Relations Agency for Regional & Global Brands",
    "provider": {
        "@type": "Organization",
        "name": "LPS Brands",
        "url": "https://lps-me.com"
    },
    "serviceType": "Creative Services",
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

const Creative = () => {
    return (
        <div>
            <Script
                id="schema-service-cloud"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <ServicesHero heading='Creative Services' highlight='Creative Services' bottom={false} />
            <ProductionEvolutionSection
                title='Creative Branding Agency That Thinks Beyond Aesthetics'
                highlight='Branding Agency'
                heading='Creative Branding Ideas That Spark Emotion'
                text={[
                    "LPS stands above the noise in a saturated world where businesses scream for attention as a creative branding company motivated by purpose, strategy, and emotional resonance. We create brands that inspire performance, build culture, and move people, not just images. From adaptable design systems to immersive narrative, our creative work links profoundly, regularly, and across all the platforms that count.",

                    "Grounded in understanding, meant for impact, and developed for the contemporary world, our creative services reflect Being a creative branding firm in Dubai, we mix local cultural fluency with global design thinking to make sure your brand is remembered, felt, and followed rather than only seen. Whether you’re a disruptor preparing to start or a heritage brand seeking to change, we deliberately assist develop your visual and vocal image."
                ]}
                images={["/services/pe9.webp", "/services/pe10.webp"]}
            />
            <Timeline
                heading='What Sets LPS Apart as a Creative Branding Company'
                text='From Dubai to London, our work connects worldwide yet anchored in localized reality. Top-tier creative branding agency Dubai customers rely on understands the balance between innovation and purpose, therefore enabling firms to stay daring but grounded.
                <br/><br/>
                Whether you want to create a movement, introduce a new product, or improve your identity Let us produce something remarkable.'
                timelineData={[{
                    title: "Audience-First Storytelling",
                    description: "We start with a deep dive into audience behavior, cultural relevance, and digital patterns—ensuring every idea is born from insight and built to resonate across communities.",
                },
                {
                    title: "Native-First Creative Thinking",
                    description: "Every visual, voice, and format is crafted with contextual precision—whether it’s a cinematic billboard, a TikTok trend, or a luxury print campaign. The story flexes, but the brand stays consistent.",
                },
                {
                    title: "Unified Narrative Architecture",
                    description: "Our campaigns are built with a single, compelling narrative that translates across formats and moments—bridging audiences with cohesion, clarity, and emotional pull.",
                },
                {
                    title: "Cross-Disciplinary Creative Craft",
                    description: "From visual artists to motion designers, strategists to experience makers—our creative teams work as one to deliver bold, immersive brand stories without losing sight of performance.",
                }]}
            />
            <BuildingBrandsCards
                heading="Creative Branding Design That Creates Lasting Impact"
                para='Our approach to creative branding design balances strategy and storytelling, ensuring that every visual speaks with purpose.'
                t1='Story-Driven, Platform-Ready Content'
                p1='We start with a deep dive into audience behavior, cultural relevance, and digital patterns—ensuring every idea is born from insight and built to resonate across communities.'
                t2='End-to-End Activation'
                p2='Every visual, voice, and format is crafted with contextual precision—whether it’s a cinematic billboard, a TikTok trend, or a luxury print campaign. The story flexes, but the brand stays consistent.'
                t3='Agile Monitoring & Response'
                p3='Our campaigns are built with a single, compelling narrative that translates across formats and moments—bridging audiences with cohesion, clarity, and emotional pull.'
            />
            <BrandingStart
                heading='The Value of Creative Done Right'
                para='Grounded in understanding, meant for impact, and developed for the contemporary world, our creative services reflect Being a creative branding firm in Dubai, we mix local cultural fluency with global design thinking to make sure your brand is remembered, felt, and followed rather than only seen.'
                para2='Whether your brand is a disruptor preparing to debut or a heritage brand wanting to change, we deliberately assist in defining your verbal and visual image. We bring concepts for creative branding that go beyond appearances to life—that which is relevant, resonant, and grounded in customer behavior. Being a top creative branding firm, we provide more than just deliverables; we also provide collaboration, viewpoint, and accuracy.'
                image='/services/o4.webp'
            />
            <Wrapper>
                <div className='py-16'>
                    <h2 className='text-6xl text-center font-bold'>Let’s Create What’s Next</h2>
                    <p className='text-xl max-w-5xl mx-auto font-medium text-center mt-10'>At LPS, we are more than simply a creative branding agency—we are the most natural interpreter for your brand. Being forward-looking creative branding consultants, we explore strategically smart, emotionally compelling, and difficult to ignore deep insights into immersive brand experiences.
                        <br /><br />
                        Our team brings innovative branding concepts to life with clarity and impact whether your project is starting a new product, changing your identity, or designing a campaign spanning several cultures and media. From Dubai to the world stage, we create strong, relevant, and performance-oriented brand narratives.
                        <br /><br />Since only companies with innovative creative branding design stand out in a noisy environment. And only purposeful innovation is really enduring.
                    </p>
                </div>
            </Wrapper>
            <DisplayFeatured text='LPS isn’t just about filming—it’s about creating immersive brand experiences that shape perceptions and drive engagement. We believe that in today’s landscape, content should be built for community resonance, native platform storytelling, and cross-format integration. Our forward-thinking methodology ensures that your content isn’t just seen but truly felt.'/>
            <ContactFormSection />
        </div>
    )
}

export default Creative;
