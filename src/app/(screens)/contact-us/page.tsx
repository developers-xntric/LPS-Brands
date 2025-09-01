import ContactHero from "@/components/contact/hero";
import React from "react";

export const metadata = {
  title: "All in One Services Agency - LPS",
  description:
    "Reach out to LPS, your all-in-one marketing agency for creative, strategic, and impactful solutions for your your brand presence and growth.",
  alternates: {
    canonical: "https://lps-me.com/contact-us",
  },
};

const Contact = () => {
  return (
    <div>
      <ContactHero />
    </div>
  );
};

export default Contact;
