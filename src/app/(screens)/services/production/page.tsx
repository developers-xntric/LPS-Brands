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
    "name": "Production Services",
    "description": "Video Production Services Built for the Future",
    "provider": {
        "@type": "Organization",
        "name": "LPS Brands",
        "url": "https://lps-me.com"
    },
    "serviceType": "Production Services",
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
            <ServicesHero heading='Production Services' highlight='Production Services' bottom={false} />
            <ProductionEvolutionSection
                title='Video Production Services Built for the Future'
                highlight='Production Services'
                heading='Our Production Process: Built for Impact'
                text={[
                    "Searching for professional video production services or “video production services near me”? LPS looks after customers all throughout Dubai, the Middle East, and beyond. We are your go-to partner wherever you go based on local knowledge and worldwide standards.",

                    "Every piece of material at LPS is developed from strategic ideas under creative direction. Whether it’s a long-form documentary or a brief Tik Tok commercial, we strike material that performs by juggling imagination with intent. Looking for trusted video production services in Dubai? Let’s create something powerful together."
                ]}
                images={["/services/pe11.webp", "/services/pe12.webp"]}
            />
            <Timeline
                heading='Why Choose LPS as Your Video Production Company in Dubai?'
                text='As a leading video production company in Dubai, we combine creative excellence with agile execution. Our team brings together strategists, directors, editors, and animators to create films that are not only visually stunning but also aligned with your brand’s purpose.'
                timelineData={[{
                    title: "Platform-First Thinking",
                    description: "We design for where the audience is—from scrollable formats to immersive storytelling—ensuring films & content always meets the moment.",
                },
                {
                    title: "Smart Budgeting, Bold Ideas",
                    description: "Our production models flex to your financial goals, unlocking standout quality without overspending.",
                },
                {
                    title: "Cross-Format Cohesion",
                    description: "From short-form to long-form, branded to corporate—we unify content strategies for a consistent brand voice.",
                },
                {
                    title: "Creative Meets Capability",
                    description: "Our teams align from strategy to shoot, ensuring speed, clarity, and campaigns that spark results.",
                }]}
            />
            <BuildingBrandsCards
                heading="Creative Precision. Strategic Execution."
                para='Production at LPS is defined by a tight fusion of artistry and intent. We bring together multidisciplinary teams who collaborate across strategy, creative, and craft to shape narratives that spark genuine engagement. It’s this synergy that allows us to bring fresh, meaningful content to life with clarity and creative conviction.'
                t1='Modular Execution'
                p1='Our production framework adapts seamlessly to project scale and complexity, delivering consistent quality across formats.'
                t2='Format-First Thinking'
                p2="Whether it's social-first, filmic, or vertical content, we tailor our craft to suit the medium—maximizing engagement where it matters."
                t3='End-to-End Craftsmanship'
                p3='With expert editing, animation, and post-production capabilities, we ensure every final cut is polished, powerful, and platform-ready.'
            />
            <BrandingStart
                heading='The Future of Production Starts Here'
                para='Live, hybrid, or virtual, our event production services ensure every detail is executed flawlessly. From staging and filming to post-event edits, we make your event unforgettable. Explainer videos, product walkthroughs, or character animations, our animated video production services simplify the complex and captivate your audience.'
                para2='Our cinematic approach brings a storytelling lens to every project. Whether you need a brand film, documentary, or narrative piece, our film production services bring your vision to life. From script to screen, our media production services encompass every aspect of production, pre, during, and post, for cohesive brand storytelling.'
                image='/services/o5.webp'
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
            <DisplayFeatured />
            <ContactFormSection />
        </div>
    )
}

export default CorporateBranding;
