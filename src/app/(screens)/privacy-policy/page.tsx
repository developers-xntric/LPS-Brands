import CareersHero from "@/components/careers/careers-hero";
import React from "react";

export const metadata = {
  title: "Privacy Policy - LPS",
  description:
    "Review LPS's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.",
  alternates: {
    canonical: "https://lps-me.com/privacy-policy",
  },
};

const PrivacyPolicy = () => {
  return (
    <div>
      <CareersHero
        id="test-privacy"
        heading="Privacy Policy"
        text=""
        highlight="Policy"
        bottom={false}
      />
      <div className='2xl:max-w-[1740px] w-[90%] mx-auto my-20 md:mt-20 mt-24 font-medium font-["Exo"]'>
        <p className="text-[16px]">
          <span className="text-[16px] font-bold">
            Last updated: June 24, 2025
          </span>
          <br />
          <br />
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
          <br />
          <br />
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy.
          <br />
          <br />
          <strong className='text-3xl font-medium font-["Asgard"]'>
            Interpretation and Definitions
          </strong>
          <br />
          <br />
          Interpretation The words of which the initial letter is capitalized
          have meanings defined under the following conditions. The definitions
          shall have the same meaning regardless of whether they appear in
          singular or plural.
          <br />
          <br />
          <strong className="text-3xl mb-3 inline-block font-medium font-['Asgard']">Definitions For the purposes of this Privacy Policy:</strong>
          <br />
          - Account means a unique account created for You to access our Service
          or parts of our Service.
          <br />
          - Affiliate means an entity that controls, is controlled by, or is
          under common control with a party.
          <br />
          - Company (referred to as either “the Company”, “We”, “Us” or “Our”)
          refers to Le Pear Societe Marketing LLC, F11, IT Plaza, Dubai Silicon
          Oasis.
          <br />
          - Cookies are small files placed on Your device containing details of
          Your browsing history.
          <br />
          - Country refers to: United Arab Emirates
          <br />
          - Device means any device that can access the Service.
          <br />
          - Personal Data is any information that relates to an identified or
          identifiable individual.
          <br />
          - Service refers to the Website.
          <br />
          - Service Provider means any third-party who processes the data on
          behalf of the Company.
          <br />
          - Usage Data refers to data collected automatically from the Service.
          <br />- Website refers to LPS Brands, accessible from{" "}
          <a className="text-blue-600" href="https://lps-me.com">
            https://lps-me.com/
          </a>
          <br />
          - You means the individual or legal entity using the Service.
          <br />
          <br />
          <strong className="text-3xl font-medium font-['Asgard']">Collecting and Using Your Personal Data</strong>
          <br />
          <br />
          <strong className="text-2xl font-medium font-['Asgard'] inline-block mb-4">Types of Data Collected</strong>
          <br />
          <strong className="mb-3 inline-block">Personal Data We may ask You to provide Us with
          certain personally identifiable information: </strong>
          <br />
          - Email address
          <br />
          - First name and last name
          <br />
          - Phone number
          <br />
          <strong className="mb-3 mt-3 inline-block">Usage Data</strong>
          <br />
          Usage Data Collected automatically and may include:
          <br />
          - IP address, browser type and version
          <br />
          - Pages visited and time spent
          <br />
          - Mobile device info and diagnostics
          <br />
          <br />
          <strong className="mb-3 inline-block">Tracking Technologies and Cookies We use Cookies and
          similar technologies such as:</strong>
          <br />
          - Cookies or Browser Cookies
          <br />
          - Web Beacons
          <br />
          <br />
          <strong className="mb-3 inline-block">Types of Cookies used:</strong>
          <br />
          - Necessary / Essential Cookies
          <br />
          - Cookies Policy / Notice Acceptance Cookies
          <br />
          - Functionality Cookies
          <br />
          <br />
          <strong className="mb-3 inline-block">Use of Your Personal Data The Company may use
          Personal Data to:</strong>
          <br />
          - Provide and maintain the Service
          <br />
          - Manage Your Account
          <br />
          - Fulfill contracts
          <br />
          - Contact You
          <br />
          - Provide news and offers
          <br />
          - Manage Your requests
          <br />
          - Conduct business transfers
          <br />
          - Analyze data and improve Service
          <br />
          <br />
          <strong className="mb-3 inline-block">Sharing Your Personal Data We may share your
          information with:</strong>
          <br />
          - Service Providers
          <br />
          - Affiliates
          <br />
          - Business partners
          <br />
          - Other users (in public areas)
          <br />
          - With Your consent
          <br />
          <br />
          <strong>Retention of Your Personal Data We retain data only
          as long as necessary. Usage Data may be kept longer for legal or
          functionality reasons.</strong>
          <br />
          <br />
          <span>Transfer of Your Personal Data Your information may
          be transferred to — and maintained on — computers outside Your
          jurisdiction. We take steps to ensure data security and compliance.</span>
          <br />
          <br />
          <span>Delete Your Personal Data You can delete your data
          through your account or by contacting us. Some data may be retained
          for legal reasons.</span> 
          <br />
          <br />
          <strong className="mb-3 inline-block">Disclosure of Your Personal Data May occur:</strong>
          <br />
          - During business transactions
          <br />
          - Under legal obligations
          <br />
          - To protect rights, safety, or prevent fraud
          <br />
          <br />
          <span>Security of Your Personal Data While we strive to
          protect Your data, no method is 100% secure. </span>
          <br />
          <br />
          <span>Children’s Privacy Our Service is not directed to
          anyone under 13. If data is collected from a child without consent, we
          will delete it.</span>
          <br />
          <br />
          <span>Links to Other Websites We are not responsible for
          third-party sites. Please review their policies.</span>
          <br />
          <br />
          <span>Changes to this Privacy Policy We may update our
          Privacy Policy and will notify You via email and/or a prominent
          notice. The updated date will be noted. </span> 
          <br />
          <br />
          <strong>Contact Us For questions, visit:</strong>
          <a className="text-blue-600 ml-3"  href="https://lps-me.com/contact-us/">
            https://lps-me.com/contact-us/
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
