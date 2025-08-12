import FeaturedWorks from "@/components/home/featured-work";
import GlobalPresence from "@/components/home/global-presense";
import HeroSection from "@/components/home/hero";
import Industries from "@/components/home/industries";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedWorks />
      <Industries/>
    </div>
  );
}

