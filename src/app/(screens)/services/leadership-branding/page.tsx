import ServicesHero from '@/components/careers/careers-hero';
import BrandingStart from '@/components/services/branding-start';
import BuildingBrandsCards from '@/components/services/building-brands-cards';
import DisplayFeatured from '@/components/services/display-featured';
import ContactFormSection from '@/components/services/form';
import ProductionEvolutionSection from '@/components/services/production-evolution-section';
import Timeline from '@/components/services/time-line';
import Script from 'next/script';
import React from 'react'

export const metadata = {
    title: "Avail Out Top Notch Leadership Branding Services | LPS",
    description:
        "Build your leadership branding with LPS, a top personal branding agency in Dubai offering executive branding &amp; personal branding services.",
    alternates: {
        canonical: "https://lps-me.com/services/leadership-branding/",
    },
};

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

const schemaData2 = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://lps-me.com/services/leadership-branding/",
      "url": "https://lps-me.com/services/leadership-branding/",
      "name": "Avail Out Top Notch Leadership Branding Services | LPS",
      "isPartOf": {
        "@id": "https://lps-me.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://lps-me.com/services/leadership-branding/#primaryimage"
      },
      "image": {
        "@id": "https://lps-me.com/services/leadership-branding/#primaryimage"
      },
      "thumbnailUrl": "https://lps-me.com/services/pe1.webp",
      "datePublished": "2025-04-09T09:59:41+00:00",
      "dateModified": "2025-08-08T12:35:05+00:00",
      "description": "Build your leadership branding with LPS, a top personal branding agency in Dubai offering executive branding & personal branding services.",
      "breadcrumb": {
        "@id": "https://lps-me.com/services/leadership-branding/#breadcrumb"
      },
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": [
            "https://lps-me.com/services/leadership-branding/"
          ]
        }
      ]
    },
    {
      "@type": "ImageObject",
      "inLanguage": "en-US",
      "@id": "https://lps-me.com/services/leadership-branding/#primaryimage",
      "url": "https://lps-me.com/services/pe1.webp",
      "contentUrl": "https://lps-me.com/services/pe1.webp",
      "width": 1295,
      "height": 780
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://lps-me.com/services/leadership-branding/#breadcrumb",
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
          "name": "Leadership Branding"
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
      "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971 54 308 9222",
    "contactType": "sales",
    "areaServed": "AE",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/lpsbrands",
    "https://www.instagram.com/lps.brands/",
     "https://ae.linkedin.com/company/lps-brands",
     "https://www.youtube.com/channel/UC3D2a1-SVRq5GTsSajcCtpA",
  ]

    }
  ]
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
            <Script
                id="schema-service-cloud-2"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData2) }}
            />
            <ServicesHero id='test-privacy' heading='Leadership Branding' highlight='Leadership Branding' bottom={false} />
            <ProductionEvolutionSection text={[
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
