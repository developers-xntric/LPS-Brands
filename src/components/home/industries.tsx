"use client";
import React, { useState } from "react";
import { Button as B } from "../ui/button";
import { Button } from "../common/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    name: "FMCG",
    img: "/home/8.png",
    link: "FMCG",
  },
  {
    name: "Food & Beverage",
    img: "/home/4.png",
    link: "food-and-beverage",
  },
  {
    name: "Retail & e-commerce",
    img: "/home/5.png",
    link: "retail-and-e-commerce",
  },
  {
    name: "Beauty and Fashion",
    img: "/home/7.png",
    link: "beauty-and-fashion",
  },
  {
    name: "Financial Services",
    img: "/home/9.png",
    link: "financial-services",
  },
  {
    name: "Government",
    img: "/home/3.png",
    link: "government",
  },
  {
    name: "Travel & Transportation",
    img: "/home/1.png",
    link: "travel-and-transportation",
  },
  {
    name: "Entertainment and Leisure",
    img: "/home/6.png",
    link: "entertainment-and-leisure",
  },
  {
    name: "Healthcare",
    img: "/home/10.png",
    link: "healthcare",
  },
  {
    name: "Real Estate",
    img: "/home/2.png",
    link: "real-estate",
  },
];
const Industries = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return (
    <div className="mb-16 lg:mb-0 lg:my-20">
      <div className="2xl:max-w-[1740px] w-[90%] md:w-[90%] mx-auto">
        <h2 className="text-4xl lg:text-5xl xl:text-[60px] 2xl:max-w-[40%] lg:max-w-[55%] lg:leading-[60px]">
          Empowering Growth Across Diverse Industries
        </h2>
        <p className="text-sm mt-4">
          We drive success in multiple industries, including:
        </p>
        <div className="columns-1 sm:columns-2 lg:columns-5 gap-5 mt-10 md:mt-20 mb-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden break-inside-avoid mb-5`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b opacity-75 from-transparent to-black"></div>
              {/* Background Image */}
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" />
              <Image
                src={industry.img}
                alt={industry.name}
                width={1000}
                height={1000}
                className="max-w-full h-auto"
              />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-lg leading-[18px] xl:leading-[26px] xl:text-2xl  text-center relative top-[40px]  transition-transform duration-300 lg:group-hover:translate-y-[-50px] -translate-y-[50px] lg:-translate-y-0">
                  {industry.name}
                </h3>

                {/* Hover Button */}
                <div
                  className={`transition-all justify-center w-full flex duration-300 ${
                    hoveredCard === index
                      ? "opacity-100 translate-y-0"
                      : "lg:opacity-0 lg:translate-y-[30px]"
                  }`}
                >
                  <Link href={`/our-industry/${industry.link}`}>
                    <B
                      variant="secondary"
                      className="group bg-[#FFFFFF1A] backdrop-blur-sm w-[250px] lg:w-[280px] justify-between text-white border-white/30 hover:bg-white/30 rounded-full  py-5  flex items-center gap-2 transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                      <span className="text-white text-lg">Explore More</span>
                      <div className="w-6 h-6 bg-[#00FC09] transform transition-transform duration-300 ease-in-out group-hover:translate-x-[15 px] rounded-full flex items-center justify-center overflow-hidden">
                        <ArrowRight className="w-3 h-3 text-black " />
                      </div>
                    </B>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button
          text="Connect with an expert"
          link="/contact-us"
          center={false}
          bg="bg-black"
        />
      </div>
    </div>
  );
};

export default Industries;
