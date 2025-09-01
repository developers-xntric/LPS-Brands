"use client";
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../common/button";
import { Button as ShadCnButton } from "@/components/ui/button";
import Link from "next/link";

const tabData = {
  identity: {
    title: "Identity",
    services: [
      "Leadership Branding",
      "Corporate Branding",
      "Social Media",
      "Public Relations",
    ],
    description: "Leadership Branding, Corporate Branding",
  },
  communications: {
    title: "Communication\nCampaigns",
    services: [
      "Creative",
      "Production",
      "Events",
      "Influencers",
      "Gen AI",
      "Short Form Video",
    ],
    description: "Social Media, Public Relations",
  },
  experiences: {
    title: "Experiences",
    services: ["Digital", "Website & Apps", "Events", "Gaming"],
    description: "Engaging brand experiences tailored to your audience",
  },
};

export default function WorkTabs() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof tabData>("communications");

  return (
    <div className="mx-auto xl:px-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-16 items-start gap-10 lg:gap-0">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl xl:text-[56px] font-normal lg:leading-[60px] text-white">
            Delivering Solutions
            <br />
            with <span className="text-green">Unmatched Expertise</span>
          </h1>
        </div>
        <Button text="View All Services" link="/services" className="hover:text-black" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 items-start font-['Exo']">
        {/* Left Side - Services */}
        <div className="space-y-4 w-full lg:w-[60%]">
          {/* Identity Section */}
          <div
            className={`space-y-4 cursor-pointer transition-all duration-300 rounded-2xl p-6 hover:border hover:border-[#00FC09] hover:bg-[#00FC09]/10 ${activeTab === "identity"
              ? "border border-green bg-[#00FC09]/10"
              : "border border-transparent bg-[#141E29]"
              } lg:block`}
            onClick={() => setActiveTab("identity")}
          >
            <div
              className={`inline-block px-8 py-2 rounded-full ${activeTab === "identity"
                ? "bg-white text-secondary"
                : "bg-white text-secondary"
                }`}
            >
              <span className="text-md relative top-[1px] font-normal">
                Identity
              </span>
            </div>
            <p className="text-white text-sm md:text-md leading-relaxed">
              {tabData.identity.description}
            </p>
          </div>
          <div
            className={`lg:hidden ${activeTab === "identity" ? "block" : "hidden"
              }`}
          >
            <Card className="bg-white text-black p-8 rounded-[35px]">
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                  <ArrowUpRight className="h-7 w-7 text-white" />
                </div>

                {/* Dynamic Title */}
                <h2 className="text-2xl md:text-5xl font-bold whitespace-pre-line">
                  {tabData.identity.title}
                </h2>

                {/* Dynamic Services List */}
                <div className="space-y-2">
                  {tabData.identity.services.map((service, index) => (
                    <div key={index} className="text-black font-normal text-xl">
                      {service}
                    </div>
                  ))}
                </div>

                {/* Connect Toggle */}
                <div className="flex justify-center pt-4">
                  <Link href="/contact-us">
                    <ShadCnButton
                      className="rounded-3xl text-md flex justify-between hover:bg-[#00FC09] hover:text-black"
                      size={"lg"}
                    >
                      <span className="relative top-[1px]">
                        Connect with an expert
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center">
                        <ArrowRight color="black" />
                      </div>
                    </ShadCnButton>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Communication Campaigns Section */}
          <div
            className={`space-y-4 cursor-pointer transition-all duration-300 rounded-2xl hover:border hover:border-[#00FC09] hover:bg-[#00FC09]/10 p-6 ${activeTab === "communications"
              ? "border border-green bg-[#00FC09]/10"
              : "border border-transparent bg-[#141E29]"
              } lg:block`}
            onClick={() => setActiveTab("communications")}
          >
            <div
              className={`inline-block px-8 py-2 rounded-full ${activeTab === "communications"
                ? "bg-white text-secondary"
                : "bg-white text-secondary"
                }`}
            >
              <span className="text-md relative top-[1px] font-normal">
                Communications
              </span>
            </div>
            <p className="text-white text-sm md:text-md leading-relaxed">
              {tabData.communications.description}
            </p>
          </div>
          <div
            className={`lg:hidden ${activeTab === "communications" ? "block" : "hidden"
              }`}
          >
            <Card className="bg-white text-black p-8 rounded-[35px]">
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                  <ArrowUpRight className="h-7 w-7 text-white" />
                </div>

                {/* Dynamic Title */}
                <h2 className="text-2xl md:text-5xl font-bold whitespace-pre-line">
                  {tabData.communications.title}
                </h2>

                {/* Dynamic Services List */}
                <div className="space-y-2">
                  {tabData.communications.services.map((service, index) => (
                    <div key={index} className="text-black font-normal text-xl">
                      {service}
                    </div>
                  ))}
                </div>

                {/* Connect Toggle */}
                <div className="flex justify-center pt-4">
                  <Link href="/contact-us">
                    <ShadCnButton
                      className="rounded-3xl text-md flex justify-between hover:bg-[#00FC09] hover:text-black"
                      size={"lg"}
                    >
                      <span className="relative top-[1px]">
                        Connect with an expert
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center">
                        <ArrowRight color="black" />
                      </div>
                    </ShadCnButton>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Experiences Section */}
          <div
            className={`space-y-4 cursor-pointer transition-all duration-300 rounded-2xl p-6 hover:border hover:border-[#00FC09] hover:bg-[#00FC09]/10 ${activeTab === "experiences"
              ? "border border-green bg-[#00FC09]/10"
              : "border border-transparent bg-[#141E29]"
              } lg:block`}
            onClick={() => setActiveTab("experiences")}
          >
            <div
              className={`inline-block px-8 py-2 rounded-full ${activeTab === "experiences"
                ? "bg-white text-secondary"
                : "bg-white text-secondary"
                }`}
            >
              <span className="text-md relative top-[1px] font-normal">
                Experiences
              </span>
            </div>
            <p className="text-white text-sm md:text-md leading-relaxed">
              {tabData.experiences.description}
            </p>
          </div>
          <div
            className={`lg:hidden ${activeTab === "experiences" ? "block" : "hidden"
              }`}
          >
            <Card className="bg-white text-black p-8 rounded-[35px]">
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                  <ArrowUpRight className="h-7 w-7 text-white" />
                </div>

                {/* Dynamic Title */}
                <h2 className="text-2xl md:text-5xl font-bold whitespace-pre-line">
                  {tabData.experiences.title}
                </h2>

                {/* Dynamic Services List */}
                <div className="space-y-2">
                  {tabData.experiences.services.map((service, index) => (
                    <div key={index} className="text-black font-normal text-xl">
                      {service}
                    </div>
                  ))}
                </div>

                {/* Connect Toggle */}
                <div className="flex justify-center pt-4">
                  <Link href="/contact-us" passHref>
                    <div className="group inline-block">
                      <ShadCnButton
                        size="lg"
                        className="rounded-3xl text-md flex items-center gap-2 px-6 py-4 transition-all duration-300 hover:bg-[#00FC09] hover:text-black"
                      >
                        <span className="relative top-[1px]">Connect with an expert</span>
                        <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center transform transition-transform duration-300 group-hover:translate-x-2">
                          <ArrowRight className="text-black" />
                        </div>
                      </ShadCnButton>
                    </div>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Side - Dynamic Content Card (Desktop only) */}
        <div className="hidden lg:block lg:sticky lg:top-12 w-full lg:w-[40%]">
          <Card className="bg-white text-black p-8 rounded-[35px]">
            <div className="space-y-6">
              {/* Icon */}
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                <ArrowUpRight className="h-7 w-7 text-white" />
              </div>

              {/* Dynamic Title */}
              <h2 className="text-2xl md:text-5xl lg:text-4xl xl:text-5xl font-bold whitespace-pre-line">
                {tabData[activeTab].title}
              </h2>

              {/* Dynamic Services List */}
              <div className="space-y-2">
                {tabData[activeTab].services.map((service, index) => (
                  <div key={index} className="text-black font-normal text-xl">
                    {service}
                  </div>
                ))}
              </div>

              {/* Connect Toggle */}
              <div className="flex justify-center lg:justify-end pt-4">
                <Link href="/contact-us">
                  <ShadCnButton
                    className="group rounded-3xl text-md flex justify-between hover:bg-[#00FC09] hover:text-white"
                    size={"lg"}
                  >
                    <span className="relative top-[1px]">
                      Connect with an expert
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center group-hover:translate-x-2 transition-transform duration-300 ease-out">
                      <ArrowRight className="transition-transform duration-300 ease-out" color="black" />
                    </div>
                  </ShadCnButton>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
