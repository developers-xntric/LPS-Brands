import AnimatedTextSection from "@/components/home/animated-text-section";
import HeroAnimatedButtons from "@/components/home/hero-animated-buttons";
import LogoLPS from "@/components/icons/lps-logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/home/hero-bg.png')] bg-center bg-cover h-[160vh]">
      <div className="2xl:max-w-[1440px] mx-auto w-[95%]">
        {/* Top Left LPS Logo */}
        <div className="p-4 ms-6">
          <LogoLPS />
        </div>
        {/* Center Animated Heading of Pears In a World Of Apples */}
        <div className="flex justify-center">
          <Image src={"/home/hero-gif.gif"} alt="Hero" width={620} height={620} unoptimized />
        </div>
        {/* Bottom Paragraph With Animated Video Button */}
        <HeroAnimatedButtons />
        {/* Animated Text Section (Why Pears) */}
        <main>
            {/* WHY PEARS Section */}
            <div className="mb-16">
              <h1 className="text-8xl font-bold mb-8 leading-none">
                <span className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                  WHY
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                  PEARS?
                </span>
              </h1>

              <div className="grid md:grid-cols-2 gap-8 text-gray-700">
                <p className="text-lg leading-relaxed">
                  We have fused scale and precision to help you redefine your brand equity, enabling you to connect with
                  people and inspire communities beyond conventional marketing. Our full-impact agency is by your side,
                  helping you innovate with purpose.
                </p>
                <p className="text-lg leading-relaxed">
                  We have a passion for creative problem-solving that not only delivers results but also sets new
                  benchmarks, resonating deeply with your customers beyond just metrics.
                </p>
              </div>
            </div>

            {/* Animated Text Section */}
            <AnimatedTextSection />
        </main>
      </div>
    </div>
  );
}

