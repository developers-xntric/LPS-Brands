"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  ChevronUp,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDropdown = (service: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  const offices = [
    {
      country: "UNITED KINGDOM",
      address:
        "3 Rushton’s Yard, Ashby de la Zouch, Leicestershire, LE65 1AL, United Kingdom",
      phone: "+44 7436 276007",
      icon: "/layout/1.svg",
    },
    {
      country: "SAUDI ARABIA",
      address: "3141 Anas Ibn Malik Rd, Al Malqa, Riyadh 13521",
      phone: "+966 (0)500274782",
      icon: "/layout/2.svg",
    },
    {
      country: "UNITED ARAB EMIRATES",
      address:
        "Unit #47, Plot #1479, Feeder Commercial Centre, Me’Aisem First, Dubai Production City, Dubai",
      phone: "+971 4546 4465",
      icon: "/layout/3.svg",
    },
    {
      country: "EGYPT",
      address: "3141 Anas Ibn Malik Rd, Al Malqa, Riyadh 13521",
      phone: "+20 1111162667",
      icon: "/layout/4.svg",
    },
    {
      country: "CANADA",
      address: "3895 Manatee Way, Mississauga, Ontario L5M6P7",
      phone: "+437 860 1095",
      icon: "/layout/5.svg",
    },
  ];

  const services = [
    {
      name: "Identity",
      subServices: ["Leadership Branding", "Corporate Branding", "Social Media", "Public Relations"],
    },
    {
      name: "Communications",
      subServices: ["Public Relations", "Content Creation", "Social Media"],
    },
    {
      name: "Experiences",
      subServices: ["User Experience", "Customer Journey", "Service Design"],
    },
  ];
  const socialLinks = [
    { name: "/social/1.svg", link: "https://www.instagram.com/lps.brands/" },
    { name: "/social/2.svg", link: "https://www.facebook.com/lpsbrands" },
    { name: "/social/3.svg", link: "https://www.tiktok.com/@lpsbrands" },
    { name: "/social/4.svg", link: "https://www.linkedin.com/company/lps-brands/" },
  ];
  return (
    <footer className="bg-[#101820] text-white pb-10 pt-28 mx-auto w-[95%] 2xl:max-w-[1740px] mt-10 rounded-t-[50px]">
      <div className="max-w-[95%] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
          {/* Left Side - Logo and Description */}
          <div className="flex-1 max-w-md">
            <Image
              src="/layout/footer-logo.png"
              alt="LPS Logo"
              width={160}
              height={90}
            />
            <p className="text-[#FFFFFF] 2xl:text-[20px] leading-8 my-8">
              We are a full impact agency Identity Communications and
              Experiences that work for you.
            </p>

            {/* Connect with Expert Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Connect with an expert"
                className="w-full bg-[#282F36] border text-white placeholder-[#FFFFFF] px-6 py-4 rounded-full pr-14"
              />
              <Button
                size="sm"
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white text-slate-800 hover:bg-gray-100 rounded-full w-10 h-10 p-0"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Side - Services */}
          <div className="w-[30%]">
            <h3
              className="text-[22px] font-semibold mb-6"
            >
              SERVICES
            </h3>
            <div className="">
              {services.map((service) => (
                <div key={service.name} className=" ">
                  <button
                    onClick={() => toggleDropdown(service.name)}
                    className={`group flex items-center justify-between w-full text-left py-2 transition-colors ${
                      openDropdowns[service.name]
                        ? "text-[#00FC09]"
                        : "text-gray-300 hover:text-[#00FC09]"
                    }`}
                  >
                    <span className="font-medium text-[20px] border-b border-[#FFFFFF14] pb-2 w-full transition-colors duration-500 group-hover:border-[#00FC09]">
                      {service.name}
                    </span>
                    {openDropdowns[service.name] ? (
                      <ChevronUp className="w-6 h-6 text-[#00FC09]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-300 group-hover:text-[#00FC09]" />
                    )}
                  </button>
                  {openDropdowns[service.name] &&
                    service.subServices.length > 0 && (
                      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openDropdowns[service.name] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pb-4 space-y-5">
                          {service.subServices.map((subService) => (
                            <div
                              key={subService}
                              className="flex items-center gap-3 pl-0 group"
                            >
                              <span className="text-gray-300 hover:border-b hover:border-white  transition-colors duration-500   text-[18px]  cursor-pointer">
                                {subService}
                              </span>
                              <ArrowUpRight className="w-5 h-5 text-[#00FC09] group-hover:text-white  transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-[#FFFFFF14] py-12 lg:grid-cols-5 gap-16 mb-12 mt-24">
          {offices.map((office, index) => (
            <div key={index} className="flex flex-col items-start justify-start text-justify">
              <Image
                alt="icon"
                src={office.icon}
                width={40}
                height={40}
                className="mb-4 3xl:h-[90px] 3xl:w-[70px] h-[70px] w-[50px]"
              />
              <h4 className="font-semibold text-[20px] mb-3">
                {office.country}
              </h4>
              <div className="text-[1px] 2xl:text-[14px] font-['Exo'] w-[90%]  text-[#FFFFFFB2]  space-y-1 mb-3">
                <p>{office.address}</p>
              </div>
              <p className="text-lg font-['Exo']">
                {office.phone}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <p className=" mb-4 md:mb-0 text-[#CFCCD4] text-sm 3xl:text-base font-['Exo']">
            © 2025 LPS BRANDS – All Rights Reserved
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.link}>
                <Image src={link.name} alt="icon" width={50} height={50} className="cursor-pointer hover:bg-black rounded-full"  />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}