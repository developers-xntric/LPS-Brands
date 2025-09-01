import CareersHero from "@/components/careers/careers-hero";
import IndustryListing from "@/components/our-industry/industry-listing";
import React from "react";

export const metadata = {
  title: "Our Industries Archive - LPS Brands",
  description:
    "Reach out to LPS, your all-in-one marketing agency for creative, strategic, and impactful solutions for your your brand presence and growth.",
  alternates: {
    canonical: "https://lps-me.com/our-industry",
  },
};

const Industry = () => {
  return (
    <div>
      <CareersHero
        id="test-ourwork"
        heading="Our Industries"
        text="We collaborate with organizations across various industries, delivering agency solutions that cut through the clutter and go beyond conventional marketing strategies."
        highlight="Industries"
        bottom={false}
      />
      <IndustryListing />
    </div>
  );
};

export default Industry;
