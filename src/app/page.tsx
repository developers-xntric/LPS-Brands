import { ArticlesCarousel } from "@/components/home/article-slider";
import BlogsSection from "@/components/home/blog-section";
import FAQSection from "@/components/home/faqs";
import FeaturedWorks from "@/components/home/featured-work";
import GlobalPresence from "@/components/home/global-presense";
import HeroSection from "@/components/home/hero";
import Industries from "@/components/home/industries";
import { MeetThePears } from "@/components/home/meet-the-pears";
import Wrapper from "@/components/layout/wrapper";
import Script from "next/script";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website & App",
    description: "Website Design and Development Services",
    provider: {
      "@type": "Organization",
      name: "LPS Brands",
      url: "https://lps-me.com",
    },
    serviceType: "Website & App",
    areaServed: {
      "@type": "Place",
      name: "Global",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "53",
      bestRating: "7",
      worstRating: "1",
    },
  };

  return (
    <div>
      <Script
        id="schema-service-cloud"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <HeroSection />
      <FeaturedWorks />
      <GlobalPresence />
      <Industries />
      <MeetThePears />
      <ArticlesCarousel />
      <Wrapper>
        <BlogsSection isVideos={true} />
      </Wrapper>
      <FAQSection />
    </div>
  );
}
