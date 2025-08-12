import AnimatedTextSection from "@/components/home/animated-text-section";
import FeaturedWorks from "@/components/home/featured-work";
import HeroAnimatedButtons from "@/components/home/hero-animated-buttons";
import LogoLPS from "@/components/icons/lps-logo";
import Wrapper from "@/components/layout/wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/home/hero-bg.png')] bg-center bg-cover ">
      <div className="2xl:max-w-[1740px] mx-auto ">
        {/* Top Left LPS Logo */}
        <div className="p-4 ms-6">
          <LogoLPS />
        </div>
        {/* Center Animated Heading of Pears In a World Of Apples */}
        <div className="flex justify-center">
          <Image src={"/home/hero-gif.gif"} alt="Hero" width={850} height={620} unoptimized />
        </div>
        {/* Bottom Paragraph With Animated Video Button */}
        <HeroAnimatedButtons />
        {/* Animated Text Section (Why Pears) */}
        <Wrapper>
          {/* WHY PEARS Section */}
          <div className="mb-8 mt-20 flex justify-between">
            <h1 className="flex flex-col -space-y-6 text-[110px] 2xl:text-[120px] font-extrabold mb-8 leading-none">
              <span className="gradient-text text-transparent tracking-tight">
                WHY
              </span>
              <span className="gradient-text text-transparent tracking-tight">
                PEARS?
              </span>
            </h1>

            <div className="flex flex-col w-[60%] 2xl:w-[65%] gap-8 text-gray-700">
              <p className="text-lg font-medium font-['Exo'] leading-relaxed">
                We have fused scale and precision to help you redefine your brand equity, enabling you to connect with
                people and inspire communities beyond conventional marketing. Our full-impact agency is by your side,
                helping you innovate with purpose.
              </p>
              <p className="text-lg font-medium font-['Exo'] leading-relaxed">
                We have a passion for creative problem-solving that not only delivers results but also sets new
                benchmarks, resonating deeply with your customers beyond just metrics.
              </p>
            </div>
          </div>

          {/* Animated Text Section */}
          <AnimatedTextSection />
        </Wrapper>
        {/* Featured Work Section */}
      </div>
      <FeaturedWorks />
    </div>
  );
}

