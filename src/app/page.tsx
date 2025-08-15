import { ArticlesCarousel } from "@/components/home/article-slider";
import BlogsSection from "@/components/home/blog-section";
import FeaturedWorks from "@/components/home/featured-work";
import GlobalPresence from "@/components/home/global-presense";
import HeroSection from "@/components/home/hero";
import Industries from "@/components/home/industries";
import { MeetThePears } from "@/components/home/meet-the-pears";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedWorks />
      <GlobalPresence />
      <Industries />
      <MeetThePears />
      <ArticlesCarousel />
      <BlogsSection />
    </div>
  );
}

