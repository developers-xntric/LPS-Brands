import { ArticlesCarousel } from "@/components/home/article-slider";
import BlogsSection from "@/components/home/blog-section";
import FAQSection from "@/components/home/faqs";
import FeaturedWorks from "@/components/home/featured-work";
import GlobalPresence from "@/components/home/global-presense";
import HeroSection from "@/components/home/hero";
import Industries from "@/components/home/industries";
import { MeetThePears } from "@/components/home/meet-the-pears";
import Wrapper from "@/components/layout/wrapper";

export default function Home() {
  return (
    <div>
      {/* <HeroSection /> */}
      {/* <FeaturedWorks /> */}
      {/* <GlobalPresence /> */}
      <Industries />
      {/* 
      <MeetThePears />
      <ArticlesCarousel />
      <Wrapper>
        <BlogsSection isVideos={true} />
      </Wrapper>
      <FAQSection /> */}
    </div>
  );
}
