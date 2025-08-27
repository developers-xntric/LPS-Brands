import React from "react";
import AnimatedTextSection from "./animated-text-section";
import LogoLPS from "../icons/lps-logo";
import Image from "next/image";
import HeroAnimatedButtons from "./hero-animated-buttons";
import Wrapper from "../layout/wrapper";
import MobileNavbar from "../layout/mobile-navbar";

const HeroSection = () => {
  return (
    <div className="bg-[url('/home/Hero.png') bg-center bg-cover ">
      <div className="2xl:max-w-[1800px] mx-auto w-[95%] pb-20">
        {/* Top Left LPS Logo */}
        <div className="flex justify-between items-center p-4 mx-6">
          <LogoLPS />
          <MobileNavbar />
        </div>
        {/* Center Animated Heading of Pears In a World Of Apples */}
        <div className="flex justify-center">
          <Image
            src={"/home/hero-gif.gif"}
            alt="Hero"
            width={800}
            height={620}
            unoptimized
          />
        </div>
        {/* Bottom Paragraph With Animated Video Button */}
        <HeroAnimatedButtons />
        {/* Animated Text Section (Why Pears) */}
        <Wrapper>
          {/* WHY PEARS Section */}
          <div className="mb-8 mt-20 flex lg:flex-row flex-col justify-between">
            <h1 className="flex gap-3 lg:flex-col lg:-space-y-6 text-5xl md:text-8xl font-bold mb-8 leading-none">
              <span className="gradient-text text-transparent">WHY</span>
              <span className="gradient-text text-transparent">PEARS?</span>
            </h1>

            <div className="flex flex-col lg:w-[65%] gap-8 text-gray-700">
              <p className="text-md md:text-lg font-['Exo'] leading-relaxed">
                We have fused scale and precision to help you redefine your
                brand equity, enabling you to connect with people and inspire
                communities beyond conventional marketing. Our full-impact
                agency is by your side, helping you innovate with purpose.
              </p>
              <p className="text-md md:text-lg font-['Exo'] leading-relaxed">
                We have a passion for creative problem-solving that not only
                delivers results but also sets new benchmarks, resonating deeply
                with your customers beyond just metrics.
              </p>
            </div>
          </div>

          {/* Animated Text Section */}
          <AnimatedTextSection />
        </Wrapper>
        {/* Featured Work Section */}
      </div>
    </div>
  );
};

export default HeroSection;
