import CareersHero from "@/components/careers/careers-hero";
import CareersSecond from "@/components/careers/careers-second";
import { CareersThird } from "@/components/careers/careers-third";
import LastSection from "@/components/careers/last-section";

export const metadata = {
  title: "Careers at LPS | Join Our Innovative Team",
  description:
    "Join the LPS team and shape the future of marketing with cutting-edge creativity, strategy, and innovation.",
  alternates: {
    canonical: "https://lps-me.com/careers",
  },
};

function Careers() {
  return (
    <div>
      <CareersHero id="test-about" button={true} careers={true} />

      <CareersSecond />
      <div className="overflow-x-hidden">
        <CareersThird />
      </div>

      <LastSection />
    </div>
  );
}

export default Careers;
