import CareersHero from "@/components/careers/careers-hero";
import ListingCards from "@/components/our-work/listing-cards";
import React from "react";

export const metadata = {
  title: "Our Work Archive - LPS Brands",
  description:
    "Partnering with diverse industries to deliver agency solutions that break through the noise and exceed traditional marketing approaches.",
  alternates: {
    canonical: "https://lps-me.com/our-work",
  },
};

const OurWork = () => {
  return (
    <div>
      <CareersHero
        id="test-ourwork"
        heading="Our Work"
        text="We collaborate with organizations across various industries, delivering agency solutions that cut through the clutter and go beyond conventional marketing strategies."
        highlight="Work"
        bottom={false}
      />
      <ListingCards />
    </div>
  );
};

export default OurWork;
