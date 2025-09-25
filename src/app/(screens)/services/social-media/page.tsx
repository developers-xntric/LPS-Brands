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

export const metadata = {
    title: "Dubai&#039;s Top Social Media Marketing Services For You | LPS",
    description:
        "Discover cutting-edge social media marketing services with LPS. A leading social media agency in Dubai crafting platform-ready, audience-led digital impact.",
    alternates: {
        canonical: "https://lps-me.com/services/social-media/",
    },
};

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

const schemaData2 = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://lps-me.com/services/social-media/",
      "url": "https://lps-me.com/services/social-media/",
      "name": "Dubai's Top Social Media Marketing Services For You | LPS",
      "isPartOf": {
        "@id": "https://lps-me.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://lps-me.com/services/social-media/#primaryimage"
      },
      "image": {
        "@id": "https://lps-me.com/services/social-media/#primaryimage"
      },
      "thumbnailUrl": "https://lps-me.com/services/pe5.webp",
      "datePublished": "2025-04-10T09:43:09+00:00",
      "dateModified": "2025-07-21T11:13:57+00:00",
      "description": "Discover cutting-edge social media marketing services with LPS. A leading social media agency in Dubai crafting platform-ready, audience-led digital impact.",
      "breadcrumb": {
        "@id": "https://lps-me.com/services/social-media/#breadcrumb"
      },
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": [
            "https://lps-me.com/services/social-media/"
          ]
        }
      ]
    },
    {
      "@type": "ImageObject",
      "inLanguage": "en-US",
      "@id": "https://lps-me.com/services/social-media/#primaryimage",
      "url": "https://lps-me.com/services/pe5.webp",
      "contentUrl": "https://lps-me.com/services/pe5.webp",
      "width": 1295,
      "height": 780
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://lps-me.com/services/social-media/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://lps-me.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://lps-me.com/services/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Social Media"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://lps-me.com/#website",
      "url": "https://lps-me.com/",
      "name": "LPS Brands",
      "description": "",
      "publisher": {
        "@id": "https://lps-me.com/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://lps-me.com/?s={search_term_string}"
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            "valueRequired": true,
            "valueName": "search_term_string"
          }
        }
      ],
      "inLanguage": "en-US"
    },
    {
      "@type": "Organization",
      "@id": "https://lps-me.com/#organization",
      "name": "LPS Brands",
      "url": "https://lps-me.com/",
      "logo": {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "https://lps-me.com/#/schema/logo/image/",
        "url": "https://lps-me.com/lps-logo.webp",
        "contentUrl": "https://lps-me.com/lps-logo.webp",
        "width": 749,
        "height": 449,
        "caption": "LPS Brands"
      },
      "image": {
        "@id": "https://lps-me.com/#/schema/logo/image/"
      }
    }
  ]
}

const SocialMedia = () => {
    return (
        <div>
            <Script
                id="schema-service-cloud"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Script
                id="schema-service-cloud-2"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData2) }}
            />
            <ServicesHero id='test-privacy' heading='Social Media' highlight='Social Media' bottom={false} />
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
                heading="Social Isn’t Just a Channel. It’s Your Brand's Pulse."
                para='LPS is the social media marketing agency in uae helping you matter whether your business is a legacy brand negotiating reinventions, a government institution supporting a cause, or a startup seeking attention.'
                p1='We begin with a clear strategy rooted in audience behavior, platform dynamics, and business objectives—customized to your tone, vision, and growth stage.'
                p2='We integrate creator partnerships and influencer moments that add voice, visibility, and cultural fluency to your campaigns—amplifying both reach and credibility.'
                p3='Our team leads community management and social listening—ensuring your brand not only speaks, but listens and responds in real-time to conversations that matter.'
            />
            <BrandingStart
                heading='The Power of Social Done Right'
                para='The job of a social media marketing agency in UAE is about showing up deliberately where it most counts, not about being visible on every platform. Under the direction of appropriate social media marketing solutions, your brand not only exists but also forms culture, fosters confidence, and instantly alters impression. The right social media marketing agency in uae can help you turn your brand into a strong digital voice whether you launch a product, run a campaign, or increase your digital presence.'
                para2='You get more than simply postings when working with a reputable social media firm in Dubai like LPS; you get a content strategy with purpose, relevance, and outcomes.'
                image='/services/o2.webp'
            />
            <Wrapper>
                <div className="lg:py-16 pb-16">
                    <h2 className="lg:text-6xl leading-[36px] text-[34px] md:text-4xl text-center font-bold">
                        Ready to Be the Brand People Talk About?
                    </h2>
                    <p className="lg:text-xl max-w-5xl mx-auto font-medium text-center 2xl:mt-10 mt-5">
                        Looking for the best social media marketing services? From raising awareness to handling crisis events, social media is where your narrative lives right now. We advocate establishing discussions that stay rather than following every fad.
                    </p>
                    <p className="lg:text-xl max-w-5xl mx-auto font-medium text-center 2xl:mt-10 mt-5">
                        LPS is the social media marketing agency in uae helping you matter whether your business is a legacy brand negotiating reinventions, a government institution supporting a cause, or a startup seeking attention.
                    </p>
                </div>
            </Wrapper>
            <DisplayFeatured text='LPS isn’t just about filming—it’s about creating immersive brand experiences that shape perceptions and drive engagement. We believe that in today’s landscape, content should be built for community resonance, native platform storytelling, and cross-format integration. Our forward-thinking methodology ensures that your content isn’t just seen but truly felt.' />
            <ContactFormSection />
        </div>
    )
}

export default SocialMedia;
